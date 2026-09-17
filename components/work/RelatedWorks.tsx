import React from 'react';
import Link from 'next/link';
import { Work, getWorksByCategory, getAllWorks } from '@/data/works';
import DiscoveryCard from '@/components/discover/DiscoveryCard';

interface RelatedWorksProps {
  currentWork: Work;
}

export default function RelatedWorks({ currentWork }: RelatedWorksProps) {
  // 1. Works in same category excluding currentWork
  const categoryWorks = getWorksByCategory(currentWork.categorySlug).filter(
    (w) => w.slug !== currentWork.slug
  );

  // 2. Fallback works excluding currentWork and already included items
  const fallbackWorks = getAllWorks().filter(
    (w) =>
      w.slug !== currentWork.slug &&
      !categoryWorks.some((cw) => cw.slug === w.slug)
  );

  const relatedWorks = [...categoryWorks, ...fallbackWorks].slice(0, 3);

  if (relatedWorks.length === 0) return null;

  return (
    <section aria-label="Related Works" className="space-y-8 pt-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-900 pb-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
            <span>ARCHIVE EXPLORATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
            More work worth discovering.
          </h2>
        </div>

        <Link
          href={`/categories/${currentWork.categorySlug}`}
          className="font-mono text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1 shrink-0"
        >
          <span>All {currentWork.category} work</span>
          <span>→</span>
        </Link>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {relatedWorks.map((work) => (
          <DiscoveryCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}

