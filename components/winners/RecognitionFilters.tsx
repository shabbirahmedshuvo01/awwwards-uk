'use client';

import React from 'react';
import { CATEGORIES } from '@/data/categories';
import { LOCATIONS } from '@/data/works';

export const RECOGNITION_LEVELS = [
  'All Recognition',
  'Category Winner',
  "Editor's Selection",
  'Featured',
  'Honorable Mention',
] as const;

export type RecognitionLevel = (typeof RECOGNITION_LEVELS)[number];

export const WINNERS_SORT_OPTIONS = [
  { label: 'Recently Recognised', value: 'latest' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Most Appreciated', value: 'appreciated' },
];

interface RecognitionFiltersProps {
  selectedRecognition: RecognitionLevel;
  setSelectedRecognition: (level: RecognitionLevel) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
  filteredCount: number;
  totalCount: number;
  onReset: () => void;
}

export default function RecognitionFilters({
  selectedRecognition,
  setSelectedRecognition,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedSort,
  setSelectedSort,
  filteredCount,
  totalCount,
  onReset,
}: RecognitionFiltersProps) {
  const hasActiveFilters =
    selectedRecognition !== 'All Recognition' ||
    selectedCategory !== 'All' ||
    selectedLocation !== 'All' ||
    selectedSort !== 'latest';

  return (
    <div className="rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-[#0c0c10] p-4 sm:p-5 lg:p-6 my-8 space-y-4 sm:space-y-5 shadow-sm">
      {/* Top Row: Recognition Level Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 shrink-0 font-medium">
          Recognition Tier:
        </span>

        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-mono text-xs -mx-1 px-1">
          {RECOGNITION_LEVELS.map((level) => {
            const isActive = selectedRecognition === level;
            return (
              <button
                key={level}
                type="button"
                onClick={() => setSelectedRecognition(level)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-mono transition-all cursor-pointer ${isActive
                    ? 'border border-[#0070f3] bg-[#0070f3]/15 text-white font-semibold shadow-sm shadow-blue-500/20'
                    : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
              >
                {level}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Controls: Category, Location, Sort & Reset */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-3.5 border-t border-zinc-800/60 font-mono text-xs">
        {/* Select Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full lg:w-auto">
          {/* Category Select */}
          <div className="relative w-full">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none rounded-md border border-zinc-800 bg-black/50 px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer transition-colors"
              aria-label="Filter by category"
            >
              <option value="All">All Disciplines</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500">
              ▼
            </span>
          </div>

          {/* Location Select */}
          <div className="relative w-full">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none rounded-md border border-zinc-800 bg-black/50 px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer transition-colors"
              aria-label="Filter by UK location"
            >
              <option value="All">All UK Regions</option>
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500">
              ▼
            </span>
          </div>

          {/* Sort Select */}
          <div className="relative w-full">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="w-full appearance-none rounded-md border border-zinc-800 bg-black/50 px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer transition-colors"
              aria-label="Sort recognised works"
            >
              {WINNERS_SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  Sort: {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500">
              ▼
            </span>
          </div>
        </div>

        {/* Counter & Reset */}
        <div className="flex items-center justify-between lg:justify-end gap-4 text-zinc-400 text-xs w-full lg:w-auto pt-1 lg:pt-0">
          <span>
            Showing <strong className="text-white">{filteredCount}</strong> of {totalCount} recognised works
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="text-[#38bdf8] hover:underline cursor-pointer shrink-0 font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
