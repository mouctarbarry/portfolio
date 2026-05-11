import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex flex-col items-center py-24 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Disponible
      </div>

      <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
        Mouctar Barry
      </h1>

      <p className="mb-3 font-mono text-xl text-primary sm:text-2xl">
        DevOps &amp; SRE Engineer
      </p>

      <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
        Je construis et maintiens des infrastructures fiables, automatisées et observables.
        Passionné par le cloud, l&apos;open source et le partage de connaissances.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/mouctarbarry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mouctarbarry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="mailto:contact@mouctar.fr"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
      </div>
    </section>
  );
}
