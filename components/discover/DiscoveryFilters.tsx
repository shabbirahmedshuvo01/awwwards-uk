'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import { CATEGORIES, LOCATIONS, RECOGNITION_TIERS, SORT_OPTIONS } from '@/data/works';

interface DiscoveryFiltersProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedLocation: string;
  setSelectedLocation: (v: string) => void;
  selectedRecognition: string;
  setSelectedRecognition: (v: string) => void;
  selectedSort: string;
  setSelectedSort: (v: string) => void;
  totalCount: number;
  filteredCount: number;
  onReset: () => void;
}

export default function DiscoveryFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedRecognition,
  setSelectedRecognition,
  selectedSort,
  setSelectedSort,
  totalCount,
  filteredCount,
  onReset,
}: DiscoveryFiltersProps) {
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedLocation !== 'All' ||
    selectedRecognition !== 'All' ||
    selectedSort !== 'featured';

  return (
    <div className="border-b border-zinc-900 bg-[#070709] py-6 sticky top-17.25 z-40 backdrop-blur-md bg-opacity-95">
      <Container size="wide" className="space-y-4">
        {/* Main Controls Row */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none"
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
              placeholder="Search work, businesses or creators..."
              className="w-full rounded-md border border-zinc-800 bg-[#0c0c10] py-2 pl-10 pr-4 text-xs font-mono text-zinc-200 placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-500 hover:text-zinc-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Location Select */}
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none rounded-md border border-zinc-800 bg-[#0c0c10] px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 transition-colors hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer"
                aria-label="Filter by UK location"
              >
                <option value="All">All UK</option>
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

            {/* Recognition Select */}
            <div className="relative">
              <select
                value={selectedRecognition}
                onChange={(e) => setSelectedRecognition(e.target.value)}
                className="appearance-none rounded-md border border-zinc-800 bg-[#0c0c10] px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 transition-colors hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer"
                aria-label="Filter by recognition status"
              >
                <option value="All">All Recognitions</option>
                {RECOGNITION_TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500">
                ▼
              </span>
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none rounded-md border border-zinc-800 bg-[#0c0c10] px-3.5 py-2 pr-8 text-xs font-mono text-zinc-300 transition-colors hover:border-zinc-700 focus:border-zinc-500 focus:outline-none cursor-pointer"
                aria-label="Sort creative works"
              >
                {SORT_OPTIONS.map((sort) => (
                  <option key={sort.value} value={sort.value}>
                    Sort: {sort.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar pt-1 border-t border-zinc-900/60">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`shrink-0 rounded px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${selectedCategory === 'All'
              ? 'bg-white text-black font-semibold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
              }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 rounded px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer ${selectedCategory === cat
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info & Reset */}
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1">
          <div>
            SHOWING <span className="text-zinc-300 font-semibold">{filteredCount}</span> OF{' '}
            <span className="text-zinc-300 font-semibold">{totalCount}</span> RECOGNISED WORKS
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="text-[#0070f3] hover:text-[#38bdf8] transition-colors underline underline-offset-4 cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}

