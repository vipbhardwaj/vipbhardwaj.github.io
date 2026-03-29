/**
 * Central TypeScript type definitions for the portfolio
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  link?: string;
  images?: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  side: "left" | "right";
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "languages";
}
