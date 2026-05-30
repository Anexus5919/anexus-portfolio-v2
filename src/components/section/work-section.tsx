/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Content } from "@/lib/content";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain bg-white flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection({
  work: jobs,
}: {
  work: Content["work"];
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={jobs[0]?.company}
      className="w-full grid gap-6"
    >
      {jobs.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.start} - {work.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 md:ml-15 text-xs sm:text-sm text-muted-foreground">
            <div className="flex flex-col gap-3">
              <p>{work.description}</p>
              {"media" in work &&
                Array.isArray(work.media) &&
                work.media.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {work.media.map((m) => (
                      <img
                        key={m}
                        src={m}
                        alt={`${work.company} badge`}
                        className="size-24 sm:size-28 rounded-xl border border-border bg-white object-contain p-2 shadow-sm"
                      />
                    ))}
                  </div>
                )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

