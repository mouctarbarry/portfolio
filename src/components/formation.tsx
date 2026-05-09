import { GraduationCap } from 'lucide-react';
import type { Education } from '@/data/projects';

export function FormationSection({ education }: { education: Education[] }) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Formation</h2>
      <div className="mx-auto max-w-2xl space-y-4">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold">{edu.degree}</h3>
              <p className="mt-1 text-sm text-foreground">{edu.school}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
