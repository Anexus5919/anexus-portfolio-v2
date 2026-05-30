import { buildCollection, buildProperty } from "@firecms/core";
import { CloudinaryUploadField } from "../CloudinaryUploadField";

// Image string field that uploads to Cloudinary (no Firebase Storage needed).
const imageField = (name: string, description?: string) =>
  buildProperty({
    name,
    dataType: "string" as const,
    Field: CloudinaryUploadField,
    description,
  });

const orderProperty = buildProperty({
  name: "Order",
  dataType: "number" as const,
  description: "Lower numbers appear first on the site.",
});

// ── Profile (single document: profile/main) ──
export const profileCollection = buildCollection({
  name: "Profile",
  singularName: "Profile",
  id: "profile",
  path: "profile",
  icon: "Person",
  group: "Site",
  description: "Your name, headline, About summary, avatar and contact details.",
  permissions: () => ({ read: true, edit: true, create: false, delete: false }),
  properties: {
    name: { name: "Name", dataType: "string", validation: { required: true } },
    initials: { name: "Initials", dataType: "string" },
    description: {
      name: "Headline / tagline",
      dataType: "string",
      multiline: true,
      description: "Shown under the hero and used for SEO.",
    },
    summary: {
      name: "About summary",
      dataType: "string",
      markdown: true,
      description: "Supports markdown + links like [text](/#section).",
    },
    avatarUrl: imageField("Avatar"),
    resumeUrl: { name: "Résumé URL", dataType: "string", description: "e.g. /Adarsh_Singh_SDE_Resume.pdf" },
    email: { name: "Email", dataType: "string", email: true },
    tel: { name: "Phone", dataType: "string" },
    location: { name: "Location", dataType: "string" },
    locationLink: { name: "Location link", dataType: "string", url: true },
    url: { name: "Site URL", dataType: "string", url: true, description: "Your live domain (used for SEO/OG)." },
  },
});

// ── Socials ──
export const socialsCollection = buildCollection({
  name: "Socials",
  singularName: "Social link",
  id: "socials",
  path: "socials",
  icon: "Share",
  group: "Site",
  initialSort: ["order", "asc"],
  properties: {
    name: {
      name: "Name",
      dataType: "string",
      validation: { required: true },
      description: "Use exactly: GitHub, LinkedIn, or email (controls the icon).",
    },
    url: { name: "URL", dataType: "string", validation: { required: true } },
    navbar: { name: "Show in dock", dataType: "boolean" },
    order: orderProperty,
  },
});

// ── Skills (6 categories) ──
export const skillsCollection = buildCollection({
  name: "Skills",
  singularName: "Skill category",
  id: "skills",
  path: "skills",
  icon: "Code",
  group: "Content",
  initialSort: ["order", "asc"],
  properties: {
    name: {
      name: "Category",
      dataType: "string",
      validation: { required: true },
      description: "e.g. Languages, Frameworks, Backend & Database…",
    },
    items: {
      name: "Skills",
      dataType: "array",
      of: {
        dataType: "map",
        properties: {
          name: { name: "Name", dataType: "string", validation: { required: true } },
          highlight: { name: "Highlight", dataType: "boolean" },
        },
      },
    },
    order: orderProperty,
  },
});

// ── Work experience ──
export const workCollection = buildCollection({
  name: "Work Experience",
  singularName: "Role",
  id: "work",
  path: "work",
  icon: "Work",
  group: "Content",
  initialSort: ["order", "asc"],
  properties: {
    company: { name: "Company", dataType: "string", validation: { required: true } },
    title: { name: "Title", dataType: "string", validation: { required: true } },
    location: { name: "Location", dataType: "string" },
    start: { name: "Start", dataType: "string", description: 'e.g. "May 2026"' },
    end: { name: "End", dataType: "string", description: 'e.g. "Present"' },
    description: { name: "Description", dataType: "string", multiline: true },
    logoUrl: imageField("Logo"),
    media: {
      name: "Media / badges",
      dataType: "array",
      of: imageField("Image"),
      description: "Optional images shown when the entry is expanded.",
    },
    badges: { name: "Badges (text)", dataType: "array", of: { dataType: "string" } },
    order: orderProperty,
  },
});

// ── Education ──
export const educationCollection = buildCollection({
  name: "Education",
  singularName: "School",
  id: "education",
  path: "education",
  icon: "School",
  group: "Content",
  initialSort: ["order", "asc"],
  properties: {
    school: { name: "School", dataType: "string", validation: { required: true } },
    degree: { name: "Degree", dataType: "string" },
    href: { name: "Link", dataType: "string", url: true },
    logoUrl: imageField("Logo"),
    start: { name: "Start", dataType: "string" },
    end: { name: "End", dataType: "string" },
    order: orderProperty,
  },
});

// ── Projects ──
export const projectsCollection = buildCollection({
  name: "Projects",
  singularName: "Project",
  id: "projects",
  path: "projects",
  icon: "Dashboard",
  group: "Content",
  initialSort: ["order", "asc"],
  properties: {
    title: { name: "Title", dataType: "string", validation: { required: true } },
    type: { name: "Type / event", dataType: "string", description: 'e.g. "Smart India Hackathon 2025"' },
    description: { name: "Description", dataType: "string", multiline: true },
    technologies: { name: "Tech tags", dataType: "array", of: { dataType: "string" } },
    image: imageField("Screenshot"),
    href: { name: "Primary link", dataType: "string", url: true },
    video: { name: "Video URL (optional)", dataType: "string", url: true },
    active: { name: "Active", dataType: "boolean" },
    links: {
      name: "Links",
      dataType: "array",
      of: {
        dataType: "map",
        properties: {
          type: {
            name: "Type",
            dataType: "string",
            enumValues: { Website: "Website", Source: "Source" },
          },
          href: { name: "URL", dataType: "string", url: true },
        },
      },
    },
    order: orderProperty,
  },
});

// ── Open source contributions ──
export const openSourceCollection = buildCollection({
  name: "Open Source",
  singularName: "Contribution",
  id: "openSource",
  path: "openSource",
  icon: "MergeType",
  group: "Content",
  initialSort: ["order", "asc"],
  properties: {
    name: { name: "Project name", dataType: "string", validation: { required: true } },
    repo: { name: "Repo (org/name)", dataType: "string", description: "e.g. jenkinsci/jenkins" },
    repoUrl: { name: "Repo URL", dataType: "string", url: true },
    prCount: { name: "Merged PR count", dataType: "number" },
    description: { name: "Description", dataType: "string", multiline: true },
    prs: {
      name: "Pull Requests",
      dataType: "array",
      of: {
        dataType: "map",
        properties: {
          number: { name: "PR #", dataType: "string", description: "e.g. #26574" },
          title: { name: "Title", dataType: "string" },
          url: { name: "URL", dataType: "string", url: true },
        },
      },
    },
    order: orderProperty,
  },
});

// ── Contact form submissions (read / manage only) ──
export const messagesCollection = buildCollection({
  name: "Messages",
  singularName: "Message",
  id: "messages",
  path: "messages",
  icon: "Email",
  group: "Inbox",
  initialSort: ["createdAt", "desc"],
  permissions: () => ({ read: true, edit: true, create: false, delete: true }),
  properties: {
    name: { name: "Name", dataType: "string", readOnly: true },
    email: { name: "Email", dataType: "string", readOnly: true },
    message: { name: "Message", dataType: "string", multiline: true, readOnly: true },
    createdAt: { name: "Received", dataType: "date", readOnly: true },
    read: { name: "Read", dataType: "boolean" },
    source: { name: "Source", dataType: "string", readOnly: true },
  },
});

export const portfolioCollections = [
  profileCollection,
  socialsCollection,
  skillsCollection,
  workCollection,
  educationCollection,
  projectsCollection,
  openSourceCollection,
  messagesCollection,
];
