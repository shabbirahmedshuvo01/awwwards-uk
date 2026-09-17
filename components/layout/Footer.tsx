import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Footer() {
  return (
    <footer id="submit" className="border-t border-zinc-900 bg-black text-white pt-20 pb-12">
      <Container size="wide">
        {/* Large Typographic Manifesto Banner */}
        <div className="py-12 sm:py-16 border-b border-zinc-900 text-center">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight leading-tight">
            <span>Discover</span>{' '}
            <span className="text-zinc-600 font-sans font-light">→</span>{' '}
            <span>Explore</span>{' '}
            <span className="text-zinc-600 font-sans font-light">→</span>{' '}
            <span>Appreciate</span>{' '}
            <span className="text-zinc-600 font-sans font-light">→</span>{' '}
            <span className="text-[#0070f3]">Recognise</span>
          </h2>
        </div>

        {/* 3 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-b border-zinc-900">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                aWWWards
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-[#0070f3]">
                .co.uk
              </span>
            </Link>
            <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed">
              An independent UK catalog and community honoring exceptional British digital, spatial, and editorial craft.
            </p>
            <div className="font-mono text-xs text-zinc-600 pt-2">
              CURATED FROM LONDON, UK • OPEN TO THE WORLD
            </div>
          </div>

          {/* Col 2: Evaluation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="uppercase tracking-widest text-zinc-300 font-medium pb-1">
              CURATION & EVALUATION
            </h4>
            <ul className="space-y-2.5 text-zinc-500">
              <li>
                <Link href="/#jury" className="hover:text-white transition-colors">
                  Jury Members & Standards
                </Link>
              </li>
              <li>
                <Link href="/#nominate" className="hover:text-white transition-colors">
                  Nomination Guidelines & Fees
                </Link>
              </li>
              <li>
                <Link href="/#directory" className="hover:text-white transition-colors">
                  Annual Book & Directory
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Submit For Review */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-medium">
              SUBMIT FOR REVIEW
            </h4>
            <p className="font-sans text-sm text-zinc-400 max-w-xs leading-relaxed">
              Receive peer evaluation from leading UK and global creatives.
            </p>
            <div className="pt-1">
              <Button
                href="/submit"
                variant="primary"
                size="md"
                className="font-mono text-xs tracking-wider uppercase font-semibold px-6 py-3"
              >
                Submit Your Work
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-600">
          <div>
            © {new Date().getFullYear()} aWWWards.co.uk. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">
              Terms of Submission
            </span>
            <span>•</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">
              Cookie Settings
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
