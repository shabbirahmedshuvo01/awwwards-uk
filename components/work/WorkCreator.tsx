import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Work } from '@/data/works';
import { getProfileBySlug } from '@/data/profiles';

interface WorkCreatorProps {
  work: Work;
}

export default function WorkCreator({ work }: WorkCreatorProps) {
  const profile = getProfileBySlug(work.creatorSlug);
  const name = profile?.name || work.creator;
  const location = profile?.location || work.location;
  const role = profile?.role || work.creatorRole;
  const bio = profile?.bio;
  const initials = profile?.initials || name.slice(0, 2).toUpperCase();

  return (
    <section
      aria-label="Creator Profile Connection"
      className="p-8 sm:p-10 rounded-2xl border border-zinc-800/80 bg-[#0c0c10] space-y-6"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
        <span>STUDIO ORIGIN & CREATOR</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-zinc-900">
        <div className="flex items-center gap-5">
          {/* Studio Monogram Avatar */}
          <div className="h-16 w-16 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center font-mono text-base font-bold text-white shrink-0">
            {initials}
          </div>

          <div className="space-y-1">
            <Link
              href={`/profile/${work.creatorSlug}`}
              className="group inline-flex items-center gap-2"
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#38bdf8] transition-colors">
                {name}
              </h3>
            </Link>
            <p className="font-mono text-xs text-zinc-400">
              {role} • {location}
            </p>
          </div>
        </div>

        {/* Profile Link Buttons */}
        <div className="flex items-center gap-3">
          <Button
            href={`/profile/${work.creatorSlug}`}
            variant="outline"
            size="sm"
            className="font-mono text-xs uppercase tracking-wider"
          >
            View Studio Profile →
          </Button>

          {profile?.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 font-mono text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <span>Visit Website</span>
              <span className="text-zinc-500">↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Bio text if available */}
      {bio && (
        <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
          {bio}
        </p>
      )}
    </section>
  );
}

