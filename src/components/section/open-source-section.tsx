/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { GitMerge, GitPullRequest } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import { getContent } from "@/lib/content";

const BLUR_FADE_DELAY = 0.04;

export default async function OpenSourceSection() {
  const content = await getContent();
  const projects = content.openSource;
  const totalPRs = projects.reduce((sum, p) => sum + p.prCount, 0);
  const externalOrgs = new Set(
    projects
      .map((p) => p.repo.split("/")[0])
      .filter((org) => org.toLowerCase() !== "anexus5919")
  ).size;

  return (
    <section id="open-source" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Open Source
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              I contribute to open source
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I&apos;ve landed {totalPRs}+ merged pull requests across{" "}
              {externalOrgs} open-source organizations - from CI/CD platforms and
              component libraries to editors and educational tools. I enjoy diving
              into unfamiliar codebases and shipping fixes that real users rely on.
            </p>
          </div>
        </div>

        <ol className="relative flex flex-col list-none p-0 m-0 max-w-[640px] w-full mx-auto">
          {projects.map((project, id) => {
            const org = project.repo.split("/")[0];
            const isLast = id === projects.length - 1;
            return (
              <li
                key={project.repo}
                className="relative flex gap-x-4 sm:gap-x-5 pb-8 last:pb-0"
              >
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-5 top-11 bottom-0 w-px bg-border"
                  />
                )}
                <BlurFade
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  className="relative z-10 shrink-0"
                >
                  <img
                    src={`/logos/${org}.png`}
                    alt={`${org} logo`}
                    className="size-10 rounded-full border bg-white object-contain p-1 ring-2 ring-border shadow"
                  />
                </BlurFade>
                <BlurFade
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  className="flex flex-1 min-w-0"
                >
                  <div className="flex flex-1 flex-col gap-1.5 min-w-0 pt-0.5">
                    <span className="inline-flex w-fit items-center gap-1 text-xs text-muted-foreground">
                      <GitMerge className="size-3.5 text-violet-500" />
                      {project.prCount} merged{" "}
                      {project.prCount === 1 ? "PR" : "PRs"}
                    </span>
                    <h3 className="font-semibold leading-none">{project.name}</h3>
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-2"
                    >
                      {project.repo}
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                      {project.description}
                    </p>
                    <div className="mt-1 flex flex-col gap-1.5">
                      {project.prs.map((pr) => (
                        <Link
                          key={pr.url}
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <GitPullRequest className="size-3.5 mt-0.5 shrink-0 text-muted-foreground group-hover:text-violet-500 transition-colors" />
                          <span className="font-mono text-[11px] tabular-nums shrink-0 pt-px">
                            {pr.number}
                          </span>
                          <span className="min-w-0 break-words text-xs leading-snug">
                            {pr.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              </li>
            );
          })}
        </ol>

        <Badge
          variant="outline"
          className="mx-auto gap-1.5 text-xs font-medium border-border"
        >
          <GitMerge className="size-3.5 text-violet-500" />
          {totalPRs} pull requests merged · {externalOrgs} organizations
        </Badge>
      </div>
    </section>
  );
}
