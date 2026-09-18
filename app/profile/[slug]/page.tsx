import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileWorkGrid from '@/components/profile/ProfileWorkGrid';
import ProfileRecognition from '@/components/profile/ProfileRecognition';
import ProfileDetails from '@/components/profile/ProfileDetails';
import ProfileCta from '@/components/profile/ProfileCta';
import { getAllProfiles, getProfileBySlug } from '@/data/profiles';
import { getWorksByCreator } from '@/data/works';

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const profiles = getAllProfiles();
  return profiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) return { title: 'Practice Not Found — aWWWards.co.uk' };

  const works = getWorksByCreator(slug);
  const ogImage =
    works.length > 0 ? works[0].imageUrl : '/images/home/hero-feature.jpg';

  return {
    metadataBase: new URL('https://awwwards.co.uk'),
    title: `${profile.name} — UK Creative Practice — aWWWards.co.uk`,
    description: profile.bio,
    openGraph: {
      title: `${profile.name} | aWWWards.co.uk`,
      description: profile.bio,
      images: [
        {
          url: ogImage,
          alt: profile.name,
        },
      ],
    },
  };
}

export default async function ProfileDetailPage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);

  // 404 is strictly determined by whether the profile exists in data/profiles.ts
  if (!profile) {
    notFound();
  }

  const works = getWorksByCreator(slug);

  return (
    <main className="min-h-screen bg-black text-white pt-8 sm:pt-12 pb-24">
      <Container size="wide" className="space-y-16 sm:space-y-20">
        {/* Profile Header & Studio Introduction */}
        <ProfileHeader profile={profile} worksCount={works.length} />

        {/* Portfolio Showcase Grid */}
        <ProfileWorkGrid works={works} creatorName={profile.name} />

        {/* Official Recognitions & Accreditations (if works have awards) */}
        <ProfileRecognition works={works} />

        {/* Studio Specifications & Geographic Hub */}
        <ProfileDetails profile={profile} works={works} />

        {/* Closing Nomination CTA */}
        <ProfileCta />
      </Container>
    </main>
  );
}
