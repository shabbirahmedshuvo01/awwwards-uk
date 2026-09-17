import React from 'react';
import { Work } from '@/data/works';

interface WorkOverviewProps {
  work: Work;
  className?: string;
}

export default function WorkOverview({ work, className = '' }: WorkOverviewProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
        Curator’s Evaluation & Overview
      </h2>
      <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
        {work.description}
      </p>
      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
        {work.summary}
      </p>

      {/* Tags */}
      <div className="pt-4 space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block">
          Index Tags
        </span>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

