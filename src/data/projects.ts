export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  badge: 'Live' | 'Universite' | 'Certification' | 'Open Source';
}

export const PROJECTS: Project[] = [
  {
    title: 'Linux Platform',
    description: 'Reference interactive de 83 commandes Linux avec exemples pratiques et recherche instantanee.',
    tech: ['Next.js', 'TypeScript', 'MDX', 'Tailwind'],
    url: 'https://linux.mouctar.fr',
    badge: 'Live',
  },
  {
    title: 'Snake Game',
    description: 'Le classique du Snake revisite en JavaScript pur — jouable directement dans le navigateur.',
    tech: ['JavaScript', 'HTML5', 'Canvas'],
    url: 'https://snake.mouctar.fr',
    badge: 'Live',
  },
  {
    title: 'Projet Cryptographie',
    description: "Implementation d'algorithmes cryptographiques en C — projet universitaire avec cahier des charges complet.",
    tech: ['C', 'Makefile', 'Cryptographie'],
    url: 'https://github.com/mouctarbarry/Projet-Cryptographie',
    badge: 'Universite',
  },
  {
    title: 'Projet ADN',
    description: 'Analyse de sequences ADN, operations CRUD et regroupement en familles par similarite.',
    tech: ['C', 'Makefile', 'Algorithmes'],
    url: 'https://github.com/mouctarbarry/ProjetADN',
    badge: 'Universite',
  },
  {
    title: 'DevOps & SRE',
    description: 'Concepts, philosophie et cheatsheets pratiques — Kubernetes, Docker, Terraform, Ansible, AWS et plus.',
    tech: ['Next.js', 'TypeScript', 'MDX', 'Tailwind'],
    url: 'https://devops.mouctar.fr',
    badge: 'Live',
  },
  {
    title: 'E-commerce',
    description: "Plateforme e-commerce complete avec panier, paiement Stripe et gestion des commandes.",
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    url: 'https://github.com/mouctarbarry/ecommerce',
    badge: 'Open Source',
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  { title: 'Cloud & Infra', skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS'] },
  { title: 'Langages', skills: ['TypeScript', 'Go', 'Python', 'C', 'Shell/Bash'] },
  { title: 'Web', skills: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'] },
  { title: 'DevOps', skills: ['CI/CD', 'GitHub Actions', 'Ansible', 'Linux'] },
  { title: 'Databases', skills: ['PostgreSQL', 'Supabase', 'SQL'] },
];
