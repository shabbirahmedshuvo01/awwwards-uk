import { prisma } from '@/lib/prisma';
import {
  CategoryInfo,
  getAllCategories as getStaticAllCategories,
  getCategoryBySlug as getStaticCategoryBySlug,
  Category,
} from '@/data/categories';

function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== '');
}

function mapPrismaCategoryToFrontend(dbCategory: {
  name: string;
  slug: string;
  indexNumber: number;
  description: string;
}): CategoryInfo {
  return {
    name: dbCategory.name as Category,
    slug: dbCategory.slug,
    index: String(dbCategory.indexNumber).padStart(2, '0'),
    description: dbCategory.description,
  };
}

export async function getAllCategories(): Promise<CategoryInfo[]> {
  if (!isDatabaseConfigured()) {
    return getStaticAllCategories();
  }

  try {
    const categories = await prisma.category.findMany({
      orderBy: { indexNumber: 'asc' },
    });

    if (!categories || categories.length === 0) {
      return getStaticAllCategories();
    }

    return categories.map(mapPrismaCategoryToFrontend);
  } catch {
    return getStaticAllCategories();
  }
}

export async function getCategoryBySlug(slug: string): Promise<CategoryInfo | undefined> {
  if (!isDatabaseConfigured()) {
    return getStaticCategoryBySlug(slug);
  }

  try {
    const category = await prisma.category.findUnique({
      where: { slug },
    });

    if (!category) {
      return getStaticCategoryBySlug(slug);
    }

    return mapPrismaCategoryToFrontend(category);
  } catch {
    return getStaticCategoryBySlug(slug);
  }
}

