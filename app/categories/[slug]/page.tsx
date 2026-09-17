import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DiscoveryGrid from '@/components/discover/DiscoveryGrid';
import CategoryDetailHero from '@/components/categories/CategoryDetailHero';
import CategoryPillsNav from '@/components/categories/CategoryPillsNav';
import { getAllWorks, getWorksByCategory } from '@/data/works';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = getAllWorks();
  const slugs = Array.from(new Set(works.map((w) => w.categorySlug)));
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const works = getWorksByCategory(slug);
  if (works.length === 0) return { title: 'Category Not Found — aWWWards.co.uk' };

  const categoryName = works[0].category;
  return {
    title: `${categoryName} Showcase — aWWWards.co.uk`,
    description: `Discover exceptional British ${categoryName.toLowerCase()} recognised across the UK.`,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryWorks = getWorksByCategory(slug);

  if (categoryWorks.length === 0) {
    notFound();
  }

  const categoryName = categoryWorks[0].category;

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24">
      <Container size="wide" className="space-y-10">
        <CategoryDetailHero categoryName={categoryName} />
        <CategoryPillsNav currentSlug={slug} />

        {/* Works Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
            <span className="font-mono text-xs text-zinc-500">
              SHOWING {categoryWorks.length} RECOGNISED ENTRIES
            </span>
            <Button href="/discover" variant="outline" size="sm">
              ← View All Disciplines
            </Button>
          </div>

          <DiscoveryGrid works={categoryWorks} />
        </div>
      </Container>
    </div>
  );
}
