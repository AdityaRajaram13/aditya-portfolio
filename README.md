# Aditya — Portfolio

A terminal / IDE-themed personal portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS v4**,
**Framer Motion**, and **next-themes** (dark terminal by default, light-IDE on toggle).
Statically rendered — deploys anywhere.

- `/` — the portfolio (hero terminal, about, experience, projects, skills, contact)
- `/resume` — a clean, ATS-friendly résumé with a one-click **Download PDF** (browser print-to-PDF)

## Develop

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build (fully static)
npm run start    # serve the production build
```

## Where to edit content

**Everything you'd normally change lives in [`lib/content.ts`](lib/content.ts).** Edit values there
and the whole site updates — no need to touch component code.

### 👉 Fill these in before publishing (search for `// TODO`)

- `profile.name` — your full name (first + last)
- `profile.email` — your contact email
- `profile.socials.github` / `linkedin` / `twitter` — your real profile URLs
- `profile.location` — confirm
- `profile.resumeUrl` — optional; drop a PDF in `public/` and point to it (e.g. `/Aditya-Resume.pdf`)
- `app/layout.tsx` → `siteUrl` — set to your real domain (used for SEO/OpenGraph)

### Also worth reviewing

- The MongoDB → PostgreSQL bullet in `experiences` is flagged `[CONFIRM/EDIT]` in your source
  notes — verify it's accurate before publishing.
- `projects` are derived from your real Syntags work. Edit blurbs, add `link`/`repo` URLs, or
  swap in standalone/side projects.

Your original source notes are kept in [`content/portfolio-experience-section.md`](content/portfolio-experience-section.md).

## Deploy

The site is a static Next.js app. Easiest options:

- **Vercel** (recommended): push to a Git repo and import at vercel.com — zero config.
- **Netlify / Cloudflare Pages**: build command `npm run build`, framework preset "Next.js".

## Structure

```
app/            layout (theme provider, SEO), page (composes sections), resume/ (printable résumé), globals.css (design tokens + resume print styles)
components/     navbar, theme-toggle, reveal (scroll animations), icons, background, footer, resume-doc
components/sections/  hero (terminal window), about, experience, projects, whatsapp-flow, skills, contact
components/binary-rain.tsx  ← canvas "binary rain" background animation
lib/content.ts  ← single source of truth for all site content
```

The résumé pulls from the same `lib/content.ts`, so it stays in sync with the site automatically.
