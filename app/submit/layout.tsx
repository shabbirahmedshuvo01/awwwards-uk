import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nominate a British Talent — aWWWards.co.uk',
  description:
    'Submit an exceptional UK creator, independent studio, or visionary project for evaluation by our rotating jury.',
};

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

