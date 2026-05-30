import { cache } from "react";
import type { ReactNode } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import {
  Boxes,
  Cloud,
  Code2,
  Database,
  Palette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { getDb } from "@/lib/firebase";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

/**
 * The shape every section consumes. We reuse the static DATA's type so
 * components don't need to change — getContent() returns the same shape,
 * just sourced from Firestore (with a static fallback).
 */
export type Content = typeof DATA;

type IconComponent = (props: { className?: string }) => ReactNode;

// Icons can't live in Firestore (they're components), so we re-attach them
// from stable keys: skill category name, social name, and project link type.
const SKILL_ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  Frameworks: Boxes,
  "Backend & Database": Database,
  "Styling & UI": Palette,
  "Tools & DevOps": Wrench,
  Platforms: Cloud,
};

const SOCIAL_ICONS: Record<string, IconComponent> = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
  email: Icons.email,
  X: Icons.x,
  Youtube: Icons.youtube,
};

const skillIcon = (name: string): LucideIcon => SKILL_ICONS[name] ?? Code2;
const socialIcon = (name: string): IconComponent => SOCIAL_ICONS[name] ?? Icons.globe;
const linkIcon = (type: string): ReactNode => {
  const I = /source|github|code/i.test(type) ? Icons.github : Icons.globe;
  return <I className="size-3" />;
};

/**
 * Returns the portfolio content. Reads from Firestore when available and
 * seeded; otherwise returns the static `DATA` so the site never breaks.
 * Memoized per-request via React cache().
 */
export const getContent = cache(async (): Promise<Content> => {
  const db = getDb();
  if (!db) return DATA;

  try {
    const [profileSnap, socialsSnap, skillsSnap, workSnap, eduSnap, projSnap, osSnap] =
      await Promise.all([
        getDoc(doc(db, "profile", "main")),
        getDocs(query(collection(db, "socials"), orderBy("order"))),
        getDocs(query(collection(db, "skills"), orderBy("order"))),
        getDocs(query(collection(db, "work"), orderBy("order"))),
        getDocs(query(collection(db, "education"), orderBy("order"))),
        getDocs(query(collection(db, "projects"), orderBy("order"))),
        getDocs(query(collection(db, "openSource"), orderBy("order"))),
      ]);

    // Not migrated yet → use the static content so nothing breaks.
    if (!profileSnap.exists() || skillsSnap.empty || projSnap.empty) {
      return DATA;
    }

    const p = profileSnap.data();

    const social: Record<
      string,
      { name: string; url: string; icon: IconComponent; navbar: boolean }
    > = {};
    socialsSnap.docs.forEach((d) => {
      const s = d.data();
      social[s.name] = {
        name: s.name,
        url: s.url,
        icon: socialIcon(s.name),
        navbar: Boolean(s.navbar),
      };
    });

    const built = {
      name: p.name,
      initials: p.initials,
      url: p.url,
      location: p.location,
      locationLink: p.locationLink,
      description: p.description,
      summary: p.summary,
      avatarUrl: p.avatarUrl,
      resumeUrl: p.resumeUrl,
      skills: skillsSnap.docs.map((d) => {
        const s = d.data();
        return { name: s.name, icon: skillIcon(s.name), items: s.items ?? [] };
      }),
      navbar: DATA.navbar,
      contact: { email: p.email, tel: p.tel, social },
      work: workSnap.docs.map((d) => {
        const w = d.data();
        return {
          company: w.company,
          badges: w.badges ?? [],
          location: w.location,
          title: w.title,
          logoUrl: w.logoUrl ?? "",
          start: w.start,
          end: w.end,
          description: w.description,
          ...(Array.isArray(w.media) && w.media.length ? { media: w.media } : {}),
        };
      }),
      education: eduSnap.docs.map((d) => {
        const e = d.data();
        return {
          school: e.school,
          href: e.href,
          degree: e.degree,
          logoUrl: e.logoUrl ?? "",
          start: e.start,
          end: e.end,
        };
      }),
      projects: projSnap.docs.map((d) => {
        const pr = d.data();
        return {
          title: pr.title,
          type: pr.type ?? "",
          href: pr.href ?? "",
          dates: pr.dates ?? "",
          active: pr.active ?? true,
          description: pr.description,
          technologies: pr.technologies ?? [],
          links: (pr.links ?? []).map((l: { type: string; href: string }) => ({
            type: l.type,
            href: l.href,
            icon: linkIcon(l.type),
          })),
          image: pr.image ?? "",
          video: pr.video ?? "",
        };
      }),
      openSource: osSnap.docs.map((d) => {
        const o = d.data();
        return {
          name: o.name,
          repo: o.repo,
          repoUrl: o.repoUrl,
          prCount: o.prCount,
          description: o.description,
          prs: o.prs ?? [],
        };
      }),
    };

    return built as unknown as Content;
  } catch (err) {
    console.error("getContent: falling back to static data —", err);
    return DATA;
  }
});
