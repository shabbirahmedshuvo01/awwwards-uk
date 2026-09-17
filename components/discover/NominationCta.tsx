import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NominationCta() {
  return (
    <section className="mt-20 sm:mt-28 py-16 sm:py-20 border-t border-zinc-900 bg-linear-to-b from-black via-zinc-950/60 to-black relative overflow-hidden">
      {/* Background subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f24_1px,transparent_1px)] bg-size-[24px_24px] opacity-35 pointer-events-none" />

      <Container size="wide" className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
          NOMINATE FOR 2026
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
          Think your work deserves recognition?
        </h2>

        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
          Nominate a remarkable business, creator or project for recognition across our rotating jury and UK archive.
        </p>

        <div className="pt-3">
          <Button
            href="/submit"
            variant="primary"
            size="lg"
            className="font-mono text-xs tracking-wider uppercase font-semibold px-8 py-3.5 shadow-lg shadow-blue-500/15"
          >
            Nominate a Talent →
          </Button>
        </div>
      </Container>
    </section>
  );
}

