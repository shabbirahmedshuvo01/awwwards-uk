import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import WorkHero from '@/components/work/WorkHero';
import WorkMedia from '@/components/work/WorkMedia';
import WorkOverview from '@/components/work/WorkOverview';
import WorkSidebar from '@/components/work/WorkSidebar';
import { getWorkBySlug, getAllWorks } from '@/data/works';

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = getAllWorks();
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: 'Project Not Found — aWWWards.co.uk' };

  return {
    title: `${work.title} by ${work.creator} — aWWWards.co.uk`,
    description: work.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24">
      <Container size="wide" className="space-y-10">
        <WorkHero work={work} />
        <WorkMedia work={work} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-zinc-900">
          <WorkOverview work={work} className="lg:col-span-8" />
          <WorkSidebar work={work} className="lg:col-span-4" />
        </div>
      </Container>
    </div>
  );
}
