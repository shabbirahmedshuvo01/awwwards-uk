import { prisma } from '@/lib/prisma';
import {
  CreatorProfile,
  getAllProfiles as getStaticAllProfiles,
  getProfileBySlug as getStaticProfileBySlug,
} from '@/data/profiles';

function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== '');
}

function mapPrismaCreatorToFrontend(dbCreator: {
  slug: string;
  name: string;
  role: string;
  location: string;
  city: string;
  initials: string;
  bio: string;
  website: string | null;
}): CreatorProfile {
  return {
    slug: dbCreator.slug,
    name: dbCreator.name,
    role: dbCreator.role,
    location: dbCreator.location,
    city: dbCreator.city,
    initials: dbCreator.initials,
    bio: dbCreator.bio,
    website: dbCreator.website || undefined,
  };
}

export async function getAllProfiles(): Promise<CreatorProfile[]> {
  if (!isDatabaseConfigured()) {
    return getStaticAllProfiles();
  }

  try {
    const creators = await prisma.creator.findMany({
      orderBy: { name: 'asc' },
    });

    if (!creators || creators.length === 0) {
      return getStaticAllProfiles();
    }

    return creators.map(mapPrismaCreatorToFrontend);
  } catch {
    return getStaticAllProfiles();
  }
}

export async function getProfileBySlug(slug: string): Promise<CreatorProfile | undefined> {
  if (!isDatabaseConfigured()) {
    return getStaticProfileBySlug(slug);
  }

  try {
    const creator = await prisma.creator.findUnique({
      where: { slug },
    });

    if (!creator) {
      return getStaticProfileBySlug(slug);
    }

    return mapPrismaCreatorToFrontend(creator);
  } catch {
    return getStaticProfileBySlug(slug);
  }
}

