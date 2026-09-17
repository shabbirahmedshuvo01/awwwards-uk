import type { Metadata } from 'next';
import SearchClient from '@/components/search/SearchClient';

export const metadata: Metadata = {
  title: 'Search Creative Index — aWWWards.co.uk',
  description: 'Search recognized projects, design studios, photographers, and architects across the UK.',
};

export default function SearchPage() {
  return <SearchClient />;
}

