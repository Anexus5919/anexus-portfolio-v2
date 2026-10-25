/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Award,
  Medal,
  Target,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { getContent } from "@/lib/content";

const BLUR_FADE_DELAY = 0.04;

const RESULT_ICONS: Record<string, LucideIcon> = {
  winner: Trophy,
  "runner-up": Medal,
  finalist: Award,
  rank: Target,
};

export default async function AchievementsSection() {
  const content = await getContent();
  const achievements = content.achievements ?? [];
  if (!achievements.length) return null;

  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">
              Achievements
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
            I love building under pressure
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Highlights from hackathons and competitions.
          </p>
        </div>
      </div>

      <ol className="relative flex flex-col list-none p-0 m-0 max-w-[640px] w-full mx-auto">
        {achievements.map((achievement, id) => {
          const Icon = RESULT_ICONS[achievement.kind] ?? Award;
          return (
            <li
              key={achievement.title}
              className="group/item relative flex gap-x-4 sm:gap-x-5 pb-8 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute left-5 top-11 bottom-0 w-px bg-border group-last/item:hidden"
              />
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className="relative z-10 shrink-0"
              >
                <img
                  src={achievement.logoUrl}
                  alt={`${achievement.title} logo`}
                  className="size-10 rounded-full border bg-white object-contain p-1 ring-2 ring-border shadow"
                />
              </BlurFade>
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className="flex flex-1 min-w-0"
              >
                <div className="flex flex-1 flex-col gap-1.5 min-w-0 pt-0.5">
                  <span className="inline-flex w-fit items-center gap-1 text-xs text-muted-foreground">
                    <Icon className="size-3.5 text-amber-500" aria-hidden />
                    {achievement.result}
                  </span>
                  <h3 className="font-semibold leading-none">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {achievement.description}
                  </p>
                  {(achievement.technologies.length > 0 ||
                    achievement.repoUrl) && (
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      {achievement.technologies.length > 0 && (
                        <span>{achievement.technologies.join(" · ")}</span>
                      )}
                      {achievement.repoUrl && (
                        <Link
                          href={achievement.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-w-0 items-center gap-1.5 hover:text-foreground hover:underline underline-offset-2 transition-colors"
                        >
                          <Icons.github className="size-3.5 shrink-0" />
                          <span className="wrap-break-word">
                            {achievement.repo}
                          </span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </BlurFade>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
