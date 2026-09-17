import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import CategoriesHero from '@/components/categories/CategoriesHero';
import CategoryGrid from '@/components/categories/CategoryGrid';
import { getAllWorks } from '@/data/works';

export const metadata: Metadata = {
  title: 'Creative Disciplines & Categories — aWWWards.co.uk',
  description: 'Explore UK creative talent across architecture, web design, photography, digital art, fashion, and writing.',
};

export default function CategoriesIndexPage() {
  const allWorks = getAllWorks();

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24">
      <Container size="wide" className="space-y-12">
        <CategoriesHero />
        <CategoryGrid works={allWorks} />
      </Container>
    </div>
  );
}
