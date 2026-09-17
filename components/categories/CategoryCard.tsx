import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  category: string;
  slug: string;
  index: number;
  count: number;
  description: string;
  imageUrl?: string;
}

export default function CategoryCard({
  category,
  slug,
  index,
  count,
  description,
  imageUrl,
}: CategoryCardProps) {
  const indexStr = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/categories/${slug}`}
      className="group flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-[#0c0c10] overflow-hidden hover:border-zinc-600 transition-all duration-300 shadow-sm"
    >
      {/* Visual Header / Representative Image */}
      {imageUrl && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#070709]">
          <div className="relative block h-full w-full">
            <Image
              src={imageUrl}
              alt={`${category} discipline`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
          </div>

          {/* Floating Top Header Badges */}
          <div className="absolute left-4 top-4 right-4 flex items-center justify-between font-mono text-xs z-10 pointer-events-none">
            <span className="font-mono text-[11px] text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
              {indexStr}
            </span>
            <span className="text-[#38bdf8] font-mono text-[11px] bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#0070f3]/30 font-medium">
              {count} {count === 1 ? 'WORK' : 'WORKS'}
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
        <div className="space-y-2.5">
          {!imageUrl && (
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 pb-2">
              <span>{indexStr}</span>
              <span className="text-[#38bdf8]">{count} {count === 1 ? 'WORK' : 'WORKS'}</span>
            </div>
          )}

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#38bdf8] transition-colors leading-tight">
            {category}
          </h2>

          <p className="font-sans text-xs text-zinc-400 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Footer Link Affordance */}
        <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between font-mono text-xs text-zinc-500">
          <span className="uppercase text-[11px] tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
            Explore Discipline
          </span>
          <span className="text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all text-sm font-sans">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
