import React from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { Work } from '@/data/works';

interface ProfileRecognitionProps {
  works: Work[];
}

export default function ProfileRecognition({ works }: ProfileRecognitionProps) {
  // Only display if works exist with recognition
  if (!works || works.length === 0) return null;

  return (
    <section
      aria-label="Studio Recognition & Accreditations"
      className="p-8 sm:p-10 rounded-2xl border border-zinc-800/90 bg-[#0c0c10] space-y-6 shadow-xl"
    >
      <div className="space-y-2 pb-5 border-b border-zinc-900">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          <span>ACCREDITATION & HONOURS</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
          Platform Distinctions
        </h3>
        <p className="font-sans text-xs sm:text-sm text-zinc-400">
          Official recognition tiers awarded to creative projects authored by this practice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => {
          const isTopTier =
            work.recognition === 'Category Winner' ||
            work.recognition === "Editor's Selection";

          return (
            <div
              key={work.id}
              className="p-5 rounded-xl border border-zinc-800/80 bg-black/40 space-y-3 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge
                    variant={isTopTier ? 'accent' : 'dark'}
                    size="sm"
                    className="font-mono text-[10px]"
                  >
                    {work.recognition}
                  </Badge>
                  <span className="font-mono text-[10px] text-zinc-500">
                    EDITION {work.year}
                  </span>
                </div>

                <Link
                  href={`/work/${work.slug}`}
                  className="group block"
                >
                  <h4 className="font-serif text-lg text-zinc-200 group-hover:text-[#38bdf8] transition-colors leading-snug">
                    {work.title}
                  </h4>
                </Link>
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 pt-3 border-t border-zinc-900">
                <span>{work.category}</span>
                <span className="text-zinc-400">★ {work.score}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

