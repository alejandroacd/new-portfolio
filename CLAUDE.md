# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js Version Warning

This uses **Next.js 16.2.4** with React 19. APIs and conventions may differ from training data. Always check `node_modules/next/dist/docs/` before writing new Next.js code. Heed deprecation notices.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build (use to verify no errors)
- `npm run lint` — ESLint
- No test framework is configured

## Architecture

Single-page dark-themed portfolio for Ale Contreras. All content is in `app/page.tsx` which composes section components inside a `GSAPProvider` wrapper.

### Rendering Pattern

`app/page.tsx` is a **Server Component** that imports client components. Only components needing browser APIs (GSAP, event handlers, state) are marked `"use client"`. The layout (`app/layout.tsx`) is a server component handling metadata/fonts.

### GSAP Animation System

- `gsap-provider.tsx` — Registers `ScrollTrigger` plugin, wraps all page content
- Each section component (`hero.tsx`, `projects-section.tsx`, `about-section.tsx`, `experience-section.tsx`) manages its own GSAP animations via `useEffect` + `gsap.context()` for proper cleanup
- CSS classes in `globals.css` (`.reveal-up`, `.reveal-line`, `.btn-magnetic`) provide initial states for GSAP to animate from
- Background blobs and grid overlay are pure CSS in `globals.css`, rendered in `page.tsx` outside the GSAPProvider

### Contact Form Flow

`contact-form.tsx` (client) -> POST `/api/contact` -> Resend SDK -> email to `alejandroalicd@gmail.com`

The API route (`app/api/contact/route.ts`) instantiates `Resend` inside the handler (not module scope) to avoid build failures when `RESEND_API_KEY` is missing. Uses `export const dynamic = "force-dynamic"`.

### Environment Variables

`RESEND_API_KEY` — Required at runtime for contact form. See `.env.example`.

## Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@import "tailwindcss"` syntax, `@theme inline` block for custom theme tokens
- **Geist** and **Geist Mono** fonts loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`
- Dark theme base color: `#080808`
- Gradient accent: purple -> blue -> emerald (`#a78bfa`, `#60a5fa`, `#34d399`)
- Use `.gradient-text` class for accent text, `.section-label` for section headings

## Key Constraints

- `lucide-react` in this version does NOT export `Github` or `Linkedin` icons — GitHub/LinkedIn icons use inline SVGs instead
- Images use `next/image` with `fill` prop; remote patterns for `images.unsplash.com` are configured in `next.config.ts`
- Path alias `@/*` maps to project root
