"use client";

import { Icons } from "@/components/icons";
import { RevealList } from "@/components/reveal-list";

export function ProjectsReveal({
  children,
  initial = 4,
  githubUrl,
}: {
  children: React.ReactNode;
  initial?: number;
  githubUrl?: string;
}) {
  return (
    <RevealList
      initial={initial}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full"
      footer={
        githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <Icons.github className="size-4" />
            View more projects on GitHub
          </a>
        ) : null
      }
    >
      {children}
    </RevealList>
  );
}
