import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';

interface CategoryPillsNavProps {
  currentSlug: string;
}

export default function CategoryPillsNav({ currentSlug }: CategoryPillsNavProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-900 no-scrollbar font-mono text-xs">
      <span className="text-zinc-600 uppercase text-[10px] mr-2 shrink-0">
        Other Sectors:
      </span>
      {CATEGORIES.map((cat) => {
        const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
        const isActive = catSlug === currentSlug;
        return (
          <Link
            key={cat}
            href={`/categories/${catSlug}`}
            className={`shrink-0 rounded px-3 py-1.5 transition-colors uppercase ${isActive
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}

