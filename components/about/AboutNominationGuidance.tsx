import React from 'react';

const GUIDELINES = [
  {
    title: 'Accurate Attribution',
    summary:
      'Provide exact studio, designer, or collective attribution so recognized work links seamlessly to creator profiles.',
  },
  {
    title: 'Live or Documented Access',
    summary:
      'Ensure the submitted project URL points directly to an active digital experience, live platform, or verified case study.',
  },
  {
    title: 'Discipline Alignment',
    summary:
      'Classify the nomination under its primary creative discipline to ensure evaluation within its relevant field.',
  },
  {
    title: 'Context & Craft Rationale',
    summary:
      'Include a concise summary detailing the project intent, execution challenges, and craft nuances for the editorial review.',
  },
];

export default function AboutNominationGuidance() {
  return (
    <section aria-label="Nomination Guidance" className="space-y-8">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            SUBMISSION GUIDANCE
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          PREPARING A NOMINATION
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
          Guidance for submitters and studios.
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Nominations are open to creators, independent studios, and community members across Great Britain. Review these considerations before submitting work for editorial consideration.
        </p>
      </div>

      {/* Guidelines Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {GUIDELINES.map((item, idx) => (
          <div
            key={item.title}
            className="rounded-xl border border-zinc-800/80 bg-[#0c0c10] p-6 sm:p-7 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#38bdf8]">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                {item.title}
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

