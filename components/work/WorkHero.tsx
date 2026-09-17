import React from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { Work } from '@/data/works';

interface WorkHeroProps {
  work: Work;
}

export default function WorkHero({ work }: WorkHeroProps) {
  const isTopTier =
    work.recognition === 'Category Winner' ||
    work.recognition === "Editor's Selection";

  return (
    <header className="space-y-6 max-w-4xl">
      {/* Navigation Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center flex-wrap gap-2 font-mono text-xs text-zinc-500"
      >
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="text-zinc-700">/</span>
        <Link href="/discover" className="hover:text-white transition-colors">
          Discover
        </Link>
        <span className="text-zinc-700">/</span>
        <Link
          href={`/categories/${work.categorySlug}`}
          className="hover:text-[#38bdf8] transition-colors"
        >
          {work.category}
        </Link>
        <span className="text-zinc-700">/</span>
        <span className="text-zinc-300 truncate max-w-[200px] sm:max-w-none">
          {work.title}
        </span>
      </nav>

      {/* Recognition Status Eyebrow & Badges */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 pr-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3] animate-pulse" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold">
            {work.recognition}
          </span>
        </div>

        <Link href={`/categories/${work.categorySlug}`}>
          <Badge
            variant={isTopTier ? 'accent' : 'dark'}
            size="sm"
            className="hover:opacity-90 transition-opacity font-mono text-[10px]"
          >
            {work.category}
          </Badge>
        </Link>

        <Badge variant="rating" size="sm" className="font-mono text-[10px]">
          ★ {work.score}
        </Badge>

        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
          Edition {work.year}
        </span>
      </div>

      {/* Primary Editorial Title */}
      <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.04]">
        {work.title}
      </h1>

      {/* Short Project Introduction */}
      {work.summary && (
        <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
          {work.summary}
        </p>
      )}

      {/* Key Creator / Context Line */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs text-zinc-400 pt-4 border-t border-zinc-900">
        <div>
          <span className="text-zinc-600 block text-[10px] uppercase tracking-wider mb-0.5">
            CREATOR / STUDIO
          </span>
          <Link
            href={`/profile/${work.creatorSlug}`}
            className="text-white hover:text-[#38bdf8] font-medium transition-colors underline-offset-4 hover:underline"
          >
            {work.creator}
          </Link>
        </div>

        <span className="text-zinc-800 hidden sm:inline">|</span>

        <div>
          <span className="text-zinc-600 block text-[10px] uppercase tracking-wider mb-0.5">
            DISCIPLINE
          </span>
          <span className="text-zinc-300">{work.creatorRole}</span>
        </div>

        <span className="text-zinc-800 hidden sm:inline">|</span>

        <div>
          <span className="text-zinc-600 block text-[10px] uppercase tracking-wider mb-0.5">
            REGIONAL HUB
          </span>
          <span className="text-zinc-300">{work.location}</span>
        </div>
      </div>
    </header>
  );
}
