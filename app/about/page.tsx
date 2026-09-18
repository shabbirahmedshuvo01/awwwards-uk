import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutRecognitionProcess from '@/components/about/AboutRecognitionProcess';
import AboutEvaluationStandards from '@/components/about/AboutEvaluationStandards';
import AboutRecognitionTiers from '@/components/about/AboutRecognitionTiers';
import AboutRegionalRemit from '@/components/about/AboutRegionalRemit';
import AboutNominationGuidance from '@/components/about/AboutNominationGuidance';
import AboutCta from '@/components/about/AboutCta';

export const metadata: Metadata = {
  metadataBase: new URL('https://awwwards.co.uk'),
  title: 'About — Recognising British Creative Practice | aWWWards.co.uk',
  description:
    'An independent platform dedicated to discovering, showcasing, and recognising exceptional creative practices, independent studios, and talent across the United Kingdom.',
  openGraph: {
    title: 'About — Recognising British Creative Practice | aWWWards.co.uk',
    description:
      'An independent platform dedicated to discovering, showcasing, and recognising exceptional creative practices, independent studios, and talent across the United Kingdom.',
    url: 'https://awwwards.co.uk/about',
    siteName: 'aWWWards.co.uk',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Recognising British Creative Practice | aWWWards.co.uk',
    description:
      'An independent platform dedicated to discovering, showcasing, and recognising exceptional creative practices, independent studios, and talent across the United Kingdom.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#0070f3] selection:text-white pt-10 pb-24">
      <Container size="wide" className="space-y-16 sm:space-y-24 lg:space-y-28">
        {/* 1. Hero & Breadcrumb */}
        <AboutHero />

        {/* 2. Three Pillars: Discover, Showcase, Recognise */}
        <AboutMission />

        {/* 3. The 4-Step Recognition Process */}
        <AboutRecognitionProcess />

        {/* 4. Editorial Evaluation Standards */}
        <AboutEvaluationStandards />

        {/* 5. Accredited Recognition Tiers */}
        <AboutRecognitionTiers />

        {/* 6. UK Regional Creative Remit */}
        <AboutRegionalRemit />

        {/* 7. Guidance for Nominations */}
        <AboutNominationGuidance />

        {/* 8. Get Involved / CTA */}
        <AboutCta />
      </Container>
    </div>
  );
}

