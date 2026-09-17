import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { Work } from '@/data/works';

interface WinnerCardProps {
  work: Work;
}

export default function WinnerCard({ work }: WinnerCardProps) {
  const isTopTier =
    work.recognition === 'Category Winner' ||
    work.recognition === "Editor's Selection";

  return (
    <article className="group flex flex-col rounded-xl border border-zinc-800/80 bg-[#0c0c10] overflow-hidden transition-all duration-300 hover:border-zinc-600 shadow-sm">
      {/* Visual Media Container */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-[#070709]">
        <Link
          href={`/work/${work.slug}`}
          className="relative block h-full w-full"
          aria-label={`View ${work.title}`}
        >
          <Image
            src={work.imageUrl}
            alt={`${work.title} by ${work.creator}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
        </Link>

        {/* Floating Top Badges */}
        <div className="absolute left-3.5 top-3.5 right-3.5 flex items-center justify-between gap-2 z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <Link href={`/categories/${work.categorySlug}`}>
              <Badge
                variant={isTopTier ? 'accent' : 'dark'}
                size="sm"
                className="text-[10px]"
              >
                {work.category}
              </Badge>
            </Link>
          </div>

          <Badge variant="rating" size="sm" className="pointer-events-auto text-[10px]">
            ★ {work.score}
          </Badge>
        </div>

        {/* Recognition Tier Floating Banner */}
        <div className="absolute left-3.5 bottom-3.5 z-10 pointer-events-none">
          <span
            className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md border ${isTopTier
              ? 'bg-black/80 border-[#0070f3]/50 text-[#38bdf8] font-semibold'
              : 'bg-black/65 border-white/10 text-zinc-300'
              }`}
          >
            {work.recognition}
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 bg-[#0c0c10]">
        <div className="space-y-2">
          <Link href={`/work/${work.slug}`} className="group/title block">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover/title:text-[#38bdf8] transition-colors leading-tight">
              {work.title}
            </h3>
          </Link>
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
            {work.summary}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-3 border-t border-zinc-900/80 flex items-center justify-between font-mono text-[11px] text-zinc-400">
          <div className="flex flex-col">
            <Link
              href={`/profile/${work.creatorSlug}`}
              className="text-zinc-200 hover:text-[#0070f3] transition-colors uppercase tracking-wider font-medium truncate max-w-42.5 sm:max-w-50"
            >
              {work.creator}
            </Link>
            <span className="text-zinc-500 text-[10px]">{work.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-[10px] hidden sm:inline-block">
              {work.appreciationCount.toLocaleString()} votes
            </span>
            <Link
              href={`/work/${work.slug}`}
              className="text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all text-sm font-sans"
              aria-label={`View case study for ${work.title}`}
            >
              →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

