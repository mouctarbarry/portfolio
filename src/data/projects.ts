export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  badge: "Live" | "Université" | "Certification" | "Open Source";
}

export const PROJECTS: Project[] = [
  {
    title: "Linux Platform",
    description:
      "Référence interactive de 83 commandes Linux avec exemples pratiques et recherche instantanée.",
    tech: ["Next.js", "TypeScript", "MDX", "Tailwind"],
    url: "https://linux.mouctar.fr",
    badge: "Live",
  },
  {
    title: "Snake Game",
    description:
      "Le classique du Snake revisité en JavaScript pur — jouable directement dans le navigateur.",
    tech: ["JavaScript", "HTML5", "Canvas"],
    url: "https://snake.mouctar.fr",
    badge: "Live",
  },
  {
    title: "Projet Cryptographie",
    description:
      "Implémentation d'algorithmes cryptographiques en C — projet universitaire avec cahier des charges complet.",
    tech: ["C", "Makefile", "Cryptographie"],
    url: "https://github.com/mouctarbarry/Projet-Cryptographie",
    badge: "Université",
  },
  {
    title: "Projet ADN",
    description:
      "Analyse de séquences ADN, opérations CRUD et regroupement en familles par similarité.",
    tech: ["C", "Makefile", "Algorithmes"],
    url: "https://github.com/mouctarbarry/ProjetADN",
    badge: "Université",
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
      "Guides de cybersécurité : OWASP, cryptographie, pentest, hardening et fondamentaux.",
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
    title: "Ingénieur DevOps",
    company: "Capgemini (Sogeti)",
    contract: "CDI",
    period: "Mars 2024 — Présent",
    location: "Paris / Issy-les-Moulineaux",
    mode: "Hybride",
  },
  {
    title: "Ingénieur DevOps",
    company: "Bpifrance",
    contract: "Indépendant",
    period: "Févr. 2023 — Présent",
    location: "Paris",
    mode: "Hybride",
  },
  {
    title: "Référent CROUS",
    company: "Crous de Versailles",
    contract: "CDD",
    period: "Sept. 2021 — Sept. 2023",
    location: "Versailles",
    mode: "Sur site",
  },
  {
    title: "Développeur logiciels",
    company: "UVSQ — UFR des Sciences",
    contract: "Freelance",
    period: "Sept. 2019 — Févr. 2023",
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
    degree: "Master Ingénierie des Réseaux et Systèmes",
    school: "Université Paris Saclay",
    period: "2021 — 2023",
  },
  {
    degree: "Licence Informatique",
    school: "Université de Versailles (UVSQ)",
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
    skills: ["Kubernetes", "Docker", "Terraform", "AWS", "Azure"],
  },
  {
    title: "Langages",
    skills: ["TypeScript", "Java", "Go", "Python", "C", "C++", "CSharp", "Shell/Bash"],
  },
  { title: "Web", skills: ["Next.js", "React", "Angular", "Tailwind CSS", "Node.js"] },
  { title: "DevOps", skills: ["CI/CD", "Jenkins", "GitHub Actions", "Gitlab CI", "Ansible", "Linux"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
];
