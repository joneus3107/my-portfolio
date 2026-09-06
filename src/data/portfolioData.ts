import { ProfileData, Project, WorkExperience, EducationItem, Certification, SkillCategory, Testimonial, ContactMethod } from '../types';

export const initialProfile: ProfileData = {
  name: 'Bình Lê',
  title: 'Middle Frontend / Fullstack',
  subtitle: 'Building minimalist, high-performance web experiences & design systems with React, TypeScript & Next.js',
  bio: 'Specialized in bridging the gap between elegant UI/UX design and scalable, resilient frontend architecture. I have 6+ years of experience engineering accessible, responsive web applications with sub-second page loads and zero-latency micro-interactions.',
  avatarUrl: '/images/avatar.jpeg',
  location: 'Vĩnh Hội District, Hồ Chí Minh city',
  email: 'lelacbinh3107@gmail.com',
  phone: '(+84) 86 822 7257',
  availability: 'Available for hire',
  yearsExperience: 6,
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
    practice: false,
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
  {
    id: 'video-unite',
    title: 'Video Unite',
    tagline: 'Animation, Responsive, Contact Form, Recruitment Portal, CSS Animation',
    description: 'Developed a responsive, modern corporate website for a Japanese video production agency, showcasing their creative portfolio, service plans, and client inquiry flows.',
    longDescription: 'Implemented a sleek, pixel-perfect corporate website for Video Unite, a Japanese creative video production company. Focused on crafting smooth, artistic scroll animations and fluid micro-interactions to evoke an airy, cinematic feel, while delivering a dynamic video showcase and high-precision responsive layouts across all devices.',
    category: 'Wordpress',
    practice: false,
    image: '/images/projects/video-unite.png',
    mockupType: 'dashboard',
    tags: ['WordPress', 'jQuery', 'SlickJS', 'MW WP Form', 'AJAX'],
    metrics: [
      { label: 'Animations', value: 'Smooth' },
      { label: 'Responsive Layout', value: '100%' },
      { label: 'Custom Post Types', value: '5+' },
      { label: 'Weeks', value: '2' },
    ],
    liveUrl: 'https://videounite.co.jp/',
    scope: [
      'Developed responsive WordPress themes from design files (Photoshop/XD) with high precision.',
      'Implemented technical solutions per requirements, including ACF for dynamic content and SlickJS for custom sliders.',
      'Maintained the platform and delivered iterative feature updates based on client requests.',
      'Researching and implementing animations on the website while maintaining a smooth user experience.',
      'Ensure enhanced security by using Google CAPTCHA.',
    ],
    techStack: [
      {label: "Core", value: ['WordPress (Custom Theme)', 'PHP', 'HTML5', 'EJS', 'CSS3/SCSS', 'JavaScript', 'jQuery']},
      {label: 'Plugins & Libraries', value: ['Advanced Custom Fields (ACF)', 'MW WP Form', 'SlickJS', 'AOS']},
      {label: 'Design', value: ['Adobe Photoshop']},
      {label: 'Tools', value: ['GitHub', 'Gulp/webpack']},
    ]
  },
  {
    id: 'bespoke-wedding',
    title: 'Bespoke Wedding',
    tagline: 'Mobile-First Wedding Platform, Bespoke Custom Theme, Lightweight UI',
    description: 'Developed a mobile-first, elegant wedding service website for a Japanese bridal brand, focusing on vanilla JavaScript, lightweight asset optimization, and subtle micro-interactions.',
    longDescription: 'Implemented a bespoke, mobile-first WordPress theme for a Japanese luxury wedding service. Prioritizing performance and visual elegance, the project was engineered with minimal third-party libraries—relying on Vanilla JavaScript and custom SCSS architecture to ensure fast load times, smooth touch sliders, and delicate fade-in animations across all handheld devices.',
    category: 'Wordpress',
    practice: false,
    image: '/images/projects/bespoke-wedding.png',
    mockupType: 'dashboard',
    tags: ['WordPress', 'SwiperJS', 'Javascript'],
    metrics: [
      { label: 'Responsive Architecture', value: 'Mobile-First' },
      { label: 'Zero Library Bloat', value: 'Vanilla JS' },
      { label: 'Custom Theme', value: '100%' },
      { label: 'Days', value: '5' },
    ],
    liveUrl: 'https://bespoke-wedding.jp/',
    scope: [
      'Crafted a touch-friendly, mobile-first interface optimized for seamless smartphone browsing and elegant bridal typography.',
      'Replaced heavy external libraries with lightweight Vanilla JavaScript solutions to minimize bundle size and boost rendering speed.',
      'Integrated SwiperJS for fluid gallery carousels combined with subtle CSS/JS scroll-triggered fade animations.',
      'Architected dynamic wedding package management via Advanced Custom Fields (ACF) and secure consultation booking forms via MW WP Form.',
    ],
    techStack: [
      {label: "Core", value: ['WordPress (Custom Theme)', 'PHP', 'Vanilla JavaScript']},
      {label: 'Plugins & Libraries', value: ['Advanced Custom Fields (ACF)', 'MW WP Form', 'SwiperJS']},
      {label: 'Design', value: ['Adobe Illutrator']},
      {label: 'Tools', value: ['GitHub', 'Gulp/webpack']},
    ]
  },
  {
    id: 'netflix-ui',
    title: 'Netflix UI',
    tagline: 'Netflix UI, API Data, Real-time Search',
    description: 'Built a dynamic, responsive Netflix-inspired streaming UI using React 19 and Material UI, featuring real-time movie search, custom hooks, and dynamic data fetching from TMDB API.',
    longDescription: 'Developed a responsive movie discovery web application replicating the Netflix streaming interface to explore modern React 19 patterns. The platform integrates with The Movie Database (TMDB) API via Axios, featuring real-time movie search, category sliders with SwiperJS, and a highly modular component architecture styled with Material UI.',
    category: 'ReactJS',
    practice: true,
    image: '/images/projects/netflix-ui.png',
    mockupType: 'dashboard',
    tags: ['ReactJS', 'MUI', 'API'],
    metrics: [
      { label: 'MUI Component System' , value: 'Reusable' },
      { label: 'RESTful Integration', value: 'TMDB API' },
      { label: 'Days', value: '3' },
    ],
    liveUrl: 'https://fake-neflix-ui.netlify.app/user-list',
    scope: [
      'Researched modern React patterns and independently structured the application architecture.',
      'Constructed a modular, highly reusable component system styled with Material UI (MUI).',
      'Integrated TMDB REST API via Axios for real-time data fetching, trending lists, and movie details.',
      'Implemented dynamic search query filtering and responsive touch sliders using SwiperJS.',
    ],
    techStack: [
      {label: "Core", value: ['ReactJS 19', 'JavaScript (ES6+)']},
      {label: 'Libraries', value: ['SwiperJS', 'MUI', 'Axios']},
      {label: 'Tools', value: ['GitHub', 'Vite', 'Netlify']},
    ]
  },
  {
    id: 'casa-sallazzo',
    title: 'Casa Sallazzo',
    tagline: 'Architecture & Housing, Contact form, Blog',
    description: 'Developed a fully responsive layout powered by UIkit to eliminate redundant libraries, with streamlined dynamic content management via ACF.',
    longDescription: 'Casa Sollazzo is a custom WordPress website that I developed from scratch for a Japanese client in the housing and real estate industry. The website showcases custom-built homes, construction projects, company services, and customer inquiries through a clean, modern, and responsive interface.',
    category: 'Wordpress',
    practice: false,
    image: '/images/projects/casa-sallazzo.png',
    mockupType: 'dashboard',
    tags: ['WordPress', 'UIkit', 'Github', 'Contact Form 7', 'ACF'],
    metrics: [
      { label: 'Responsive Layout', value: '100%' },
      { label: 'Custom Post Types', value: '3+' },
      { label: 'Weeks', value: '2' },
    ],
    liveUrl: 'https://www.casa-sollazzo.jp/',
    scope: [
      'Developed a fully custom WordPress theme from scratch based on the provided design specifications.',
      'Created reusable templates and flexible ACF components to simplify client content management.',
      'Optimized website performance, page loading speed, and core SEO fundamentals.',
      'Ensured cross-browser compatibility and maintained clean code quality throughout the project.',
    ],
    techStack: [
      {label: "Core", value: ['WordPress', 'Vanilla Javascript', 'PHP', 'HTML5', 'EJS', 'CSS3/SCSS']},
      {label: 'Plugins & Libraries', value: ['UIkit', 'Contact Form 7']},
      {label: 'Design', value: ['Adobe XD']},
      {label: 'Tools', value: ['GitHub', 'Gulp']},
    ]
  },
  {
    id: 'les-quatre-saisons',
    title: 'Les Quatre Saisons',
    tagline: 'Luxury Wedding & Banquet, Smooth animation, Contact Form',
    description: 'Architected and delivered an end-to-end luxury party and wedding venue website for a Japanese client, combining custom WordPress development with smooth GSAP animations and UIkit.',
    longDescription: 'Led the complete end-to-end development of a bespoke website for Les Quatre Saisons, an upscale French-style party and wedding venue in Japan. Given full autonomy over technical decisions, I implemented a lightweight custom WordPress theme using UIkit for responsive layout structure and GSAP for subtle, elegant micro-animations. The project prioritized atmospheric storytelling, seamless touch-enabled gallery exploration, and a friction-free party reservation flow.',
    category: 'Wordpress',
    practice: false,
    image: '/images/projects/les-quatre-saisons.png',
    mockupType: 'dashboard',
    tags: ['WordPress', 'GSAP', 'ACF', 'UIkit', 'SwiperJS'],
    metrics: [
      { label: 'Smooth Animations', value: 'GSAP' },
      { label: 'Responsive Layout', value: '100%' },
      { label: 'Custom Post Types', value: '3+' },
      { label: 'Weeks', value: '2' },
    ],
    liveUrl: 'https://l-qs-party.com/',
    scope: [
      'Selected and integrated the optimal stack (UIkit, GSAP, SwiperJS) to achieve a modern luxury look while preventing library bloat.',
      "Engineered high-performance scroll-triggered animations and delicate transitions to elevate the venue's visual storytelling.",
      'Translated Figma designs into a pixel-perfect, custom WordPress theme fully optimized across mobile, tablet, and desktop viewports.',
      'Configured ACF for effortless party plan management and integrated Contact Form 7 with custom styling and validation rules.',
    ],
    techStack: [
      {label: "Core", value: ['WordPress', 'Vanilla Javascript', 'PHP', 'HTML5', 'EJS', 'CSS3/SCSS']},
      {label: 'Plugins & Libraries', value: ['UIkit', 'Contact Form 7', 'GSAP', 'SwiperJS']},
      {label: 'Design', value: ['Figma']},
      {label: 'Tools', value: ['GitHub', 'Gulp' ]},
    ]
  }
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

export const contactMethod: ContactMethod[] = [
  {
    name: 'Zalo',
    qr: '/images/contact/zalo_qr.jpg',
    url: 'https://zalo.me/0868227257'
  }
]