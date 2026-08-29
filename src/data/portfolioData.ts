import { ProfileData, Project, WorkExperience, EducationItem, Certification, SkillCategory, Testimonial } from '../types';

export const initialProfile: ProfileData = {
  name: 'Bình Lê',
  title: 'Junior Frontend / Fresher Fullstack',
  subtitle: 'Building minimalist, high-performance web experiences & design systems with React, TypeScript & Next.js',
  bio: 'Specialized in bridging the gap between elegant UI/UX design and scalable, resilient frontend architecture. I have 6+ years of experience engineering accessible, responsive web applications with sub-second page loads and zero-latency micro-interactions.',
  avatarUrl: '/images/avatar.jpeg',
  location: 'Vĩnh Hội District, Hồ Chí Minh city',
  email: 'lelacbinh3107@gmail.com',
  phone: '(+84) 86 822 7257',
  availability: 'Available for hire',
  yearsExperience: 6,
  completedProjects: 30,
  satisfactionRate: 99.4,
  socials: {
    github: 'https://github.com/joneus3107',
    linkedin: 'https://www.linkedin.com/in/b%C3%ACnh-l%C3%AA-b08512333/',
  },
};

export const sampleProjects: Project[] = [
  {
    id: 'medical-happy',
    title: 'Medical Happy',
    tagline: 'Job Search, Member Portal, Custom Forms, Responsive',
    description: 'Built a responsive, high-performance Japanese medical recruitment platform with job search and doctor registration workflows.',
    longDescription: 'Developed a responsive medical recruitment platform for Japanese healthcare clients, featuring job search, membership registration, and recruitment workflows for doctors and healthcare professionals. Focused on pixel-perfect implementation, accessibility, and performance optimization.',
    category: 'Wordpress',
    featured: false,
    image: '/images/projects/medical-happy.png',
    mockupType: 'dashboard',
    tags: ['WordPress', 'jQuery', 'SlickJS', 'MW WP Form'],
    metrics: [
      { label: 'Responsive Layout', value: '100%' },
      { label: 'Custom Post Types', value: '3+' },
      { label: 'Weeks', value: '1.5' }
    ],
    liveUrl: 'https://www.medical-happy.co.jp',
    scope: [
      'Developed responsive WordPress themes from design files (Photoshop/XD) with high precision.',
      'Implemented technical solutions per requirements, including ACF for dynamic content and SlickJS for custom sliders.',
      'Incorporate customer feedback, refine the interface, optimize page load speeds, and ensure cross-browser compatibility.',
      'Maintained the platform and delivered iterative feature updates based on client requests.',
    ],
    techStack: [
      {label: "Core", value: ['WordPress (Custom Theme)', 'PHP', 'HTML5', 'EJS', 'CSS3/SCSS', 'JavaScript', 'jQuery']},
      {label: 'Plugins & Libraries', value: ['Advanced Custom Fields (ACF)', 'MW WP Form', 'SlickJS']},
      {label: 'Design', value: ['Adobe Photoshop']},
      {label: 'Tools', value: ['GitHub', 'Gulp/webpack']},
    ]
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'exp-1',
    role: 'Lead Frontend Engineer',
    company: 'Veloce Digital Systems',
    companyUrl: 'https://example.com',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    startDate: '2023',
    endDate: 'Present',
    current: true,
    description: 'Directing the core frontend engineering team across 3 flagship web applications and standardizing the company-wide React & MUI design system.',
    achievements: [
      'Architected and led the migration of legacy monolith frontend to Next.js 14 and modern React 18/19, slashing Largest Contentful Paint (LCP) by 64% from 3.2s to 1.1s.',
      'Established a unified token-based design system adopted by 28+ frontend engineers, decreasing UI delivery turnaround time by 40%.',
      'Spearheaded automated frontend testing strategy, increasing test coverage from 34% to 89% and reducing production visual regressions to near zero.',
      'Mentored 6 junior/mid-level engineers through structured weekly 1-on-1s, architecture design reviews, and code walkthroughs.',
    ],
    technologies: ['React 19', 'TypeScript', 'Next.js', 'Material UI (MUI)', 'Tailwind CSS', 'GraphQL', 'Vitest', 'Figma'],
  },
  {
    id: 'exp-2',
    role: 'Senior Frontend Developer',
    company: 'HyperScale Cloud Technologies',
    companyUrl: 'https://example.com',
    location: 'San Jose, CA',
    type: 'Full-time',
    startDate: '2021',
    endDate: '2023',
    current: false,
    description: 'Designed and implemented data-intensive cloud monitoring and infrastructure management consoles used by 120,000+ DevOps engineers.',
    achievements: [
      'Built a real-time cluster monitoring dashboard capable of rendering 10,000+ live telemetry nodes at 60fps utilizing WebGL and custom canvas hooks.',
      'Engineered optimistic UI mutation patterns and robust offline caching via TanStack Query, improving perceived responsiveness by 3x.',
      'Partnered closely with Principal UX Designers to conduct user testing sessions and translate wireframes into pixel-perfect, accessible React components.',
      'Audited and refactored application bundle dependencies, stripping out 420kB of redundant libraries and boosting Core Web Vitals to all-green status.',
    ],
    technologies: ['React', 'TypeScript', 'MUI (Material UI)', 'Redux Toolkit', 'Recharts', 'WebSockets', 'Cypress', 'Docker'],
  },
  {
    id: 'exp-3',
    role: 'Frontend UI/UX Developer',
    company: 'Starlight Studio Labs',
    companyUrl: 'https://example.com',
    location: 'Austin, TX',
    type: 'Full-time',
    startDate: '2019',
    endDate: '2021',
    current: false,
    description: 'Created highly interactive, award-winning marketing websites and e-commerce web applications for global brands and venture-backed startups.',
    achievements: [
      'Crafted custom micro-animations and physics-based page transitions with Framer Motion and GSAP, achieving 3 Awwwards Site of the Day honors.',
      'Implemented responsive, accessible checkout funnels that lifted mobile conversion rates by 26% across client stores.',
      'Standardized frontend boilerplate template using React, Vite, and Material UI, cutting initial project setup from 3 days to under 2 hours.',
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'MUI', 'Sass/SCSS', 'Framer Motion', 'REST APIs', 'Webpack', 'Figma'],
  },
  {
    id: 'exp-4',
    role: 'Frontend Engineering Intern',
    company: 'Nexis Media Interactive',
    companyUrl: 'https://example.com',
    location: 'Austin, TX',
    type: 'Contract',
    startDate: '2018',
    endDate: '2019',
    current: false,
    description: 'Contributed to client-facing web portals, bug fixes, UI component styling, and cross-browser QA testing.',
    achievements: [
      'Built 15+ reusable responsive form components with client-side regex and schema validation.',
      'Assisted in accessibility retrofitting for public university portals to comply with Section 508 / WCAG guidelines.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Git'],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.S. in Computer Science & Human-Computer Interaction',
    institution: 'University of Texas at Austin',
    location: 'Austin, TX',
    year: '2015 - 2019',
    honors: 'Magna Cum Laude, Dean’s Honor List (4 semesters)',
    relevantCourses: [
      'User Interface Design & Usability Testing',
      'Advanced Web Engineering & Distributed Systems',
      'Algorithms & Data Structures',
      'Computer Graphics & Interactive Systems',
    ],
  },
];

export const certificationsList: Certification[] = [
  {
    id: 'cert-1',
    name: 'Meta Certified Senior Frontend Developer',
    issuer: 'Meta / Coursera',
    date: '2023',
    credentialUrl: 'https://example.com/cert/meta-frontend',
    badge: 'Senior Level',
  },
  {
    id: 'cert-2',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://example.com/cert/aws-ccp',
    badge: 'Cloud & CDN',
  },
  {
    id: 'cert-3',
    name: 'Web Accessibility Specialist (WAS) / WCAG 2.1',
    issuer: 'IAAP (International Association of Accessibility Professionals)',
    date: '2022',
    credentialUrl: 'https://example.com/cert/iaap-was',
    badge: 'WCAG AAA',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Core Frontend & Languages',
    description: 'Foundational languages and cutting-edge syntax standards',
    iconName: 'Code',
    skills: [
      { name: 'TypeScript', level: 96, experience: '5+ years', highlight: true, tag: 'Expert' },
      { name: 'JavaScript (ES2024+)', level: 98, experience: '6+ years', highlight: true, tag: 'Expert' },
      { name: 'HTML5 & Semantic Web', level: 98, experience: '6+ years', highlight: false, tag: 'Standard' },
      { name: 'CSS3 / Modern CSS (Grid, Flex, Variables)', level: 95, experience: '6+ years', highlight: true, tag: 'Expert' },
    ],
  },
  {
    category: 'Frameworks & Modern UI',
    description: 'Component-driven application frameworks and renderers',
    iconName: 'Layout',
    skills: [
      { name: 'React (Hooks, Context, Suspense, Server Components)', level: 97, experience: '6+ years', highlight: true, tag: 'Core Strength' },
      { name: 'Material UI (MUI)', level: 95, experience: '5+ years', highlight: true, tag: 'Expert' },
      { name: 'Next.js (App Router, SSR, ISR)', level: 92, experience: '4+ years', highlight: true, tag: 'Advanced' },
      { name: 'Tailwind CSS', level: 94, experience: '4+ years', highlight: false, tag: 'Daily Use' },
      { name: 'Framer Motion & Animations', level: 90, experience: '3+ years', highlight: false, tag: 'Smooth UX' },
    ],
  },
  {
    category: 'State & Architecture',
    description: 'Scalable state management, caching, and network layers',
    iconName: 'Layers',
    skills: [
      { name: 'TanStack Query (React Query)', level: 93, experience: '4+ years', highlight: true, tag: 'Async State' },
      { name: 'Zustand / Redux Toolkit', level: 92, experience: '5+ years', highlight: false, tag: 'Store Mgmt' },
      { name: 'REST & GraphQL APIs', level: 90, experience: '5+ years', highlight: false, tag: 'Data Fetching' },
      { name: 'WebSockets & Real-time Feeds', level: 86, experience: '3+ years', highlight: false, tag: 'Live Sync' },
    ],
  },
  {
    category: 'Quality, Testing & Performance',
    description: 'Ensuring sub-second speeds, zero defects, and full accessibility',
    iconName: 'Cpu',
    skills: [
      { name: 'Web Performance & Core Web Vitals (LCP, CLS, INP)', level: 95, experience: '5+ years', highlight: true, tag: 'Optimized' },
      { name: 'WCAG 2.1 AA/AAA Accessibility (a11y)', level: 94, experience: '4+ years', highlight: true, tag: 'Inclusive' },
      { name: 'Vitest / Jest & React Testing Library', level: 90, experience: '5+ years', highlight: false, tag: 'TDD' },
      { name: 'Cypress & Playwright E2E', level: 85, experience: '3+ years', highlight: false, tag: 'Automation' },
    ],
  },
  {
    category: 'Tooling & Design Collaboration',
    description: 'Developer workflow acceleration and design handoff',
    iconName: 'Tool',
    skills: [
      { name: 'Vite / Webpack / Turbopack', level: 92, experience: '5+ years', highlight: false, tag: 'Bundlers' },
      { name: 'Git / GitHub CI/CD Actions', level: 91, experience: '6+ years', highlight: false, tag: 'DevOps' },
      { name: 'Storybook Component Testing', level: 93, experience: '4+ years', highlight: true, tag: 'Design System' },
      { name: 'Figma to Clean Code Tokens', level: 92, experience: '5+ years', highlight: false, tag: 'Pixel Perfect' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'Veloce Digital',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'Alex is that rare frontend engineer who has both an unmatched eye for minimalist design aesthetics and deeply rigorous architectural standards. Alex cut our core web app load times by more than half while shipping an enterprise design system that all our engineers rave about.',
    relation: 'Managed Alex directly at Veloce Digital',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'test-2',
    name: 'David K. Morrison',
    role: 'Principal Product Designer',
    company: 'HyperScale Cloud',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Collaborating with Alex is a dream for any designer. Alex does not just implement Figma specs—Alex enhances them with buttery-smooth micro-animations, thoughtful keyboard shortcuts, and iron-clad accessibility that makes the product feel alive and effortless.',
    relation: 'Design partner at HyperScale',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Staff Frontend Architect',
    company: 'Starlight Studio',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Alex writes some of the cleanest TypeScript and React code I have reviewed in my 12 years of software engineering. Clean abstractions, zero unnecessary re-renders, and thorough documentation. A phenomenal team multiplier.',
    relation: 'Peer reviewer & Tech Lead',
    linkedinUrl: 'https://linkedin.com',
  },
];

export const frontendPillars = [
  {
    title: 'Minimalist Craftsmanship',
    description: 'Every pixel, margin, and typography token has purpose. Removing noise so user content and core tasks shine with crystalline clarity.',
    metric: 'Whitespace & Typographic Harmony',
  },
  {
    title: 'Peak Performance (Sub-100ms)',
    description: 'Relentless focus on Core Web Vitals (LCP, INP, CLS), code-splitting, tree-shaking, and optimistic UI transitions that feel instantaneous.',
    metric: '100% Lighthouse Standard',
  },
  {
    title: 'Accessible by Default (WCAG AAA)',
    description: 'Full keyboard navigation, semantic ARIA roles, high contrast ratios, and screen-reader friendliness engineered into the foundation.',
    metric: 'Inclusive to All Users',
  },
  {
    title: 'Maintainable Component Systems',
    description: 'Strict TypeScript contracts, modular component boundaries, atomic design tokens, and comprehensive automated test suites.',
    metric: 'Zero Tech Debt Philosophy',
  },
];
