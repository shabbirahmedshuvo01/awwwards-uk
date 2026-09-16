import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20">
      <Container size="wide">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-[11px] tracking-widest text-[#38bdf8] uppercase font-semibold">
            CURATED UK & INTERNATIONAL CREATIVE EXCELLENCE
          </span>
        </div>

        {/* Two-column Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
              Where the world&apos;s finest creative work is found, judged and remembered.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md">
              An independent digital stage celebrating exceptional British craft, spatial innovation and visionary studios.
            </p>
          </div>
        </div>

        {/* Massive Featured Hero Card (Obsidian Atelier) */}
        <div className="group relative w-full aspect-video sm:aspect-21/9 min-h-95 sm:min-h-115 lg:min-h-135 rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#0a0a0e] overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700">
          {/* Background Liquid Chrome Visual */}
          <div className="absolute inset-0">
            <Image
              src="/images/home/hero-feature.jpg"
              alt="Obsidian Atelier by Studio Bastion"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Subtle cinematic gradient vignette for text legibility */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Card Overlay Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent" size="md" className="font-mono text-[11px] font-semibold">
                PROJECT OF THE DAY
              </Badge>
              <Badge variant="dark" size="md" className="font-mono text-[11px]">
                IDENTITY & PACKAGING
              </Badge>
            </div>

            {/* Bottom Meta & Details */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-12">
              <div className="max-w-2xl space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                  Obsidian Atelier
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed line-clamp-2 max-w-xl">
                  A non-Euclidean kinetic identity system for an experimental fragrance house in Mayfair.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs text-zinc-400">
                  <span className="text-white font-medium">Studio Bastion</span>
                  <span>•</span>
                  <span>London, UK</span>
                  <span>•</span>
                  <span className="text-[#38bdf8]">Score: 8.84 / 10</span>
                </div>
              </div>

              {/* View Case Study Link */}
              <div className="shrink-0">
                <Link
                  href="/#showcase"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-[#0070f3] hover:text-[#38bdf8] transition-colors group-hover:translate-x-1"
                >
                  <span>VIEW CASE STUDY</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}