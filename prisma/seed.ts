import { PrismaClient, RecognitionTier, WorkStatus, MediaAspectRatio, GridSpan } from '@prisma/client';
import crypto from 'crypto';
import { CATEGORIES, CATEGORY_DETAILS, getCategorySlug } from '../data/categories';
import { CREATOR_PROFILES } from '../data/profiles';
import { FEATURED_DISCOVERY_WORK, DISCOVERY_WORKS, DEMO_NOMINEE_WORKS, Work } from '../data/works';

const prisma = new PrismaClient();

// Generate deterministic UUID v4 format string from a seed string
export function deterministicUuid(namespace: string, key: string): string {
  const hash = crypto.createHash('sha256').update(`${namespace}:${key}`).digest('hex');
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    '4' + hash.substring(13, 16),
    ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16) + hash.substring(18, 20),
    hash.substring(20, 32),
  ].join('-');
}

export const TIER_MAP: Record<string, RecognitionTier> = {
  'Category Winner': RecognitionTier.CATEGORY_WINNER,
  "Editor's Selection": RecognitionTier.EDITORS_SELECTION,
  'Featured': RecognitionTier.FEATURED,
  'Honorable Mention': RecognitionTier.HONORABLE_MENTION,
};

export const ASPECT_MAP: Record<string, MediaAspectRatio> = {
  landscape: MediaAspectRatio.LANDSCAPE,
  portrait: MediaAspectRatio.PORTRAIT,
  square: MediaAspectRatio.SQUARE,
  tall: MediaAspectRatio.TALL,
};

export const SPAN_MAP: Record<string, GridSpan> = {
  large: GridSpan.LARGE,
  medium: GridSpan.MEDIUM,
  small: GridSpan.SMALL,
  tall: GridSpan.TALL,
};

export async function runSeed(client: PrismaClient) {
  console.log('--- Starting deterministic database seed ---');

  // 1. Seed 8 Categories
  console.log('Seeding categories...');
  const categoryIdMap = new Map<string, string>();

  for (let i = 0; i < CATEGORIES.length; i++) {
    const name = CATEGORIES[i];
    const slug = getCategorySlug(name);
    const id = deterministicUuid('category', slug);
    categoryIdMap.set(slug, id);

    await client.category.upsert({
      where: { slug },
      update: {
        name,
        indexNumber: i + 1,
        description: CATEGORY_DETAILS[name]?.description || 'Visionary British creative practice and craft.',
      },
      create: {
        id,
        name,
        slug,
        indexNumber: i + 1,
        description: CATEGORY_DETAILS[name]?.description || 'Visionary British creative practice and craft.',
      },
    });
  }
  console.log(`✓ Seeded ${CATEGORIES.length} categories.`);

  // 2. Seed 12 Creators
  console.log('Seeding creators...');
  const creatorIdMap = new Map<string, string>();

  for (const profile of CREATOR_PROFILES) {
    const id = deterministicUuid('creator', profile.slug);
    creatorIdMap.set(profile.slug, id);

    await client.creator.upsert({
      where: { slug: profile.slug },
      update: {
        name: profile.name,
        role: profile.role,
        city: profile.city,
        location: profile.location,
        initials: profile.initials,
        bio: profile.bio,
        website: profile.website || null,
      },
      create: {
        id,
        slug: profile.slug,
        name: profile.name,
        role: profile.role,
        city: profile.city,
        location: profile.location,
        initials: profile.initials,
        bio: profile.bio,
        website: profile.website || null,
      },
    });
  }
  console.log(`✓ Seeded ${CREATOR_PROFILES.length} creators.`);

  // 3. Seed Works (12 Accredited + 3 Demo Nominees = 15 Total)
  const allRawWorks: Work[] = [
    FEATURED_DISCOVERY_WORK,
    ...DISCOVERY_WORKS,
    ...DEMO_NOMINEE_WORKS,
  ];

  console.log(`Seeding ${allRawWorks.length} works...`);

  for (const raw of allRawWorks) {
    const workId = deterministicUuid('work', raw.slug);
    const creatorId = creatorIdMap.get(raw.creatorSlug);
    const categoryId = categoryIdMap.get(raw.categorySlug);

    if (!creatorId || !categoryId) {
      throw new Error(`Missing foreign relation for work "${raw.title}" (creator: ${raw.creatorSlug}, category: ${raw.categorySlug})`);
    }

    const isNominated = raw.status === 'nominated';
    const status = isNominated ? WorkStatus.NOMINATED : WorkStatus.ACCREDITED;
    const recognitionTier = isNominated ? null : TIER_MAP[raw.recognition] || RecognitionTier.FEATURED;
    const score = isNominated ? null : (raw.score ? raw.score : '8.80');
    const publishedAt = new Date(raw.publishedAt);
    const accreditedAt = isNominated ? null : publishedAt;

    await client.work.upsert({
      where: { slug: raw.slug },
      update: {
        title: raw.title,
        creatorId,
        categoryId,
        location: raw.location,
        city: raw.city,
        summary: raw.summary,
        description: raw.description,
        clientOrContext: raw.clientOrContext || null,
        year: raw.year,
        aspectRatio: ASPECT_MAP[raw.aspectRatio] || MediaAspectRatio.LANDSCAPE,
        span: SPAN_MAP[raw.span] || GridSpan.MEDIUM,
        status,
        recognitionTier,
        score,
        appreciationCount: raw.appreciationCount,
        publishedAt,
        accreditedAt,
      },
      create: {
        id: workId,
        title: raw.title,
        slug: raw.slug,
        creatorId,
        categoryId,
        location: raw.location,
        city: raw.city,
        summary: raw.summary,
        description: raw.description,
        clientOrContext: raw.clientOrContext || null,
        year: raw.year,
        aspectRatio: ASPECT_MAP[raw.aspectRatio] || MediaAspectRatio.LANDSCAPE,
        span: SPAN_MAP[raw.span] || GridSpan.MEDIUM,
        status,
        recognitionTier,
        score,
        appreciationCount: raw.appreciationCount,
        publishedAt,
        accreditedAt,
      },
    });

    // Delete existing media & tags for idempotency
    await client.workMedia.deleteMany({ where: { workId } });
    await client.workTag.deleteMany({ where: { workId } });

    // Seed primary media
    await client.workMedia.create({
      data: {
        id: deterministicUuid('media', `${raw.slug}-cover`),
        workId,
        url: raw.imageUrl,
        aspectRatio: ASPECT_MAP[raw.aspectRatio] || MediaAspectRatio.LANDSCAPE,
        caption: `Fig. 01 — Primary visual documentation: ${raw.title}`,
        altText: `${raw.title} by ${raw.creator}`,
        isPrimary: true,
        displayOrder: 0,
      },
    });

    // Seed tags
    for (const tag of raw.tags) {
      await client.workTag.create({
        data: {
          id: deterministicUuid('tag', `${raw.slug}-${tag}`),
          workId,
          tag,
        },
      });
    }
  }

  console.log(`✓ Seeded ${allRawWorks.length} works with primary media and indexed tags.`);
  console.log('--- Seed complete ---');
}

async function main() {
  try {
    await runSeed(prisma);
  } catch (e) {
    console.error('Seed error:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  main();
}

