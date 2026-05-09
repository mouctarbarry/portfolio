import type { SkillCategory } from '@/data/projects';

export function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Competences</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-primary">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
