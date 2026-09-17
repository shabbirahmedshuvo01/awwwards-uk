import React from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { Work } from '@/data/works';

interface WorkHeroProps {
  work: Work;
}

export default function WorkHero({ work }: WorkHeroProps) {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Navigation Breadcrumbs */}
      <nav className="flex items-center gap-2 font-mono text-xs text-zinc-500">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/discover" className="hover:text-white transition-colors">
          Discover
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${work.categorySlug}`}
          className="hover:text-[#38bdf8] transition-colors"
        >
          {work.category}
        </Link>
        <span>/</span>
        <span className="text-zinc-300 truncate max-w-[200px] sm:max-w-none">
          {work.title}
        </span>
      </nav>

      {/* Badges & Meta */}
      <div className="flex flex-wrap items-center gap-3">
        <Link href={`/categories/${work.categorySlug}`}>
          <Badge variant="accent" size="md">
            {work.category}
          </Badge>
        </Link>
        <Badge variant="dark" size="md">
          {work.recognition}
        </Badge>
        <Badge variant="rating" size="md">
          ★ {work.score}
        </Badge>
        <span className="font-mono text-xs text-zinc-500">Edition {work.year}</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.04]">
        {work.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-400 pt-2 border-t border-zinc-900">
        <div>
          <span className="text-zinc-600 block text-[10px] uppercase">CREATOR / STUDIO</span>
          <Link
            href={`/profile/${work.creatorSlug}`}
            className="text-white hover:text-[#0070f3] font-medium transition-colors underline-offset-4 hover:underline"
          >
            {work.creator}
          </Link>
        </div>
        <span className="text-zinc-700">|</span>
        <div>
          <span className="text-zinc-600 block text-[10px] uppercase">DISCIPLINE</span>
          <span className="text-zinc-300">{work.creatorRole}</span>
        </div>
        <span className="text-zinc-700">|</span>
        <div>
          <span className="text-zinc-600 block text-[10px] uppercase">REGIONAL HUB</span>
          <span className="text-zinc-300">{work.location}</span>
        </div>
      </div>
    </div>
  );
}

