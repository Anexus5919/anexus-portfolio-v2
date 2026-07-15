import Link from "next/link";
import { WaveGrid } from "@/components/magicui/wave-grid";
import { ContactForm } from "@/components/contact-form";
import { getContent } from "@/lib/content";

export default async function ContactSection() {
  const content = await getContent();
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <WaveGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          maxOpacity={0.45}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, the fastest way to reach me is{" "}
          <Link
            href={content.contact.social.email.url}
            className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            by email
          </Link>{" "}
          - I&apos;ll respond whenever I can.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Link
            href={content.contact.social.email.url}
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {content.contact.email}
          </Link>
          <Link
            href={content.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            LinkedIn
          </Link>
          <Link
            href={content.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            GitHub
          </Link>
        </div>
        <div className="w-full max-w-xl pt-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
