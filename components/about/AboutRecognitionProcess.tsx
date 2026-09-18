import React from 'react';

const PROCESS_STEPS = [
  {
    step: '01',
    phase: 'Nomination',
    summary:
      'Creators, studios, or community members nominate work for consideration through our structured submission process.',
  },
  {
    step: '02',
    phase: 'Review & Curation',
    summary:
      'Submissions undergo editorial review evaluating creative quality, craft, conceptual execution, and discipline relevance.',
  },
  {
    step: '03',
    phase: 'Recognition',
    summary:
      'Works that demonstrate exceptional standards are assigned an accredited recognition tier reflecting their merit.',
  },
  {
    step: '04',
    phase: 'Showcase Archive',
    summary:
      'Recognised works are published within the showcase archive, connecting the project directly to its creator profile.',
  },
];

export default function AboutRecognitionProcess() {
  return (
    <section aria-label="How Recognition Works" className="space-y-8">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            THE PROCESS
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          CURATORIAL JOURNEY
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
          How recognition works.
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Our curatorial process is designed to be transparent, respectful, and focused purely on the merit of British creative practice.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((item) => (
          <div
            key={item.step}
            className="rounded-xl border border-zinc-800/80 bg-[#0c0c10] p-6 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#38bdf8] font-semibold">
                STEP {item.step}
              </span>
              <h3 className="font-serif text-xl text-white font-normal">
                {item.phase}
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed pt-3 border-t border-zinc-900">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
