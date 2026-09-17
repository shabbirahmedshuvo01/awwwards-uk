import React from 'react';
import Container from '@/components/ui/Container';

export default function DiscoverHero() {
  return (
    <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-10 border-b border-zinc-900 bg-black">
      <Container size="wide">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
              DISCOVER
            </span>
            <span className="text-zinc-700 font-mono text-xs">/</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              Curated British Showcase
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.05]">
            Discover remarkable work.
          </h1>

          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Explore exceptional creative work, businesses and talent recognised across the UK.
          </p>
        </div>
      </Container>
    </section>
  );
}

