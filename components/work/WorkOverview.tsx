import React from 'react';
import Link from 'next/link';
import { Work } from '@/data/works';

interface WorkOverviewProps {
  work: Work;
  className?: string;
}

export default function WorkOverview({
  work,
  className = '',
}: WorkOverviewProps) {
  return (
    <article className={`space-y-10 ${className}`}>
      {/* Editorial Header */}
      <div className="space-y-3 pb-6 border-b border-zinc-900">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          <span>CURATORIAL NARRATIVE</span>
          <span>•</span>
          <span className="text-[#38bdf8]">{work.recognition}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
          Project Evaluation & Context
        </h2>
      </div>

      {/* Narrative Prose */}
      <div className="space-y-6 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
        <p className="text-zinc-100 font-normal leading-relaxed">
          {work.description}
        </p>

        {work.summary && work.summary !== work.description && (
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed border-l-2 border-zinc-800 pl-4 italic">
            &ldquo;{work.summary}&rdquo;
          </p>
        )}
      </div>

      {/* Editorial Key Facts Columns (No heavy cards; clean editorial lines) */}
      <div className="pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
        <div className="space-y-1">
          <span className="text-zinc-600 block text-[10px] uppercase tracking-wider">
            Commission / Context
          </span>
          <span className="text-zinc-200">{work.clientOrContext}</span>
        </div>

        <div className="space-y-1">
          <span className="text-zinc-600 block text-[10px] uppercase tracking-wider">
            Discipline Field
          </span>
          <Link
            href={`/categories/${work.categorySlug}`}
            className="text-zinc-200 hover:text-[#38bdf8] transition-colors"
          >
            {work.category}
          </Link>
        </div>

        <div className="space-y-1">
          <span className="text-zinc-600 block text-[10px] uppercase tracking-wider">
            Origination Hub
          </span>
          <span className="text-zinc-200">{work.location}</span>
        </div>
      </div>

      {/* Catalog Tags */}
      {work.tags && work.tags.length > 0 && (
        <div className="pt-6 border-t border-zinc-900 space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
            INDEXED TAXONOMY
          </span>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-zinc-400 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1 rounded-full hover:border-zinc-700 hover:text-zinc-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
