# Vipul Bhardwaj - Portfolio Website

A modern, interactive portfolio website built with **Next.js 14**, **TypeScript**, **React 18**, **Framer Motion**, and **Tailwind CSS**.

## Features

✨ **Modern Design**
- Glassmorphism effects with backdrop blur
- Smooth animations and transitions
- Parallax scrolling with mouse tracking
- Responsive grid layouts

🎨 **Interactive Elements**
- Text scramble/decode animations on click
- Animated timeline with glowing dots
- Hover effects on project cards
- Magnetic social media icons
- Animated navigation

⚡ **Performance**
- Static site generation (SSG)
- Optimized images
- Minimal JavaScript bundle
- Fast page loads

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D/Graphics**: Three.js (optional)
- **Icons**: Unicode Emoji

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. Navigate to the project directory:
```bash
cd vipbhardwaj.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

The site will be exported as static HTML to the `out/` directory, ready for deployment.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with text scramble
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Timeline.tsx        # Experience timeline
│   ├── Contact.tsx         # Contact & social links
│   ├── TextScramble.tsx    # Text animation component
│   └── AnimatedBackground.tsx # Parallax background
```

## Key Components

### TextScramble
Animated text component that scrambles characters on interaction:
```tsx
<TextScramble text="VIPUL BHARDWAJ" triggerReset={key} />
```

### Timeline
Interactive experience timeline with animated dots:
- Glassmorphism cards
- Dot animations on scroll
- Glow effects

### AnimatedBackground
Parallax background with mouse tracking:
- Responsive gradient orbs
- Grid pattern overlay
- Dynamic positioning

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  dark: "#0b0d1b",
  magenta: "#e67eff",
  pink: "#ff4141",
  crimson: "#ff00dd",
}
```

### Components
Each section is a standalone component in `src/components/` - easy to modify or replace.

### Content
Update project data and experience in the component files directly.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Automatic deployments on push

### Static Hosting
1. Run `npm run build`
2. Deploy the `out/` directory to any static hosting:
   - GitHub Pages
   - Netlify
   - AWS S3
   - Any CDN

## Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting & lazy loading
- ✅ CSS-in-JS with Tailwind (no runtime CSS)
- ✅ Static export for hosting anywhere
- ✅ Minimal dependencies

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Three.js 3D visualizations
- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Project filtering by tech stack
- [ ] Contact form backend integration
- [ ] Analytics integration

## License

MIT License - feel free to use this portfolio as a template!

---

**Built by Vipul Bhardwaj** • [GitHub](https://github.com/vipbhardwaj) • [LinkedIn](https://www.linkedin.com/in/vipul-bhardwaj-051b82184/)
