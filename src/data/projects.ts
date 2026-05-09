export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  badge: "Live" | "Universite" | "Certification" | "Open Source";
}

export const PROJECTS: Project[] = [
  {
    title: "Linux Platform",
    description:
      "Reference interactive de 83 commandes Linux avec exemples pratiques et recherche instantanee.",
    tech: ["Next.js", "TypeScript", "MDX", "Tailwind"],
    url: "https://linux.mouctar.fr",
    badge: "Live",
  },
  {
    title: "Snake Game",
    description:
      "Le classique du Snake revisite en JavaScript pur — jouable directement dans le navigateur.",
    tech: ["JavaScript", "HTML5", "Canvas"],
    url: "https://snake.mouctar.fr",
    badge: "Live",
  },
  {
    title: "Projet Cryptographie",
    description:
      "Implementation d'algorithmes cryptographiques en C — projet universitaire avec cahier des charges complet.",
    tech: ["C", "Makefile", "Cryptographie"],
    url: "https://github.com/mouctarbarry/Projet-Cryptographie",
    badge: "Universite",
  },
  {
    title: "Projet ADN",
    description:
      "Analyse de sequences ADN, operations CRUD et regroupement en familles par similarite.",
    tech: ["C", "Makefile", "Algorithmes"],
    url: "https://github.com/mouctarbarry/ProjetADN",
    badge: "Universite",
  },
  {
    title: "DevOps & SRE",
    description:
      "Concepts, philosophie et cheatsheets pratiques — Kubernetes, Docker, Terraform, Ansible, AWS et plus.",
    tech: ["Next.js", "TypeScript", "MDX", "Tailwind"],
    url: "https://devops.mouctar.fr",
    badge: "Live",
  },
  {
    title: "CyberSec Platform",
    description:
      "Guides de cybersecurite : OWASP, cryptographie, pentest, hardening et fondamentaux.",
    tech: ["Next.js", "TypeScript", "MDX", "Tailwind"],
    url: "https://cybersec.mouctar.fr",
    badge: "Live",
  },
  {
    title: "E-commerce",
    description:
      "Boutique en ligne avec catalogue produits, panier interactif et checkout.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind"],
    url: "https://shop.mouctar.fr",
    badge: "Live",
  },
];

export interface Experience {
  title: string;
  company: string;
  contract: string;
  period: string;
  location: string;
  mode: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer",
    company: "Capgemini",
    contract: "CDI",
    period: "Mars 2024 — Present",
    location: "Paris",
    mode: "Hybride",
  },
  {
    title: "Ingenieur DevOps",
    company: "Sogeti",
    contract: "CDI",
    period: "Mars 2024 — Present",
    location: "Issy-les-Moulineaux",
    mode: "Hybride",
  },
  {
    title: "Ingenieur DevOps",
    company: "Bpifrance",
    contract: "Independant",
    period: "Fevr. 2023 — Present",
    location: "Paris",
    mode: "Hybride",
  },
  {
    title: "Referent CROUS",
    company: "Crous de Versailles",
    contract: "CDD",
    period: "Sept. 2021 — Sept. 2023",
    location: "Versailles",
    mode: "Sur site",
  },
  {
    title: "Developpeur logiciels",
    company: "UVSQ — UFR des Sciences",
    contract: "Freelance",
    period: "Sept. 2019 — Fevr. 2023",
    location: "Versailles",
    mode: "Sur site",
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "Master Ingenierie des Reseaux et Systemes",
    school: "Universite Paris Saclay",
    period: "2021 — 2023",
  },
  {
    degree: "Licence Informatique",
    school: "Universite de Versailles (UVSQ)",
    period: "2018 — 2021",
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Cloud & Infra",
    skills: ["Kubernetes", "Docker", "Terraform", "AWS"],
  },
  {
    title: "Langages",
    skills: ["TypeScript", "Go", "Python", "C", "Shell/Bash"],
  },
  { title: "Web", skills: ["Next.js", "React", "Tailwind CSS", "Node.js"] },
  { title: "DevOps", skills: ["CI/CD", "GitHub Actions", "Ansible", "Linux"] },
  { title: "Databases", skills: ["PostgreSQL", "Supabase", "SQL"] },
];
