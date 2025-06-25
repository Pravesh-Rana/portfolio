# Portfolio Website - Pravesh Rana

## Overview

This is a modern, responsive portfolio website built for Pravesh Rana, an MSc Business Analytics candidate. The application is a full-stack TypeScript project that showcases professional experience, projects, skills, and contact information through a clean, professional interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives for accessible, customizable components

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for server-side bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Type-safe schema definitions with Zod validation
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling and active section highlighting
- **Hero Section**: Professional introduction with contact actions
- **About Section**: Professional summary and education details
- **Experience Section**: Timeline-based work experience display
- **Projects Section**: Showcase of technical projects with metrics
- **Skills Section**: Interactive skills display with proficiency levels
- **Certifications Section**: Professional certifications and achievements
- **Contact Section**: Contact form with validation (form submission to be implemented)

### Backend Infrastructure
- **Route Registration**: Modular route setup in `/server/routes.ts`
- **Storage Abstraction**: Interface-based storage with memory and database implementations
- **Development Server**: Vite integration for hot module replacement
- **Static Serving**: Production-ready static file serving

### Shared Resources
- **Schema**: Centralized database schema with Zod validation
- **Type Safety**: End-to-end TypeScript types from database to UI

## Data Flow

1. **Development Mode**: Vite dev server handles client-side routing and HMR
2. **API Requests**: Client uses TanStack Query for server state management
3. **Database Operations**: Drizzle ORM provides type-safe database interactions
4. **Storage Layer**: Abstracted interface allows switching between memory and database storage
5. **Static Assets**: Served through Express in production, Vite in development

## External Dependencies

### UI Framework
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library for consistent iconography

### Data Management
- **TanStack Query**: Server state synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

### Development Tools
- **Vite**: Build tool with HMR and optimized bundling
- **TSX**: TypeScript execution for development
- **ESBuild**: Fast bundling for production server

### Database & Storage
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Development Environment
- **Port**: 5000 (configured for Replit)
- **Database**: PostgreSQL 16 module in Replit
- **Hot Reload**: Vite HMR for instant development feedback
- **Auto-start**: npm run dev on Replit startup

### Production Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built client assets
4. **Database**: Connects to production PostgreSQL via DATABASE_URL

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Development**: Automatic restart on file changes

## Recent Changes

```
Recent Changes:
- June 25, 2025: Configured Vercel deployment with optimized build system
- June 25, 2025: Set up resume download API endpoint for Vercel hosting
- June 25, 2025: Made all three action buttons consistent styling (outline style)
- June 25, 2025: Added font-semibold to problem solver tagline for emphasis
- June 25, 2025: Updated skills section with relevant icons for each technical skill and tool
- June 25, 2025: Added personal profile photo and updated hero section
- June 25, 2025: Redesigned skills section to list items without progress bars
- June 25, 2025: Updated footer styling with dark text and simplified content
- June 25, 2025: Added Download Resume functionality with PDF serving endpoint
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```