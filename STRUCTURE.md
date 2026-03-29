# Project Structure Guide

## 📂 Directory Organization

This document explains the optimized structure of the Vipul Bhardwaj portfolio website.

### Root Level Structure
```
vipbhardwaj.github.io/
├── src/                    ← Main source code
├── public/                 ← Static assets
├── _legacy/                ← Old files (historical reference)
├── package.json            ← Dependencies
├── tsconfig.json           ← TypeScript config
├── next.config.js          ← Next.js config
├── tailwind.config.js      ← Tailwind CSS theme
├── postcss.config.js       ← PostCSS setup
├── .eslintrc.json          ← Code quality rules
├── .env.example            ← Environment template
├── .gitignore              ← Git ignore rules
├── README.md               ← Project documentation
└── STRUCTURE.md            ← This file
```

## 📁 /src Directory

### /src/app
**Purpose**: Next.js app router and page structure
```
app/
├── layout.tsx              ← Root layout (HTML structure)
├── page.tsx                ← Home page (main content)
└── globals.css             ← Global styling & animations
```

#### Key Files:
- **layout.tsx**: Wraps all pages, defines `<html>` and `<body>` tags
- **page.tsx**: Combines all components into single page
- **globals.css**: Tailwind directives, glassmorphism styles, animations

### /src/components
**Purpose**: React components for different page sections

```
components/
├── Hero.tsx                ← Introduction + text scramble effect
├── About.tsx               ← About section + skills grid
├── Projects.tsx            ← Project cards grid
├── Timeline.tsx            ← Experience timeline with animations
├── Contact.tsx             ← Contact form + social media links
├── TextScramble.tsx        ← Reusable text animation component
└── AnimatedBackground.tsx  ← Parallax background with mouse tracking
```

#### Component Responsibilities:
| Component | Purpose |
|-----------|---------|
| **Hero** | Title, subtitle, CTA button, floating particles |
| **About** | Bio, skills grid, interests | **Projects** | Project cards with hover effects, links |
| **Timeline** | Experience entries with animated dots |
| **Contact** | Contact form, social media icons |
| **TextScramble** | Character animation logic |
| **AnimatedBackground** | Mouse-tracking gradient orbs, grid overlay |

### /src/hooks
**Purpose**: Reusable React hooks for common functionality

```
hooks/
├── useMousePosition.ts     ← Track cursor coordinates
├── useScrollAnimation.ts   ← Scroll-based animations (Intersection Observer)
└── index.ts                ← Barrel export (export * from './...')
```

#### Hook Details:
- **useMousePosition**: Returns `{ x: 0-1, y: 0-1 }` normalized coordinates
- **useScrollAnimation**: Returns `{ ref, isInView }` for scroll triggers
- **index.ts**: Central export point for cleaner imports

### /src/types
**Purpose**: Centralized TypeScript type definitions

```
types/
└── index.ts                ← All interfaces & types
```

#### Types Defined:
```typescript
- Project              ← Project data structure
- TimelineEvent        ← Experience entry
- SocialLink          ← Social media links
- Skill               ← Skill with category
```

### /src/utils
**Purpose**: Constants, helpers, and utility functions

```
utils/
├── constants.ts            ← All app data (projects, timeline, skills, colors)
└── index.ts                ← Helper functions & exports
```

#### Constants Exported:
- `PROJECTS[]` - Project data
- `TIMELINE_EVENTS[]` - Experience data
- `SOCIAL_LINKS[]` - Contact links
- `SKILLS[]` - Skills list
- `COLORS` - Color palette
- `ANIMATION_DURATION` - Animation timings
- `cn()` - className utility
- `delay()` - setTimeout wrapper

### /src/styles
**Purpose**: Additional CSS modules (if needed)

```
styles/
└── (animations.css)   ← Shared animation definitions
```

## 📁 /public Directory

**Purpose**: Static assets served directly by Next.js

```
public/
└── images/
    ├── projects/           ← Project screenshots
    │   ├── fic1.png
    │   ├── fic2.jpeg
    │   └── skinmart*.png
    ├── profile/            ← Profile images
    │   └── myImg1.jpeg
    ├── icons/              ← Social media icons
    │   ├── github.png
    │   ├── linkedin.png
    │   ├── instagram.png
    │   └── email.png
    └── backgrounds/        ← Background images
        └── into-bg.webp
```

#### Image Usage:
```tsx
// In components:
<img src="/images/profile/myImg1.jpeg" alt="Profile" />
<img src="/images/projects/fic1.png" alt="Project 1" />
```

## 📁 /_legacy Directory

**Purpose**: Archive of original files (reference only)

```
_legacy/
├── index.html              ← Old portfolio HTML
├── prac.css                ← Old portfolio styles
├── vanilla-tilt.js         ← Old 3D tilt library
└── README_ORIGINAL.md      ← Original readme
```

**Note**: These files are preserved for historical reference but not used in the current app.

## 🔄 Data Flow

### How Data Flows Through the App

```
constants.ts (data source)
    ↓
Components import data
    ↓
Components render with Framer Motion
    ↓
Types ensure type safety
    ↓
Utils provide helpers
    ↓
Hooks provide reactive logic
```

### Example: Projects Section

```
1. Projects.tsx imports PROJECTS from @/utils/constants
2. Components map through PROJECTS array
3. Each project rendered as ProjectCard
4. TypeScript checks Project interface matches
5. Framer Motion adds animations
6. On hover, gradient effect applies
```

## 📦 Import Paths

### Path Aliases (Configured in tsconfig.json)

```typescript
// ❌ Don't do this (relative paths)
import { PROJECTS } from "../../utils/constants"

// ✅ Do this (absolute paths)
import { PROJECTS } from "@/utils/constants"

// ✅ Also works
import { useMousePosition } from "@/hooks"
import type { Project } from "@/types"
```

### Import Conventions

```typescript
// From utils
import { PROJECTS, SOCIAL_LINKS } from "@/utils/constants"
import { cn, delay } from "@/utils"

// From hooks
import { useMousePosition, useScrollAnimation } from "@/hooks"

// From types
import type { Project, TimelineEvent } from "@/types"

// From components (relative only)
import TextScramble from "./TextScramble"
import Hero from "@/components/Hero"
```

## 🔧 Configuration Reference

### Tailwind Customization
Edit `tailwind.config.js`:
```javascript
{
  colors: {
    dark: "#0b0d1b",
    magenta: "#e67eff",
  },
  backdropBlur: {
    glass: "10px",
  },
}
```

### TypeScript Paths
Edit `tsconfig.json`:
```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Next.js Configuration
Edit `next.config.js`:
```javascript
output: 'export',  // Static export
images: {
  unoptimized: true,  // For static hosting
}
```

## 📝 Adding New Files

### Adding a New Component

1. Create `src/components/MyComponent.tsx`
```typescript
"use client";  // Mark as client component
import { motion } from "framer-motion";

export default function MyComponent() {
  return <motion.div>...</motion.div>;
}
```

2. Import in `src/app/page.tsx`
```typescript
import MyComponent from "@/components/MyComponent";
```

### Adding New Data

1. Add to `src/utils/constants.ts`
```typescript
export const MY_DATA = [
  // ... your data
];
```

2. Import in component
```typescript
import { MY_DATA } from "@/utils/constants";
```

### Adding a New Hook

1. Create `src/hooks/useMyHook.ts`
```typescript
"use client";
export const useMyHook = () => {
  // ... hook logic
};
```

2. Export from `src/hooks/index.ts`
```typescript
export { useMyHook } from "./useMyHook";
```

3. Import in component
```typescript
import { useMyHook } from "@/hooks";
```

## 🚀 Build & Deployment

### Development
```bash
npm run dev     # Start dev server on :3000
```

### Production Build
```bash
npm run build   # Outputs to /out (static HTML)
npm start       # Test production build locally
```

### Deploy
```bash
# Vercel (easiest)
vercel

# Other platforms (deploy /out folder)
# GitHub Pages, Netlify, AWS S3, etc.
```

## ✅ Quick Checklist

- ✅ All imports use `@/` paths
- ✅ Components in `/src/components`
- ✅ Data in `/src/utils/constants.ts`
- ✅ Types in `/src/types`
- ✅ Hooks in `/src/hooks`
- ✅ Images in `/public/images/`
- ✅ Global styles in `/src/app/globals.css`
- ✅ No direct file imports from root

---

**Last Updated**: March 29, 2026  
**Version**: 2.0 (Next.js + TypeScript)
