import React from 'react';
import { Work } from '@/data/works';
import DiscoveryCard from './DiscoveryCard';

interface DiscoveryGridProps {
  works: Work[];
  onResetFilters?: () => void;
}

export default function DiscoveryGrid({ works, onResetFilters }: DiscoveryGridProps) {
  if (works.length === 0) {
    return (
      <div className="py-20 text-center space-y-4 border border-zinc-900 rounded-xl bg-[#0a0a0d] p-8">
        <span className="font-mono text-3xl text-zinc-600">∅</span>
        <h3 className="font-serif text-2xl text-white font-normal">
          No matching works found
        </h3>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Try expanding your search query, selecting different categories, or removing location filters.
        </p>
        {onResetFilters && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onResetFilters}
              className="font-mono text-xs text-[#0070f3] hover:text-[#38bdf8] uppercase tracking-wider underline underline-offset-4 cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {works.map((work, index) => {
        // Asymmetrical editorial cadence: make certain large works span 2 columns on large screens
        const isWide = work.span === 'large' && (index % 4 === 0 || index === 0);

        return (
          <div
            key={work.id}
            className={isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
          >
            <DiscoveryCard work={work} />
          </div>
        );
      })}
    </div>
  );
}

