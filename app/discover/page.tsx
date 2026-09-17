import type { Metadata } from 'next';
import DiscoverClient from '@/components/discover/DiscoverClient';

export const metadata: Metadata = {
  title: 'Discover Remarkable Work — aWWWards.co.uk',
  description:
    'Explore exceptional creative work, businesses and talent recognised across the UK. Filter by category, location, and recognition.',
  openGraph: {
    title: 'Discover Remarkable Work — aWWWards.co.uk',
    description:
      'Explore exceptional creative work, businesses and talent recognised across the UK.',
  },
};

export default function DiscoverPage() {
  return <DiscoverClient />;
}

