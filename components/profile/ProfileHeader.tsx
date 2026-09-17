import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Work } from '@/data/works';

interface ProfileHeaderProps {
  studio: Work;
  worksCount: number;
}

export default function ProfileHeader({ studio, worksCount }: ProfileHeaderProps) {
  return (
    <div className="space-y-12">
      {/* Navigation Breadcrumbs */}
      <nav className="flex items-center gap-2 font-mono text-xs text-zinc-500">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/discover" className="hover:text-white transition-colors">
          Discover
        </Link>
        <span>/</span>
        <span className="text-zinc-300">Creator Profile</span>
      </nav>

      {/* Profile Banner */}
      <div className="p-8 sm:p-12 rounded-2xl border border-zinc-900 bg-[#0c0c10] flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-zinc-800 text-white font-mono text-2xl font-bold flex items-center justify-center border border-zinc-700 shadow-lg">
            {studio.creator.slice(0, 2).toUpperCase()}
          </div>
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#38bdf8] font-semibold">
              RECOGNIZED UK CREATOR / STUDIO
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              {studio.creator}
            </h1>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400">
              <span>{studio.creatorRole}</span>
              <span>•</span>
              <span>{studio.location}</span>
              <span>•</span>
              <span className="text-zinc-300">{worksCount} Showcase Entries</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button href="/discover" variant="outline" size="sm">
            ← Discover More
          </Button>
          <Button href="/submit" variant="primary" size="sm">
            Nominate
          </Button>
        </div>
      </div>
    </div>
  );
}

