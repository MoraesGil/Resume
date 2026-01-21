import { Job, Education, Certificate } from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  Database, 
  Layout, 
  Server,
  Smartphone
} from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/moraesgil',
    icon: Linkedin,
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/MoraesGil',
    icon: Github,
  },
  {
    platform: 'Email',
    url: 'mailto:moraesdev@gmail.com',
    icon: Mail,
  }
];

export const SKILLS = [
  { name: 'React.js', icon: Code2 },
  { name: 'TypeScript', icon: Terminal },
  { name: 'Frontend Architecture', icon: Layout },
  { name: 'Node.js', icon: Server },
  { name: 'React Native', icon: Smartphone },
  { name: 'GraphQL', icon: Database },
  { name: 'Jest / Testing', icon: Code2 },
  { name: 'PHP / Laravel', icon: Server },
];

export const EXPERIENCE: Job[] = [
  {
    id: 'coderfull',
    company: 'Coderfull S.A. (Client: Indeed)',
    role: 'Senior Frontend Engineer',
    period: 'August 2022 – Present',
    description: 'Currently allocated to Indeed’s Analytics ecosystem, building high-complexity interfaces for data visualisation, sourcing intelligence and internal reporting tools.',
    highlights: [
      'Development of advanced tables, charts, and data-heavy UI components',
      'A11y compliance (WCAG 2.1 AA) across critical interfaces',
      'Automated testing with Jest and React Testing Library',
      'Collaboration with US-based engineering, product and UX teams'
    ],
    tech: ['React.js', 'TypeScript', 'GraphQL', 'Jest', 'RTL', 'Storybook', 'CSS-in-JS']
  },
  {
    id: 'inallmedia',
    company: 'In All Media, Inc. (Client: Indeed)',
    role: 'Senior Frontend Engineer',
    period: 'October 2021 – August 2022',
    description: 'Provided frontend development for Indeed’s internal tools before migration to Coderfull. Delivered enhancements, refactors and UI improvements aligned with design systems.',
    highlights: [
      'UI feature development using React.js and internal DS',
      'Refactoring and modernisation of legacy modules',
      'Test coverage expansion and documentation with Storybook'
    ],
    tech: ['React.js', 'TypeScript', 'Jest', 'Storybook']
  },
  {
    id: 'indeed-direct',
    company: 'Indeed.com (Internal Tools & Analytics)',
    role: 'Frontend Engineer',
    period: 'October 2021 – Present',
    description: 'Frontend engineering across multiple internal platforms at Indeed, including Internal Tools, Benchmark, Budget Estimator, and Analytics.',
    highlights: [
      'Built advanced UI components, including dynamic tables and analytical dashboards',
      'Implemented complex charting logic for data-heavy workflows',
      'Increased test coverage from 50% → 99% using Jest + RTL',
      'Migrated multiple applications to the Aurora CSS-in-JS design system',
      'Built full Cypress E2E suite for Budget Estimator',
      'Mentored onboarding engineers and improved documentation'
    ],
    tech: ['React.js', 'TypeScript', 'GraphQL', 'Jest', 'Cypress', 'Aurora DS']
  },
  {
    id: 'softo',
    company: 'Softo',
    role: 'Full-stack Developer',
    period: 'June 2020 – October 2021',
    description: 'Worked as a key developer across multiple high-impact projects, moving between mobile, frontend, and backend roles to deliver scalable solutions for various clients.',
    highlights: [],
    tech: ['React Native', 'React.js', 'NestJS', 'Vue.js', 'PHP', 'TypeScript'],
    projects: [
      {
        id: 'biosom',
        name: 'Biosom',
        role: 'Mobile & Backend Developer',
        description: 'Development for Hearian Guardian (Android App, 100M+ downloads). Maintained app and modernized subscription systems.',
        highlights: [
            'Implemented automatic subscription renewal system, boosting retention by 50%',
            'Implemented payment integrations (PagSeguro, PayPal) and Play Store flows',
            'Refactored interfaces using new UI from design team',
            'Implemented social login and unified account system'
        ],
        tech: ['Slim Framework (PHP)', 'React Native', 'React.js']
      },
      {
        id: 'collamap',
        name: 'CollaMap',
        role: 'Full-stack Developer',
        description: 'A platform fostering collaboration between researchers and organisations.',
        highlights: [
            'Improved navigation and caching architecture',
            'Enhanced backend error handling and large report queries',
            'Bug fixing and system stabilisation'
        ],
        tech: ['NestJS', 'TypeORM', 'React.js', 'Redux']
      },
      {
        id: 'fanhero',
        name: 'FanHero',
        role: 'Frontend Developer',
        description: 'Enhancements and maintenance for a live streaming web platform.',
        highlights: [
            'Cross-browser bug fixing and responsiveness adjustments',
            'Added Google Ads playback in web player',
            'Added attendee mute/block and camera control features'
        ],
        tech: ['Vue.js', 'TypeScript', 'GraphQL', 'PugLang']
      }
    ]
  },
  {
    id: 'perfectpay',
    company: 'PerfectPay',
    role: 'Backend Developer (PHP, Laravel, DBA)',
    period: 'January 2020 – June 2020',
    description: 'Backend development of Perfect Academy, an API product for course creation and management.',
    highlights: [
      'Built database structure for courses, lessons, and producers',
      'Implemented signup, password reset, and mailing workflows',
      'Designed subqueries to improve report performance'
    ],
    tech: ['Laravel', 'PHP', 'MySQL']
  },
  {
    id: 'santacasa',
    company: 'Santa Casa de Misericórdia',
    role: 'Full-stack Developer',
    period: 'October 2016 – December 2019',
    description: 'Led migration from legacy intranet to Laravel-based system.',
    highlights: [
      'Implemented customised access control',
      'Created digital information boards for patients',
      'Built a data importer for payroll tools'
    ],
    tech: ['Laravel', 'Vue.js', 'Firebird', 'PostgreSQL']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'fullcycle',
    institution: 'FullCycle',
    degree: 'MBA in Software Engineering with AI',
    period: '2024 – Present',
    summary: 'An advanced MBA centered on AI-native software engineering. Integrates modern architecture, LLM agents, applied machine learning, and DevOps/SRE with AI automation.'
  },
  {
    id: 'unoeste',
    institution: 'Universidade do Oeste Paulista (UNOESTE)',
    degree: 'Associate Degree in Internet Systems',
    period: '2012 – 2022',
    summary: 'Comprehensive 2,890-hour program focused on full-cycle web development, algorithms, object-oriented programming, and interface design.'
  }
];

export const CERTIFICATES: Certificate[] = [
  { id: '1', issuer: 'Rocketseat', title: 'React Native Fundamentals', year: '2024' },
  { id: '2', issuer: 'Rocketseat', title: 'Interfaces, Navigation & Local Storage', year: '2024' },
  { id: '3', issuer: 'School of Net', title: 'Node.js with GraphQL', year: '2021' },
  { id: '4', issuer: 'School of Net', title: 'TypeScript in Practice', year: '2020' },
  { id: '5', issuer: 'School of Net', title: 'Advanced React: Advanced Redux', year: '2019' },
  { id: '6', issuer: 'School of Net', title: 'Docker in Practice', year: '2019' },
  { id: '7', issuer: 'School of Net', title: 'APIs with Adonis.js', year: '2019' },
  { id: '8', issuer: 'School of Net', title: 'ES6: Modern JavaScript Concepts', year: '2019' },
  { id: '9', issuer: 'School of Net', title: 'Laravel 5.3: Scout & Real-Time Search', year: '2018' },
  { id: '10', issuer: 'TreinaWeb', title: 'Scrum: Agile Planning & Development', year: '2020' },
  { id: '11', issuer: 'Udemy', title: 'Creating Applications with Ionic 3 & Laravel', year: '2018' },
  { id: '12', issuer: 'School of Net', title: 'Git and GitHub', year: '2018' },
];