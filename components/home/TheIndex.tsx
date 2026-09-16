'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { CATEGORY_PILLS, MOCK_WORKS } from '@/data/mock-works';

export default function TheIndex() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeSort, setActiveSort] = useState('ALL WORKS');

  const sortOptions = ['ALL WORKS', "CURATOR'S PICKS", 'BY SCORE', 'RECENTLY NOMINATED'];

  const mainItem = MOCK_WORKS[0]; // Obsidian Atelier
  const tallItem = MOCK_WORKS[1]; // Glasswork No. 7
  const architectureItem = MOCK_WORKS[2]; // Twilight Tailoring
  const signalItem = MOCK_WORKS[3]; // Signal Drift
  const apexItem = MOCK_WORKS[4]; // Apex Couture

  return (
    <section id="showcase" className="py-20 lg:py-28 border-b border-zinc-900 bg-black">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            The Index
          </h2>

          {/* Quick Filter Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] tracking-wider uppercase">
            {sortOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setActiveSort(opt)}
                className={`transition-colors cursor-pointer ${activeSort === opt ? 'text-[#0070f3] font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pill Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORY_PILLS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800/80 hover:border-zinc-700 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (Wide) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            {/* Card 1: Obsidian Atelier */}
            <div className="group relative aspect-16/10 w-full rounded-2xl border border-zinc-800 bg-[#0c0c10] overflow-hidden transition-all duration-300 hover:border-zinc-600">
              <div className="absolute inset-0">
                <Image
                  src={mainItem.imageUrl}
                  alt={mainItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <Badge variant="accent" size="sm">
                    {mainItem.recognition}
                  </Badge>
                  <Badge variant="rating" size="sm">
                    ★ {mainItem.score}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    {mainItem.title}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                    <span>{mainItem.creator}</span>
                    <span>•</span>
                    <span>{mainItem.location}</span>
                    <span>•</span>
                    <span>{mainItem.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Twilight Tailoring (Brutalist Architecture) */}
            <div className="group relative aspect-16/10 w-full rounded-2xl border border-zinc-800 bg-[#0c0c10] overflow-hidden transition-all duration-300 hover:border-zinc-600">
              <div className="absolute inset-0">
                <Image
                  src={architectureItem.imageUrl}
                  alt={architectureItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <Badge variant="dark" size="sm">
                    {architectureItem.recognition}
                  </Badge>
                  <Badge variant="rating" size="sm">
                    ★ {architectureItem.score}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    {architectureItem.title}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                    <span>{architectureItem.creator}</span>
                    <span>•</span>
                    <span>{architectureItem.location}</span>
                    <span>•</span>
                    <span>{architectureItem.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 2 Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 3: Signal Drift */}
              <div className="group relative aspect-4/3 rounded-2xl border border-zinc-800 bg-[#0c0c10] overflow-hidden transition-all duration-300 hover:border-zinc-600">
                <div className="absolute inset-0">
                  <Image
                    src={signalItem.imageUrl}
                    alt={signalItem.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <Badge variant="dark" size="sm">
                      {signalItem.recognition}
                    </Badge>
                    <Badge variant="rating" size="sm">
                      ★ {signalItem.score}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-white font-normal">
                      {signalItem.title}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                      <span>{signalItem.creator}</span>
                      <span>•</span>
                      <span>{signalItem.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Apex Couture */}
              <div className="group relative aspect-4/3 rounded-2xl border border-zinc-800 bg-[#0c0c10] overflow-hidden transition-all duration-300 hover:border-zinc-600">
                <div className="absolute inset-0">
                  <Image
                    src={apexItem.imageUrl}
                    alt={apexItem.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <Badge variant="accent" size="sm">
                      {apexItem.recognition}
                    </Badge>
                    <Badge variant="rating" size="sm">
                      ★ {apexItem.score}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-white font-normal">
                      {apexItem.title}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                      <span>{apexItem.creator}</span>
                      <span>•</span>
                      <span>{apexItem.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Tall Vertical Card: Glasswork No. 7) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="group relative w-full h-full min-h-125 lg:min-h-full rounded-2xl border border-zinc-800 bg-[#0c0c10] overflow-hidden transition-all duration-300 hover:border-zinc-600 flex flex-col justify-between">
              <div className="absolute inset-0">
                <Image
                  src={tallItem.imageUrl}
                  alt={tallItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <Badge variant="dark" size="sm">
                    {tallItem.recognition}
                  </Badge>
                  <Badge variant="rating" size="sm">
                    ★ {tallItem.score}
                  </Badge>
                </div>

                <div className="space-y-2 pt-48 sm:pt-64 lg:pt-96">
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                    {tallItem.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-sm line-clamp-2">
                    {tallItem.description}
                  </p>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 pt-1">
                    <span>{tallItem.creator}</span>
                    <span>•</span>
                    <span>{tallItem.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
