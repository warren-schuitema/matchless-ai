# Matchless Marketing - AI Automation for Parent Entrepreneurs

## Overview

Matchless Marketing is a conversion-focused marketing website for an AI automation consulting service targeting parent entrepreneurs. The platform helps business owners automate content creation, business systems, and workflows to reclaim family time while scaling their businesses. The site serves as a lead generation funnel with a primary goal of converting visitors into paid assessment bookings ($1,000-$1,500) that lead to monthly retainer clients ($500-$1,500/month).

The website features a multi-page architecture with dedicated sections for services, results/testimonials, resources, and booking assessments. Design emphasizes warm, approachable professionalism with modern gradients, smooth animations, and mobile-first responsiveness.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query for server state management
- Framer Motion for animations and scroll effects

**UI Component System:**
- Shadcn/ui component library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management

**Design System:**
- Dark mode as default theme preference
- Gradient-heavy visual language (teal → purple → coral)
- Custom CSS variables for theming in both light/dark modes
- Glassmorphism effects and 3D perspectives
- Mobile-first responsive design (targeting 50%+ mobile traffic)

**Routing Structure:**
- `/` - Homepage with hero, pain points, solutions, process, testimonials, services, pricing, CTA
- `/about` - Personal story and credentials
- `/services` - Service offerings and process details
- `/results` - Case studies and client testimonials
- `/resources` - Blog/content hub
- `/book` - Assessment booking with TidyCal embed

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server setup for API routes and static file serving
- Development/production environment handling

**Storage Layer:**
- In-memory storage implementation (MemStorage) for development
- Interface-based storage design allowing easy swap to database
- User schema defined but minimal backend functionality currently implemented

**Build & Deployment:**
- Separate client and server builds
- Client builds to `dist/public`
- Server bundles with esbuild to `dist/index.js`
- Production mode runs compiled server bundle

### Data Storage

**Database Configuration:**
- Drizzle ORM for type-safe database operations
- PostgreSQL dialect configured (Neon Database serverless driver)
- Schema migrations output to `./migrations`
- Schema defined in `shared/schema.ts` for code sharing between client/server

**Current Schema:**
- Users table with id, username, password fields
- Zod validation schemas via drizzle-zod
- Database URL required via environment variable

**Note:** The application currently uses in-memory storage but is architected to easily integrate PostgreSQL when needed.

### External Dependencies

**Third-Party Services:**
- TidyCal for appointment scheduling/booking embeds
- Replit development tools (cartographer, dev banner, runtime error overlay)
- Neon Database for serverless PostgreSQL (configured but not required for basic operation)

**UI Libraries & Frameworks:**
- Radix UI components (20+ component primitives)
- Framer Motion for animations
- Embla Carousel for content carousels
- Lucide React for icons
- React Icons for additional icon sets

**Form & Validation:**
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for validation integration

**Developer Experience:**
- TypeScript for type safety across entire stack
- Path aliases (@/, @shared/, @assets/) for clean imports
- Hot module replacement in development
- ESM module format throughout

**Content & Assets:**
- Custom gradient backgrounds and design guidelines
- Pre-written conversion copy in markdown files
- Generated and uploaded images for hero sections, case studies, testimonials
- Sitemap structure reference document

**API Integrations:**
- Connect-pg-simple for PostgreSQL session storage (when database active)
- Session-based authentication architecture prepared
- RESTful API design pattern with `/api` prefix