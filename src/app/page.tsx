/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/content";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import OpenSourceSection from "@/components/section/open-source-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, Download } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export const dynamic = "force-dynamic";

export default async function Page() {
  const content = await getContent();
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                as="h1"
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${content.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={content.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild size="sm" className="gap-2 cursor-pointer">
                    <a
                      href={content.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Resume
                      <Download className="size-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    <a href="#contact">Contact</a>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage
                  alt={content.name}
                  src={content.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{content.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {content.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection work={content.work} />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {content.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain bg-white flex-none"
                      />
                    ) : (
                      <div className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
            {content.skills.map((category, id) => (
              <li key={category.name} className="h-full">
                <BlurFade
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  className="h-full"
                >
                  <div className="border border-border rounded-xl p-4 flex flex-col gap-3 h-full bg-card/30">
                    <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center size-7 rounded-md border border-border bg-background text-foreground shrink-0">
                      <category.icon className="size-4" />
                    </span>
                    <h3 className="text-sm font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item) => {
                      const highlight =
                        "highlight" in item && item.highlight === true;
                      return (
                        <Badge
                          key={item.name}
                          variant={highlight ? "default" : "outline"}
                          className="text-[11px] font-medium h-6 px-2.5"
                        >
                          {item.name}
                        </Badge>
                      );
                      })}
                    </div>
                  </div>
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="open-source">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <OpenSourceSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
