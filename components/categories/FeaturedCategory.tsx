import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CATEGORY_DETAILS } from '@/data/categories';
import { getWorksByCategory } from '@/data/works';

export default function FeaturedCategory() {
  const photoWorks = getWorksByCategory('photography');
  const details = CATEGORY_DETAILS['Photography'];

  return (
    <section className="my-8 sm:my-10 space-y-4">
      {/* Section Subhead */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold text-[11px]">
            FEATURED DISCIPLINE
          </span>
        </div>
        <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
          CURATED SPOTLIGHT
        </span>
      </div>

      {/* Cinematic Banner Card */}
      <div className="group relative w-full aspect-16/10 sm:aspect-21/9 min-h-95 sm:min-h-115 rounded-xl sm:rounded-2xl border border-zinc-800/90 bg-[#0c0c10] overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700">
        {/* Background Visual Container */}
        <Link
          href="/categories/photography"
          className="relative block h-full w-full"
          aria-label="Explore Photography discipline"
        >
          <Image
            src="/images/home/work-2.jpg"
            alt="Photography discipline showcase"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-95" />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/30 to-transparent" />
        </Link>

        {/* Overlay Editorial Content */}
        <div className="absolute inset-0 z-10 h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 pointer-events-none">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pointer-events-auto">
            <Badge variant="accent" size="md" className="font-mono text-xs">
              01 · DISCIPLINE
            </Badge>
            <Badge variant="dark" size="md" className="font-mono text-xs">
              {photoWorks.length} RECOGNISED ENTRIES
            </Badge>
            <span className="font-mono text-xs text-zinc-400 bg-black/60 px-3 py-1 rounded-full border border-white/10 hidden sm:inline-block">
              London & Cornwall Archives
            </span>
          </div>

          {/* Bottom Narrative & CTAs */}
          <div className="space-y-4 max-w-2xl pointer-events-auto">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8] block font-medium">
                DISCIPLINE PROFILE
              </span>
              <Link href="/categories/photography" className="group/title block">
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white group-hover/title:text-[#38bdf8] transition-colors leading-[1.08] tracking-tight">
                  Photography & Direction
                </h2>
              </Link>
            </div>

            <p className="font-sans text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-3">
              {details.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/categories/photography"
                variant="primary"
                size="md"
                className="font-mono text-xs uppercase tracking-wider font-semibold px-6 py-3"
              >
                Explore Photography Archive →
              </Button>
              <Button
                href="/discover"
                variant="outline"
                size="md"
                className="font-mono text-xs uppercase tracking-wider font-medium px-5 py-3"
              >
                All Showcase Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

