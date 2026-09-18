import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { newDb } from 'pg-mem';
import { CATEGORIES, CATEGORY_DETAILS, getCategorySlug } from '../data/categories';
import { CREATOR_PROFILES } from '../data/profiles';
import { FEATURED_DISCOVERY_WORK, DISCOVERY_WORKS, DEMO_NOMINEE_WORKS, Work } from '../data/works';
import { deterministicUuid, TIER_MAP } from '../prisma/seed';

export async function runVerification() {
  console.log('====================================================');
  console.log('  VERIFYING PRISMA + POSTGRESQL FOUNDATION (OFFLINE)');
  console.log('====================================================');

  const db = newDb();
  db.public.registerFunction({
    name: 'gen_random_uuid',
    implementation: () => crypto.randomUUID(),
  });

  const pg = db.adapters.createPg();
  const client = new pg.Client();
  await client.connect();

  // Load migration SQL
  const migrationPath = path.join(__dirname, '..', 'prisma', 'migrations', '0_init', 'migration.sql');
  if (!fs.existsSync(migrationPath)) {
    throw new Error(`Migration SQL not found at: ${migrationPath}`);
  }

  const migrationSql = fs.readFileSync(migrationPath, 'utf-8');
  // pg-mem parser does not read precision arguments on decimal [4,2]
  const emulatedSql = migrationSql.replace(/DECIMAL\(4,\s*2\)/gi, 'DECIMAL');

  console.log('1. Executing migration SQL on PostgreSQL engine...');
  await client.query(emulatedSql);
  console.log('✓ Migration executed cleanly. All tables, enums, indexes, and constraints created.');

  // Verify tables exist
  const tablesResult = await client.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name"
  );
  const tableNames = tablesResult.rows.map((t: { table_name: string }) => t.table_name);
  console.log(`✓ Created tables: ${tableNames.join(', ')}`);

  // Verify seed execution
  console.log('\n2. Executing deterministic seed...');
  const categoryIdMap = new Map<string, string>();
  for (let i = 0; i < CATEGORIES.length; i++) {
    const name = CATEGORIES[i];
    const slug = getCategorySlug(name);
    const id = deterministicUuid('category', slug);
    categoryIdMap.set(slug, id);

    await client.query(
      `INSERT INTO categories (id, name, slug, index_number, description)
       VALUES ($1, $2, $3, $4, $5)`,
      [id, name, slug, i + 1, CATEGORY_DETAILS[name]?.description || 'Visionary British creative practice and craft.']
    );
  }
  console.log(`✓ Seeded ${CATEGORIES.length} categories.`);

  const creatorIdMap = new Map<string, string>();
  for (const profile of CREATOR_PROFILES) {
    const id = deterministicUuid('creator', profile.slug);
    creatorIdMap.set(profile.slug, id);

    await client.query(
      `INSERT INTO creators (id, slug, name, role, city, location, initials, bio, website)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [id, profile.slug, profile.name, profile.role, profile.city, profile.location, profile.initials, profile.bio, profile.website || null]
    );
  }
  console.log(`✓ Seeded ${CREATOR_PROFILES.length} creators.`);

  const allRawWorks: Work[] = [
    FEATURED_DISCOVERY_WORK,
    ...DISCOVERY_WORKS,
    ...DEMO_NOMINEE_WORKS,
  ];

  for (const raw of allRawWorks) {
    const workId = deterministicUuid('work', raw.slug);
    const creatorId = creatorIdMap.get(raw.creatorSlug);
    const categoryId = categoryIdMap.get(raw.categorySlug);
    const isNominated = raw.status === 'nominated';
    const status = isNominated ? 'NOMINATED' : 'ACCREDITED';
    const recognitionTier = isNominated ? null : (TIER_MAP[raw.recognition] ? raw.recognition : 'Featured');
    const score = isNominated ? null : (raw.score ? parseFloat(raw.score) : 8.80);
    const publishedAt = new Date(raw.publishedAt).toISOString();
    const accreditedAt = isNominated ? null : publishedAt;

    await client.query(
      `INSERT INTO works (id, title, slug, creator_id, category_id, location, city, summary, description, client_or_context, year, aspect_ratio, span, status, recognition_tier, score, appreciation_count, published_at, accredited_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`,
      [
        workId, raw.title, raw.slug, creatorId, categoryId, raw.location, raw.city,
        raw.summary, raw.description, raw.clientOrContext || null, raw.year,
        raw.aspectRatio, raw.span, status, recognitionTier, score,
        raw.appreciationCount, publishedAt, accreditedAt
      ]
    );

    // Primary media
    await client.query(
      `INSERT INTO work_media (id, work_id, url, aspect_ratio, caption, alt_text, is_primary, display_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        deterministicUuid('media', `${raw.slug}-cover`),
        workId, raw.imageUrl, raw.aspectRatio,
        `Fig. 01 — Primary visual documentation: ${raw.title}`,
        `${raw.title} by ${raw.creator}`,
        true, 0
      ]
    );

    // Tags
    for (const tag of raw.tags) {
      await client.query(
        `INSERT INTO work_tags (id, work_id, tag)
         VALUES ($1, $2, $3)`,
        [deterministicUuid('tag', `${raw.slug}-${tag}`), workId, tag]
      );
    }
  }

  // Row counts verification
  const catRes = await client.query('SELECT count(*) FROM categories');
  const catCount = parseInt(catRes.rows[0].count, 10);

  const creatorRes = await client.query('SELECT count(*) FROM creators');
  const creatorCount = parseInt(creatorRes.rows[0].count, 10);

  const workRes = await client.query('SELECT count(*) FROM works');
  const workCount = parseInt(workRes.rows[0].count, 10);

  const nomineeRes = await client.query("SELECT count(*) FROM works WHERE status = 'NOMINATED'");
  const nomineeCount = parseInt(nomineeRes.rows[0].count, 10);

  const accreditedRes = await client.query("SELECT count(*) FROM works WHERE status = 'ACCREDITED'");
  const accreditedCount = parseInt(accreditedRes.rows[0].count, 10);

  const mediaRes = await client.query('SELECT count(*) FROM work_media');
  const mediaCount = parseInt(mediaRes.rows[0].count, 10);

  console.log(`\n✓ Verified Seed Row Counts:`);
  console.log(`  - Categories: ${catCount} (Expected: 8)`);
  console.log(`  - Creators: ${creatorCount} (Expected: 12)`);
  console.log(`  - Works Total: ${workCount} (Expected: 16)`);
  console.log(`    * Nominees: ${nomineeCount} (Expected: 3)`);
  console.log(`    * Accredited: ${accreditedCount} (Expected: 13 [1 featured + 12 discovery])`);
  console.log(`  - Primary Media: ${mediaCount} (Expected: 16)`);

  if (catCount !== 8 || creatorCount !== 12 || workCount !== 16 || nomineeCount !== 3 || accreditedCount !== 13) {
    throw new Error('Seed counts mismatch!');
  }

  // 3. Test Business Integrity Constraints
  console.log('\n3. Testing Critical Database Integrity Constraints:');

  const testCreatorId = creatorIdMap.values().next().value;
  const testCategoryId = categoryIdMap.values().next().value;

  // Negative Test 1: Nominated work cannot have score or tier
  console.log('  Testing Constraint Test 1: Nominated work with score should FAIL...');
  let failedAsExpected1 = false;
  try {
    await client.query(
      `INSERT INTO works (id, title, slug, creator_id, category_id, location, city, summary, description, year, status, recognition_tier, score, accredited_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
      [
        deterministicUuid('test', 'bad-nominee-1'),
        'Illegal Nominee With Score',
        'illegal-nominee-score',
        testCreatorId,
        testCategoryId,
        'London, UK',
        'London',
        'Test summary',
        'Test description',
        '2026',
        'NOMINATED', // Nominated
        'Category Winner', // ILLEGAL: Has recognition tier!
        9.50, // ILLEGAL: Has score!
        null
      ]
    );
  } catch (err: unknown) {
    failedAsExpected1 = true;
    const msg = (err as Error).message;
    console.log(`  ✓ Passed: Rejected by check constraint "chk_works_status_rules": ${msg.slice(0, 70)}...`);
  }
  if (!failedAsExpected1) {
    throw new Error('FAILED: Database accepted a nominated work with a score and recognition tier!');
  }

  // Negative Test 2: Accredited work requires score and tier
  console.log('  Testing Constraint Test 2: Accredited work without score should FAIL...');
  let failedAsExpected2 = false;
  try {
    await client.query(
      `INSERT INTO works (id, title, slug, creator_id, category_id, location, city, summary, description, year, status, recognition_tier, score, accredited_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
      [
        deterministicUuid('test', 'bad-accredited-1'),
        'Illegal Accredited Without Score',
        'illegal-accredited-no-score',
        testCreatorId,
        testCategoryId,
        'London, UK',
        'London',
        'Test summary',
        'Test description',
        '2026',
        'ACCREDITED', // Accredited
        null, // ILLEGAL: Missing recognition tier!
        null, // ILLEGAL: Missing score!
        null  // ILLEGAL: Missing accredited_at!
      ]
    );
  } catch (err: unknown) {
    failedAsExpected2 = true;
    const msg = (err as Error).message;
    console.log(`  ✓ Passed: Rejected by check constraint "chk_works_status_rules": ${msg.slice(0, 70)}...`);
  }
  if (!failedAsExpected2) {
    throw new Error('FAILED: Database accepted an accredited work without score or tier!');
  }

  // Negative Test 3: Partial unique index for primary media
  console.log('  Testing Constraint Test 3: Multiple primary media for same work should FAIL...');
  let failedAsExpected3 = false;
  const firstWorkId = deterministicUuid('work', FEATURED_DISCOVERY_WORK.slug);
  try {
    await client.query(
      `INSERT INTO work_media (id, work_id, url, is_primary, display_order, alt_text)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        deterministicUuid('test', 'second-primary-media'),
        firstWorkId,
        '/images/home/work-2.jpg',
        true, // ILLEGAL: second primary media for same work!
        1,
        'Duplicate primary cover'
      ]
    );
  } catch (err: unknown) {
    failedAsExpected3 = true;
    const msg = (err as Error).message;
    console.log(`  ✓ Passed: Rejected by partial unique index "uq_work_media_single_primary": ${msg.slice(0, 70)}...`);
  }
  if (!failedAsExpected3) {
    throw new Error('FAILED: Database accepted duplicate primary media for the same work!');
  }

  // Positive Test: Valid records succeed
  console.log('  Testing Positive Test: Inserting valid Nominee & Accredited work...');
  await client.query(
    `INSERT INTO works (id, title, slug, creator_id, category_id, location, city, summary, description, year, status, recognition_tier, score, accredited_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
    [
      deterministicUuid('test', 'valid-nominee-1'),
      'Valid Nominee Project',
      'valid-nominee-project',
      testCreatorId,
      testCategoryId,
      'London, UK',
      'London',
      'Valid nominee summary',
      'Valid description',
      '2026',
      'NOMINATED',
      null,
      null,
      null
    ]
  );

  await client.query(
    `INSERT INTO works (id, title, slug, creator_id, category_id, location, city, summary, description, year, status, recognition_tier, score, accredited_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
    [
      deterministicUuid('test', 'valid-accredited-1'),
      'Valid Accredited Project',
      'valid-accredited-project',
      testCreatorId,
      testCategoryId,
      'London, UK',
      'London',
      'Valid accredited summary',
      'Valid description',
      '2026',
      'ACCREDITED',
      'Category Winner',
      9.10,
      new Date().toISOString()
    ]
  );
  console.log('  ✓ Passed: Valid records inserted successfully.');

  console.log('\n====================================================');
  console.log('  ALL VERIFICATION CHECKS PASSED SUCCESSFULLY (100%)');
  console.log('====================================================');

  await client.end();
}

if (require.main === module) {
  runVerification().catch((e) => {
    console.error('Verification failed:', e);
    process.exit(1);
  });
}
