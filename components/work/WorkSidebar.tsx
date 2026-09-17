import React from 'react';
import Button from '@/components/ui/Button';
import { Work } from '@/data/works';

interface WorkSidebarProps {
  work: Work;
  className?: string;
}

export default function WorkSidebar({ work, className = '' }: WorkSidebarProps) {
  return (
    <div
      className={`space-y-6 p-6 rounded-xl border border-zinc-900 bg-[#0c0c10] h-fit font-mono text-xs ${className}`}
    >
      <h3 className="uppercase tracking-widest text-zinc-300 font-semibold border-b border-zinc-800 pb-3">
        Recognition Record
      </h3>
      <div className="space-y-4">
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">Status</span>
          <span className="text-white font-medium">{work.recognition}</span>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">Jury Rating</span>
          <span className="text-[#38bdf8] font-bold text-sm">★ {work.score} / 10</span>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">Context / Client</span>
          <span className="text-zinc-300">{work.clientOrContext}</span>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">
            Community Appreciation
          </span>
          <span className="text-zinc-300">
            {work.appreciationCount.toLocaleString()} votes
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800 space-y-2">
        <Button
          href="/discover"
          variant="outline"
          size="sm"
          className="w-full justify-center"
        >
          ← Back to Discover
        </Button>
        <Button
          href="/submit"
          variant="primary"
          size="sm"
          className="w-full justify-center"
        >
          Nominate Similar Work
        </Button>
      </div>
    </div>
  );
}

