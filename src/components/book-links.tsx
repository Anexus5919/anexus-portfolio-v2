"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type BookLink = { label: string; href: string };
type Store = { country: string; href: string };

export function BookLinks({
  links = [],
  stores = [],
}: {
  links?: readonly BookLink[];
  stores?: readonly Store[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-y-4 pt-1">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-foreground/80 underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {link.label}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        ))}
        {stores.length > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            View on Amazon
            <ChevronDown
              className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        )}
      </div>
      {open && stores.length > 0 && (
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
          {stores.map((store) => (
            <li key={store.href}>
              <a
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buy on Amazon ${store.country}`}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {store.country}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
