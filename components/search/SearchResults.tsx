import React from 'react';
import DiscoveryCard from '@/components/discover/DiscoveryCard';
import { Work } from '@/data/works';

interface SearchResultsProps {
  results: Work[];
  query: string;
  totalIndexedCount: number;
  onReset: () => void;
}

export default function SearchResults({
  results,
  query,
  totalIndexedCount,
  onReset,
}: SearchResultsProps) {
  return (
    <div className="space-y-8">
      {/* Results Info */}
      <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
        <div className="font-mono text-xs text-zinc-400">
          {query.trim() ? (
            <span>
              Found <strong className="text-white">{results.length}</strong>{' '}
              {results.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
            </span>
          ) : (
            <span>
              Showing all <strong>{totalIndexedCount}</strong> indexed works
            </span>
          )}
        </div>

        {query.trim() && (
          <button
            type="button"
            onClick={onReset}
            className="font-mono text-xs text-[#38bdf8] hover:underline cursor-pointer"
          >
            Reset Search
          </button>
        )}
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((work) => (
            <DiscoveryCard key={work.id} work={work} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl border border-dashed border-zinc-800 bg-[#070709] p-8">
          <p className="font-serif text-2xl text-zinc-300 mb-2">
            No matching works found
          </p>
          <p className="text-xs font-mono text-zinc-500 max-w-sm mx-auto mb-6">
            We couldn&apos;t find any records matching &ldquo;{query}&rdquo;. Try another discipline or location.
          </p>
          <button
            type="button"
            onClick={onReset}
            className="rounded-full border border-zinc-700 bg-zinc-800/60 px-6 py-2.5 font-mono text-xs text-white hover:border-zinc-500 transition-colors cursor-pointer"
          >
            Show All Works
          </button>
        </div>
      )}
    </div>
  );
}

