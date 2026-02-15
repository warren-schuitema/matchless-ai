# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Matchless Marketing is a conversion-focused marketing website for an AI automation consulting service targeting parent entrepreneurs. It's a lead generation funnel converting visitors into paid assessment bookings via TidyCal. Built as a monorepo with React frontend and Express backend, originally developed on Replit.

## Commands

- `npm run dev` — Start dev server (port 5000, HMR enabled)
- `npm run build` — Build client (Vite → dist/public) and server (esbuild → dist/index.js)
- `npm run start` — Run production build
- `npm run check` — TypeScript type checking
- `npm run db:push` — Push Drizzle schema to database

No test framework is configured.

## Architecture

**Monorepo structure:** `client/` (React SPA), `server/` (Express API), `shared/` (schemas shared between both).

**Frontend:** React 18 + TypeScript, Vite build, Wouter routing, TanStack Query for server state, Framer Motion + GSAP for animations, Lenis for smooth scrolling.

**UI system:** Shadcn/ui (New York variant) with Radix UI primitives, Tailwind CSS, CVA for variants. 49 pre-built UI components in `client/src/components/ui/`.

**Backend:** Express.js serving the API and static files. Currently uses in-memory storage (`MemStorage` class in `server/storage.ts`) with a Drizzle ORM + PostgreSQL setup ready to swap in.

**Path aliases** (configured in tsconfig.json and vite.config.ts):
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

**Routes:** `/` Home, `/about`, `/services`, `/results` (redirects), `/resources`, `/book`

## Design System

See `design_guidelines.md` for full details. Key points:

- **Dark mode is the default** (set via useEffect in components)
- **Primary colors:** Teal (#14B8A6), Coral (#FF6B9D), Purple (#8B5CF6)
- **Visual language:** Gradient-heavy (teal → purple → coral), glassmorphism, 3D perspectives
- **Mobile-first** responsive design targeting 50%+ mobile traffic
- **Typography:** Inter/Poppins, tight line heights, gradient text effects on headlines
- **Animations:** Scroll-triggered fade-ups via custom `useInView` hook (Intersection Observer), staggered Framer Motion entrances, CSS hover lifts with GPU-optimized transforms

## Key Conventions

- All booking CTAs link to TidyCal (external, opens in new tab)
- Copy targets parent entrepreneurs specifically — avoid corporate/generic language, use family-oriented scenarios ("while you're tucking kids in", "at soccer practice")
- No faith-based or mission language
- Communication style: simple, everyday language
- Images should be realistic parent entrepreneurs, not corporate stock photos
