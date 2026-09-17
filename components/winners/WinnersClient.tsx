'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/ui/Container';
import WinnersHero from './WinnersHero';
import WinnersFeatured from './WinnersFeatured';
import RecognitionFilters, { RecognitionLevel } from './RecognitionFilters';
import WinnersGrid from './WinnersGrid';
import DisciplineRecognition from './DisciplineRecognition';
import WinnersCta from './WinnersCta';
import { getAllWorks, Work } from '@/data/works';

export default function WinnersClient() {
  const allWorks = useMemo(() => getAllWorks(), []);

  const [selectedRecognition, setSelectedRecognition] =
    useState<RecognitionLevel>('All Recognition');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedSort, setSelectedSort] = useState('latest');

  const handleReset = () => {
    setSelectedRecognition('All Recognition');
    setSelectedCategory('All');
    setSelectedLocation('All');
    setSelectedSort('latest');
  };

  const isInitialUnfiltered =
    selectedRecognition === 'All Recognition' &&
    selectedCategory === 'All' &&
    selectedLocation === 'All' &&
    selectedSort === 'latest';

  const filteredWorks = useMemo(() => {
    return allWorks
      .filter((work: Work) => {
        // Recognition filter
        if (
          selectedRecognition !== 'All Recognition' &&
          work.recognition !== selectedRecognition
        ) {
          return false;
        }

        // Category filter
        if (
          selectedCategory !== 'All' &&
          work.category !== selectedCategory
        ) {
          return false;
        }

        // Location filter
        if (
          selectedLocation !== 'All' &&
          work.city !== selectedLocation
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (selectedSort === 'rating') {
          return parseFloat(b.score) - parseFloat(a.score);
        }
        if (selectedSort === 'appreciated') {
          return b.appreciationCount - a.appreciationCount;
        }
        // default: recently recognised (latest)
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      });
  }, [allWorks, selectedRecognition, selectedCategory, selectedLocation, selectedSort]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#0070f3] selection:text-white pt-10 pb-20">
      <Container size="wide">
        {/* 1. Editorial Hero */}
        <WinnersHero />

        {/* 2. Recognition Filter Bar */}
        <RecognitionFilters
          selectedRecognition={selectedRecognition}
          setSelectedRecognition={setSelectedRecognition}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          filteredCount={filteredWorks.length}
          totalCount={allWorks.length}
          onReset={handleReset}
        />

        {/* 3. Featured Recognition (Prominent spotlight shown initially) */}
        {isInitialUnfiltered && <WinnersFeatured />}

        {/* 4. Recognition Archive / Winners Grid */}
        <WinnersGrid works={filteredWorks} onResetFilters={handleReset} />

        {/* 5. Recognition by Discipline */}
        <DisciplineRecognition />
      </Container>

      {/* 6. Bottom CTA */}
      <WinnersCta />
    </div>
  );
}

