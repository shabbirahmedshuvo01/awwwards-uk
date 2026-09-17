import React from 'react';
import Image from 'next/image';
import { Work } from '@/data/works';

interface WorkMediaProps {
  work: Work;
}

export default function WorkMedia({ work }: WorkMediaProps) {
  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800 bg-[#070709] shadow-2xl">
      <Image
        src={work.imageUrl}
        alt={work.title}
        fill
        priority
        sizes="(max-width: 1440px) 100vw, 1440px"
        className="object-cover object-center"
      />
    </div>
  );
}

