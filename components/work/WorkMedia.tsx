import React from 'react';
import Image from 'next/image';
import { Work } from '@/data/works';

interface WorkMediaProps {
  work: Work;
}

export default function WorkMedia({ work }: WorkMediaProps) {
  return (
    <section aria-label="Project Visual Gallery" className="space-y-3">
      {/* Primary Cinematic Showcase Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] min-h-[300px] sm:min-h-[460px] lg:min-h-[540px] rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#070709] shadow-2xl">
        <Image
          src={work.imageUrl}
          alt={`${work.title} showcase by ${work.creator}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 95vw, 1440px"
          className="object-cover object-center transition-transform duration-700 ease-out"
        />
        {/* Subtle bottom gradient to enhance depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Subtle overlay watermark info in corner */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-none z-10 hidden sm:block">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {work.category} • {work.year}
          </span>
        </div>
      </div>

      {/* Editorial Caption Bar */}
      <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500 px-1 pt-1">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">Fig. 01</span>
          <span className="text-zinc-700">—</span>
          <span>Primary visual documentation: {work.title}</span>
        </div>
        <span className="text-zinc-600 hidden sm:inline uppercase tracking-wider text-[10px]">
          Curated Archive • {work.location}
        </span>
      </div>
    </section>
  );
}
