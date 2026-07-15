"use client";

import { Children, useState } from "react";
import { ChevronDown } from "lucide-react";

export function ProjectsReveal({
  children,
  initial = 4,
}: {
  children: React.ReactNode;
  initial?: number;
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
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border px-4 text-sm font-medium hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {expanded ? "Show less" : `Show ${remaining} more`}
          <ChevronDown
            className={`size-4 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}
