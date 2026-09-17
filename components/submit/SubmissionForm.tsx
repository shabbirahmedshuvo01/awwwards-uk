import React from 'react';
import Button from '@/components/ui/Button';
import { CATEGORIES, LOCATIONS, Category } from '@/data/works';

export interface NominationFormData {
  projectTitle: string;
  creatorName: string;
  url: string;
  category: Category;
  location: string;
  description: string;
}

interface SubmissionFormProps {
  formData: NominationFormData;
  setFormData: React.Dispatch<React.SetStateAction<NominationFormData>>;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SubmissionForm({
  formData,
  setFormData,
  onSubmit,
}: SubmissionFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="p-8 sm:p-12 rounded-2xl border border-zinc-900 bg-[#0c0c10] space-y-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-wider text-zinc-300 block">
            Project Title *
          </label>
          <input
            type="text"
            required
            value={formData.projectTitle}
            onChange={(e) =>
              setFormData({ ...formData, projectTitle: e.target.value })
            }
            placeholder="e.g. The Pavilion at Kew"
            className="w-full rounded-md border border-zinc-800 bg-black/60 px-4 py-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-wider text-zinc-300 block">
            Creator / Studio Name *
          </label>
          <input
            type="text"
            required
            value={formData.creatorName}
            onChange={(e) =>
              setFormData({ ...formData, creatorName: e.target.value })
            }
            placeholder="e.g. Atelier North"
            className="w-full rounded-md border border-zinc-800 bg-black/60 px-4 py-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-wider text-zinc-300 block">
            Category *
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value as Category })
            }
            className="w-full rounded-md border border-zinc-800 bg-black/60 px-3.5 py-2.5 text-xs font-mono text-zinc-300 focus:border-zinc-500 focus:outline-none cursor-pointer"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-wider text-zinc-300 block">
            UK Regional Hub *
          </label>
          <select
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="w-full rounded-md border border-zinc-800 bg-black/60 px-3.5 py-2.5 text-xs font-mono text-zinc-300 focus:border-zinc-500 focus:outline-none cursor-pointer"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-wider text-zinc-300 block">
            Project Link / URL
          </label>
          <input
            type="url"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            placeholder="https://..."
            className="w-full rounded-md border border-zinc-800 bg-black/60 px-4 py-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-mono text-xs uppercase tracking-wider text-zinc-300 block">
          Short Description & Cultural Merit
        </label>
        <textarea
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Explain why this British craft, spatial innovation, or digital engineering deserves recognition..."
          className="w-full rounded-md border border-zinc-800 bg-black/60 p-4 text-xs font-mono text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
        />
      </div>

      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <span className="font-mono text-[11px] text-zinc-500">
          100% Curated in the UK • No entry fee for independent makers
        </span>
        <Button type="submit" variant="primary" size="md">
          Submit Nomination →
        </Button>
      </div>
    </form>
  );
}

