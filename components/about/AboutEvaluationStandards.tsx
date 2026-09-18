import React from 'react';

const EVALUATION_PRINCIPLES = [
  {
    title: 'Quality of Creative Work',
    subtitle: 'Overall Excellence',
    description:
      'We evaluate projects on their holistic quality, artistic depth, and the intentionality behind every decision.',
  },
  {
    title: 'Craft & Execution',
    subtitle: 'Technical Precision',
    description:
      'We look for meticulous attention to detail, whether reflected in typographic nuance, architectural materiality, or responsive engineering.',
  },
  {
    title: 'Originality & Direction',
    subtitle: 'Distinctive Perspective',
    description:
      'We celebrate authentic creative vision that demonstrates fresh thinking and avoids derivative or generic design conventions.',
  },
  {
    title: 'Overall Presentation',
    subtitle: 'Clarity & Delivery',
    description:
      'We consider how coherently the work conveys its intent, context, and aesthetic narrative to its audience.',
  },
  {
    title: 'Discipline Relevance',
    subtitle: 'Sector Meaning',
    description:
      'We assess how meaningfully the project pushes boundaries and represents excellence within its designated creative category.',
  },
];

export default function AboutEvaluationStandards() {
  return (
    <section aria-label="Evaluation Standards" className="space-y-8">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            EVALUATION PRINCIPLES
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          EDITORIAL BENCHMARKS
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
          What we look for.
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Our evaluation standards are guided by editorial principles of craft, originality, and execution rather than rigid algorithms or mechanical formulas.
        </p>
      </div>

      {/* 5 Principles in an elegant editorial grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVALUATION_PRINCIPLES.map((principle, index) => (
          <div
            key={principle.title}
            className={`rounded-xl border border-zinc-800/80 bg-[#0c0c10] p-6 sm:p-7 space-y-3 flex flex-col justify-between ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
          >
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#38bdf8] font-semibold">
                {principle.subtitle}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                {principle.title}
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed pt-3 border-t border-zinc-900">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

