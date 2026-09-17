export type Category =
  | 'Photography'
  | 'Web Design'
  | 'Graphic Design'
  | 'Digital Art'
  | 'Architecture'
  | 'Fashion'
  | 'Music'
  | 'Writing';

export interface CategoryInfo {
  name: Category;
  slug: string;
  index: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  'Photography',
  'Web Design',
  'Graphic Design',
  'Digital Art',
  'Architecture',
  'Fashion',
  'Music',
  'Writing',
];

export const CATEGORY_DETAILS: Record<Category, { description: string }> = {
  Photography: {
    description: 'Editorial monographs, architectural documentation, and contemporary analog portraiture across Great Britain.',
  },
  'Web Design': {
    description: 'Bespoke web experiences, high-performance typography, and modern digital craft built by British studios.',
  },
  'Graphic Design': {
    description: 'Visual identities, print publication systems, and experimental typography honoring heritage and avant-garde.',
  },
  'Digital Art': {
    description: 'Creative code, 3D spatial simulations, generative systems, and interactive audiovisual installations.',
  },
  Architecture: {
    description: 'Monolithic concrete structures, low-carbon renovations, and civic architectural pavilions across the UK.',
  },
  Fashion: {
    description: 'Contemporary British tailoring, sustainable textiles, and technical outerwear collections.',
  },
  Music: {
    description: 'Spatial acoustic engineering, sonic branding, and independent label visual languages.',
  },
  Writing: {
    description: 'Critical design journalism, curatorial essays, and independent British cultural publications.',
  },
};

export function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

export function getAllCategories(): CategoryInfo[] {
  return CATEGORIES.map((cat, index) => ({
    name: cat,
    slug: getCategorySlug(cat),
    index: String(index + 1).padStart(2, '0'),
    description: CATEGORY_DETAILS[cat]?.description || 'Visionary British creative practice and craft.',
  }));
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return getAllCategories().find((c) => c.slug === slug);
}

