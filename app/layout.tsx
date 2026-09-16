import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'aWWWards.co.uk — Recognising Remarkable Talent',
  description:
    'Discover, showcase and celebrate remarkable UK businesses, creators and creative work.',
  keywords: [
    'UK talent',
    'creative recognition',
    'British design awards',
    'architecture showcase',
    'independent UK studios',
    'artisan craft Britain',
  ],
  authors: [{ name: 'aWWWards.co.uk' }],
  openGraph: {
    title: 'aWWWards.co.uk — Recognising Remarkable Talent',
    description:
      'Discover, showcase and celebrate remarkable UK businesses, creators and creative work.',
    siteName: 'aWWWards.co.uk',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050507] text-white selection:bg-[#0070f3] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
