# IDBH Design - Interior Design Portfolio Website

## Overview

IDBH Design is a portfolio website for an interior design firm specializing in healthcare and senior living environments. The application supports two distinct site modes based on domain:

- **design.idbh.com** - Full portfolio site with projects, services, and contact functionality
- **www.idbh.com / idbh.com** - Minimal "coming soon" landing page

The site follows luxury design portfolio aesthetics inspired by Studio McGee and architectural firms, featuring elegant typography (Cormorant Garamond + Inter) and a clean, modern visual style.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for entrance animations and interactions
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Data Fetching**: TanStack Query (React Query) for server state management

The frontend uses a domain-based routing system that detects the hostname and renders either the full portfolio site or a minimal landing page. Path aliases are configured for clean imports (`@/` for client source, `@shared/` for shared code, `@assets/` for static assets).

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Build**: esbuild for server bundling, Vite for client bundling
- **API Pattern**: REST endpoints with typed route definitions in `shared/routes.ts`

The server follows a simple layered architecture:
- `server/routes.ts` - API endpoint definitions
- `server/storage.ts` - Data access layer (repository pattern)
- `server/db.ts` - Database connection setup

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Managed via `drizzle-kit push`

Currently implements a single `contacts` table for storing contact form submissions.

### API Design
API routes are defined with Zod schemas for input validation and response typing in `shared/routes.ts`. This provides type-safe contracts shared between frontend and backend:

- `POST /api/contact` - Submit contact form inquiry
- `GET /api/site-type` - Detect which site variant to render based on hostname

## External Dependencies

### Third-Party Services
- **PostgreSQL Database**: Required for contact form storage (DATABASE_URL environment variable)

### Key NPM Packages
- **drizzle-orm** / **drizzle-kit**: Database ORM and migration tooling
- **pg**: PostgreSQL client
- **zod**: Schema validation (shared between client/server)
- **framer-motion**: Animation library
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives for shadcn components

### Static Assets
Static images are imported from the `attached_assets` directory. Example:
```typescript
import logo from "@assets/IDBDesignLogo_1766439748813.png";
```