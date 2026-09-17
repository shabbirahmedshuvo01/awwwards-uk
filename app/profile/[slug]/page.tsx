import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileWorkGrid from '@/components/profile/ProfileWorkGrid';
import { getAllWorks, getWorksByCreator } from '@/data/works';

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = getAllWorks();
  const creatorSlugs = Array.from(new Set(works.map((w) => w.creatorSlug)));
  return creatorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const works = getWorksByCreator(slug);
  if (works.length === 0) return { title: 'Studio Not Found — aWWWards.co.uk' };

  const studio = works[0];
  return {
    title: `${studio.creator} — UK Creative Profile — aWWWards.co.uk`,
    description: `Explore recognised works and projects by ${studio.creator} based in ${studio.location}.`,
  };
}

export default async function ProfileDetailPage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const studioWorks = getWorksByCreator(slug);

  if (studioWorks.length === 0) {
    notFound();
  }

  const studio = studioWorks[0];

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24">
      <Container size="wide" className="space-y-12">
        <ProfileHeader studio={studio} worksCount={studioWorks.length} />
        <ProfileWorkGrid works={studioWorks} />
      </Container>
    </div>
  );
}
