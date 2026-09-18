import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Work } from '@/data/works';
import { getProfileBySlug } from '@/data/profiles';

interface WorkSidebarProps {
  work: Work;
  className?: string;
}

export default function WorkSidebar({
  work,
  className = '',
}: WorkSidebarProps) {
  const profile = getProfileBySlug(work.creatorSlug);

  return (
    <aside
      aria-label="Work metadata and accreditation details"
      className={`space-y-8 font-mono text-xs ${className}`}
    >
      {/* Top Section Header */}
      <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
        <h3 className="uppercase tracking-widest text-zinc-400 font-semibold text-[11px]">
          {work.status === 'nominated' ? 'NOMINATION RECORD' : 'ACCREDITATION RECORD'}
        </h3>
        <span className="text-zinc-600 text-[10px]">INDEX #{work.id}</span>
      </div>

      {/* Metadata Entries (Editorial Stack with Thin Dividers) */}
      <div className="space-y-4 divide-y divide-zinc-900/90 text-xs">
        {/* Status / Tier */}
        <div className="pt-3 first:pt-0 flex items-center justify-between">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            {work.status === 'nominated' ? 'Status' : 'Recognition'}
          </span>
          <Badge
            variant={
              work.status === 'nominated'
                ? 'dark'
                : work.recognition === 'Category Winner'
                  ? 'accent'
                  : 'dark'
            }
            size="sm"
            className="font-mono text-[10px]"
          >
            {work.status === 'nominated' ? 'Under Review' : work.recognition}
          </Badge>
        </div>

        {/* Jury Rating / Review Status */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            {work.status === 'nominated' ? 'Review Status' : 'Jury Evaluation'}
          </span>
          {work.status === 'nominated' ? (
            <span className="text-[#38bdf8] font-medium text-xs font-mono">
              Under Editorial Review
            </span>
          ) : (
            <span className="text-[#38bdf8] font-bold text-sm font-mono">
              ★ {work.score} <span className="text-zinc-600 text-xs font-normal">/ 10</span>
            </span>
          )}
        </div>

        {/* Studio / Creator */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            Studio / Creator
          </span>
          <Link
            href={`/profile/${work.creatorSlug}`}
            className="text-zinc-200 hover:text-[#38bdf8] transition-colors font-medium text-right underline-offset-4 hover:underline"
          >
            {work.creator}
          </Link>
        </div>

        {/* Discipline */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            Discipline
          </span>
          <Link
            href={`/categories/${work.categorySlug}`}
            className="text-zinc-300 hover:text-white transition-colors"
          >
            {work.category}
          </Link>
        </div>

        {/* Location */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            Regional Hub
          </span>
          <span className="text-zinc-300">{work.location}</span>
        </div>

        {/* Context / Client */}
        {work.clientOrContext && (
          <div className="pt-3 flex items-center justify-between">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
              Context / Client
            </span>
            <span className="text-zinc-300 text-right max-w-45 truncate">
              {work.clientOrContext}
            </span>
          </div>
        )}

        {/* Edition Year */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            Archive Edition
          </span>
          <span className="text-zinc-300">{work.year}</span>
        </div>

        {/* Appreciation Votes */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            Appreciation
          </span>
          <span className="text-zinc-300">
            {work.appreciationCount.toLocaleString()} votes
          </span>
        </div>

        {/* External Website (Only shown if legitimate website exists in data) */}
        {profile?.website && (
          <div className="pt-3 flex items-center justify-between">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
              External Site
            </span>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:underline flex items-center gap-1 text-[11px]"
            >
              <span>Visit Website</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </div>

      {/* Action CTAs */}
      <div className="pt-4 border-t border-zinc-800 space-y-2.5">
        <Button
          href={`/categories/${work.categorySlug}`}
          variant="outline"
          size="sm"
          className="w-full justify-center font-mono text-[11px] uppercase tracking-wider"
        >
          More in {work.category}
        </Button>
        <Button
          href="/submit"
          variant="primary"
          size="sm"
          className="w-full justify-center font-mono text-[11px] uppercase tracking-wider font-semibold"
        >
          Nominate Work
        </Button>
      </div>
    </aside>
  );
}
