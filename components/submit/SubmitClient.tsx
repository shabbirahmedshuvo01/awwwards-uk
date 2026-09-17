'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import SubmitHero from './SubmitHero';
import SubmitSuccess from './SubmitSuccess';
import SubmissionForm, { NominationFormData } from './SubmissionForm';
import { CATEGORIES, LOCATIONS, Category } from '@/data/works';

export default function SubmitClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<NominationFormData>({
    projectTitle: '',
    creatorName: '',
    url: '',
    category: CATEGORIES[0] as Category,
    location: LOCATIONS[0],
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24">
      <Container size="wide" className="space-y-12 max-w-4xl">
        <SubmitHero />

        {submitted ? (
          <SubmitSuccess
            projectTitle={formData.projectTitle}
            onReset={handleReset}
          />
        ) : (
          <SubmissionForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        )}
      </Container>
    </div>
  );
}

