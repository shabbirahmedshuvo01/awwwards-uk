export interface CreatorProfile {
  slug: string;
  name: string;
  role: string;
  location: string;
  city: string;
  initials: string;
  bio: string;
  website?: string;
}

export const CREATOR_PROFILES: CreatorProfile[] = [
  {
    slug: 'north-studio',
    name: 'North Studio',
    role: 'Photography & Creative Direction',
    location: 'London, UK',
    city: 'London',
    initials: 'NS',
    bio: 'Independent East London image studio specializing in sartorial portraiture, negative space, and directional tungsten lighting monographs.',
  },
  {
    slug: 'atelier-north',
    name: 'Atelier North',
    role: 'Architectural Practice',
    location: 'Manchester, UK',
    city: 'Manchester',
    initials: 'AN',
    bio: 'Pioneering low-carbon geopolymer concrete structures and civic sanctuaries nestled across heritage industrial quarters.',
  },
  {
    slug: 'studio-folk',
    name: 'Studio Folk',
    role: 'Identity & Type Design',
    location: 'Leeds, UK',
    city: 'Leeds',
    initials: 'SF',
    bio: 'Graphic identity and bespoke typography foundry crafting tactile print monographs and packaging systems.',
  },
  {
    slug: 'kroma-atelier',
    name: 'Kroma Atelier',
    role: 'Creative Code & Spatial Art',
    location: 'Glasgow, UK',
    city: 'Glasgow',
    initials: 'KA',
    bio: 'Exploratory computational art studio investigating refractive optical glass sculptures and real-time shader light interference.',
  },
  {
    slug: 'kinetic-engine',
    name: 'Kinetic Engine',
    role: 'Digital Engineering & WebOS',
    location: 'Bristol, UK',
    city: 'Bristol',
    initials: 'KE',
    bio: 'Pushing browser capabilities with ultra-low-latency WebAssembly sandboxes, interactive canvas engines, and physics models.',
  },
  {
    slug: 'vance-and-prow',
    name: 'Vance & Prow',
    role: 'Bespoke Tailoring & Garments',
    location: 'London, UK',
    city: 'London',
    initials: 'VP',
    bio: 'Savile Row heritage craftsmanship paired with modern minimalist drape, deconstructed silhouettes, and Yorkshire flannels.',
  },
  {
    slug: 'cairn-spatial',
    name: 'Cairn Spatial',
    role: 'Architectural Practice',
    location: 'Edinburgh, UK',
    city: 'Edinburgh',
    initials: 'CS',
    bio: 'Monolithic residential and civic architectural practice bridging Scottish stone topography with minimalist bronze and timber detailing.',
  },
  {
    slug: 'northline-digital',
    name: 'Northline Digital',
    role: 'Interactive Systems & Web',
    location: 'Manchester, UK',
    city: 'Manchester',
    initials: 'ND',
    bio: 'Digital product design atelier combining WebGL shaders, micro-typography, and acoustic responsiveness in contemporary web interfaces.',
  },
  {
    slug: 'studio-morven',
    name: 'Studio Morven',
    role: 'Analog & Landscape Photography',
    location: 'St Ives, Cornwall',
    city: 'St Ives',
    initials: 'SM',
    bio: 'Documenting the Cornish coastal geological strata through large-format silver gelatin and analog selenium-toned prints.',
  },
  {
    slug: 'foundry-nine',
    name: 'Foundry Nine',
    role: 'Type Design & Editorial',
    location: 'Birmingham, UK',
    city: 'Birmingham',
    initials: 'FN',
    bio: 'Independent typographic foundry drawing precision display variable fonts and cultural publication layouts.',
  },
  {
    slug: 'resonant-form',
    name: 'Resonant Form',
    role: 'Acoustic Engineering & Spatial Sound',
    location: 'London, UK',
    city: 'London',
    initials: 'RF',
    bio: 'Architectural acoustics and generative soundscapes designed for modern contemplative public and gallery installations.',
  },
  {
    slug: 'bluebird-bakery',
    name: 'Bluebird Bakery',
    role: 'Craft Bakery & Culinary Identity',
    location: 'York & Leeds, UK',
    city: 'Leeds',
    initials: 'BB',
    bio: 'Artisan sourdough micro-bakery pairing slow-fermentation culinary tradition with clean, sustainable packaging design.',
  },
];

export function getAllProfiles(): CreatorProfile[] {
  return CREATOR_PROFILES;
}

export function getProfileBySlug(slug: string): CreatorProfile | undefined {
  return CREATOR_PROFILES.find((p) => p.slug === slug);
}

