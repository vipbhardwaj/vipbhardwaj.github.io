/**
 * Application constants and data
 */

import type { Project, TimelineEvent, SocialLink, Skill } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "cbrat",
    title: "cbRAT",
    description: "REST-API Unit Test Automation Tool built entirely in GoLang using COBRA CLI framework",
    technologies: ["Go", "CLI", "Testing"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "fic-sggscc",
    title: "FIC-SGGSCC",
    description: "Finance & Investment Cell website for interactive trading and investment events",
    technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
    gradient: "from-purple-500 to-pink-500",
    link: "https://app.ficsggscc.com/",
    images: ["/images/projects/fic1.png", "/images/projects/fic2.jpeg", "/images/projects/fic3.jpeg"],
  },
  {
    id: "skin-mart",
    title: "Skin Mart",
    description: "Steam inventory price checker that displays item values across multiple games",
    technologies: ["React", "Vercel", "API Integration"],
    gradient: "from-green-500 to-emerald-500",
    link: "https://skin-mart.vercel.app/",
    images: ["/images/projects/skinmart1.png", "/images/projects/skinmart2.png", "/images/projects/skinmart3.png", "/images/projects/skinmart4.png"],
  },
  {
    id: "c-stl",
    title: "C-STL",
    description: "Standard Template Library for C language with data structures and algorithms",
    technologies: ["C", "Data Structures", "Algorithms"],
    gradient: "from-orange-500 to-red-500",
    link: "https://github.com/hkhashoo/c_algo_ds_lib",
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "couchbase-dev2",
    title: "Couchbase Software Developer 2",
    description: "Working on CBL and SGW - Peer-to-Peer architecture for mobile platforms",
    date: "March 2025 - Present",
    side: "right",
  },
  {
    id: "couchbase-dev1",
    title: "Couchbase Software Developer 1",
    description: "Developed APIs for Capella product supporting AWS, GCP, and Azure cloud platforms",
    date: "July 2023 - February 2025",
    side: "left",
  },
  {
    id: "couchbase-intern",
    title: "Couchbase Internship",
    description: "6-month internship building internal tools using CEAN stack",
    date: "January - July 2023",
    side: "right",
  },
  {
    id: "zscaler-intern",
    title: "Zscaler Internship",
    description: "Frontend developer using ReactJS, explored ESLint and modern tooling",
    date: "June - August 2022",
    side: "left",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    icon: "💼",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vipul-bhardwaj-051b82184/",
  },
  {
    id: "github",
    icon: "🐙",
    label: "GitHub",
    url: "https://github.com/vipbhardwaj",
  },
  {
    id: "instagram",
    icon: "📸",
    label: "Instagram",
    url: "https://www.instagram.com/__vipul23__/",
  },
  {
    id: "whatsapp",
    icon: "💬",
    label: "WhatsApp",
    url: "https://wa.me/917986237204",
  },
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    url: "mailto:vipulbhardwaj1011@gmail.com",
  },
];

export const SKILLS: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "languages" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "languages" },
  { name: "Go", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "MongoDB", category: "tools" },
  { name: "PostgreSQL", category: "tools" },
  { name: "AWS", category: "tools" },
];

export const COLORS = {
  dark: "#0b0d1b",
  magenta: "#e67eff",
  pink: "#ff4141",
  crimson: "#ff00dd",
  purple: "#b040ff",
};

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
};
