import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Code2,
  Boxes,
  Database,
  Palette,
  Wrench,
  Cloud,
  Play,
} from "lucide-react";

export const DATA = {
  name: "Adarsh Singh",
  initials: "AS",
  // Live production URL (used for SEO + OG images).
  url: "https://anexus-portfolio-v2.vercel.app",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Full-stack developer & active open-source contributor. I love turning ideas into polished, scalable web apps - and shipping fixes that the open-source community relies on.",
  summary:
    "I'm a full-stack developer and a **B.E. Information Technology** student at [VESIT, Chembur](/#education), where I maintain a 9.51 CGPA. I love building things end-to-end - I've shipped [12+ projects](/#projects) across AI, real-time, and 3D web, from a privacy-focused messaging platform to an AI-assisted travel planner.\n\nI'm an [active open-source contributor](/#open-source) with merged pull requests across 8+ major projects, including Jenkins, MUI, Medusa, AFFiNE, and Sugar Labs, and I'm currently contributing through [GirlScript Summer of Code 2026](/#work). I also love building under pressure at hackathons like the Smart India Hackathon - and turning fast prototypes into things people actually use.",
  avatarUrl: "/profile.jpeg",
  resumeUrl: "/Adarsh_Singh_SDE_Resume.pdf",
  skills: [
    {
      name: "Languages",
      icon: Code2,
      items: [
        { name: "TypeScript" },
        { name: "JavaScript", highlight: true },
        { name: "Java", highlight: true },
        { name: "Python" },
        { name: "SQL" },
      ],
    },
    {
      name: "Frameworks",
      icon: Boxes,
      items: [
        { name: "Next.js", highlight: true },
        { name: "React", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "Elysia.js" },
        { name: "Three.js" },
      ],
    },
    {
      name: "Backend & Database",
      icon: Database,
      items: [
        { name: "Node.js", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "Upstash Redis" },
        { name: "Cloudinary" },
        { name: "JWT" },
      ],
    },
    {
      name: "Styling & UI",
      icon: Palette,
      items: [
        { name: "Tailwind CSS", highlight: true },
        { name: "Shadcn UI", highlight: true },
        { name: "GSAP", highlight: true },
        { name: "CSS3" },
        { name: "Framer Motion" },
      ],
    },
    {
      name: "Tools & DevOps",
      icon: Wrench,
      items: [
        { name: "Git", highlight: true },
        { name: "Docker", highlight: true },
        { name: "Kubernetes" },
        { name: "Jenkins" },
        { name: "Selenium" },
      ],
    },
    {
      name: "Platforms",
      icon: Cloud,
      items: [
        { name: "Vercel", highlight: true },
        { name: "Firebase", highlight: true },
        { name: "Figma", highlight: true },
        { name: "Postman" },
        { name: "VS Code", highlight: true },
      ],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "anexus5919@gmail.com",
    tel: "+919324449044",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Anexus5919",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anexus/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anexus5919@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "GirlScript Summer of Code",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/logos/girlscript.png",
      start: "May 2026",
      end: "Present",
      description:
        "Selected as a contributor for GSSoC 2026 (Open Source Track) - one of India's largest open-source programs. Shipping reviewed, maintainer-approved pull requests to large-scale open-source projects, ranging from UI/UX fixes to production-grade features.",
      media: ["/open_source.jpg", "/contributor.jpg"],
    },
    {
      company: "Sports Reconnect - Internship Programme",
      badges: [],
      location: "Mumbai, Maharashtra",
      title: "SDE Intern",
      logoUrl: "/intern.png",
      start: "Dec 2025",
      end: "Mar 2026",
      description:
        "Streamlined athlete profile management, reducing manual resume updates by ~70% and improving media load efficiency. Engineered structured MongoDB schemas, a dynamic Next.js 16 frontend, and an optimized Cloudinary-based media pipeline for images and videos.",
    },
  ],
  education: [
    {
      school: "Vivekanand Education Society's Institute of Technology",
      href: "https://vesit.ves.ac.in/",
      degree: "B.E. Information Technology · CGPA: 9.51",
      logoUrl: "/vesit.png",
      start: "June 2024",
      end: "May 2028",
    },
  ],
  projects: [
    {
      title: "PDF Forensics & Compliance Engine (Pramana)",
      type: "Smart India Hackathon 2026",
      href: "https://drive.google.com/file/d/1EWt5FSUE9omqn0tEgNDzp0GsQ5wujE_l/view",
      dates: "Oct 2026",
      active: true,
      description:
        "Decision-support platform that validates AICTE approval applications against 29 cited handbook rules, reads documents with OCR (including Devanagari), verifies PDF signatures against CCA India root certificates and detects tampering such as edited revisions, overlaid text and reused seals; 54 of 54 planted problems caught with 0 false alarms.",
      technologies: ["Python", "FastAPI", "React", "pyHanko", "RapidOCR", "Ollama"],
      links: [
        {
          type: "Demo Video",
          href: "https://drive.google.com/file/d/1EWt5FSUE9omqn0tEgNDzp0GsQ5wujE_l/view",
          icon: <Play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/pramana",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pramana.webp",
      video: "",
    },
    {
      title: "Laya System-1 Model Game Agent (CodeYatri)",
      type: "Genesis 2.0 · Winner (1st Place)",
      href: "https://drive.google.com/file/d/1UMB7RkfHeGB_brMDGqnlsZtpY0VC-a4_/view",
      dates: "Oct 2026",
      active: true,
      description:
        "Game agent driven by Laya, a System-1 open-weight decision model, playing Snake, 2048 and Doom: Python turns live game state into one-move facts, asks Laya one yes/no question per legal action in a single forward pass and plays the highest normalised P(true), with every decision hash-chained and fsynced before the move is sent; full-model fine-tuning on Kaggle T4 GPUs raised 2048 runs reaching 512 from 0% to 79% (held-out agreement 0.49 to 0.93) and cleared Doom's deadly corridor 3 of 3 in ViZDoom.",
      technologies: ["Python", "PyTorch", "ViZDoom", "Hugging Face"],
      links: [
        {
          type: "Demo Video",
          href: "https://drive.google.com/file/d/1UMB7RkfHeGB_brMDGqnlsZtpY0VC-a4_/view",
          icon: <Play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/codeyatri-laya",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codeyatri.webp",
      video: "",
    },
    {
      title: "Zero-Trust Trading Copilot (Countersign)",
      type: "SYRUS 7.0 · Runner-up (2nd Place)",
      href: "https://drive.google.com/file/d/1QxKDCzzJGd8C6PcHabohDKIzxevq2O4d/view",
      dates: "Oct 2026",
      active: true,
      description:
        "Trading copilot that treats the language model as an untrusted translator with no credentials: every proposed order is verified deterministically and countersigned with a WebAuthn passkey before an isolated executor, the only holder of the broker key, places it at most once; 0 unapproved trades across 9 Attack Lab scenarios.",
      technologies: ["Next.js", "FastAPI", "DBOS", "PostgreSQL", "Valkey", "TLA+"],
      links: [
        {
          type: "Demo Video",
          href: "https://drive.google.com/file/d/1QxKDCzzJGd8C6PcHabohDKIzxevq2O4d/view",
          icon: <Play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CMPN-CODECELL/Syrus7_CodeYodha",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/countersign.webp",
      video: "",
    },
    {
      title: "Geo-Clustered Itinerary Planner (RoamIQ)",
      type: "SerpApi India Hackathon 2026",
      href: "https://roam-iq.vercel.app",
      dates: "Sep 2026",
      active: true,
      description:
        "Itinerary planner that turns live SerpApi flight, hotel, place and news data into day-by-day plans; stops are clustered into compact days with a capacitated greedy pass and ordered by nearest-neighbour routing over Haversine distances before the model writes only the narrative, and plans are drag-editable and shared by QR code with no database.",
      technologies: ["Next.js", "React", "Tailwind CSS", "SerpApi", "Groq"],
      links: [
        {
          type: "Website",
          href: "https://roam-iq.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo Video",
          href: "https://drive.google.com/file/d/1vTDYpX7oOSzPXmiDxI5e6PeUKy-rtvnW/view",
          icon: <Play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/RoamIQ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/roamiq.webp",
      video: "",
    },
    {
      title: "Multi-Agent RAG Onboarding Platform (OnBoardIQ)",
      type: "Syrus 2026 Hackathon",
      href: "https://onboardiq-web.vercel.app",
      dates: "Mar 2026",
      active: true,
      description:
        "Onboarding platform where specialised agents generate role-specific checklists, answer questions by RAG over pgvector embeddings and automate GitHub, Slack and Jira tasks, with a VS Code extension that detects the project stack, verifies the local environment and streams responses over Socket.io.",
      technologies: [
        "Next.js",
        "Fastify",
        "Prisma",
        "PostgreSQL (pgvector)",
        "Redis (BullMQ)",
        "Groq",
      ],
      links: [
        {
          type: "Website",
          href: "https://onboardiq-web.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/OnBoardIQ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/onboardiq.webp",
      video: "",
    },
    {
      title: "Code-Graph Wiki Engine (EveryRepo)",
      type: "Personal Project",
      href: "https://everyrepo.me",
      dates: "Sep 2026",
      active: true,
      description:
        "Codebase explainer for any public GitHub repository: parses code with tree-sitter, ranks files on the import graph with PageRank and generates a wiki in which every paragraph cites commit-pinned source lines, with an Ask box over hybrid FTS5 and vector search and contribution guidance from real repository activity.",
      technologies: ["TypeScript", "Astro", "SQLite", "Drizzle", "Cloudflare Workers AI"],
      links: [
        {
          type: "Website",
          href: "https://everyrepo.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/everyrepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/everyrepo.webp",
      video: "",
    },
    {
      title: "Geofenced Workforce Tracking PWA (SWRMS)",
      type: "BMC Chembur Ward · UN SDG 11",
      href: "https://swrms.vercel.app",
      dates: "Apr 2026",
      active: true,
      description:
        "Workforce and route platform for the BMC Solid Waste Management department: geo-fenced attendance with mock-GPS rejection, face verification on 128-dimensional embeddings, live tracking with route-deviation and idle alerts over Server-Sent Events and Web Push, automated reallocation and a tamper-evident audit log, in a multilingual offline-first PWA.",
      technologies: ["Next.js 16", "MongoDB", "face-api.js", "OSRM", "Leaflet"],
      links: [
        {
          type: "Website",
          href: "https://swrms.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/SWRMS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/swrms.webp",
      video: "",
    },
    {
      title: "MapLibre Live-Tracking Delivery Platform (Foodie)",
      type: "GradGuide Freelance Project",
      href: "https://foodie-three-sigma.vercel.app",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "Food delivery platform with restaurant discovery and filters, real-time search, cart and coupon checkout, simulated live order tracking on a MapLibre map, Firebase Google Sign-In and a Gemini-powered assistant for food and diet questions.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://foodie-three-sigma.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/foodie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/foodie.webp",
      video: "",
    },
    {
      title: "Secure Ephemeral Messaging",
      type: "Personal Project",
      href: "https://realtime-chat-ivory-rho.vercel.app",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      description:
        "Privacy-focused real-time chat with 2-participant rooms and auto-destructing messages via TTL-based eviction.",
      technologies: ["Next.js 16", "ElysiaJS", "Upstash", "Eden Treaty"],
      links: [
        {
          type: "Website",
          href: "https://realtime-chat-ivory-rho.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/realtime-chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/realtime_chat.webp",
      video: "",
    },
    {
      title: "SRE Incident Triage Environment",
      type: "OpenEnv AI x Meta Hackathon",
      href: "https://huggingface.co/spaces/Anexus5919/incident_triage_env",
      dates: "Apr 2026",
      active: true,
      description:
        "An OpenEnv reinforcement-learning environment where AI agents act as on-call SREs, investigating logs, metrics, and service dependencies to diagnose root causes and remediate production incidents across graded scenarios.",
      technologies: ["Python", "OpenEnv", "FastAPI", "Docker", "Reinforcement Learning"],
      links: [
        {
          type: "Hugging Face",
          href: "https://huggingface.co/spaces/Anexus5919/incident_triage_env",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/incident-triage-env",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/openenv.png",
      video: "",
    },
  ],
  writing: [
    {
      title: "Surviving Myself",
      kicker: "Psychological Horror",
      description:
        "My first published book. More than a horror story, it is an immersive experience where every chapter uncovers a little more of its meaning. It grew out of my interest in psychological storytelling, layered narratives, and stories that linger long after the final page.",
      publisher: "Self-published",
      date: "May 2026",
      isbn: "979-8198919655",
      cover: "/book-cover.webp",
      links: [
        {
          label: "Read it on Pothi (India)",
          href: "https://store.pothi.com/book/adarsh-singh-surviving-myself/",
        },
      ],
      amazon: [
        { country: "United States", href: "https://a.co/d/0b3IM5Gy" },
        { country: "United Kingdom", href: "https://amzn.eu/d/03qHkEs1" },
        { country: "Germany", href: "https://amzn.eu/d/07sjrPi3" },
        { country: "France", href: "https://amzn.eu/d/0dkpvOXX" },
        { country: "Spain", href: "https://amzn.eu/d/0hGn5TPt" },
        { country: "Italy", href: "https://amzn.eu/d/00VSr8ik" },
        { country: "Netherlands", href: "https://amzn.eu/d/097zcQ7x" },
        { country: "Poland", href: "https://amzn.eu/d/0eMo2aOq" },
        { country: "Sweden", href: "https://amzn.eu/d/0ji9ZfyN" },
        { country: "Belgium", href: "https://amzn.eu/d/06lPc4CM" },
        { country: "Ireland", href: "https://amzn.eu/d/06imvIT6" },
        { country: "Japan", href: "https://amzn.asia/d/0547zHQN" },
        { country: "Canada", href: "https://a.co/d/04M5X7Qp" },
        { country: "Australia", href: "https://amzn.asia/d/00kXnxyZ" },
      ],
    },
  ],
  openSource: [
    {
      name: "MUI X",
      repo: "mui/mui-x",
      repoUrl: "https://github.com/mui/mui-x",
      prCount: 37,
      description:
        "Shipped 35+ fixes across MUI's advanced React component library, spanning the Scheduler, Data Grid, Pickers, Charts, Tree View, and Chat packages, improving accessibility, recurring-event handling, and date-adapter correctness.",
      prs: [
        {
          number: "#22162",
          title: "[charts] Save full-circle flag on rotation axis",
          url: "https://github.com/mui/mui-x/pull/22162",
        },
        {
          number: "#22095",
          title:
            "[scheduler] Use fieldset/legend instead of headings for form sections in the event dialog",
          url: "https://github.com/mui/mui-x/pull/22095",
        },
        {
          number: "#22036",
          title:
            "[scheduler] Reset scroll position when navigating to a new time period",
          url: "https://github.com/mui/mui-x/pull/22036",
        },
        {
          number: "#22266",
          title:
            "[scheduler] Complete ARIA grid semantics on EventTimeline and EventCalendar",
          url: "https://github.com/mui/mui-x/pull/22266",
        },
        {
          number: "#22476",
          title:
            "[scheduler] Deduplicate staged ranges within the debounce window",
          url: "https://github.com/mui/mui-x/pull/22476",
        },
        {
          number: "#22552",
          title: "[scheduler] Show scope dialog when deleting a recurring event",
          url: "https://github.com/mui/mui-x/pull/22552",
        },
        {
          number: "#22773",
          title: "[scheduler] Clear clipboard after pasting a cut event",
          url: "https://github.com/mui/mui-x/pull/22773",
        },
        {
          number: "#22774",
          title:
            "[pickers] Fix AdapterMomentHijri.getDaysInMonth returning the Gregorian month length",
          url: "https://github.com/mui/mui-x/pull/22774",
        },
        {
          number: "#22775",
          title:
            "[scheduler] Show drag placeholder when re-entering the same position",
          url: "https://github.com/mui/mui-x/pull/22775",
        },
        {
          number: "#22780",
          title:
            "[scheduler] Recalculate DayTimeGrid hasScroll on container resize",
          url: "https://github.com/mui/mui-x/pull/22780",
        },
        {
          number: "#22790",
          title: "[scheduler] Validate missing and duplicate event ids",
          url: "https://github.com/mui/mui-x/pull/22790",
        },
        {
          number: "#22791",
          title:
            "[scheduler] Return a primitive key from the Calendar lazy-loading selector",
          url: "https://github.com/mui/mui-x/pull/22791",
        },
        {
          number: "#22792",
          title:
            "[scheduler] Normalize all-day recurring occurrences to whole days",
          url: "https://github.com/mui/mui-x/pull/22792",
        },
        {
          number: "#22793",
          title:
            "[scheduler] Recompute nowUpdatedEveryMinute only on timezone change",
          url: "https://github.com/mui/mui-x/pull/22793",
        },
        {
          number: "#22794",
          title:
            "[scheduler] Register auto-scroll once instead of on every render",
          url: "https://github.com/mui/mui-x/pull/22794",
        },
        {
          number: "#22795",
          title: "[scheduler] Remove duplicate dividers in the day/time grid",
          url: "https://github.com/mui/mui-x/pull/22795",
        },
        {
          number: "#22799",
          title:
            "[scheduler] Remove unused --has-scroll CSS variable from DayTimeGrid",
          url: "https://github.com/mui/mui-x/pull/22799",
        },
        {
          number: "#22851",
          title:
            "[DataGridPremium] Escape singleSelect values in Excel export with escapeFormulas enabled",
          url: "https://github.com/mui/mui-x/pull/22851",
        },
        {
          number: "#22873",
          title:
            "[scheduler] Highlight only the edited occurrence of a recurring event",
          url: "https://github.com/mui/mui-x/pull/22873",
        },
        {
          number: "#22972",
          title:
            "[pickers] Use the Hijri day token in AdapterMomentHijri normalDateWithWeekday",
          url: "https://github.com/mui/mui-x/pull/22972",
        },
        {
          number: "#22974",
          title:
            "[pickers] Use calendar day tokens in AdapterMomentHijri and AdapterMomentJalaali formats",
          url: "https://github.com/mui/mui-x/pull/22974",
        },
        {
          number: "#22874",
          title:
            "[scheduler] Carry custom event data through the edit dialog submit",
          url: "https://github.com/mui/mui-x/pull/22874",
        },
        {
          number: "#22958",
          title: "[data grid] Prevent cell editing from resurrecting a deleted row",
          url: "https://github.com/mui/mui-x/pull/22958",
        },
        {
          number: "#22981",
          title:
            "[pickers] Flag the first and last visible day cell across year boundaries",
          url: "https://github.com/mui/mui-x/pull/22981",
        },
        {
          number: "#22987",
          title:
            "[DateRangeCalendar] Fix auto month-switch across the year boundary",
          url: "https://github.com/mui/mui-x/pull/22987",
        },
        {
          number: "#23005",
          title: "[tree view] Discard superseded lazy-loading responses",
          url: "https://github.com/mui/mui-x/pull/23005",
        },
        {
          number: "#23006",
          title:
            "[tree view] Prevent duplicate ids in multi-select arrow navigation",
          url: "https://github.com/mui/mui-x/pull/23006",
        },
        {
          number: "#23007",
          title:
            "[scheduler] Keep the occurrence date when editing only one recurring event",
          url: "https://github.com/mui/mui-x/pull/23007",
        },
        {
          number: "#23008",
          title:
            "[chat] Cap markdown input length to avoid a render-thread freeze",
          url: "https://github.com/mui/mui-x/pull/23008",
        },
        {
          number: "#23326",
          title:
            "[pickers] Keep the gridcell role and the column index on filler cells",
          url: "https://github.com/mui/mui-x/pull/23326",
        },
        {
          number: "#23341",
          title: "[tree view] Use useId for the default tree id",
          url: "https://github.com/mui/mui-x/pull/23341",
        },
        {
          number: "#23637",
          title:
            "[scheduler] Pass the weekday token to the monthly recurrence labels",
          url: "https://github.com/mui/mui-x/pull/23637",
        },
        {
          number: "#23641",
          title: "[DataGridPremium] Clear the aggregation from the column menu",
          url: "https://github.com/mui/mui-x/pull/23641",
        },
        {
          number: "#23681",
          title:
            "[charts] Disable the SparkLineChart axis listener when nothing uses it",
          url: "https://github.com/mui/mui-x/pull/23681",
        },
        {
          number: "#23721",
          title:
            "[charts-pro] Fix image export under a CSP when styles come only from <link> stylesheets",
          url: "https://github.com/mui/mui-x/pull/23721",
        },
        {
          number: "#23749",
          title:
            "[scheduler] Add timeGridEvents option to keep overnight timed events in the time grid",
          url: "https://github.com/mui/mui-x/pull/23749",
        },
        {
          number: "#23753",
          title: "[data grid] Keep empty first and last cells when copying rows",
          url: "https://github.com/mui/mui-x/pull/23753",
        },
      ],
    },
    {
      name: "Jenkins",
      repo: "jenkinsci/jenkins",
      repoUrl: "https://github.com/jenkinsci/jenkins",
      prCount: 7,
      description:
        "Shipped multiple UI fixes to the world's leading open-source CI/CD automation server, spanning the build parameters dialog, the build-log and console pages, form validation errors, and combobox and autocomplete behavior on desktop and touch devices.",
      prs: [
        {
          number: "#26574",
          title:
            "fix: prevent long parameter values from overflowing the parameters dialog",
          url: "https://github.com/jenkinsci/jenkins/pull/26574",
        },
        {
          number: "#26637",
          title: "fix: restore cancel button on build log page",
          url: "https://github.com/jenkinsci/jenkins/pull/26637",
        },
        {
          number: "#26727",
          title: "Restore job name in run console and changes page titles",
          url: "https://github.com/jenkinsci/jenkins/pull/26727",
        },
        {
          number: "#26884",
          title:
            "Fix combobox and autocomplete dropdown selection beyond the first item",
          url: "https://github.com/jenkinsci/jenkins/pull/26884",
        },
        {
          number: "#26818",
          title:
            "fix(ui): show concise error on form field validation failure during page load",
          url: "https://github.com/jenkinsci/jenkins/pull/26818",
        },
        {
          number: "#26922",
          title: "Fix combobox suggestion list flashing on click",
          url: "https://github.com/jenkinsci/jenkins/pull/26922",
        },
        {
          number: "#26923",
          title:
            "Fix dropdown suggestions requiring a double tap on touch devices",
          url: "https://github.com/jenkinsci/jenkins/pull/26923",
        },
      ],
    },
    {
      name: "Accord Project",
      repo: "accordproject/template-playground",
      repoUrl: "https://github.com/accordproject/template-playground",
      prCount: 6,
      description:
        "Resolved ESLint errors across the codebase, fixed layout overflow and dark-mode legibility issues, added a confirmation modal before loading sample templates, and restored the Cicero CLI draft command with updated docs.",
      prs: [
        {
          number: "#440",
          title: "chore(lint): resolve ESLint errors and warnings across codebase",
          url: "https://github.com/accordproject/template-playground/pull/440",
        },
        {
          number: "#433",
          title: "fix(ui): constrain learn layout height to prevent overflow",
          url: "https://github.com/accordproject/template-playground/pull/433",
        },
        {
          number: "#868",
          title:
            "feat(ux): add confirmation modal before loading sample template",
          url: "https://github.com/accordproject/template-playground/pull/868",
        },
        {
          number: "#893",
          title:
            "fix(ui): theme Settings modal subtree to make text legible in dark mode",
          url: "https://github.com/accordproject/template-playground/pull/893",
        },
        {
          number: "#917",
          title: "feat(cicero-cli): re-add draft command using the template-engine",
          url: "https://github.com/accordproject/template-archive/pull/917",
        },
        {
          number: "#547",
          title:
            "docs: update cicero CLI reference and hello world tutorial for the current commands",
          url: "https://github.com/accordproject/techdocs/pull/547",
        },
      ],
    },
    {
      name: "Frappe LMS",
      repo: "frappe/lms",
      repoUrl: "https://github.com/frappe/lms",
      prCount: 2,
      description:
        "Fixed critical UI and state management issues in Frappe's open-source learning management system, improving lesson reindexing after deletion and resolving sidebar overlap bugs.",
      prs: [
        {
          number: "#2018",
          title: "fix: reindex lessons after deletion to prevent stale form state",
          url: "https://github.com/frappe/lms/pull/2018",
        },
        {
          number: "#2017",
          title: "fix: instructor notes block settings menu overlapped by sidebar",
          url: "https://github.com/frappe/lms/pull/2017",
        },
      ],
    },
    {
      name: "AsyncAPI",
      repo: "asyncapi/website",
      repoUrl: "https://github.com/asyncapi/website",
      prCount: 1,
      description:
        "Shipped a fix to the official website of the Linux Foundation-backed event-driven API specification, restricting YouTube embed recommendations to AsyncAPI's own channel.",
      prs: [
        {
          number: "#5309",
          title:
            "fix: restrict YouTube embed recommendations to AsyncAPI channel on roadmap page",
          url: "https://github.com/asyncapi/website/pull/5309",
        },
      ],
    },
    {
      name: "AFFiNE",
      repo: "toeverything/AFFiNE",
      repoUrl: "https://github.com/toeverything/AFFiNE",
      prCount: 2,
      description:
        "Shipped core editor fixes to this widely-adopted Notion-alternative workspace - aligning selection/drag-handle/cursor overlays with blocks and resolving UX inconsistencies in the AI chat interface.",
      prs: [
        {
          number: "#14862",
          title:
            "fix(editor): align selection/handle/remote/text overlays with blocks",
          url: "https://github.com/toeverything/AFFiNE/pull/14862",
        },
        {
          number: "#14850",
          title: "fix(editor): resolve UX inconsistencies in the AI chat interface",
          url: "https://github.com/toeverything/AFFiNE/pull/14850",
        },
      ],
    },
    {
      name: "Medusa.js",
      repo: "medusajs/medusa",
      repoUrl: "https://github.com/medusajs/medusa",
      prCount: 2,
      description:
        "Contributed to this popular headless commerce platform with a dashboard UX fix that auto-selects the currency row when its tax-inclusive toggle is enabled, plus a codebase-wide 'provirder' typo correction.",
      prs: [
        {
          number: "#15164",
          title:
            "fix(dashboard): auto-select currency row when its tax-inclusive toggle is enabled",
          url: "https://github.com/medusajs/medusa/pull/15164",
        },
        {
          number: "#14614",
          title: "fix: correct 'provirder' typo to 'provider' across files",
          url: "https://github.com/medusajs/medusa/pull/14614",
        },
      ],
    },
    {
      name: "Music Blocks",
      repo: "sugarlabs/musicblocks",
      repoUrl: "https://github.com/sugarlabs/musicblocks",
      prCount: 2,
      description:
        "Contributed to Sugar Labs' educational music-and-coding platform - fixing a core off-by-one bug in the nth modal pitch block and cleaning up unused ESLint directives.",
      prs: [
        {
          number: "#6438",
          title: "fix: correct off-by-one error in nth modal pitch block",
          url: "https://github.com/sugarlabs/musicblocks/pull/6438",
        },
        {
          number: "#6828",
          title: "chore: remove unused eslint-disable directives",
          url: "https://github.com/sugarlabs/musicblocks/pull/6828",
        },
      ],
    },
    {
      name: "Sugar Labs",
      repo: "sugarlabs/www-v2",
      repoUrl: "https://github.com/sugarlabs/www-v2",
      prCount: 2,
      description:
        "Implemented 3D flip interaction for leadership cards and restricted YouTube embed recommendations. Delivered production-grade UX features including bento-style layouts.",
      prs: [
        {
          number: "#669",
          title: "feat(ux): implement 3D flip interaction for leadership cards",
          url: "https://github.com/sugarlabs/www-v2/pull/669",
        },
        {
          number: "#703",
          title: "fix(volunteer): restrict YouTube embed recommendations",
          url: "https://github.com/sugarlabs/www-v2/pull/703",
        },
      ],
    },
],
  // Rendered from static data only (like `writing`); not stored in Firestore.
  // `kind` picks the icon: winner | runner-up | finalist | rank.
  achievements: [
    {
      title: "JPMorgan Chase Code for Good 2026",
      result: "Finalist",
      kind: "finalist",
      logoUrl: "/logos/jpmorganchase.png",
      description:
        "Selected as a finalist in JPMorgan Chase's social-impact hackathon. Worked on the problem statement of partner organization ISRA, designing and building the technology solution best suited to their needs.",
      technologies: [],
      repo: "",
      repoUrl: "",
    },
    {
      title: "Genesis 2.0, 2026",
      result: "Winner · 1st Place",
      kind: "winner",
      logoUrl: "/logos/questit.png",
      description:
        "Led a 4-member team building CodeYatri, where the open-weight Laya model makes every Snake, 2048 and Doom move via logged yes/no queries. Fine-tuning lifted 2048 runs reaching 512 from 0% to 79%.",
      technologies: ["Python", "PyTorch"],
      repo: "Anexus5919/codeyatri-laya",
      repoUrl: "https://github.com/Anexus5919/codeyatri-laya",
    },
    {
      title: "Amazon ML Challenge 2026",
      result: "Rank 570",
      kind: "rank",
      logoUrl: "/logos/amazon.png",
      description:
        "Achieved an overall rank of 570 with a 0.98 macro-F0.5 score matching business records across data sources, using TF-IDF and dense e5 retrieval, LightGBM ranking and fine-tuned e5/mDeBERTa cross-encoders.",
      technologies: ["Python", "LightGBM", "e5", "mDeBERTa"],
      repo: "Anexus5919/psychiclearn-amazon-ml-2026",
      repoUrl: "https://github.com/Anexus5919/psychiclearn-amazon-ml-2026",
    },
    {
      title: "SYRUS 7.0 Hackathon, VESIT",
      result: "1st Runner-up · 2nd Place",
      kind: "runner-up",
      logoUrl: "/logos/codecell.png",
      description:
        "Built Countersign, an AI trading copilot that treats the LLM as an untrusted translator, so every order is verified deterministically and needs the trader's passkey before an isolated executor places it.",
      technologies: ["Next.js", "FastAPI", "PostgreSQL"],
      repo: "CMPN-CODECELL/Syrus7_CodeYodha",
      repoUrl: "https://github.com/CMPN-CODECELL/Syrus7_CodeYodha",
    },
  ],
} as const;
