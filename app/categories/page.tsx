import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import CategoriesHero from '@/components/categories/CategoriesHero';
import FeaturedCategory from '@/components/categories/FeaturedCategory';
import CategoryGrid from '@/components/categories/CategoryGrid';
import UkCreativeLandscape from '@/components/categories/UkCreativeLandscape';
import CategoriesCta from '@/components/categories/CategoriesCta';
import { getAllWorks } from '@/data/works';

export const metadata: Metadata = {
  title: 'Creative Disciplines & Taxonomy — aWWWards.co.uk',
  description:
    'Browse the creative disciplines recognised across aWWWards.co.uk, from photography and architecture to digital design, branding and beyond.',
  openGraph: {
    title: 'Creative Disciplines & Taxonomy — aWWWards.co.uk',
    description:
      'Browse the creative disciplines recognised across aWWWards.co.uk, from photography and architecture to digital design, branding and beyond.',
  },
};

export default function CategoriesIndexPage() {
  const allWorks = getAllWorks();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#0070f3] selection:text-white pt-10 pb-20">
      <Container size="wide">
        {/* 1. Categories Editorial Hero */}
        <CategoriesHero />

        {/* 2. Featured Discipline Spotlight */}
        <FeaturedCategory />

        {/* 3. Primary Category Grid */}
        <CategoryGrid works={allWorks} />

        {/* 4. UK Creative Landscape */}
        <UkCreativeLandscape />
      </Container>

      {/* 5. Closing Conversion CTA */}
      <CategoriesCta />
    </div>
  );
}
