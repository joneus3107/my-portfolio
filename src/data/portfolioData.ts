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
  completedProjects: 60,
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
    category: 'WordPress',
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
    category: 'WordPress',
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
    category: 'WordPress',
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
    category: 'WordPress',
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
    category: 'WordPress',
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
    role: 'Frontend Developer / WordPress Developer',
    company: 'Allgrow Labo',
    location: '117-119 Lý Chính Thắng, Xuân Hòa, Hồ Chí Minh',
    type: 'Full-time',
    startDate: '09/2020',
    endDate: '05/2026',
    current: false,
    description: 'Spearheaded end-to-end frontend and custom WordPress development for designated Japanese enterprise clients, delivering pixel-perfect, responsive web solutions with high autonomy.',
    achievements: [
      'Translated complex Figma, Adobe XD, and Photoshop mockups into pixel-perfect, responsive WordPress themes adhering to rigorous Japanese quality standards.',
      'Operated with high autonomy to engineer custom template hierarchies, dynamic content workflows using ACF, and tailored form systems with MW WP Form or Contact Form 7.',
      'Optimized cross-browser rendering speeds and mobile experiences by utilizing lightweight frameworks (UIkit) and crafting smooth micro-interactions via GSAP and Vanilla JavaScript.',
      'Maintained ongoing production releases, addressed client change requests with quick turnaround, and ensured long-term stability across multiple web releases.',
    ],
    technologies: ['WordPress', 'UIkit', 'GSAP', 'Adobe Creative Suite', 'Figma', 'GitHub', 'PHP', 'JavaScript / jQuery', 'HTML/CSS'],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Website developer',
    institution: 'FPT Polytechnic College',
    location: 'Nguyễn Kiệm, HCM city',
    year: '08/2017 - 09/2020',
  },
];

export const certificationsList: Certification[] = [
  {
    id: 'cert-1',
    name: 'JLPT',
    issuer: 'Japan Foundation / JEES',
    date: '03/2024',
    badge: 'N5',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend & Web Standards',
    description: 'Foundational web languages, semantic layouts, and modern component-driven interfaces built for performance and responsive user experiences.',
    iconName: 'Code',
    skills: [
      { name: 'HTML5 / SCSS', mastery: 3, experience: '6+ years' },
      { name: 'JavaScript (ES6+)', mastery: 2, experience: '6+ years' },
      { name: 'React & MUI,', mastery: 1, experience: '6 months' },
    ],
  },{
    category: 'WordPress & CMS',
    description: 'Architecting bespoke WordPress themes from scratch, structured content modeling, and reliable client-facing data workflows without page-builder bloat.',
    iconName: 'Layout',
    skills: [
      { name: 'Custom Theme Development', mastery: 3, experience: '6+ years' },
      { name: 'PHP', mastery: 3, experience: '6+ years' },
    ],
  },{
    category: 'Tools & Workflow',
    description: 'Build automation, version control discipline, and seamless design-to-code collaboration for clean production delivery.',
    iconName: 'Wrench',
    skills: [
      { name: 'Task Runners & Bundlers (Gulp/Vite),', mastery: 2, experience: '6+ years' },
      { name: 'Git / Version Control', mastery: 2, experience: '3+ years' },
      { name: 'UI/UX Collaboration (Figma, Adobe)', mastery: 3, experience: '6+ years' },
    ],
  }
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
    title: 'High-Fidelity Craftsmanship',
    description: 'Translating design mockups into responsive layouts with high visual accuracy, disciplined spacing, and thoughtful typography.',
    metric: 'Precision & Visual Harmony',
  },
  {
    title: 'Lean & Minimal Dependencies',
    description: 'Leveraging native web capabilities and lightweight frameworks over heavy libraries to keep bundle sizes minimal and loading fast.',
    metric: 'Performance-First Mindset',
  },
  {
    title: 'Maintainable & Modular Code',
    description: 'Structuring clean template hierarchies and reusable components that make future enhancements straightforward and sustainable.',
    metric: 'Structured Architecture',
  },
  {
    title: 'Reliable End-to-End Delivery',
    description: 'Taking ownership from design handoff to production deployment, maintaining disciplined quality checks to ensure stable releases.',
    metric: 'Production-Ready Standards',
  },
];

export const contactMethod: ContactMethod[] = [
  {
    name: 'Zalo',
    qr: '/images/contact/zalo_qr.jpg',
    url: 'https://zalo.me/0868227257'
  }
]