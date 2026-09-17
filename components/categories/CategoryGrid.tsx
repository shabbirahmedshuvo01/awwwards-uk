import React from 'react';
import CategoryCard from './CategoryCard';
import { CATEGORIES, CATEGORY_DETAILS, getCategorySlug } from '@/data/categories';
import { Work } from '@/data/works';

interface CategoryGridProps {
  works: Work[];
}

export default function CategoryGrid({ works }: CategoryGridProps) {
  return (
    <section className="space-y-6 my-10">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-wider text-zinc-400 font-medium">
            INDEX OF DISCIPLINES
          </span>
          <span>•</span>
          <span>{CATEGORIES.length} SECTORS</span>
        </div>
        <span className="uppercase tracking-wider text-zinc-500 hidden sm:inline-block">
          ARCHIVE 2026
        </span>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CATEGORIES.map((cat, index) => {
          const slug = getCategorySlug(cat);
          const categoryWorks = works.filter((w) => w.category === cat);
          const count = categoryWorks.length;
          const description =
            CATEGORY_DETAILS[cat]?.description ||
            'Visionary British creative practice, technique, and craft.';
          // Representative image from existing work data
          const representativeWork = categoryWorks[0];
          const imageUrl = representativeWork?.imageUrl;

          return (
            <CategoryCard
              key={cat}
              category={cat}
              slug={slug}
              index={index}
              count={count}
              description={description}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
}
