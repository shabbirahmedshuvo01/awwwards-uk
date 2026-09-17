'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SearchResults from './SearchResults';
import { getAllWorks, Work } from '@/data/works';

const POPULAR_TAGS = [
  'Web Design',
  'Architecture',
  'London',
  'Editorial',
  'Minimalist',
  'Manchester',
  'Photography',
  'Branding',
  'Digital Craft',
];

export default function SearchClient() {
  const [query, setQuery] = useState('');
  const allWorks = useMemo(() => getAllWorks(), []);

  const results = useMemo(() => {
    if (!query.trim()) return allWorks;
    const q = query.toLowerCase().trim();

    return allWorks.filter((work: Work) => {
      return (
        work.title.toLowerCase().includes(q) ||
        work.creator.toLowerCase().includes(q) ||
        work.category.toLowerCase().includes(q) ||
        work.location.toLowerCase().includes(q) ||
        work.city.toLowerCase().includes(q) ||
        work.summary.toLowerCase().includes(q) ||
        work.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [query, allWorks]);

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24">
      <Container size="wide" className="space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/discover" className="hover:text-white transition-colors">
            Discover
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Search</span>
        </nav>

        {/* Search Header */}
        <div className="space-y-6 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
            CATALOG SEARCH
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight">
            Search UK Creative Index
          </h1>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
            Find studios, architectural projects, editorial portfolios, and digital experiences across Great Britain.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="space-y-4 max-w-2xl">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 pointer-events-none"
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
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by project name, studio, city, or discipline..."
              className="w-full rounded-xl border border-zinc-800 bg-[#0c0c10] py-4 pl-12 pr-12 text-sm font-sans text-zinc-100 placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-white p-1 cursor-pointer"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Popular Tag Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-mono text-xs text-zinc-500 mr-1">Popular:</span>
            {POPULAR_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className={`rounded-full border px-3 py-1 text-xs font-mono transition-colors cursor-pointer ${query.toLowerCase() === tag.toLowerCase()
                    ? 'border-[#0070f3] bg-[#0070f3]/10 text-white'
                    : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Component */}
        <SearchResults
          results={results}
          query={query}
          totalIndexedCount={allWorks.length}
          onReset={() => setQuery('')}
        />
      </Container>
    </div>
  );
}
