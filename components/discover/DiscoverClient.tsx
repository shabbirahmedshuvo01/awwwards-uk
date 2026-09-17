'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/ui/Container';
import DiscoverHero from './DiscoverHero';
import DiscoveryFilters from './DiscoveryFilters';
import FeaturedDiscovery from './FeaturedDiscovery';
import DiscoveryGrid from './DiscoveryGrid';
import NominationCta from './NominationCta';
import {
  DISCOVERY_WORKS,
  FEATURED_DISCOVERY_WORK,
  Work,
} from '@/data/works';

export default function DiscoverClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedRecognition, setSelectedRecognition] = useState('All');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(6);

  // Reset helper
  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLocation('All');
    setSelectedRecognition('All');
    setSelectedSort('featured');
    setVisibleCount(6);
  };

  // Filtered works
  const filteredWorks = useMemo(() => {
    return DISCOVERY_WORKS.filter((work: Work) => {
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = work.title.toLowerCase().includes(q);
        const matchesCreator = work.creator.toLowerCase().includes(q);
        const matchesLocation = work.location.toLowerCase().includes(q);
        const matchesSummary = work.summary.toLowerCase().includes(q);
        const matchesTag = work.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCreator && !matchesLocation && !matchesSummary && !matchesTag) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && work.category !== selectedCategory) {
        return false;
      }

      // Location filter
      if (selectedLocation !== 'All' && work.city !== selectedLocation) {
        return false;
      }

      // Recognition filter
      if (selectedRecognition !== 'All' && work.recognition !== selectedRecognition) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === 'latest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      if (selectedSort === 'appreciated') {
        return b.appreciationCount - a.appreciationCount;
      }
      // default: featured / score
      return parseFloat(b.score) - parseFloat(a.score);
    });
  }, [searchQuery, selectedCategory, selectedLocation, selectedRecognition, selectedSort]);

  const displayedWorks = filteredWorks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredWorks.length;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#0070f3] selection:text-white">
      {/* 1. Discover Hero */}
      <DiscoverHero />

      {/* 2. Controls & Filters */}
      <DiscoveryFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedRecognition={selectedRecognition}
        setSelectedRecognition={setSelectedRecognition}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        totalCount={DISCOVERY_WORKS.length}
        filteredCount={filteredWorks.length}
        onReset={handleReset}
      />

      {/* 3. Main Discovery Content */}
      <main className="py-12 sm:py-16">
        <Container size="wide">
          {/* Featured Discovery Spotlight (Only shown on initial unfiltered view) */}
          {searchQuery === '' &&
            selectedCategory === 'All' &&
            selectedLocation === 'All' &&
            selectedRecognition === 'All' && (
              <FeaturedDiscovery work={FEATURED_DISCOVERY_WORK} />
            )}

          {/* Grid of Recognised Works */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {selectedCategory === 'All' ? 'All Recognised Works' : `${selectedCategory} Showcase`}
              </h2>
              <span className="font-mono text-xs text-zinc-500">
                {filteredWorks.length} RESULTS
              </span>
            </div>

            <DiscoveryGrid works={displayedWorks} onResetFilters={handleReset} />
          </div>

          {/* Load More Pagination */}
          {hasMore && (
            <div className="mt-14 sm:mt-18 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#0c0c10] px-8 py-3 font-mono text-xs uppercase tracking-wider text-zinc-200 transition-all hover:border-zinc-500 hover:text-white hover:bg-zinc-900 cursor-pointer shadow-sm"
              >
                <span>Load More</span>
                <span className="text-zinc-500 font-sans">({filteredWorks.length - visibleCount} remaining)</span>
              </button>
            </div>
          )}

          {!hasMore && filteredWorks.length > 6 && (
            <div className="mt-14 text-center font-mono text-xs text-zinc-600 uppercase tracking-wider">
              — All {filteredWorks.length} curated works loaded —
            </div>
          )}
        </Container>
      </main>

      {/* 4. Nomination CTA */}
      <NominationCta />
    </div>
  );
}

