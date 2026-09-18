import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NomineesHero() {
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
        <span className="text-zinc-300">Nominees</span>
      </nav>

      {/* Main Header Content */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3] animate-pulse" />
            <span>UK NOMINATIONS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 font-normal">UNDER REVIEW</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05]">
            Nominated work across the UK.
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
            Creative work and independent practices currently under editorial review for platform recognition.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0 pt-2 lg:pt-0">
          <Button
            href="/submit"
            variant="primary"
            size="md"
            className="font-mono text-xs tracking-wider uppercase font-semibold px-6 py-3 shadow-md shadow-blue-500/10"
          >
            Nominate Work
          </Button>
        </div>
      </div>
    </header>
  );
}

