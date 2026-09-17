import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  category: string;
  slug: string;
  index: number;
  count: number;
}

export default function CategoryCard({
  category,
  slug,
  index,
  count,
}: CategoryCardProps) {
  const indexStr = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/categories/${slug}`}
      className="group p-8 rounded-xl border border-zinc-900 bg-[#0c0c10] hover:border-zinc-700 transition-all flex flex-col justify-between min-h-50"
    >
      <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
        <span>{indexStr}</span>
        <span className="text-[#38bdf8]">{count} WORKS</span>
      </div>

      <div className="space-y-2 pt-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#38bdf8] transition-colors">
          {category}
        </h2>
        <p className="font-mono text-xs text-zinc-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Explore Discipline →
        </p>
      </div>
    </Link>
  );
}

