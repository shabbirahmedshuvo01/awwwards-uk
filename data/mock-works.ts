export interface WorkItem {
  id: string;
  title: string;
  creator: string;
  creatorRole: string;
  location: string;
  category: 'Web & Digital' | 'Photography' | 'Spatial Design' | 'Brand Identity' | 'Architecture' | 'Fashion' | 'Audio & Sound';
  year: string;
  score: string;
  recognition: string;
  isAccentBadge?: boolean;
  featured?: boolean;
  description: string;
  tags: string[];
  imageUrl: string;
  slug: string;
}

export interface HubItem {
  city: string;
  count: string;
  neighborhoods: string;
}

export interface StudioListItem {
  id: string;
  name: string;
  discipline: string;
  location: string;
  imageUrl: string;
  slug: string;
}

export const STATS = [
  {
    value: '14,820+',
    hasAccent: true,
    accentChar: '+',
    label: 'COMMUNITY MEMBERS',
    sublabel: 'ACTIVE CREATIVE DIRECTORY',
  },
  {
    value: '94',
    hasAccent: false,
    label: 'RECOGNISED UK STUDIOS',
    sublabel: 'PEER EVALUATED ARCHIVE',
  },
  {
    value: '1,240+',
    hasAccent: true,
    accentChar: '+',
    label: 'PROJECT SUBMISSIONS',
    sublabel: 'ANNUAL BRITISH NOMINATIONS',
  },
  {
    value: '6.4k',
    hasAccent: true,
    accentChar: 'k',
    label: 'EVALUATIONS RECORDED',
    sublabel: 'JURY & PUBLIC RECOGNITION',
  },
];

export const CATEGORY_PILLS = [
  'ALL',
  'WEB & DIGITAL',
  'PHOTOGRAPHY',
  'SPATIAL DESIGN',
  'BRAND IDENTITY',
  'ARCHITECTURE',
  'FASHION',
  'AUDIO & SOUND',
];

export const MOCK_WORKS: WorkItem[] = [
  {
    id: '1',
    title: 'Obsidian Atelier',
    creator: 'Studio Bastion',
    creatorRole: 'Identity & Packaging',
    location: 'London, UK',
    category: 'Brand Identity',
    year: '2026',
    score: '8.84',
    recognition: 'PROJECT OF THE DAY',
    isAccentBadge: true,
    featured: true,
    description: 'A non-Euclidean kinetic identity system for an experimental fragrance house in Mayfair.',
    tags: ['Kinetic Identity', 'Packaging', '3D Motion'],
    imageUrl: '/images/home/hero-feature.jpg',
    slug: 'obsidian-atelier',
  },
  {
    id: '2',
    title: 'Glasswork No. 7',
    creator: 'Giles & Co.',
    creatorRole: 'Spatial & Material Study',
    location: 'St Ives, Cornwall',
    category: 'Spatial Design',
    year: '2026',
    score: '8.92',
    recognition: 'HONORABLE MENTION',
    isAccentBadge: false,
    featured: false,
    description: 'Translucent refractive forms capturing North Atlantic tide luminescence and mineral optics.',
    tags: ['Hand-blown', 'Light Optics', 'Exhibition'],
    imageUrl: '/images/home/work-1.jpg',
    slug: 'glasswork-no-7',
  },
  {
    id: '3',
    title: 'Twilight Tailoring',
    creator: 'Studio Folk',
    creatorRole: 'Spatial & Architecture',
    location: 'Leeds, UK',
    category: 'Architecture',
    year: '2026',
    score: '8.71',
    recognition: 'PRO',
    isAccentBadge: false,
    featured: false,
    description: 'Monolithic concrete retail structure celebrating British bespoke garment cutting and acoustic calmness.',
    tags: ['Brutalist', 'Concrete', 'Civic'],
    imageUrl: '/images/home/work-3.jpg',
    slug: 'twilight-tailoring',
  },
  {
    id: '4',
    title: 'Signal Drift',
    creator: 'Vector State',
    creatorRole: 'Photography & Direction',
    location: 'London, UK',
    category: 'Photography',
    year: '2026',
    score: '8.65',
    recognition: 'SPECIAL COMMENDATION',
    isAccentBadge: false,
    featured: false,
    description: 'High-contrast studio silhouette study exploring wool drape in zero-ambient lighting.',
    tags: ['Editorial', 'Analog 120mm', 'Monochrome'],
    imageUrl: '/images/home/work-2.jpg',
    slug: 'signal-drift',
  },
  {
    id: '5',
    title: 'Apex Couture',
    creator: 'Apex Studio',
    creatorRole: 'Digital Atelier',
    location: 'Manchester, UK',
    category: 'Fashion',
    year: '2026',
    score: '8.78',
    recognition: 'SITE OF THE DAY',
    isAccentBadge: true,
    featured: false,
    description: 'Precision interactive digital platform engineered for high-concept British technical outerwear.',
    tags: ['Next.js', 'WebGL', 'E-Commerce'],
    imageUrl: '/images/home/hero-feature.jpg',
    slug: 'apex-couture',
  },
];

export const REGIONAL_HUBS: HubItem[] = [
  {
    city: 'London',
    count: '274 RECOGNISED',
    neighborhoods: 'Mayfair, Shoreditch, Soho, Clerkenwell',
  },
  {
    city: 'Manchester',
    count: '118 RECOGNISED',
    neighborhoods: 'Northern Quarter, Ancoats, Salford',
  },
  {
    city: 'Edinburgh',
    count: '84 RECOGNISED',
    neighborhoods: 'New Town, Leith, Old Town',
  },
  {
    city: 'Bristol',
    count: '62 RECOGNISED',
    neighborhoods: 'Harbourside, Stokes Croft, Clifton',
  },
];

export const FEATURED_STUDIOS: StudioListItem[] = [
  {
    id: 's1',
    name: 'Raw Light Tailoring',
    discipline: 'SAVILE ROW & DIGITAL ATELIER',
    location: 'LONDON',
    imageUrl: '/images/home/work-2.jpg',
    slug: 'raw-light-tailoring',
  },
  {
    id: 's2',
    name: 'Obsidian Packaging Studio',
    discipline: 'BRAND IDENTITY & SCENT',
    location: 'MAYFAIR',
    imageUrl: '/images/home/hero-feature.jpg',
    slug: 'obsidian-packaging-studio',
  },
  {
    id: 's3',
    name: 'Northern Type',
    discipline: 'TYPE FOUNDRY & MOTION',
    location: 'MANCHESTER',
    imageUrl: '/images/home/work-1.jpg',
    slug: 'northern-type',
  },
  {
    id: 's4',
    name: 'Brutalist Spatial',
    discipline: 'ARCHITECTURE & EXHIBITION',
    location: 'GLASGOW',
    imageUrl: '/images/home/work-3.jpg',
    slug: 'brutalist-spatial',
  },
];
