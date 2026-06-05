# Uptime! — Landing Page

Modern, conversion-focused landing page for the **Uptime!** Chrome extension — an AI-powered sitting reminder built with Claude API and Chrome MCP.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| shadcn/ui (bundled) | UI components |
| Framer Motion | Scroll animations |
| Vercel Analytics | Event tracking |

## Getting Started

### Prerequisites

- Node.js **18.17** or later
- npm / yarn / pnpm

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Option 2 — GitHub Integration

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy** — done.

### Environment Variables

No environment variables are required for the landing page.

If you extend with a backend (waitlist form, etc.):

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL / Neon connection string |
| `RESEND_API_KEY` | Email via Resend |

---

## Analytics

Vercel Analytics is pre-configured in `app/layout.tsx`. Custom events tracked:

| Event | Location property |
|-------|-------------------|
| `add_to_chrome_clicked` | `"navbar"`, `"navbar_mobile"`, `"hero"`, `"final_cta"` |

View events at: **Vercel Dashboard → Your Project → Analytics → Events**

---

## A/B Testing

A full A/B test setup guide for the hero headline is documented in
[`components/sections/Hero.tsx`](components/sections/Hero.tsx) — search for the
`A/B TEST SETUP` comment block.

**Summary:**
1. Assign variant `A` or `B` in `middleware.ts` via a cookie.
2. Pass the variant to the Hero component and swap the headline string.
3. Track `hero_headline_impression` with the variant on mount.
4. Measure CTA CTR by variant in Vercel Analytics.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout — fonts, Analytics
│   ├── page.tsx            # Single-page assembly
│   └── globals.css         # Tailwind base + CSS variables
├── components/
│   ├── ui/
│   │   ├── button.tsx      # shadcn-compatible Button
│   │   ├── card.tsx        # shadcn-compatible Card
│   │   └── badge.tsx       # shadcn-compatible Badge
│   ├── sections/
│   │   ├── Hero.tsx        # Hero + A/B test comment
│   │   ├── Problem.tsx     # Sitting stats
│   │   ├── HowItWorks.tsx  # 3-step visual
│   │   ├── Features.tsx    # Feature grid
│   │   ├── SocialProof.tsx # Placeholder testimonials
│   │   └── FinalCTA.tsx    # Bottom CTA
│   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   └── Footer.tsx          # Footer with GitHub link
├── lib/
│   ├── utils.ts            # cn() helper (clsx + tailwind-merge)
│   └── analytics.ts        # trackEvent() wrapper
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## Chrome Extension

The extension source lives at:
**[https://github.com/OniKiely/Uptime-_BroncoHack2026Project](https://github.com/OniKiely/Uptime-_BroncoHack2026Project)**

Built at BroncoHack 2026 🦦
