import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import WinnersHero from '@/components/winners/WinnersHero';
import WinnersGrid from '@/components/winners/WinnersGrid';
import { getCuratedWinners } from '@/data/works';

export const metadata: Metadata = {
  title: 'Curated Winners & Annual Honours — aWWWards.co.uk',
  description: 'Annual British design winners, Category Winners, and special commendations recognized by the aWWWards.co.uk jury.',
};

export default function WinnersPage() {
  const winners = getCuratedWinners();

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24">
      <Container size="wide" className="space-y-12">
        <WinnersHero />
        <WinnersGrid works={winners} />
      </Container>
    </div>
  );
}
