import React from 'react';
import Container from '@/components/ui/Container';
import { STATS } from '@/data/mock-works';

export default function StatsBar() {
  return (
    <section className="py-10 border-b border-zinc-900 bg-black">
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                {stat.hasAccent ? (
                  <>
                    <span>{stat.value.replace(stat.accentChar || '', '')}</span>
                    <span className="text-[#0070f3]">{stat.accentChar}</span>
                  </>
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div className="font-mono text-[11px] font-medium tracking-wider text-zinc-300 uppercase">
                {stat.label}
              </div>
              <div className="font-mono text-[10px] tracking-wider text-zinc-600 uppercase">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

