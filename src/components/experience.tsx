import { Briefcase, MapPin } from 'lucide-react';
import type { Experience } from '@/data/projects';

const CONTRACT_STYLES: Record<string, string> = {
  CDI: 'bg-green-500/10 text-green-600 dark:text-green-400',
  CDD: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  'Indépendant': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Freelance: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
};

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Expérience</h2>
      <div className="relative space-y-0">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-px" />

        {experiences.map((exp, i) => (
          <div
            key={`${exp.company}-${exp.title}`}
            className={`relative flex flex-col sm:flex-row ${
              i % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <div className="absolute left-[15px] top-6 z-10 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2" />

            <div className="w-full sm:w-1/2" />

            <div
              className={`ml-10 w-full sm:ml-0 sm:w-1/2 ${
                i % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'
              } pb-8`}
            >
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <h3 className="font-mono text-sm font-bold">{exp.title}</h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      CONTRACT_STYLES[exp.contract] ?? 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {exp.contract}
                  </span>
                </div>

                <p className="mb-2 text-sm font-semibold text-foreground">{exp.company}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                  <span className="rounded bg-secondary px-2 py-0.5 text-xs">{exp.mode}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
