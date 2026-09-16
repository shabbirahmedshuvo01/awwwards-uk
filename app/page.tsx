import React from 'react';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import TheIndex from '@/components/home/TheIndex';
import RegionalHubs from '@/components/home/RegionalHubs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#0070f3] selection:text-white">
      <Hero />
      <StatsBar />
      <TheIndex />
      <RegionalHubs />
    </div>
  );
}
