import React from 'react';
import CategoryCard from './CategoryCard';
import { CATEGORIES } from '@/data/categories';
import { Work } from '@/data/works';

interface CategoryGridProps {
  works: Work[];
}

export default function CategoryGrid({ works }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CATEGORIES.map((cat, index) => {
        const slug = cat.toLowerCase().replace(/\s+/g, '-');
        const count = works.filter((w) => w.category === cat).length;

        return (
          <CategoryCard
            key={cat}
            category={cat}
            slug={slug}
            index={index}
            count={count}
          />
        );
      })}
    </div>
  );
}

