import React from 'react';
import DiscoveryGrid from '@/components/discover/DiscoveryGrid';
import { Work } from '@/data/works';

interface WinnersGridProps {
  works: Work[];
}

export default function WinnersGrid({ works }: WinnersGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-900 font-mono text-xs text-zinc-500">
        <span>{works.length} WINNERS ARCHIVED</span>
        <span>EDITION 2026</span>
      </div>

      <DiscoveryGrid works={works} />
    </div>
  );
}

