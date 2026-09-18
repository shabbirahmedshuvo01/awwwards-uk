import React from 'react';
import Badge from '@/components/ui/Badge';
import { Work } from '@/data/works';

interface WorkRecognitionProps {
  work: Work;
}

export default function WorkRecognition({ work }: WorkRecognitionProps) {
  const isNominated = work.status === 'nominated';
  const isWinner = work.recognition === 'Category Winner';

  if (isNominated) {
    return (
      <section
        aria-label="Nomination Status"
        className="relative rounded-2xl border border-zinc-800/90 bg-[#0c0c10] p-8 sm:p-12 overflow-hidden shadow-2xl"
      >
        {/* Subtle background ambient gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Status Header */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#38bdf8] uppercase tracking-widest font-semibold">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3] animate-pulse" />
              <span>NOMINATION RECORD</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">UNDER REVIEW</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Under Editorial Review
            </h3>

            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
              This work is currently under curatorial evaluation for creative excellence in UK{' '}
              <span className="text-zinc-200">{work.category.toLowerCase()}</span>, originating from{' '}
              <span className="text-zinc-200">{work.location}</span>.
            </p>
          </div>

          {/* Right: Status Badges */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
            <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-semibold">
              Pending Evaluation
            </span>

            <div className="flex items-center gap-2">
              <Badge variant="dark" size="md" className="font-mono text-xs">
                Nominee
              </Badge>
              <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider px-2 py-1 rounded border border-zinc-800">
                UK NOMINATION
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Accreditation Moment"
      className="relative rounded-2xl border border-zinc-800/90 bg-[#0c0c10] p-8 sm:p-12 overflow-hidden shadow-2xl"
    >
      {/* Subtle background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left: Prestige Header & Category */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#38bdf8] uppercase tracking-widest font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
            <span>OFFICIAL RECOGNITION</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">EDITION {work.year}</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            {work.recognition}
          </h3>

          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Officially recognised in the national index for exceptional creative standards in British{' '}
            <span className="text-zinc-200">{work.category.toLowerCase()}</span>, originating from{' '}
            <span className="text-zinc-200">{work.location}</span>.
          </p>
        </div>

        {/* Right: Score & Tier Badges */}
        <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-4 shrink-0">
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-zinc-500 text-xs uppercase tracking-wider">Score</span>
            <span className="text-3xl sm:text-4xl font-serif text-white font-normal">
              {work.score}
            </span>
            <span className="text-zinc-600 text-xs font-mono">/ 10.0</span>
          </div>

          <div className="flex items-center gap-2">
            <Badge
              variant={isWinner ? 'accent' : 'dark'}
              size="md"
              className="font-mono text-xs"
            >
              {work.recognition}
            </Badge>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider px-2 py-1 rounded border border-zinc-800">
              UK ARCHIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

