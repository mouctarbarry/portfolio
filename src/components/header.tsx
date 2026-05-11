'use client';

import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <span className="font-heading text-lg font-bold tracking-tight">Mouctar Barry</span>
        <ThemeToggle />
      </div>
    </header>
  );
}
