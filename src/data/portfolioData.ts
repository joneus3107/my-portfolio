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
  completedProjects: 42,
  openSourceContributions: 180,
  satisfactionRate: 99.4,
  socials: {
    github: 'https://github.com/joneus3107',
    linkedin: 'https://www.linkedin.com/in/b%C3%ACnh-l%C3%AA-b08512333/',
  },
};

export const sampleProjects: Project[] = [
  {
    id: 'aurora-design-system',
    title: 'Aurora UI Design System',
    tagline: 'Accessible, token-driven component architecture for enterprise React apps',
    description: 'An open-source, highly customizable React & MUI-based design system featuring 60+ WCAG AAA compliant components, dark/light multi-theming, automated visual regression tests, and full Figma sync.',
    longDescription: 'Aurora UI is an enterprise-scale component system designed to accelerate product development across 14 distributed engineering squads. Built with TypeScript, Material UI under-the-hood primitives, and Framer Motion for subtle micro-interactions.',
    category: 'Design Systems',
    featured: true,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'dashboard',
    tags: ['React 19', 'TypeScript', 'Material UI (MUI)', 'Storybook', 'Tailwind', 'Zero Runtime CSS'],
    metrics: [
      { label: 'Component Reusability', value: '94%' },
      { label: 'Dev Velocity', value: '+45%' },
      { label: 'Accessibility', value: '100 / 100' },
      { label: 'Bundle Footprint', value: '14.2 kB gzip' },
    ],
    liveUrl: 'https://example.com/aurora-design-system',
    githubUrl: 'https://github.com/example/aurora-ui',
    challenges: [
      'Maintaining zero-latency rendering while supporting dynamic user-defined theme overrides.',
      'Achieving strict WCAG 2.1 AAA accessibility compliance across complex multi-state elements like data grids and date range pickers.',
      'Minimizing tree-shaken bundle size for lightweight consumer imports.',
    ],
    solutions: [
      'Implemented CSS variable tokens paired with Emotion theme provider for atomic zero-re-render color updates.',
      'Integrated axe-core automated pipelines and ARIA 1.2 compliant keyboard navigation matrices.',
      'Configured granular sub-path ES exports and Rollup/Vite module chunking.',
    ],
    keyFeatures: [
      '60+ production-ready accessible components',
      'Dynamic token customization studio with live CSS generator',
      'Full TypeScript type safety with strict prop IntelliSense',
      'Built-in motion presets for fluid hover, enter, and exit transitions',
    ],
    techArchitecture: [
      'React 19 & TypeScript for strict type interfaces',
      '@mui/material & Emotion for resilient foundation layers',
      'Storybook 8 with interaction and visual tests',
      'Jest & Testing Library with 98% branch coverage',
    ],
    codeSnippet: {
      filename: 'AuroraButton.tsx',
      language: 'typescript',
      code: `import React, { forwardRef } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

export interface AuroraButtonProps extends MuiButtonProps {
  subtleGlow?: boolean;
  hapticFeedback?: boolean;
}

const StyledButton = styled(MuiButton)<{ subtleGlow?: boolean }>(({ theme, subtleGlow }) => ({
  borderRadius: 12,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.925rem',
  padding: '10px 22px',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  boxShadow: subtleGlow ? '0 4px 20px -2px rgba(0,0,0,0.08)' : 'none',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px -4px rgba(0,0,0,0.12)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
}));

export const AuroraButton = forwardRef<HTMLButtonElement, AuroraButtonProps>(
  ({ children, subtleGlow = true, ...props }, ref) => {
    return (
      <StyledButton ref={ref} subtleGlow={subtleGlow} disableElevation {...props}>
        {children}
      </StyledButton>
    );
  }
);`,
    },
  },
  {
    id: 'pulse-analytics-dashboard',
    title: 'Pulse Financial SaaS Dashboard',
    tagline: 'Real-time financial telemetry with sub-100ms charting & AI forecasting',
    description: 'A minimalist white-themed fintech analytics dashboard delivering instant insight into $40M+ quarterly transaction streams. Features smooth interactive charts, optimistic mutations, and custom data filters.',
    longDescription: 'Engineered for high-volume traders and finance leaders needing clarity without visual clutter. Utilizes server components, client-side caching with React Query, and SVG/Canvas micro-charts.',
    category: 'React & Next.js',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'browser',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Recharts', 'TanStack Query', 'Zustand'],
    metrics: [
      { label: 'Lighthouse Score', value: '99 / 100' },
      { label: 'Time to Interactive', value: '0.42s' },
      { label: 'Data Throughput', value: '50k ops/sec' },
      { label: 'User Retention', value: '+38%' },
    ],
    liveUrl: 'https://example.com/pulse-analytics',
    githubUrl: 'https://github.com/example/pulse-fintech',
    challenges: [
      'Rendering tens of thousands of live telemetry points without degrading 60fps scrolling.',
      'Preserving clean minimalist white aesthetics while providing rich multidimensional data visualization.',
      'Complex filter and date-range URL state synchronisation.',
    ],
    solutions: [
      'Implemented WebGL and canvas-backed virtualized data windowing for heavy time-series data.',
      'Crafted a high-contrast monochromatic color schema with deliberate semantic accents for positive/negative delta indicators.',
      'Engineered nuqs URL state management for shareable, reproducible dashboard views.',
    ],
    keyFeatures: [
      'Live streaming WebSocket telemetry feed with auto-reconnection',
      'Customizable drag-and-drop analytics widget grid',
      'One-click PDF & CSV report generation with styled export renderer',
      'AI anomaly detection notification cards',
    ],
    techArchitecture: [
      'Next.js 15 App Router with streaming SSR',
      'TanStack Table & Recharts for virtualized tabular views',
      'MUI Joy / Material UI modal dialogs and inputs',
      'Web Workers for client-side regression and aggregation calculations',
    ],
  },
  {
    id: 'flowstate-collaborative-canvas',
    title: 'FlowState Interactive Canvas',
    tagline: 'Infinite collaborative whiteboard with real-time vector path rendering',
    description: 'A high-performance infinite canvas web application for wireframing user flows, mind maps, and interface mockups with real-time multiplayer cursor synchronization.',
    longDescription: 'Created to replace clunky whiteboards with a featherlight, distraction-free creative space. Features pressure-sensitive pen input, smart snapping guides, and effortless component exportation to React JSX.',
    category: 'Tools & Apps',
    featured: true,
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'browser',
    tags: ['React', 'HTML5 Canvas', 'TypeScript', 'WebSockets', 'MUI Theme', 'Tailwind'],
    metrics: [
      { label: 'Frame Rate', value: '120 fps' },
      { label: 'Latency', value: '< 18ms' },
      { label: 'Monthly Active', value: '25k+' },
      { label: 'GitHub Stars', value: '1.8k' },
    ],
    liveUrl: 'https://example.com/flowstate-canvas',
    githubUrl: 'https://github.com/example/flowstate',
    challenges: [
      'Handling infinite panning and multi-level zooming without clipping or precision degradation.',
      'Conflict-free multi-user canvas shape updates.',
    ],
    solutions: [
      'Built a custom quadtree spatial indexing engine for fast viewport culling.',
      'Employed CRDT (Yjs) protocols for seamless peer-to-peer data convergence.',
    ],
    keyFeatures: [
      'Infinite zoomable 2D canvas with smooth inertia physics',
      'Live multiplayer presence with color-coded cursors',
      'Export directly to SVG, PNG, and clean React component code',
      'Minimalist distraction-free Zen mode interface',
    ],
    techArchitecture: [
      'React 19 with custom canvas hooks',
      'HTML5 Canvas 2D Context + Matrix transformations',
      'MUI popovers and floating action bars',
      'Zustand with history undo/redo stack',
    ],
  },
  {
    id: 'lumina-e-commerce',
    title: 'Lumina Minimalist Commerce',
    tagline: 'Ultra-fast headless luxury storefront with sub-second checkout',
    description: 'A headless e-commerce frontend built for a modern lifestyle brand. Features fluid page transitions, instant product search with fuzzy matching, and interactive 3D product previews.',
    longDescription: 'Focused on elevating conversion rates through friction-free user journeys, crisp typography, and serene white-space layouts that put product imagery in the spotlight.',
    category: 'React & Next.js',
    featured: false,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'mobile',
    tags: ['Next.js', 'React', 'Shopify Storefront API', 'Framer Motion', 'MUI', 'Tailwind CSS'],
    metrics: [
      { label: 'Conversion Rate', value: '+3.8%' },
      { label: 'Mobile Bounce Rate', value: '-22%' },
      { label: 'Page Load Speed', value: '0.38s' },
    ],
    liveUrl: 'https://example.com/lumina-store',
    githubUrl: 'https://github.com/example/lumina-store',
    challenges: [
      'Ensuring seamless client-side page transitions without layout shifts.',
      'Optimizing multi-resolution responsive product photography.',
    ],
    solutions: [
      'Next/Image with custom blurhash placeholding and modern AVIF/WebP formats.',
      'Shared layout animations using Framer Motion layoutId props.',
    ],
    keyFeatures: [
      'Instant slide-over cart with real-time stock validations',
      'Curated lookbook with clickable product hotspots',
      'Predictive search bar with keyboard-only navigation',
    ],
    techArchitecture: ['Next.js App Router', 'GraphQL Storefront API', 'Stripe Elements', 'MUI Drawer and Badges'],
  },
  {
    id: 'zenith-markdown-studio',
    title: 'Zenith Markdown & Documentation Studio',
    tagline: 'Distraction-free documentation editor with live React component preview',
    description: 'A sleek browser-based technical documentation editor with bidirectional markdown-to-React compilation, live AST tree inspector, and instant static site publishing.',
    longDescription: 'Created to streamline engineering documentation workflows. Integrates syntax highlighting, LaTeX math formula rendering, and auto-generated tables of contents.',
    category: 'Tools & Apps',
    featured: false,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'browser',
    tags: ['React', 'TypeScript', 'Monaco Editor', 'Unified / Remark', 'MUI Icons'],
    metrics: [
      { label: 'Typing Latency', value: '4ms' },
      { label: 'Doc Generation', value: '< 1s' },
      { label: 'Active Developers', value: '12k' },
    ],
    liveUrl: 'https://example.com/zenith-editor',
    githubUrl: 'https://github.com/example/zenith-studio',
    challenges: ['Maintaining synchronous scrolling between Monaco code editor and rendered HTML preview.'],
    solutions: ['Line-based DOM offset observer algorithm with smooth easing interpolations.'],
    keyFeatures: ['Dual split-pane with synchronised scroll', 'Live MDX JSX execution', 'Export to PDF, HTML, and GitHub Wiki'],
    techArchitecture: ['React 19', 'Monaco Editor API', 'Unified & Rehype plugins', 'MUI Split Panes'],
  },
  {
    id: 'prism-ai-agent-interface',
    title: 'Prism AI Workspace & Prompt Canvas',
    tagline: 'Clean conversational interface for multi-model AI agent orchestration',
    description: 'An AI interface featuring streaming markdown responses, interactive artifact code sandboxes, branchable prompt trees, and token consumption analytics.',
    longDescription: 'Designed around human-in-the-loop AI interaction principles, offering clean bubble layouts, code execution sandboxes, and exportable chat logs.',
    category: 'Full-Stack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'browser',
    tags: ['React', 'TypeScript', 'Gemini API', 'Express', 'Tailwind', 'MUI Dialogs'],
    metrics: [
      { label: 'Stream FPS', value: '60 fps' },
      { label: 'User Satisfaction', value: '4.9 / 5.0' },
      { label: 'Daily Prompts', value: '85k+' },
    ],
    liveUrl: 'https://example.com/prism-ai',
    githubUrl: 'https://github.com/example/prism-ai',
    challenges: ['Smoothly handling fast chunk streams without causing UI jitter or scroll jumps.'],
    solutions: ['Throttled requestAnimationFrame rendering buffer and smart sticky auto-scroll detector.'],
    keyFeatures: ['Live streaming token renderer', 'Interactive inline sandbox for HTML/React snippets', 'Prompt history timeline'],
    techArchitecture: ['React 19', 'Gemini 2.5 SDK', 'MUI Snackbars & Tabs', 'Tailwind Typography'],
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
    honors: 'Magna Cum Laude • Dean’s Honor List (4 semesters)',
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
