import { prisma } from '@/lib/prisma';
import {
  Work,
  getAllWorks as getStaticAllWorks,
  getWorkBySlug as getStaticWorkBySlug,
  getNominatedWorks as getStaticNominatedWorks,
  getCuratedWinners as getStaticCuratedWinners,
  RecognitionTier,
  Category,
  WorkStatus,
} from '@/data/works';

function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== '');
}

// Convert a Prisma Work record with relations to the frontend Work interface
function mapPrismaWorkToFrontend(dbWork: {
  id: string;
  title: string;
  slug: string;
  creator: { name: string; slug: string; role: string };
  category: { name: string; slug: string };
  location: string;
  city: string;
  summary: string;
  description: string;
  clientOrContext: string | null;
  year: string;
  aspectRatio: string;
  span: string;
  status: string;
  recognitionTier: string | null;
  score: { toString(): string } | null;
  appreciationCount: number;
  publishedAt: Date;
  media?: Array<{ url: string; isPrimary: boolean }>;
  tags?: Array<{ tag: string }>;
}): Work {
  const primaryMedia = dbWork.media?.find((m) => m.isPrimary) || dbWork.media?.[0];
  const imageUrl = primaryMedia ? primaryMedia.url : '/images/home/hero-feature.jpg';
  const tags = dbWork.tags ? dbWork.tags.map((t) => t.tag) : [];
  const status = dbWork.status === 'NOMINATED' ? 'nominated' : 'accredited';

  return {
    id: dbWork.id,
    title: dbWork.title,
    slug: dbWork.slug,
    creator: dbWork.creator.name,
    creatorSlug: dbWork.creator.slug,
    creatorRole: dbWork.creator.role,
    location: dbWork.location,
    city: dbWork.city as Work['city'],
    category: dbWork.category.name as Category,
    categorySlug: dbWork.category.slug,
    recognition: (dbWork.recognitionTier as RecognitionTier) || 'Featured',
    year: dbWork.year,
    score: dbWork.score ? dbWork.score.toString() : '',
    imageUrl,
    aspectRatio: dbWork.aspectRatio as Work['aspectRatio'],
    span: dbWork.span as Work['span'],
    summary: dbWork.summary,
    description: dbWork.description,
    tags,
    clientOrContext: dbWork.clientOrContext || '',
    appreciationCount: dbWork.appreciationCount,
    publishedAt: dbWork.publishedAt.toISOString().split('T')[0],
    status: status as WorkStatus,
  };
}

export async function getAllWorks(): Promise<Work[]> {
  if (!isDatabaseConfigured()) {
    return getStaticAllWorks();
  }

  try {
    const works = await prisma.work.findMany({
      include: {
        creator: true,
        category: true,
        media: { orderBy: { displayOrder: 'asc' } },
        tags: true,
      },
      orderBy: { publishedAt: 'desc' },
    });

    if (!works || works.length === 0) {
      return getStaticAllWorks();
    }

    return works.map(mapPrismaWorkToFrontend);
  } catch {
    return getStaticAllWorks();
  }
}

export async function getWorkBySlug(slug: string): Promise<Work | undefined> {
  if (!isDatabaseConfigured()) {
    return getStaticWorkBySlug(slug);
  }

  try {
    const work = await prisma.work.findUnique({
      where: { slug },
      include: {
        creator: true,
        category: true,
        media: { orderBy: { displayOrder: 'asc' } },
        tags: true,
      },
    });

    if (!work) {
      return getStaticWorkBySlug(slug);
    }

    return mapPrismaWorkToFrontend(work);
  } catch {
    return getStaticWorkBySlug(slug);
  }
}

export async function getNominees(): Promise<Work[]> {
  if (!isDatabaseConfigured()) {
    return getStaticNominatedWorks();
  }

  try {
    const works = await prisma.work.findMany({
      where: { status: 'NOMINATED' },
      include: {
        creator: true,
        category: true,
        media: { orderBy: { displayOrder: 'asc' } },
        tags: true,
      },
      orderBy: { publishedAt: 'desc' },
    });

    if (!works || works.length === 0) {
      return getStaticNominatedWorks();
    }

    return works.map(mapPrismaWorkToFrontend);
  } catch {
    return getStaticNominatedWorks();
  }
}

export async function getCuratedWinners(): Promise<Work[]> {
  if (!isDatabaseConfigured()) {
    return getStaticCuratedWinners();
  }

  try {
    const works = await prisma.work.findMany({
      where: {
        status: 'ACCREDITED',
        recognitionTier: {
          in: ['CATEGORY_WINNER', 'EDITORS_SELECTION'],
        },
      },
      include: {
        creator: true,
        category: true,
        media: { orderBy: { displayOrder: 'asc' } },
        tags: true,
      },
      orderBy: { score: 'desc' },
    });

    if (!works || works.length === 0) {
      return getStaticCuratedWinners();
    }

    return works.map(mapPrismaWorkToFrontend);
  } catch {
    return getStaticCuratedWinners();
  }
}

