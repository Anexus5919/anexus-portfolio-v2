# Adarsh Singh - Portfolio

My personal portfolio, built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/), [Magic UI](https://magicui.design/), and Framer Motion. Deployed on Vercel.

## Features

- Almost everything is driven by a [single config file](./src/data/resume.tsx) - name, about, work, education, skills, projects, and open-source contributions.
- Sections: Hero (with résumé download), About, Work Experience, Education, Skills (6 categories), Projects, Open Source contributions, and Contact.
- Light/dark mode, a floating dock nav, and subtle motion throughout.
- Responsive across devices and optimized for Next.js + Vercel.

## Getting Started Locally

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the dev server:

   ```bash
   pnpm dev
   ```

3. Edit the [config file](./src/data/resume.tsx) to update content.

> **Note:** After deploying, set `DATA.url` in [`src/data/resume.tsx`](./src/data/resume.tsx) to your live domain so SEO/OpenGraph metadata (including the avatar in social previews) resolves correctly.

## License

Licensed under the [MIT license](./LICENSE).
