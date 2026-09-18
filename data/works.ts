import { Category, CATEGORIES } from './categories';
export type { Category };
export { CATEGORIES };

export type RecognitionTier =
  | 'Featured'
  | "Editor's Selection"
  | 'Category Winner'
  | 'Honorable Mention';

export type WorkStatus = 'nominated' | 'accredited';

export interface Work {
  id: string;
  title: string;
  slug: string;
  creator: string;
  creatorSlug: string;
  creatorRole: string;
  location: string;
  city: 'London' | 'Manchester' | 'Birmingham' | 'Edinburgh' | 'Glasgow' | 'Bristol' | 'St Ives' | 'Leeds';
  category: Category;
  categorySlug: string;
  recognition: RecognitionTier;
  year: string;
  score: string;
  imageUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'tall';
  span: 'large' | 'medium' | 'small' | 'tall';
  summary: string;
  description: string;
  tags: string[];
  clientOrContext: string;
  appreciationCount: number;
  publishedAt: string;
  status?: WorkStatus;
}

export const LOCATIONS = [
  'London',
  'Manchester',
  'Birmingham',
  'Edinburgh',
  'Glasgow',
  'Bristol',
];

export const RECOGNITION_TIERS: RecognitionTier[] = [
  'Featured',
  "Editor's Selection",
  'Category Winner',
  'Honorable Mention',
];

export const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Latest', value: 'latest' },
  { label: 'Most Appreciated', value: 'appreciated' },
];

export const FEATURED_DISCOVERY_WORK: Work = {
  id: 'featured-1',
  title: 'North Studio Editorial',
  slug: 'north-studio-editorial',
  creator: 'North Studio',
  creatorSlug: 'north-studio',
  creatorRole: 'Photography & Creative Direction',
  location: 'London, UK',
  city: 'London',
  category: 'Photography',
  categorySlug: 'photography',
  recognition: "Editor's Selection",
  year: '2026',
  score: '9.14',
  imageUrl: '/images/home/work-2.jpg',
  aspectRatio: 'landscape',
  span: 'large',
  summary: 'A restrained study in British tailoring, shadow volume, and monochrome portraiture captured in East London.',
  description: 'Shot over three weeks across Shoreditch industrial spaces, this editorial investigates modern tailoring silhouettes under single-source directional tungsten lighting. The monograph interrogates garment tension, negative space, and fabric weight.',
  tags: ['Analog 120mm', 'Editorial', 'Sartorial', 'Monochrome'],
  clientOrContext: 'Independent Monograph / London Fashion Week',
  appreciationCount: 1482,
  publishedAt: '2026-03-12',
};

export const DISCOVERY_WORKS: Work[] = [
  {
    id: 'w-1',
    title: 'Monolith Pavilion',
    slug: 'monolith-pavilion',
    creator: 'Atelier North',
    creatorSlug: 'atelier-north',
    creatorRole: 'Architectural Practice',
    location: 'Manchester, UK',
    city: 'Manchester',
    category: 'Architecture',
    categorySlug: 'architecture',
    recognition: 'Category Winner',
    year: '2026',
    score: '9.28',
    imageUrl: '/images/home/work-3.jpg',
    aspectRatio: 'landscape',
    span: 'large',
    summary: 'A carbon-neutral cast concrete exhibition hall and civic pavilion nestled in the Ancoats heritage quarter.',
    description: 'Constructed using low-carbon geopolymer concrete and reclaimed slate aggregate, Monolith Pavilion creates a serene acoustic sanctuary amidst urban Manchester. Its vertical slit windows filter Northwest daylight to illuminate public sculpture.',
    tags: ['Brutalist', 'Civic', 'Sustainable Concrete', 'Ancoats'],
    clientOrContext: 'Manchester Cultural Heritage Trust',
    appreciationCount: 1890,
    publishedAt: '2026-03-10',
  },
  {
    id: 'w-2',
    title: 'Flour & Hearth Identity',
    slug: 'flour-and-hearth-identity',
    creator: 'Bluebird Bakery',
    creatorSlug: 'bluebird-bakery',
    creatorRole: 'Artisan Micro-Bakery & Identity',
    location: 'Edinburgh, UK',
    city: 'Edinburgh',
    category: 'Graphic Design',
    categorySlug: 'graphic-design',
    recognition: 'Featured',
    year: '2026',
    score: '8.88',
    imageUrl: '/images/home/hero-feature.jpg',
    aspectRatio: 'square',
    span: 'medium',
    summary: 'Warm typography, blind debossed grain bags, and heritage packaging for a Scottish stone-milled bakery.',
    description: 'A tactile branding program developed for a multi-award-winning organic micro-bakery in Leith. Custom serif letterforms reference 19th-century Edinburgh flour sacks, combined with unbleached organic linen wraps.',
    tags: ['Packaging', 'Letterpress', 'Culinary Branding', 'Edinburgh'],
    clientOrContext: 'Bluebird Artisan Bakery',
    appreciationCount: 1120,
    publishedAt: '2026-03-08',
  },
  {
    id: 'w-3',
    title: 'Aura Adaptive Interface',
    slug: 'aura-adaptive-interface',
    creator: 'Northline Digital',
    creatorSlug: 'northline-digital',
    creatorRole: 'Digital Product Design',
    location: 'Birmingham, UK',
    city: 'Birmingham',
    category: 'Web Design',
    categorySlug: 'web-design',
    recognition: "Editor's Selection",
    year: '2026',
    score: '8.94',
    imageUrl: '/images/home/hero-feature.jpg',
    aspectRatio: 'landscape',
    span: 'medium',
    summary: 'A generative acoustic design platform built with WebGL shaders and real-time spatial sound positioning.',
    description: 'An uncompromising spatial operating interface for sound engineers and electronic music producers. Engineered with zero-latency audio nodes, custom fluid shaders, and minimalist typography.',
    tags: ['WebGL', 'Audio UI', 'Design System', 'Spatial Audio'],
    clientOrContext: 'Aura Sound Labs',
    appreciationCount: 1340,
    publishedAt: '2026-03-05',
  },
  {
    id: 'w-4',
    title: 'Transmutation No. 9',
    slug: 'transmutation-no-9',
    creator: 'Kroma Atelier',
    creatorSlug: 'kroma-atelier',
    creatorRole: 'Sculptural & Digital Art',
    location: 'Glasgow, UK',
    city: 'Glasgow',
    category: 'Digital Art',
    categorySlug: 'digital-art',
    recognition: 'Category Winner',
    year: '2026',
    score: '9.35',
    imageUrl: '/images/home/work-1.jpg',
    aspectRatio: 'tall',
    span: 'tall',
    summary: 'Refractive optical glass sculptures exploring light interference and fluid dynamic computational models.',
    description: 'Conceived in Glasgow and fabricated between Edinburgh and Murano, this series of hand-blown, refractive prisms interrogates oceanic wave refraction and prismatic chromatic dispersion.',
    tags: ['Glass Craft', 'Prismatic Optics', 'Kinetic Sculpture', 'Glasgow'],
    clientOrContext: 'Scottish Gallery of Modern Craft',
    appreciationCount: 2210,
    publishedAt: '2026-03-01',
  },
  {
    id: 'w-5',
    title: 'Form Kinetic Type System',
    slug: 'form-kinetic-type-system',
    creator: 'Studio Form',
    creatorSlug: 'studio-form',
    creatorRole: 'Type Foundry & Graphic Studio',
    location: 'Bristol, UK',
    city: 'Bristol',
    category: 'Graphic Design',
    categorySlug: 'graphic-design',
    recognition: 'Honorable Mention',
    year: '2026',
    score: '8.72',
    imageUrl: '/images/home/work-3.jpg',
    aspectRatio: 'landscape',
    span: 'small',
    summary: 'A 14-axis variable typeface and interactive poster generator designed for contemporary exhibition spaces.',
    description: 'Form Sans explores optical sizing across extreme display scales, from macro architectural signage to micro footnotes on high-density displays.',
    tags: ['Variable Typography', 'Type Foundry', 'Motion Type', 'Bristol'],
    clientOrContext: 'Arnolfini Arts Centre',
    appreciationCount: 980,
    publishedAt: '2026-02-28',
  },
  {
    id: 'w-6',
    title: 'Savile Minimal Silhouettes',
    slug: 'savile-minimal-silhouettes',
    creator: 'Vance & Prow',
    creatorSlug: 'vance-and-prow',
    creatorRole: 'Fashion House & Tailoring',
    location: 'London, UK',
    city: 'London',
    category: 'Fashion',
    categorySlug: 'fashion',
    recognition: 'Category Winner',
    year: '2026',
    score: '9.08',
    imageUrl: '/images/home/work-2.jpg',
    aspectRatio: 'tall',
    span: 'medium',
    summary: 'Deconstructed wool overcoats and sharp pleated trousers hand-tailored with Yorkshire flannel.',
    description: 'A minimalist unisex capsule collection modernising classic British heritage tailoring. Features unpadded shoulders, hand-stitched horn buttons, and single-origin wool sourced from Lancashire mills.',
    tags: ['Savile Row', 'Unisex Tailoring', 'Yorkshire Wool', 'Mayfair'],
    clientOrContext: 'Vance & Prow AW26',
    appreciationCount: 1650,
    publishedAt: '2026-02-24',
  },
  {
    id: 'w-7',
    title: 'Acoustic Horizons Studio',
    slug: 'acoustic-horizons-studio',
    creator: 'Resonance Lab',
    creatorSlug: 'resonance-lab',
    creatorRole: 'Sound Architecture & Music',
    location: 'Manchester, UK',
    city: 'Manchester',
    category: 'Music',
    categorySlug: 'music',
    recognition: 'Honorable Mention',
    year: '2026',
    score: '8.68',
    imageUrl: '/images/home/work-1.jpg',
    aspectRatio: 'square',
    span: 'small',
    summary: 'Custom timber diffusers and analog acoustic recording suites in a restored Manchester cotton mill.',
    description: 'Acoustic Horizons converts a 19th-century brick cotton mill into a world-class studio for acoustic mastering, spatial quadraphonic composition, and analog synthesizer recording.',
    tags: ['Sound Design', 'Acoustic Architecture', 'Analog Audio', 'Manchester'],
    clientOrContext: 'Northern Philharmonic & Electronic Guild',
    appreciationCount: 890,
    publishedAt: '2026-02-20',
  },
  {
    id: 'w-8',
    title: 'The Highgate Residence',
    slug: 'the-highgate-residence',
    creator: 'Cairn Spatial',
    creatorSlug: 'cairn-spatial',
    creatorRole: 'Residential Architects',
    location: 'London, UK',
    city: 'London',
    category: 'Architecture',
    categorySlug: 'architecture',
    recognition: "Editor's Selection",
    year: '2026',
    score: '9.02',
    imageUrl: '/images/home/work-3.jpg',
    aspectRatio: 'landscape',
    span: 'large',
    summary: 'A monolithic private residence bridging woodland topography with exposed British granite and bronze panels.',
    description: 'Framed against the ancient woods of North London, this passive dwelling utilizes geothermal earth loops, triple-glazed floor-to-ceiling glass, and hand-chiseled Cornish granite masonry.',
    tags: ['Highgate', 'Passive House', 'Granite', 'Private Residence'],
    clientOrContext: 'Private Commission',
    appreciationCount: 1740,
    publishedAt: '2026-02-18',
  },
  {
    id: 'w-9',
    title: 'Salt & Slate Ceramics',
    slug: 'salt-and-slate-ceramics',
    creator: 'Gorse Craft Co.',
    creatorSlug: 'gorse-craft-co',
    creatorRole: 'Artisan Ceramics & Tableware',
    location: 'St Ives, UK',
    city: 'Bristol', // grouped under West Country
    category: 'Graphic Design',
    categorySlug: 'graphic-design',
    recognition: 'Featured',
    year: '2026',
    score: '8.81',
    imageUrl: '/images/home/hero-feature.jpg',
    aspectRatio: 'square',
    span: 'medium',
    summary: 'Wood-fired stoneware and minimal dining ceramics glazed with Cornish coastal sea brine and wood ash.',
    description: 'Formed on manual kick-wheels in St Ives, every plate and vessel features raw stoneware rim details and soft ash glaze tones evoking foggy coastal mornings.',
    tags: ['Ceramics', 'Cornish Craft', 'Tableware', 'Wood-Fired'],
    clientOrContext: 'Michelin Restaurant Collaboration',
    appreciationCount: 1205,
    publishedAt: '2026-02-14',
  },
  {
    id: 'w-10',
    title: 'The British Modernist Journal',
    slug: 'the-british-modernist-journal',
    creator: 'Folio Edition',
    creatorSlug: 'folio-edition',
    creatorRole: 'Publishing & Editorial House',
    location: 'Leeds, UK',
    city: 'Manchester', // grouped under North
    category: 'Writing',
    categorySlug: 'writing',
    recognition: 'Honorable Mention',
    year: '2026',
    score: '8.76',
    imageUrl: '/images/home/work-2.jpg',
    aspectRatio: 'tall',
    span: 'small',
    summary: 'A quarterly print publication documenting mid-century brutalism, post-industrial civic craft, and typography.',
    description: 'Printed on 140gsm uncoated FSC stock in Yorkshire, this journal pairs in-depth architectural essays with archival photography and unreleased design interviews.',
    tags: ['Publishing', 'Print Editorial', 'Architectural History', 'Leeds'],
    clientOrContext: 'Folio Publishing UK',
    appreciationCount: 940,
    publishedAt: '2026-02-10',
  },
  {
    id: 'w-11',
    title: 'HyperLight WebOS',
    slug: 'hyperlight-webos',
    creator: 'Kinetic Engine',
    creatorSlug: 'kinetic-engine',
    creatorRole: 'Web Engineering & Creative Tech',
    location: 'Bristol, UK',
    city: 'Bristol',
    category: 'Web Design',
    categorySlug: 'web-design',
    recognition: 'Category Winner',
    year: '2026',
    score: '9.22',
    imageUrl: '/images/home/hero-feature.jpg',
    aspectRatio: 'landscape',
    span: 'medium',
    summary: 'An ultra-lightweight WebAssembly-powered design sandbox capable of rendering 120fps physics in the browser.',
    description: 'Constructed for digital artists and motion choreographers, HyperLight demonstrates the pinnacle of British web performance with zero UI lag and pure canvas composition.',
    tags: ['WebAssembly', 'Creative Coding', 'Wasm', 'Bristol Tech'],
    clientOrContext: 'Kinetic Open Lab',
    appreciationCount: 2040,
    publishedAt: '2026-02-05',
  },
  {
    id: 'w-12',
    title: 'Brutalist Geometry Study',
    slug: 'brutalist-geometry-study',
    creator: 'Atelier North',
    creatorSlug: 'atelier-north',
    creatorRole: 'Architectural Photography & Analysis',
    location: 'Glasgow, UK',
    city: 'Glasgow',
    category: 'Photography',
    categorySlug: 'photography',
    recognition: 'Featured',
    year: '2026',
    score: '8.86',
    imageUrl: '/images/home/work-3.jpg',
    aspectRatio: 'landscape',
    span: 'small',
    summary: 'High-contrast large-format photographic survey of Glasgow civic infrastructure and social housing towers.',
    description: 'An uncompromising documentation of post-war Scottish concrete structures, captured during winter solstice low-angle sunlight.',
    tags: ['Glasgow', 'Brutalist Photography', 'Civic Architecture', 'Monochrome'],
    clientOrContext: 'Royal Incorporation of Architects in Scotland',
    appreciationCount: 1150,
    publishedAt: '2026-02-01',
  },
];

// ============================================================================
// MOCK / DEMO NOMINEE SUBMISSIONS FOR FRONTEND FLOW
// Works currently undergoing curatorial review.
// No jury scores or review cycles are invented.
// ============================================================================
export const DEMO_NOMINEE_WORKS: Work[] = [
  {
    id: 'nominee-1',
    title: 'Prismatic Wave Study',
    slug: 'prismatic-wave-study',
    creator: 'Kroma Atelier',
    creatorSlug: 'kroma-atelier',
    creatorRole: 'Creative Code & Spatial Art',
    location: 'Glasgow, UK',
    city: 'Glasgow',
    category: 'Digital Art',
    categorySlug: 'digital-art',
    recognition: 'Featured',
    year: '2026',
    score: '',
    imageUrl: '/images/home/work-1.jpg',
    aspectRatio: 'landscape',
    span: 'medium',
    summary: 'An exploratory real-time shader study investigating optical dispersion and glass caustic simulations.',
    description: 'A digital installation study modeling liquid refraction and caustic light dispersion in browser environments, currently submitted for curatorial review.',
    tags: ['Shader Art', 'WebGL', 'Glasgow', 'Demo Nomination'],
    clientOrContext: 'Independent Studio Study',
    appreciationCount: 420,
    publishedAt: '2026-03-16',
    status: 'nominated',
  },
  {
    id: 'nominee-2',
    title: 'Kinetic Canvas Sandbox',
    slug: 'kinetic-canvas-sandbox',
    creator: 'Kinetic Engine',
    creatorSlug: 'kinetic-engine',
    creatorRole: 'Digital Engineering & WebOS',
    location: 'Bristol, UK',
    city: 'Bristol',
    category: 'Web Design',
    categorySlug: 'web-design',
    recognition: 'Featured',
    year: '2026',
    score: '',
    imageUrl: '/images/home/hero-feature.jpg',
    aspectRatio: 'landscape',
    span: 'medium',
    summary: 'A sub-millisecond 2D physics engine and canvas prototyping environment engineered in Bristol.',
    description: 'Engineered with WebAssembly and low-overhead Canvas bindings, this prototype explores browser performance limits for interactive creative tools.',
    tags: ['WebAssembly', 'Canvas API', 'Bristol Tech', 'Demo Nomination'],
    clientOrContext: 'Open Engineering Prototype',
    appreciationCount: 380,
    publishedAt: '2026-03-14',
    status: 'nominated',
  },
  {
    id: 'nominee-3',
    title: 'Heritage Mill Acoustic Chamber',
    slug: 'heritage-mill-acoustic-chamber',
    creator: 'Resonance Lab',
    creatorSlug: 'resonance-lab',
    creatorRole: 'Acoustic Engineering & Spatial Sound',
    location: 'Manchester, UK',
    city: 'Manchester',
    category: 'Music',
    categorySlug: 'music',
    recognition: 'Featured',
    year: '2026',
    score: '',
    imageUrl: '/images/home/work-2.jpg',
    aspectRatio: 'square',
    span: 'medium',
    summary: 'Spatial acoustic diffusers and resonant timber wall panels designed for a Manchester industrial conversion.',
    description: 'An acoustic architecture study pairing heritage red-brick reverberation profiles with custom CNC-milled English oak baffles, submitted for peer review.',
    tags: ['Acoustic Design', 'Spatial Sound', 'Manchester', 'Demo Nomination'],
    clientOrContext: 'Heritage Mill Studio Commission',
    appreciationCount: 290,
    publishedAt: '2026-03-11',
    status: 'nominated',
  },
];

export function getAllWorks(): Work[] {
  return [FEATURED_DISCOVERY_WORK, ...DISCOVERY_WORKS, ...DEMO_NOMINEE_WORKS];
}

export function getNominatedWorks(): Work[] {
  return getAllWorks().filter((w) => w.status === 'nominated');
}

export function getAccreditedWorks(): Work[] {
  return getAllWorks().filter((w) => w.status !== 'nominated');
}

export function getWorkBySlug(slug: string): Work | undefined {
  return getAllWorks().find((w) => w.slug === slug);
}

export function getWorksByCreator(creatorSlug: string): Work[] {
  return getAllWorks().filter((w) => w.creatorSlug === creatorSlug);
}

export function getWorksByCategory(categorySlug: string): Work[] {
  return getAllWorks().filter((w) => w.categorySlug === categorySlug);
}

export function getWorksByCity(city: string): Work[] {
  return getAllWorks().filter((w) => w.city.toLowerCase() === city.toLowerCase());
}

export function getCuratedWinners(): Work[] {
  return getAllWorks().filter(
    (w) =>
      w.status !== 'nominated' &&
      (w.recognition === 'Category Winner' || w.recognition === "Editor's Selection")
  );
}

