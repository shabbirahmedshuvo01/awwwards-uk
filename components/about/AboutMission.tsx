import React from 'react';

const MISSION_PILLARS = [
  {
    index: '01',
    title: 'Discover',
    tagline: 'Surfacing exceptional talent',
    description:
      'We search across Great Britain to uncover remarkable studios, independent creators, and visionary projects across diverse creative fields.',
  },
  {
    index: '02',
    title: 'Showcase',
    tagline: 'A cinematic digital stage',
    description:
      'We present recognized works with generous editorial typography, spacious presentation, and visual clarity that honors the craft of each creator.',
  },
  {
    index: '03',
    title: 'Recognise',
    tagline: 'Meaningful distinction',
    description:
      'We acknowledge outstanding creative work through curated recognition tiers, connecting projects directly to the studios and businesses behind them.',
  },
];

export default function AboutMission() {
  return (
    <section aria-label="Our Purpose" className="space-y-8">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            THE PURPOSE
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          CORE REMIT
        </span>
      </div>

      {/* 3 Editorial Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {MISSION_PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-xl border border-zinc-800/80 bg-[#0c0c10] p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs text-zinc-500 block">
                {pillar.index}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {pillar.title}
              </h2>
              <p className="font-mono text-xs text-[#38bdf8]">
                {pillar.tagline}
              </p>
            </div>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed pt-2 border-t border-zinc-900">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

