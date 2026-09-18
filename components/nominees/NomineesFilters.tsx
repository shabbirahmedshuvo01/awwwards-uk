'use client';

import React from 'react';
import { CATEGORIES } from '@/data/categories';
import { LOCATIONS } from '@/data/works';

export const NOMINEES_SORT_OPTIONS = [
  { label: 'Recently Nominated', value: 'latest' },
  { label: 'Most Appreciated', value: 'appreciated' },
];

interface NomineesFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedLocation: string;
  setSelectedLocation: (v: string) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedSort: string;
  setSelectedSort: (v: string) => void;
  filteredCount: number;
  totalCount: number;
  onReset: () => void;
}

export default function NomineesFilters({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  searchQuery,
  setSearchQuery,
  selectedSort,
  setSelectedSort,
  filteredCount,
  totalCount,
  onReset,
}: NomineesFiltersProps) {
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedLocation !== 'All' ||
    searchQuery.trim() !== '' ||
    selectedSort !== 'latest';

  return (
    <div className="rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-[#0c0c10] p-4 sm:p-5 lg:p-6 my-8 space-y-4 sm:space-y-5 shadow-sm">
      {/* Top Row: Category Discipline Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 shrink-0 font-medium">
          Discipline:
        </span>

        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none [&::-webkit-scrollbar]:hidden font-mono text-xs -mx-1 px-1">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-mono transition-all cursor-pointer ${selectedCategory === 'All'
              ? 'border border-[#0070f3] bg-[#0070f3]/15 text-white font-semibold shadow-sm shadow-blue-500/20'
              : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
          >
            All Disciplines
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-mono transition-all cursor-pointer ${isActive
                  ? 'border border-[#0070f3] bg-[#0070f3]/15 text-white font-semibold shadow-sm shadow-blue-500/20'
                  : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Row: Search, Location Hub, Sort & Reset */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-3.5 border-t border-zinc-800/60 font-mono text-xs">
        {/* Left: Search Input */}
        <div className="relative w-full lg:max-w-xs">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search nominations..."
            className="w-full rounded-md border border-zinc-800 bg-black/50 pl-9 pr-3.5 py-2 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Center / Right: Dropdowns and Reset */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
          {/* Location Hub Select */}
          <div className="relative flex-1 sm:flex-none min-w-32.5">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full appearance-none rounded-md border border-zinc-800 bg-black/50 px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer transition-colors"
              aria-label="Filter by location"
            >
              <option value="All">All Locations</option>
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-500 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          {/* Sort Select */}
          <div className="relative flex-1 sm:flex-none min-w-32.5">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="w-full appearance-none rounded-md border border-zinc-800 bg-black/50 px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer transition-colors"
              aria-label="Sort nominations"
            >
              {NOMINEES_SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-500 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          {/* Reset Filters Action */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 cursor-pointer text-xs font-mono py-1 px-2"
            >
              Reset Filters
            </button>
          )}

          {/* Counter Badge */}
          <span className="text-zinc-500 text-[11px] font-mono pl-1 hidden sm:inline-block">
            {filteredCount} of {totalCount}
          </span>
        </div>
      </div>
    </div>
  );
}

