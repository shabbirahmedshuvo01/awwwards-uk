export interface Project {
  id: string;
  title: string;
  blurb: string;
  creator: string;
  initials: string;
  countryCode?: string;
  country: string;
  flag?: string;
  year?: string;
  score?: string;
  category?: string;
  image?: string;
  award?: string;
}

export const heroImage = "/images/home/hero-feature.jpg";

export const projects: Project[] = [
  {
    id: "1",
    title: "Obsidian Atelier",
    blurb: "A liquid-chrome portfolio built as a single continuous WebGL scene.",
    creator: "MARA VESTERGAARD",
    initials: "MV",
    countryCode: "DK",
    country: "DENMARK",
    flag: "🇩🇰",
    year: "2026",
    score: "8.84",
    category: "Identity & WebGL",
    image: "/images/home/hero-feature.jpg",
    award: "Site of the Day",
  },
  {
    id: "2",
    title: "Glasswork No. 7",
    blurb: "Translucent refractive forms capturing North Atlantic tide luminescence and mineral optics.",
    creator: "GILES & CO.",
    initials: "GC",
    countryCode: "UK",
    country: "UNITED KINGDOM",
    flag: "🇬🇧",
    year: "2026",
    score: "8.92",
    category: "Spatial Design",
    image: "/images/home/work-1.jpg",
    award: "Honorable Mention",
  },
  {
    id: "3",
    title: "Twilight Tailoring",
    blurb: "Monolithic concrete retail structure celebrating British bespoke garment cutting.",
    creator: "STUDIO FOLK",
    initials: "SF",
    countryCode: "UK",
    country: "UNITED KINGDOM",
    flag: "🇬🇧",
    year: "2026",
    score: "8.71",
    category: "Architecture",
    image: "/images/home/work-3.jpg",
    award: "Pro",
  },
  {
    id: "4",
    title: "Signal Drift",
    blurb: "High-contrast studio silhouette study exploring tailoring drape in zero-ambient lighting.",
    creator: "VECTOR STATE",
    initials: "VS",
    countryCode: "UK",
    country: "UNITED KINGDOM",
    flag: "🇬🇧",
    year: "2026",
    score: "8.65",
    category: "Photography",
    image: "/images/home/work-2.jpg",
    award: "Special Commendation",
  },
  {
    id: "5",
    title: "Apex Couture",
    blurb: "Precision interactive digital platform engineered for high-concept technical outerwear.",
    creator: "APEX STUDIO",
    initials: "AS",
    countryCode: "UK",
    country: "UNITED KINGDOM",
    flag: "🇬🇧",
    year: "2026",
    score: "8.78",
    category: "Web & Digital",
    image: "/images/home/hero-feature.jpg",
    award: "Site of the Day",
  },
];
