import { Hero } from '@/components/hero';
import { ProjectCard } from '@/components/project-card';
import { Skills } from '@/components/skills';
import { Footer } from '@/components/footer';
import { PROJECTS, SKILLS } from '@/data/projects';

export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-4">
        <Hero />

        <section className="py-16">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Projets</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <Skills categories={SKILLS} />
      </main>

      <Footer />
    </>
  );
}
