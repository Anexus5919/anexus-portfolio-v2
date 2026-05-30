import { readFileSync } from "node:fs";
import { join } from "node:path";
import { NextResponse } from "next/server";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { DATA } from "@/data/resume";

export const dynamic = "force-dynamic";

// ── Admin Firestore (service account bypasses security rules for the seed) ──
function getAdminDb(): Firestore {
  if (!getApps().length) {
    const sa = JSON.parse(
      readFileSync(join(process.cwd(), "serviceAccount.json"), "utf8")
    );
    initializeApp({ credential: cert(sa) });
  }
  return getFirestore();
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export async function GET() {
  // Hard-disabled in production. This route is only for the one-time local seed.
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled in production." }, { status: 403 });
  }

  let db: Firestore;
  try {
    db = getAdminDb();
  } catch {
    return NextResponse.json(
      {
        error:
          "Could not load serviceAccount.json. Download it from Firebase Console → Project settings → Service accounts → Generate new private key, and save it in the project root as serviceAccount.json.",
      },
      { status: 500 }
    );
  }

  const counts: Record<string, number> = {};
  const batch = db.batch();

  // profile/main
  batch.set(db.collection("profile").doc("main"), {
    name: DATA.name,
    initials: DATA.initials,
    url: DATA.url,
    location: DATA.location,
    locationLink: DATA.locationLink,
    description: DATA.description,
    summary: DATA.summary,
    avatarUrl: DATA.avatarUrl,
    resumeUrl: DATA.resumeUrl,
    email: DATA.contact.email,
    tel: DATA.contact.tel,
  });
  counts.profile = 1;

  // socials
  Object.entries(DATA.contact.social).forEach(([key, s], i) => {
    batch.set(db.collection("socials").doc(key), {
      name: key,
      url: s.url,
      navbar: Boolean(s.navbar),
      order: i,
    });
  });
  counts.socials = Object.keys(DATA.contact.social).length;

  // skills
  DATA.skills.forEach((cat, i) => {
    batch.set(db.collection("skills").doc(slug(cat.name)), {
      name: cat.name,
      order: i,
      items: cat.items.map((it) => ({
        name: it.name,
        highlight: "highlight" in it && it.highlight === true,
      })),
    });
  });
  counts.skills = DATA.skills.length;

  // work
  DATA.work.forEach((w, i) => {
    batch.set(db.collection("work").doc(slug(w.company)), {
      company: w.company,
      title: w.title,
      location: w.location,
      logoUrl: w.logoUrl ?? "",
      start: w.start,
      end: w.end,
      description: w.description,
      badges: w.badges ?? [],
      media: "media" in w && Array.isArray(w.media) ? w.media : [],
      order: i,
    });
  });
  counts.work = DATA.work.length;

  // education
  DATA.education.forEach((e, i) => {
    batch.set(db.collection("education").doc(slug(e.school)), {
      school: e.school,
      href: e.href,
      degree: e.degree,
      logoUrl: e.logoUrl ?? "",
      start: e.start,
      end: e.end,
      order: i,
    });
  });
  counts.education = DATA.education.length;

  // projects
  DATA.projects.forEach((p, i) => {
    batch.set(db.collection("projects").doc(slug(p.title)), {
      title: p.title,
      type: p.type ?? "",
      href: p.href ?? "",
      dates: p.dates ?? "",
      description: p.description,
      technologies: p.technologies ?? [],
      image: p.image ?? "",
      video: p.video ?? "",
      active: p.active ?? true,
      links: (p.links ?? []).map((l) => ({ type: l.type, href: l.href })),
      order: i,
    });
  });
  counts.projects = DATA.projects.length;

  // openSource
  DATA.openSource.forEach((o, i) => {
    batch.set(db.collection("openSource").doc(slug(o.repo)), {
      name: o.name,
      repo: o.repo,
      repoUrl: o.repoUrl,
      prCount: o.prCount,
      description: o.description,
      prs: o.prs.map((pr) => ({ number: pr.number, title: pr.title, url: pr.url })),
      order: i,
    });
  });
  counts.openSource = DATA.openSource.length;

  await batch.commit();

  // Clean up any leftover setup-verification test docs in `messages`.
  let cleaned = 0;
  try {
    const stale = await db
      .collection("messages")
      .where("source", "==", "setup-verification")
      .get();
    const delBatch = db.batch();
    stale.forEach((d) => {
      delBatch.delete(d.ref);
      cleaned++;
    });
    if (cleaned) await delBatch.commit();
  } catch {
    /* ignore cleanup errors */
  }

  return NextResponse.json({
    ok: true,
    message: "Seeded Firestore from static content.",
    counts,
    cleanedTestDocs: cleaned,
  });
}
