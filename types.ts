import { IconType } from 'react-icons';

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

export interface Certificate {
  id: string;
  name: string;
  institution: string;
  platform: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: any; // Using any for icon component type flexibility
}
