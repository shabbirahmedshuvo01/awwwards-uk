import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Work } from '@/data/works';
import Badge from '@/components/ui/Badge';

interface FeaturedDiscoveryProps {
  work: Work;
}

export default function FeaturedDiscovery({ work }: FeaturedDiscoveryProps) {
  return (
    <div className="relative mb-12 sm:mb-16">
      {/* Featured Header Pill */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3] animate-pulse" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold">
            SPOTLIGHT RECOGNITION
          </span>
        </div>
        <span className="font-mono text-[11px] text-zinc-500 uppercase">
          CURATED SELECTION
        </span>
      </div>

      {/* Large Featured Card */}
      <div className="group relative w-full aspect-video sm:aspect-21/9 min-h-95 sm:min-h-115 rounded-xl sm:rounded-2xl border border-zinc-800/90 bg-[#0c0c10] overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700">
        {/* Background Image */}
        <Link href={`/work/${work.slug}`} className="absolute inset-0 block">
          <Image
            src={work.imageUrl}
            alt={`${work.title} by ${work.creator}`}
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent opacity-95" />
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/20 to-transparent" />
        </Link>

        {/* Card Overlay Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 pointer-events-none">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pointer-events-auto">
            <Link href={`/categories/${work.categorySlug}`}>
              <Badge variant="accent" size="md" className="font-mono text-[11px] font-semibold hover:bg-blue-600">
                {work.category}
              </Badge>
            </Link>
            <Badge variant="dark" size="md" className="font-mono text-[11px]">
              {work.recognition}
            </Badge>
            <Badge variant="rating" size="md">
              ★ {work.score}
            </Badge>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-10 pointer-events-auto">
            <div className="max-w-2xl space-y-2">
              <Link href={`/work/${work.slug}`} className="group/title inline-block">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight group-hover/title:text-zinc-200 transition-colors">
                  {work.title}
                </h2>
              </Link>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xl line-clamp-2">
                {work.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                <Link
                  href={`/profile/${work.creatorSlug}`}
                  className="text-white hover:text-[#38bdf8] font-medium uppercase tracking-wider transition-colors underline-offset-4 hover:underline"
                >
                  {work.creator}
                </Link>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">{work.creatorRole}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">{work.location}</span>
              </div>
            </div>

            {/* Action */}
            <div className="shrink-0">
              <Link
                href={`/work/${work.slug}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-[#0070f3] hover:text-[#38bdf8] transition-colors"
              >
                <span>VIEW CASE STUDY</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

