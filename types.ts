export interface Project {
  id: string;
  name: string;
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  projects?: Project[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  summary: string;
}

export interface Certificate {
  id: string;
  issuer: string;
  title: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}