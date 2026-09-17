import React from 'react';
import WinnerCard from './WinnerCard';
import { Work } from '@/data/works';

interface WinnersGridProps {
  works: Work[];
  onResetFilters?: () => void;
}

export default function WinnersGrid({ works, onResetFilters }: WinnersGridProps) {
  if (works.length === 0) {
    return (
      <div className="py-20 text-center space-y-4 border border-zinc-900 rounded-xl bg-[#0a0a0d] p-8 my-6">
        <span className="font-mono text-3xl text-zinc-600">∅</span>
        <h3 className="font-serif text-2xl text-white font-normal">
          No recognised works found
        </h3>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          No entries match your current recognition tier, discipline, or regional filter criteria.
        </p>
        {onResetFilters && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onResetFilters}
              className="font-mono text-xs text-[#0070f3] hover:text-[#38bdf8] uppercase tracking-wider underline underline-offset-4 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="space-y-6 my-10">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-wider text-zinc-400 font-medium">
            ARCHIVED RECOGNISED WORKS
          </span>
          <span>•</span>
          <span>{works.length} ENTRIES</span>
        </div>
        <span className="uppercase tracking-wider text-zinc-500 hidden sm:inline-block">
          EDITION 2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {works.map((work) => (
          <WinnerCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}
