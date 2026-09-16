import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { REGIONAL_HUBS, FEATURED_STUDIOS } from '@/data/mock-works';

export default function RegionalHubs() {
  return (
    <section id="directory" className="py-20 lg:py-28 border-b border-zinc-900 bg-black">
      <Container size="wide">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-[11px] tracking-widest text-[#38bdf8] uppercase font-semibold">
            REGIONAL DIRECTORY & HUBS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Description + 2x2 Hubs */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Premier UK digital talent, sitting alongside the world.
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
                From Mayfair studios shaping global fashion houses to Manchester web collectives crafting spatial audio, we curate and archive the most forward-thinking work across the British Isles.
              </p>
            </div>

            {/* 2x2 Grid of UK Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
              {REGIONAL_HUBS.map((hub) => (
                <div key={hub.city} className="space-y-1.5 p-4 rounded-xl border border-zinc-900 bg-zinc-950/60 hover:border-zinc-800 transition-colors">
                  <h3 className="font-serif text-xl font-normal text-white">
                    {hub.city}
                  </h3>
                  <div className="font-mono text-xs font-medium text-[#0070f3]">
                    {hub.count}
                  </div>
                  <p className="font-mono text-[11px] text-zinc-500 leading-normal pt-1">
                    {hub.neighborhoods}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Studio List with Thumbnails */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-zinc-900 border-y border-zinc-900">
            {FEATURED_STUDIOS.map((studio) => (
              <div
                key={studio.id}
                className="group py-5 flex items-center justify-between gap-4 transition-colors hover:bg-zinc-950/80 px-2 rounded-lg"
              >
                {/* Thumbnail + Details */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
                    <Image
                      src={studio.imageUrl}
                      alt={studio.name}
                      fill
                      sizes="64px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base sm:text-lg text-white font-normal group-hover:text-[#38bdf8] transition-colors">
                      {studio.name}
                    </h4>
                    <p className="font-mono text-[10px] sm:text-[11px] text-zinc-400 tracking-wider uppercase">
                      {studio.discipline} • {studio.location}
                    </p>
                  </div>
                </div>

                {/* Link */}
                <Link
                  href={`/#studio-${studio.slug}`}
                  className="font-mono text-[11px] tracking-wider uppercase text-zinc-500 hover:text-white group-hover:text-white transition-colors shrink-0"
                >
                  <span className="hidden sm:inline">STUDIO PROFILE </span>→
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

