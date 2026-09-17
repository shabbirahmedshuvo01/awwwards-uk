import React from 'react';
import Link from 'next/link';

export default function WinnersHero() {
  return (
    <div className="space-y-6">
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

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
          HONOURS & COMMENDATIONS
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight">
          Curated Winners
        </h1>
        <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
          Selected by our rotating jury of 40 UK and international practitioners. Work that defines the contemporary creative standard.
        </p>
      </div>
    </div>
  );
}

