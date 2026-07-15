"use client";

import { Children, useState } from "react";
import { ChevronsDown } from "lucide-react";
import { Icons } from "@/components/icons";

export function ProjectsReveal({
  children,
  initial = 4,
  githubUrl,
}: {
  children: React.ReactNode;
  initial?: number;
  githubUrl?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children);
  const hasMore = items.length > initial;
  const visible = expanded || !hasMore ? items : items.slice(0, initial);
  const remaining = items.length - initial;

  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
        {visible}
      </div>
      <div className="flex flex-col items-center gap-y-3">
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {expanded ? "Show less" : `Show ${remaining} more`}
            <ChevronsDown
              className={`size-4 transition-transform ${
                expanded ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <Icons.github className="size-4" />
            View more projects on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
