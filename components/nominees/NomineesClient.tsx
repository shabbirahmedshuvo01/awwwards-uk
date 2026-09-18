'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/ui/Container';
import NomineesHero from './NomineesHero';
import NomineesFilters from './NomineesFilters';
import NomineesGrid from './NomineesGrid';
import NomineesCta from './NomineesCta';
import { Work } from '@/data/works';

interface NomineesClientProps {
  initialWorks: Work[];
}

export default function NomineesClient({ initialWorks }: NomineesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('latest');

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedLocation('All');
    setSearchQuery('');
    setSelectedSort('latest');
  };

  const filteredWorks = useMemo(() => {
    return initialWorks
      .filter((work) => {
        // Category filter
        if (selectedCategory !== 'All' && work.category !== selectedCategory) {
          return false;
        }

        // Location filter
        if (selectedLocation !== 'All' && work.city !== selectedLocation) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchesTitle = work.title.toLowerCase().includes(q);
          const matchesCreator = work.creator.toLowerCase().includes(q);
          const matchesLocation = work.location.toLowerCase().includes(q);
          const matchesSummary = work.summary.toLowerCase().includes(q);
          const matchesTag = work.tags.some((t) => t.toLowerCase().includes(q));
          if (
            !matchesTitle &&
            !matchesCreator &&
            !matchesLocation &&
            !matchesSummary &&
            !matchesTag
          ) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (selectedSort === 'appreciated') {
          return b.appreciationCount - a.appreciationCount;
        }
        // default: recently nominated (latest publishedAt)
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      });
  }, [initialWorks, selectedCategory, selectedLocation, searchQuery, selectedSort]);

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#0070f3] selection:text-white pt-10 pb-20">
      <Container size="wide" className="space-y-8">
        {/* 1. Hero & Breadcrumbs */}
        <NomineesHero />

        {/* 2. Filters & Controls */}
        <NomineesFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          filteredCount={filteredWorks.length}
          totalCount={initialWorks.length}
          onReset={handleReset}
        />

        {/* 3. Nominated Works Grid */}
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-900 font-mono text-xs">
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              {selectedCategory === 'All'
                ? 'Current Nominations'
                : `${selectedCategory} Nominations`}
            </h2>
            <span className="text-zinc-500">
              {filteredWorks.length} {filteredWorks.length === 1 ? 'WORK' : 'WORKS'} UNDER REVIEW
            </span>
          </div>

          <NomineesGrid works={filteredWorks} onResetFilters={handleReset} />
        </div>

        {/* 4. Closing CTA */}
        <NomineesCta />
      </Container>
    </div>
  );
}

