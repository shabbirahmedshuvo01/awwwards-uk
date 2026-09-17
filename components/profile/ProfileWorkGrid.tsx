import React from 'react';
import DiscoveryCard from '@/components/discover/DiscoveryCard';
import { Work } from '@/data/works';

interface ProfileWorkGridProps {
  works: Work[];
}

export default function ProfileWorkGrid({ works }: ProfileWorkGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
        <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
          Archive & Recognized Works
        </h2>
        <span className="font-mono text-xs text-zinc-500">
          {works.length} PROJECTS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {works.map((work) => (
          <DiscoveryCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}

