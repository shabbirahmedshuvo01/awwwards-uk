import React from 'react';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <header className="space-y-6 pt-2 pb-4">
      {/* Navigation Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 font-mono text-xs text-zinc-500"
      >
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="text-zinc-700">/</span>
        <span className="text-zinc-300">About</span>
      </nav>

      {/* Hero Content */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3] animate-pulse" />
          <span>ABOUT AWWWARDS.CO.UK</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05]">
          Recognising creative work across the UK.
        </h1>

        <p className="font-sans text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed font-normal">
          An independent platform dedicated to discovering, showcasing, and recognising exceptional businesses, creators, and creative practices across the United Kingdom.
        </p>
      </div>
    </header>
  );
}

