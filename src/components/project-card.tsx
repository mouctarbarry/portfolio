import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

const BADGE_STYLES: Record<Project['badge'], string> = {
  Live: 'bg-green-500/10 text-green-600 dark:text-green-400',
  Universite: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Certification: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  'Open Source': 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="font-mono text-lg font-bold tracking-tight group-hover:text-primary">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${BADGE_STYLES[project.badge]}`}
          >
            {project.badge}
          </span>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
