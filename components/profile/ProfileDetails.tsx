import React from 'react';
import Link from 'next/link';
import { CreatorProfile } from '@/data/profiles';
import { Work } from '@/data/works';

interface ProfileDetailsProps {
  profile: CreatorProfile;
  works: Work[];
}

export default function ProfileDetails({
  profile,
  works,
}: ProfileDetailsProps) {
  // Collect unique categories actually associated with this studio's works
  const categories = Array.from(
    new Map(
      works.map((w) => [
        w.categorySlug,
        { name: w.category, slug: w.categorySlug },
      ])
    ).values()
  );

  return (
    <section
      aria-label="Studio Overview & Discipline Information"
      className="p-8 sm:p-10 rounded-2xl border border-zinc-800/80 bg-[#0c0c10] space-y-8"
    >
      {/* Header */}
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500 pb-4 border-b border-zinc-900">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
        <span>PRACTICE SPECIFICATIONS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
        {/* Column 1: Disciplines */}
        <div className="space-y-3">
          <span className="text-zinc-500 uppercase tracking-wider text-[11px] block">
            CREATIVE DISCIPLINES
          </span>
          {categories.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 text-zinc-200 hover:text-white hover:border-[#0070f3]/50 transition-colors"
                >
                  {cat.name} →
                </Link>
              ))}
            </div>
          ) : (
            <span className="text-zinc-300">{profile.role}</span>
          )}
        </div>

        {/* Column 2: Regional Base */}
        <div className="space-y-3">
          <span className="text-zinc-500 uppercase tracking-wider text-[11px] block">
            GEOGRAPHIC HUB
          </span>
          <div className="space-y-1 text-zinc-200">
            <p className="font-serif text-lg text-white">{profile.location}</p>
            <p className="text-zinc-500 text-[11px]">United Kingdom</p>
          </div>
        </div>

        {/* Column 3: Platform Record */}
        <div className="space-y-3">
          <span className="text-zinc-500 uppercase tracking-wider text-[11px] block">
            ARCHIVE REGISTRY
          </span>
          <div className="space-y-1 text-zinc-300">
            <p className="text-zinc-200">
              {works.length} {works.length === 1 ? 'Curated Project' : 'Curated Projects'}
            </p>
            <p className="text-zinc-500 text-[11px]">
              Independent UK Talent Roster
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

