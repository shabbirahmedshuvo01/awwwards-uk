import React from 'react';
import Link from 'next/link';
import { CATEGORIES, getCategorySlug } from '@/data/categories';
import { getAllWorks } from '@/data/works';

export default function DisciplineRecognition() {
  const allWorks = getAllWorks();

  return (
    <section className="my-16 sm:my-20 pt-12 border-t border-zinc-900 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
            ACROSS DISCIPLINES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Recognition Density by Craft
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
          Explore honours awarded across British digital engineering, physical architecture, tactile identity, and editorial craft.
        </p>
      </div>

      {/* Compact Grid of Disciplines */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs">
        {CATEGORIES.map((cat, index) => {
          const slug = getCategorySlug(cat);
          const count = allWorks.filter((w) => w.category === cat).length;
          const indexStr = String(index + 1).padStart(2, '0');

          return (
            <Link
              key={cat}
              href={`/categories/${slug}`}
              className="group p-5 rounded-lg border border-zinc-900 bg-[#09090c] hover:border-zinc-700 hover:bg-[#0d0d12] transition-all flex flex-col justify-between min-h-[110px]"
            >
              <div className="flex items-center justify-between text-zinc-600 text-[10px]">
                <span>{indexStr}</span>
                <span className="text-zinc-500 group-hover:text-[#38bdf8] transition-colors">
                  {count} {count === 1 ? 'WORK' : 'WORKS'}
                </span>
              </div>

              <div className="pt-3">
                <span className="font-serif text-base sm:text-lg text-zinc-200 group-hover:text-white transition-colors block leading-tight">
                  {cat}
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all inline-block pt-1">
                  View Archive →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

