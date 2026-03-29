# Portfolio Repository Structure

## Project Overview
A modern Next.js 14 portfolio with design toggle functionality, allowing users to switch between the current React-based design and the legacy vanilla HTML/CSS design.

## Directory Structure

```
z:\Projects\vipbhardwaj.github.io/
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind + custom styles
│   │   ├── layout.tsx               # Root layout with DesignToggle
│   │   └── page.tsx                 # Main page (handles design switching)
│   ├── components/
│   │   ├── About.tsx                # About section
│   │   ├── AnimatedBackground.tsx   # Scroll-responsive background effects
│   │   ├── Contact.tsx              # Contact/Get in touch section
│   │   ├── DesignToggle.tsx         # NEW: Sticky toggle for design switching
│   │   ├── Hero.tsx                 # Landing/hero section
│   │   ├── ProjectModal.tsx         # Project details modal with carousel
│   │   ├── Projects.tsx             # Featured projects section
│   │   ├── ScrollPath.tsx           # (disabled)
│   │   ├── TextScramble.tsx         # Text animation component
│   │   └── Timeline.tsx             # Experience/timeline section
│   ├── hooks/
│   │   ├── useMousePosition.ts      # Track mouse position for parallax
│   │   └── useScrollAnimation.ts    # Track scroll percentage
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   └── utils/
│       └── constants.ts             # Centralized data
├── public/
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── icons/
│   │   ├── profile/
│   │   └── projects/
│   │       ├── fic1.png
│   │       ├── fic2.jpeg
│   │       ├── fic3.jpeg
│   │       ├── skinmart1.png
│   │       ├── skinmart2.png
│   │       ├── skinmart3.png
│   │       └── skinmart4.png
│   ├── _legacy.html                 # NEW: Legacy design HTML file
│   ├── *.png, *.jpeg                # Asset images
│   └── *.webp                       # Background images
├── _legacy/                         # Folder for legacy-related files (created but empty)
├── .git/                            # Version control
├── .next/                           # Build output
├── node_modules/                    # Dependencies
├── next.config.js                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies and scripts
├── package-lock.json
├── index.html                       # Original legacy HTML (root)
├── prac.css                         # Legacy CSS styles
├── vanilla-tilt.js                  # Legacy 3D tilt library
├── README.md                        # Original readme
└── [other config/doc files]
```

## Key Features

### 1. **Design Toggle System**
- **Component**: `src/components/DesignToggle.tsx`
- **Location**: Fixed top-left corner (sticky)
- **Functionality**: 
  - Shows "🕰️ Legacy Design" button when viewing current design
  - Shows "🎨 Current Design" button when viewing legacy design
  - Uses URL parameter: `?design=legacy` or `?design=current`
  - Smooth transitions between designs

### 2. **Current Design (Default)**
- **Framework**: Next.js 14 + React + TypeScript
- **Styling**: Tailwind CSS 3.3.0 + PostCSS
- **Animation**: Framer Motion + custom hooks
- **Features**:
  - Hero section with text scramble
  - About section with skills grid
  - Featured projects with 3D parallax and modal
  - Experience timeline with animated dots
  - Contact section with social links
  - Scroll-responsive animated background with glowing orbs
  - Progress bar indicating scroll position
  - Glassmorphism effects throughout

### 3. **Legacy Design**
- **Location**: `public/_legacy.html`
- **Features**:
  - Original vanilla HTML/CSS design
  - Accordion-based sections (Projects, About, Experience)
  - Text scramble effects on hover
  - Modal system for project details
  - Timeline with point animations
  - Vertical lines with scroll animations
  - Accessible from current design via toggle
  - Has own toggle button to switch back to current design

## How Design Toggling Works

### URL Parameters
- **Current Design**: `/?design=current` or just `/`
- **Legacy Design**: `/?design=legacy`

### Toggle Component Flow
1. **DesignToggle.tsx** reads the `design` searchParam
2. Sets state based on current design
3. Provides button to switch between designs
4. Router pushes new URL with design parameter

### Page Rendering (page.tsx)
1. Checks `searchParams.get("design")`
2. If `design === "legacy"`: Renders iframe with `_legacy.html`
3. Otherwise: Renders React components (current design)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Active Features

### Animated Background
- **Scroll-responsive orbs** (purple, pink, cyan)
- **Mouse-tracking parallax** on orbs
- **Grid overlay** that increases opacity on scroll
- **Progress bar** at bottom extending 0-100% as you scroll
- **Color gradient**: Purple → Pink → Red

### Text Scramble
- Cycles every 5-7 seconds automatically
- Staggered delays per section:
  - Hero: 0ms
  - Projects: 500ms
  - About: 1000ms
  - Timeline: 1500ms
  - Contact: 2000ms

### 3D Parallax Cards
- Project cards tilt based on mouse position
- Glassmorphic design with shimmer effects
- Click to open detailed modal with image carousel

### Modal System
- Full-screen overlay
- Image carousel with prev/next buttons
- Click outside to close
- Works on both current and legacy designs

## Recent Improvements

### Latest Changes (This Session)
1. **Removed background boundaries** from Projects, Timeline, and Contact sections
   - Allows animated background orbs to display seamlessly
   - Removed `bg-gradient-to-b from-dark via-purple-900/10 to-dark`

2. **Enhanced progress bar**
   - Increased height: `h-1` → `h-3` (3x broader)
   - Increased opacity: `0.8` → `1.0` (full intensity colors)
   - Doubled glow effect intensity
   - More prominent visual indicator

3. **Design Toggle System** (NEW)
   - Created sticky toggle button (top-left)
   - Integrated design switching via URL parameters
   - Set up legacy HTML file in `public/_legacy.html`
   - Conditional rendering in page.tsx

## Notes for Future Development

- Legacy design uses iframe for embedding, which may have limitations with full-page interactions
- Design toggle persists across navigation via URL parameter
- Both designs maintain their own styling and interaction models
- Consider caching strategy for production builds
- Mobile responsiveness implemented for both designs

## File Locations Quick Reference

| Component | Location | Purpose |
|-----------|----------|---------|
| Toggle | `src/components/DesignToggle.tsx` | Design switcher |
| Layout | `src/app/layout.tsx` | Includes toggle, root styles |
| Page Logic | `src/app/page.tsx` | Design switching logic |
| Legacy Design | `public/_legacy.html` | Static HTML/CSS design |
| Styles | `src/app/globals.css` | Global Tailwind + custom |
| Constants | `src/utils/constants.ts` | Portfolio data |
| Hooks | `src/hooks/` | Custom animation hooks |

