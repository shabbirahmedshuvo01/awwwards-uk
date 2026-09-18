import React from 'react';

const REGIONAL_HUBS = [
  { city: 'London', focus: 'Fashion, Editorial & Brand Architecture' },
  { city: 'Manchester', focus: 'Industrial Heritage, Type & Acoustic Engineering' },
  { city: 'Edinburgh', focus: 'Spatial Design & Civic Stone Topography' },
  { city: 'Glasgow', focus: 'Computational Art & Brutalist Photography' },
  { city: 'Bristol', focus: 'Digital Engineering & Interactive Web Systems' },
  { city: 'Birmingham', focus: 'Digital Product Design & Type Foundries' },
  { city: 'Leeds', focus: 'Kinetic Motion Typography & Artisan Culinary Craft' },
  { city: 'St Ives', focus: 'Wood-fired Ceramics & Coastal Craft' },
];

export default function AboutRegionalRemit() {
  return (
    <section aria-label="UK Creative Focus" className="space-y-8">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            REGIONAL REMIT
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          GREAT BRITAIN
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
          A truly UK-wide creative focus.
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          British creative excellence is not confined to a single city. Our catalog actively documents independent studios and creators spanning historic manufacturing centers, cultural capitals, and coastal workshops across the UK.
        </p>
      </div>

      {/* Regional Hubs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 font-mono text-xs">
        {REGIONAL_HUBS.map((hub) => (
          <div
            key={hub.city}
            className="p-5 rounded-xl border border-zinc-800/80 bg-[#0c0c10] space-y-2 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg text-white font-normal">
                {hub.city}
              </h3>
              <span className="text-zinc-600 text-[10px]">UK</span>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              {hub.focus}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
