import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Code2,
  Boxes,
  Database,
  Palette,
  Wrench,
  Cloud,
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
      title: "SWRMS",
      type: "BMC Chembur Ward · UN SDG 11",
      href: "https://swrms.vercel.app",
      dates: "",
      active: true,
      description:
        "Tech-driven municipal waste collection system with geo-fenced attendance, AI face recognition, live route tracking, and tamper-evident audit logs.",
      technologies: ["Next.js 16", "face-api.js", "Leaflet", "MongoDB", "OSRM"],
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
      title: "OnBoardIQ",
      type: "Syrus 2026",
      href: "https://onboardiq-web.vercel.app",
      dates: "",
      active: true,
      description:
        "AI-powered onboarding platform guiding developers through role-specific checklists using conversational AI, RAG-based retrieval, and real-time tracking.",
      technologies: ["Next.js 14", "Fastify", "Groq AI", "PostgreSQL", "Prisma"],
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
      title: "Omnicare - Recovery Companion",
      type: "Nakshatra",
      href: "https://omnicare-olive.vercel.app",
      dates: "",
      active: true,
      description:
        "A comprehensive HealthTech platform for patients, doctors, and caregivers to monitor and manage post-surgical recovery collaboratively.",
      technologies: ["Next.js 16", "React", "Recharts", "Framer Motion", "Tailwind v4"],
      links: [
        {
          type: "Website",
          href: "https://omnicare-olive.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/OmniCare",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/omnicare.webp",
      video: "",
    },
    {
      title: "KYC Liveness Detection",
      type: "GENESIS 2026",
      href: "https://kyc-seven-kappa.vercel.app",
      dates: "",
      active: true,
      description:
        "A fraud-proof KYC system that ensures unique customer identities through liveness detection and facial deduplication.",
      technologies: ["Next.js", "Liveness Detection", "Face Recognition", "KYC"],
      links: [
        {
          type: "Website",
          href: "https://kyc-seven-kappa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/fraud-proof-kyc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fraudproof-kyc.webp",
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
      title: "Player Profile System",
      type: "Internship Project",
      href: "https://player-profile-system.vercel.app",
      dates: "",
      active: true,
      description:
        "Web app for athletes to create and showcase professional sports profiles with stats, achievements, and media.",
      technologies: ["Next.js 16", "MongoDB", "React", "Cloudinary"],
      links: [
        {
          type: "Website",
          href: "https://player-profile-system.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/player-profile-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/player_profile.webp",
      video: "",
    },
    {
      title: "Foodie - Food Delivery App",
      type: "StackHack 3.0",
      href: "https://foodie-three-sigma.vercel.app",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "End-to-end food ordering with AI-assisted ordering and real-time tracking across multiple states.",
      technologies: ["Next.js 15", "AI Integration", "Real-time Tracking"],
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
      title: "RoamIQ - Trip Planner",
      type: "Gradguide Internship",
      href: "https://roam-iq.vercel.app",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "Intelligent travel itinerary generator with 100% real locations using local Llama 3 models.",
      technologies: ["Next.js 15", "Llama 3", "TomTom API", "SerpAPI"],
      links: [
        {
          type: "Website",
          href: "https://roam-iq.vercel.app",
          icon: <Icons.globe className="size-3" />,
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
      title: "EduSchedulAI",
      type: "Smart India Hackathon 2025",
      href: "https://sihvesit.vercel.app",
      dates: "Sep 2025 - Oct 2025",
      active: true,
      description:
        "Smart academic scheduling aligned with NEP 2020 guidelines, featuring conflict-free schedule generation.",
      technologies: ["Next.js 15", "MongoDB", "JWT", "jsPDF"],
      links: [
        {
          type: "Website",
          href: "https://sihvesit.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/SIH_Prototype",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/eduschedule.webp",
      video: "",
    },
    {
      title: "Aimlabs - 3D Aim Trainer",
      type: "Personal Project",
      href: "https://aimlabs-puce.vercel.app",
      dates: "",
      active: true,
      description:
        "Web-based aim trainer with Three.js featuring multiple difficulty levels and performance tracking.",
      technologies: ["Three.js", "WebGL", "Raycaster", "Vite"],
      links: [
        {
          type: "Website",
          href: "https://aimlabs-puce.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/Aimlabs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aimlabs.webp",
      video: "",
    },
    {
      title: "Customizable 3D Cube",
      type: "Personal Project",
      href: "https://customizable-cube.vercel.app",
      dates: "",
      active: true,
      description:
        "Interactive 3D graphics with real-time customization via lil-gui debug panel and GSAP animations.",
      technologies: ["Three.js", "WebGL", "GSAP", "lil-gui"],
      links: [
        {
          type: "Website",
          href: "https://customizable-cube.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anexus5919/Customizable-cube",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/customizable_cube.webp",
      video: "",
    },
    {
      title: "Student Management System",
      type: "Personal Project",
      href: "https://github.com/Anexus5919/Student_Management_System",
      dates: "",
      active: false,
      description:
        "Desktop app for managing student records with authentication, analytics, and report generation.",
      technologies: ["Python", "Tkinter", "SQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Anexus5919/Student_Management_System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/student_management_system.webp",
      video: "",
    },
  ],
  openSource: [
    {
      name: "Jenkins",
      repo: "jenkinsci/jenkins",
      repoUrl: "https://github.com/jenkinsci/jenkins",
      prCount: 1,
      description:
        "Contributed a UI fix to the world's leading open-source CI/CD automation server, preventing long parameter values from overflowing the build parameters dialog.",
      prs: [
        {
          number: "#26574",
          title:
            "fix: prevent long parameter values from overflowing the parameters dialog",
          url: "https://github.com/jenkinsci/jenkins/pull/26574",
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
      name: "MUI X",
      repo: "mui/mui-x",
      repoUrl: "https://github.com/mui/mui-x",
      prCount: 3,
      description:
        "Shipped multiple fixes across the Scheduler and Charts packages of MUI's advanced React component library - improving accessibility, axis state persistence, and navigation UX.",
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
      name: "Accord Project",
      repo: "accordproject/template-playground",
      repoUrl: "https://github.com/accordproject/template-playground",
      prCount: 2,
      description:
        "Resolved ESLint errors and warnings across the codebase and fixed UI layout issues by constraining learn layout height to prevent content overflow.",
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
    {
      name: "RoamIQ",
      repo: "Anexus5919/RoamIQ",
      repoUrl: "https://github.com/Anexus5919/RoamIQ",
      prCount: 1,
      description:
        "Delivered a major UI overhaul to this travel-discovery project, modernizing the layout and refining the overall user experience.",
      prs: [
        {
          number: "#1",
          title: "Major update in the UI",
          url: "https://github.com/Anexus5919/RoamIQ/pull/1",
        },
      ],
    },
  ],
} as const;
