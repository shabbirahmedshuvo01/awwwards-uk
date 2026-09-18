import React from 'react';
import Button from '@/components/ui/Button';

export default function AboutCta() {
  return (
    <section
      aria-label="Participate"
      className="mt-8 sm:mt-12 py-16 sm:py-20 border-t border-zinc-900 bg-linear-to-b from-black via-zinc-950/70 to-black relative overflow-hidden rounded-2xl"
    >
      {/* Subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f24_1px,transparent_1px)] bg-size-[24px_24px] opacity-35 pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6 px-4">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
          GET INVOLVED
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
          Help us recognise British creative talent.
        </h2>

        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
          Whether you are an established studio, independent creator, or enthusiastic observer, nominate exceptional UK work or explore our showcase archive.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/submit"
            variant="primary"
            size="lg"
            className="font-mono text-xs tracking-wider uppercase font-semibold px-8 py-3.5 shadow-lg shadow-blue-500/15"
          >
            Nominate a Talent
          </Button>

          <Button
            href="/discover"
            variant="outline"
            size="lg"
            className="font-mono text-xs tracking-wider uppercase font-medium px-7 py-3.5"
          >
            Explore Discover
          </Button>
        </div>
      </div>
    </section>
  );
}

