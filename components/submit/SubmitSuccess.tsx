import React from 'react';
import Button from '@/components/ui/Button';

interface SubmitSuccessProps {
  projectTitle: string;
  onReset: () => void;
}

export default function SubmitSuccess({ projectTitle, onReset }: SubmitSuccessProps) {
  return (
    <div className="p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-[#0c0c10] text-center space-y-6">
      <div className="h-16 w-16 mx-auto rounded-full bg-[#0070f3]/20 border border-[#0070f3] text-[#38bdf8] flex items-center justify-center font-mono text-2xl">
        ✓
      </div>
      <h2 className="font-serif text-3xl text-white">Nomination Received</h2>
      <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
        Thank you for submitting <strong className="text-white">{projectTitle || 'your project'}</strong>. Our curatorial panel evaluates incoming British entries on a bi-weekly cycle.
      </p>
      <div className="pt-4 flex justify-center gap-4">
        <Button href="/discover" variant="primary" size="md">
          Explore Discover Page
        </Button>
        <button
          type="button"
          onClick={onReset}
          className="font-mono text-xs text-zinc-400 hover:text-white underline underline-offset-4 cursor-pointer"
        >
          Submit another project
        </button>
      </div>
    </div>
  );
}

