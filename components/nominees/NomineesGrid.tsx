import React from 'react';
import { Work } from '@/data/works';
import NomineeCard from './NomineeCard';
import Button from '@/components/ui/Button';

interface NomineesGridProps {
  works: Work[];
  onResetFilters: () => void;
}

export default function NomineesGrid({
  works,
  onResetFilters,
}: NomineesGridProps) {
  if (works.length === 0) {
    return (
      <div className="py-20 text-center rounded-2xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 p-8 space-y-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
          00
        </div>
        <h3 className="font-serif text-2xl text-white font-normal">
          No nominated works found
        </h3>
        <p className="font-sans text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
          There are currently no nominated works matching your active filter criteria. Try adjusting your search query or discipline selection.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            onClick={onResetFilters}
            variant="outline"
            size="sm"
            className="font-mono text-xs uppercase tracking-wider"
          >
            Reset Filters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {works.map((work) => (
        <NomineeCard key={work.id} work={work} />
      ))}
    </div>
  );
}

