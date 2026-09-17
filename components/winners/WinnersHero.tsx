import React from 'react';
import Link from 'next/link';

export default function WinnersHero() {
  return (
    <div className="space-y-6 pt-2 pb-4">
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
        <span className="text-zinc-300">Winners</span>
      </nav>

      {/* Header Content */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
            RECOGNITION
          </span>
          <span className="text-zinc-700 font-mono text-xs">•</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
            2026 EDITION · UK-WIDE RECOGNITION
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.06]">
          Recognising work that stands apart.
        </h1>

        <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl">
          Explore exceptional work and talent recognised through the aWWWards.co.uk editorial selection.
        </p>
      </div>
    </div>
  );
}
