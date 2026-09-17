import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { FEATURED_DISCOVERY_WORK } from '@/data/works';

export default function WinnersFeatured() {
  const work = FEATURED_DISCOVERY_WORK;

  return (
    <section className="space-y-4 my-10">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            FEATURED RECOGNITION
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          EDITION HONOUR
        </span>
      </div>

      {/* Hero Spotlight Card */}
      <div className="group relative w-full aspect-[16/10] sm:aspect-[21/9] min-h-[380px] sm:min-h-[480px] rounded-xl sm:rounded-2xl border border-zinc-800/90 bg-[#0c0c10] overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700">
        {/* Background Image Container */}
        <Link
          href={`/work/${work.slug}`}
          className="absolute inset-0 block"
          aria-label={`View ${work.title}`}
        >
          <Image
            src={work.imageUrl}
            alt={`${work.title} by ${work.creator}`}
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
        </Link>

        {/* Overlay Editorial Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 pointer-events-none">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pointer-events-auto">
            <Badge variant="accent" size="md" className="font-mono text-xs">
              {work.recognition}
            </Badge>
            <Link href={`/categories/${work.categorySlug}`}>
              <Badge variant="dark" size="md" className="font-mono text-xs hover:border-zinc-500 transition-colors">
                {work.category}
              </Badge>
            </Link>
            <Badge variant="rating" size="md" className="font-mono text-xs">
              ★ {work.score}
            </Badge>
            <span className="font-mono text-xs text-zinc-400 bg-black/60 px-3 py-1 rounded-full border border-white/10 hidden sm:inline-block">
              {work.location}
            </span>
          </div>

          {/* Bottom Narrative & CTAs */}
          <div className="space-y-4 max-w-2xl pointer-events-auto">
            <div className="space-y-2">
              <Link
                href={`/profile/${work.creatorSlug}`}
                className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#38bdf8] hover:underline block"
              >
                {work.creator}
              </Link>

              <Link href={`/work/${work.slug}`} className="group/title block">
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white group-hover/title:text-[#38bdf8] transition-colors leading-[1.08] tracking-tight">
                  Northern Light — Editorial Series
                </h2>
              </Link>
            </div>

            <p className="font-sans text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-3">
              {work.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href={`/work/${work.slug}`}
                variant="primary"
                size="md"
                className="font-mono text-xs uppercase tracking-wider font-semibold px-6 py-3"
              >
                View Case Study →
              </Button>

              <Button
                href={`/profile/${work.creatorSlug}`}
                variant="outline"
                size="md"
                className="font-mono text-xs uppercase tracking-wider font-medium px-5 py-3"
              >
                Creator Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

