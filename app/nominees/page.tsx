import React from 'react';
import type { Metadata } from 'next';
import NomineesClient from '@/components/nominees/NomineesClient';
import { getNominatedWorks } from '@/data/works';

export const metadata: Metadata = {
  metadataBase: new URL('https://awwwards.co.uk'),
  title: 'Nominees — Creative Work Under Review | aWWWards.co.uk',
  description:
    'Browse UK creative work, independent studios, and innovative practices currently under curatorial review for recognition on aWWWards.co.uk.',
  openGraph: {
    title: 'Nominees — Creative Work Under Review | aWWWards.co.uk',
    description:
      'Browse UK creative work, independent studios, and innovative practices currently under curatorial review for recognition on aWWWards.co.uk.',
    url: 'https://awwwards.co.uk/nominees',
    siteName: 'aWWWards.co.uk',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nominees — Creative Work Under Review | aWWWards.co.uk',
    description:
      'Browse UK creative work, independent studios, and innovative practices currently under curatorial review for recognition on aWWWards.co.uk.',
  },
};

export default function NomineesPage() {
  const nominatedWorks = getNominatedWorks();

  return <NomineesClient initialWorks={nominatedWorks} />;
}

