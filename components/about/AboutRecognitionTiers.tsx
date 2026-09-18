import React from 'react';
import Badge from '@/components/ui/Badge';
import { RecognitionTier } from '@/data/works';

interface TierDetail {
  tier: RecognitionTier;
  badgeVariant: 'accent' | 'dark' | 'outline';
  summary: string;
  context: string;
}

const TIER_DETAILS: TierDetail[] = [
  {
    tier: 'Category Winner',
    badgeVariant: 'accent',
    summary: 'Recognised as a standout achievement within its creative category.',
    context: 'Conferred upon works that demonstrate exceptional creative leadership in their specific discipline.',
  },
  {
    tier: "Editor's Selection",
    badgeVariant: 'accent',
    summary: 'Curated editorial selection chosen for notable creative merit.',
    context: 'Recognises projects with a distinctive creative voice, thoughtful direction, and compelling execution.',
  },
  {
    tier: 'Featured',
    badgeVariant: 'dark',
    summary: 'Included in the catalog showcase as an exemplar of British creative work.',
    context: 'Awarded to works meeting high standards of craft, clarity, and discipline relevance across the UK.',
  },
  {
    tier: 'Honorable Mention',
    badgeVariant: 'dark',
    summary: 'Acknowledgment of commendable craft and creative execution.',
    context: 'Recognises promising explorations, regional talent, and projects showing strong dedication to technique.',
  },
];

export default function AboutRecognitionTiers() {
  return (
    <section aria-label="Recognition Tiers" className="space-y-8">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            RECOGNITION LEVELS
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          ACCREDITED TIERS
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
          The recognition tiers.
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Works selected for inclusion in the aWWWards.co.uk showcase are accredited across four established recognition tiers.
        </p>
      </div>

      {/* 4 Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TIER_DETAILS.map((item) => (
          <div
            key={item.tier}
            className="rounded-xl border border-zinc-800/80 bg-[#0c0c10] p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge
                  variant={item.badgeVariant === 'accent' ? 'accent' : 'dark'}
                  size="sm"
                  className="font-mono text-xs"
                >
                  {item.tier}
                </Badge>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                  UK ARCHIVE
                </span>
              </div>

              <h3 className="font-serif text-2xl text-white font-normal">
                {item.tier}
              </h3>

              <p className="font-sans text-sm text-zinc-300 leading-relaxed font-normal">
                {item.summary}
              </p>
            </div>

            <p className="font-sans text-xs text-zinc-500 leading-relaxed pt-3 border-t border-zinc-900">
              {item.context}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
