export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  secretNote?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'design' | 'other';
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Social {
  name: string;
  icon: string;
  link: string;
}

export interface HiddenSecret {
  id: string;
  trigger: 'click' | 'hover' | 'key' | 'scroll';
  triggerValue?: string; // key combination or element id
  message: string;
  found: boolean;
}