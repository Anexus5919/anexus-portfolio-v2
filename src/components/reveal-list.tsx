"use client";

import { Children, useState, type ReactNode } from "react";
import { ChevronsDown } from "lucide-react";

export function RevealList({
  children,
  initial = 4,
  className,
  as: Tag = "div",
  footer,
}: {
  children: ReactNode;
  initial?: number;
  className?: string;
  as?: "div" | "ol" | "ul";
  footer?: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children);
  const hasMore = items.length > initial;
  const visible = expanded || !hasMore ? items : items.slice(0, initial);
  const remaining = items.length - initial;

  return (
    <div className="flex flex-col items-center gap-y-8">
      <Tag className={className}>{visible}</Tag>
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
        {footer}
      </div>
    </div>
  );
}
