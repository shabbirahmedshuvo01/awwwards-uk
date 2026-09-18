import React from 'react';
import DiscoveryCard from '@/components/discover/DiscoveryCard';
import Button from '@/components/ui/Button';
import { Work } from '@/data/works';

interface ProfileWorkGridProps {
  works: Work[];
  creatorName: string;
}

export default function ProfileWorkGrid({
  works,
  creatorName,
}: ProfileWorkGridProps) {
  return (
    <section aria-label="Selected Work & Portfolio" className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-zinc-900">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
            Selected work
          </h2>
          <p className="font-sans text-sm text-zinc-400">
            Recognised work from {creatorName} across aWWWards.co.uk.
          </p>
        </div>

        <span className="font-mono text-xs text-zinc-500">
          {works.length} {works.length === 1 ? 'PROJECT RECORD' : 'PROJECT RECORDS'}
        </span>
      </div>

      {/* Grid or Empty State */}
      {works.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {works.map((work) => (
            <DiscoveryCard key={work.id} work={work} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-800 bg-[#0c0c10]/40 space-y-4 max-w-xl mx-auto px-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-500 font-mono text-lg">
            ∅
          </div>
          <h3 className="font-serif text-xl text-zinc-300 font-normal">
            No published projects yet
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed">
            This practice is registered in the British creative index, but has no featured showcase entries published at this time.
          </p>
          <div className="pt-2">
            <Button href="/submit" variant="outline" size="sm" className="font-mono text-xs">
              Nominate Work for {creatorName}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
