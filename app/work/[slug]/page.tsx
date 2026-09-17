import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import WorkHero from '@/components/work/WorkHero';
import WorkMedia from '@/components/work/WorkMedia';
import WorkOverview from '@/components/work/WorkOverview';
import WorkSidebar from '@/components/work/WorkSidebar';
import WorkRecognition from '@/components/work/WorkRecognition';
import WorkCreator from '@/components/work/WorkCreator';
import RelatedWorks from '@/components/work/RelatedWorks';
import WorkCta from '@/components/work/WorkCta';
import { getWorkBySlug, getAllWorks } from '@/data/works';

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = getAllWorks();
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: 'Project Not Found — aWWWards.co.uk' };

  return {
    metadataBase: new URL('https://awwwards.co.uk'),
    title: `${work.title} by ${work.creator} — aWWWards.co.uk`,
    description: work.summary,
    openGraph: {
      title: `${work.title} by ${work.creator} | aWWWards.co.uk`,
      description: work.summary,
      images: [
        {
          url: work.imageUrl,
          alt: `${work.title} by ${work.creator}`,
        },
      ],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-8 sm:pt-12 pb-24">
      <Container size="wide" className="space-y-14 sm:space-y-20">
        {/* Editorial Header */}
        <WorkHero work={work} />

        {/* Cinematic Media Showcase */}
        <WorkMedia work={work} />

        {/* Editorial Narrative & Metadata Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-8 border-t border-zinc-900">
          <WorkOverview work={work} className="lg:col-span-8" />
          <WorkSidebar work={work} className="lg:col-span-4" />
        </div>

        {/* Accreditation Moment */}
        <WorkRecognition work={work} />

        {/* Studio Connection */}
        <WorkCreator work={work} />

        {/* Curated Related Works */}
        <RelatedWorks currentWork={work} />

        {/* Closing Nomination CTA */}
        <WorkCta />
      </Container>
    </main>
  );
}
