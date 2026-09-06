export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Wordpress' | 'ReactJS' | 'Full-Stack';
  practice: boolean;
  image: string;
  mockupType?: 'browser' | 'mobile' | 'dashboard';
  tags: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  scope?: string[];
  techArchitecture?: string[];
  techStack: { label: string, value: string[] }[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  honors?: string;
  relevantCourses?: string[];
}

export type Education = EducationItem;

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  relation: string;
  linkedinUrl?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  availability: 'Available for hire' | 'Open to opportunities' | 'Booked';
  yearsExperience: number;
  completedProjects: number;
  satisfactionRate: number;
  socials: {
    github: string;
    linkedin: string;
  };
  resumePdfUrl?: string;
}

export interface ContactMethod {
  name: string;
  qr: string;
  url: string
}