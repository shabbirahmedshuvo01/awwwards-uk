'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'DISCOVER', href: '/discover' },
    { label: 'WINNERS', href: '/winners' },
    { label: 'CATEGORIES', href: '/categories' },
    { label: 'NOMINEES', href: '/#nominees' },
    { label: 'ABOUT', href: '/#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-black/90 backdrop-blur-md transition-all">
      <Container size="wide" className="flex items-center justify-between py-4">
        {/* Left: Brand + Nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-baseline gap-1 transition-opacity hover:opacity-90">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
              aWWWards
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#0070f3]">
              .co.uk
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 font-mono text-[11px] tracking-wider text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Search & Action */}
        <div className="hidden md:flex items-center gap-4">
          {/* Quick search shortcut button */}
          <Link
            href="/search"
            className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition-colors"
          >
            <svg
              className="h-3.5 w-3.5 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <span className="text-[11px] font-mono">Search index</span>
            <kbd className="rounded border border-zinc-700 bg-zinc-800/80 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
              ⌘K
            </kbd>
          </Link>

          {/* Submit Work Blue Pill */}
          <Button
            href="/submit"
            variant="primary"
            size="sm"
            className="font-mono text-[11px] uppercase tracking-wider font-semibold shadow-md shadow-blue-500/10"
          >
            Submit Your Work
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-800 bg-black/95 px-6 py-6 lg:hidden">
          <nav className="flex flex-col space-y-4 font-mono text-xs tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-white py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-800">
              <Button
                href="/submit"
                variant="primary"
                size="md"
                className="w-full justify-center font-mono text-xs tracking-wider uppercase font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submit Your Work
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
