import React from 'react';
import Link from 'next/link';
import { getAllWorks } from '@/data/works';

interface RegionalHub {
  city: string;
  focus: string;
  studioName: string;
  studioSlug: string;
}

const REGIONAL_HUBS: RegionalHub[] = [
  {
    city: 'London',
    focus: 'Fashion & Editorial Photography',
    studioName: 'North Studio',
    studioSlug: 'north-studio',
  },
  {
    city: 'Manchester',
    focus: 'Brutalist Architecture & Type',
    studioName: 'Atelier North',
    studioSlug: 'atelier-north',
  },
  {
    city: 'Edinburgh',
    focus: 'Tactile Identity & Spatial Design',
    studioName: 'Bluebird Bakery',
    studioSlug: 'bluebird-bakery',
  },
  {
    city: 'Glasgow',
    focus: 'Creative Code & Digital Art',
    studioName: 'Kroma Atelier',
    studioSlug: 'kroma-atelier',
  },
  {
    city: 'Bristol',
    focus: 'Digital Engineering & WebOS',
    studioName: 'Kinetic Engine',
    studioSlug: 'kinetic-engine',
  },
  {
    city: 'Birmingham',
    focus: 'Interactive UI & Type Systems',
    studioName: 'Northline Digital',
    studioSlug: 'northline-digital',
  },
  {
    city: 'St Ives',
    focus: 'Analog Landscapes & Craft',
    studioName: 'Studio Morven',
    studioSlug: 'studio-morven',
  },
  {
    city: 'Leeds',
    focus: 'Letterpress & Graphic Systems',
    studioName: 'Studio Folk',
    studioSlug: 'studio-folk',
  },
];

export default function UkCreativeLandscape() {
  const allWorks = getAllWorks();

  return (
    <section className="my-16 sm:my-24 pt-12 border-t border-zinc-900 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
            REGIONAL HUBS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            A creative landscape across the UK.
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
          Discover recognised work from studios, businesses and independent creators across London, Manchester, Edinburgh, Bristol, Birmingham and beyond.
        </p>
      </div>

      {/* Hubs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {REGIONAL_HUBS.map((hub) => {
          const worksInCity = allWorks.filter(
            (w) => w.city.toLowerCase() === hub.city.toLowerCase()
          );

          return (
            <div
              key={hub.city}
              className="p-5 rounded-xl border border-zinc-900 bg-[#09090c] hover:border-zinc-800 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
                  <span className="uppercase text-[10px] text-zinc-400 font-medium tracking-wider">
                    {hub.city}
                  </span>
                  <span className="text-[#38bdf8] text-[10px]">
                    {worksInCity.length} {worksInCity.length === 1 ? 'WORK' : 'WORKS'}
                  </span>
                </div>
                <p className="font-sans text-xs text-zinc-400 pt-1">
                  {hub.focus}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-900/80 font-mono text-[11px] flex items-center justify-between">
                <span className="text-zinc-500 text-[10px]">Studio:</span>
                <Link
                  href={`/profile/${hub.studioSlug}`}
                  className="text-zinc-300 hover:text-[#0070f3] transition-colors underline-offset-4 hover:underline"
                >
                  {hub.studioName}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

