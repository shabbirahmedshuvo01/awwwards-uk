import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CreatorProfile } from '@/data/profiles';

interface ProfileHeaderProps {
  profile: CreatorProfile;
  worksCount: number;
}

export default function ProfileHeader({
  profile,
  worksCount,
}: ProfileHeaderProps) {
  const initials = profile.initials || profile.name.slice(0, 2).toUpperCase();

  return (
    <header className="space-y-8 max-w-5xl">
      {/* Navigation Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center flex-wrap gap-2 font-mono text-xs text-zinc-500"
      >
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="text-zinc-700">/</span>
        <Link href="/discover" className="hover:text-white transition-colors">
          Discover
        </Link>
        <span className="text-zinc-700">/</span>
        <span className="text-zinc-300 truncate max-w-[240px] sm:max-w-none">
          {profile.name}
        </span>
      </nav>

      {/* Main Identity Box */}
      <div className="space-y-6">
        {/* Accreditation Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0070f3] animate-pulse" />
          <span className="uppercase tracking-widest text-[#38bdf8] font-semibold">
            RECOGNISED UK CREATIVE PRACTICE
          </span>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <span className="text-zinc-500 hidden sm:inline uppercase">
            REGIONAL DIRECTORY
          </span>
        </div>

        {/* Monogram Avatar & Editorial Name Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl border border-zinc-800 bg-[#0c0c10] text-white font-mono text-2xl sm:text-3xl font-bold flex items-center justify-center shrink-0 shadow-xl">
            {initials}
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.04]">
              {profile.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400">
              <span className="text-zinc-300">{profile.role}</span>
              <span className="text-zinc-700">|</span>
              <span>{profile.location}</span>
              <span className="text-zinc-700">|</span>
              <span className="text-[#38bdf8] font-medium">
                {worksCount} {worksCount === 1 ? 'Curated Project' : 'Curated Projects'}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative Studio Introduction / Bio */}
        {profile.bio && (
          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed pt-2">
            {profile.bio}
          </p>
        )}

        {/* External Website & Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-900">
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-[#0c0c10] font-mono text-xs text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
              aria-label={`Visit official website for ${profile.name} (opens in new tab)`}
            >
              <span>Visit Official Website</span>
              <span className="text-[#38bdf8]">↗</span>
            </a>
          )}

          <Button
            href="/discover"
            variant="outline"
            size="sm"
            className="font-mono text-xs uppercase tracking-wider"
          >
            ← Explore Discover
          </Button>

          <Button
            href="/submit"
            variant="primary"
            size="sm"
            className="font-mono text-xs uppercase tracking-wider font-semibold"
          >
            Nominate Talent
          </Button>
        </div>
      </div>
    </header>
  );
}
