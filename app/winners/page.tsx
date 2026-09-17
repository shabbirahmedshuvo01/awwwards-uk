import React from 'react';
import type { Metadata } from 'next';
import WinnersClient from '@/components/winners/WinnersClient';

export const metadata: Metadata = {
  title: 'Curated Winners & Annual Honours — aWWWards.co.uk',
  description:
    'Explore exceptional work and talent recognised through the aWWWards.co.uk editorial selection. 2026 Edition UK-wide recognition.',
  openGraph: {
    title: 'Curated Winners & Annual Honours — aWWWards.co.uk',
    description:
      'Explore exceptional work and talent recognised through the aWWWards.co.uk editorial selection.',
  },
};

export default function WinnersPage() {
  return <WinnersClient />;
}
