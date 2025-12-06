import { ExperienceItem, Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Pranay Pant",
  role: "Senior Frontend Engineer",
  tagline: "Next.js Expert • Performance & UI Architecture",
  location: "Dallas, TX",
  email: "punch.up0079@gmail.com",
  phone: "+1-479-402-1614",
  summary: "Frontend specialist with 8+ years building high-performance, scalable UI systems using React, Next.js, and TypeScript. Expert in large-scale migrations, performance tuning, accessibility, and CI/CD automation."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'cvs',
    company: "CVS Health",
    role: "Frontend/UI Engineer",
    period: "2023 – Present",
    description: [
      "Rebuilt entire legacy RN-web UI into Next.js 13 App Router.",
      "Reduced bundle size and improved SEO via performance tools.",
      "Implemented React Query, SSR, accessibility test stack.",
      "Automated CI/CD testing using Playwright + Storybook."
    ]
  },
  {
    id: 'rv',
    company: "Red Ventures",
    role: "Senior Frontend Engineer",
    period: "2021 – 2023",
    description: [
      "Migrated multiple apps to Next.js + TypeScript.",
      "Standardized architecture using Tailwind + Context API.",
      "Implemented ISR and GraphQL-driven static generation."
    ]
  },
  {
    id: 'magellan',
    company: "Magellan Health",
    role: "Software Engineer",
    period: "2020 – 2021",
    description: [
      "UI-focused development in Agile sprints.",
      "Built E2E automation for authorization portal."
    ]
  },
  {
    id: 'walmart',
    company: "Walmart Labs",
    role: "Software Engineer",
    period: "2017 – 2020",
    description: [
      "Built CMS tools and dashboards for internal health systems."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'React/Next.js', category: 'Core', level: 95 },
  { name: 'TypeScript', category: 'Core', level: 90 },
  { name: 'Tailwind CSS', category: 'Core', level: 90 },
  { name: 'React Query/SWR', category: 'Core', level: 85 },
  { name: 'Playwright/Cypress', category: 'Testing', level: 85 },
  { name: 'Jest/RTL', category: 'Testing', level: 80 },
  { name: 'Web Performance', category: 'Performance', level: 90 },
  { name: 'CI/CD (Github Actions)', category: 'DevOps', level: 75 },
];

export const PROJECTS: Project[] = [
  {
    id: 'legacy-migration',
    title: "Legacy RN-Web to Next.js 13",
    tech: ["Next.js 13", "React Server Components", "TypeScript"],
    description: "Complete architectural overhaul of a legacy React Native Web application to a modern Next.js 13 App Router architecture.",
    impact: "Significantly reduced bundle size, improved SEO scores by 40%, and established a scalable foundation for future features."
  },
  {
    id: 'design-system',
    title: "Enterprise Design System",
    tech: ["Tailwind CSS", "Storybook", "React"],
    description: "Standardized UI architecture across multiple applications using a custom Tailwind configuration and component library.",
    impact: "Unified visual identity across Red Ventures properties and reduced UI development time by 30%."
  },
  {
    id: 'automation-suite',
    title: "E2E Automation Suite",
    tech: ["Playwright", "GitHub Actions"],
    description: "Built a comprehensive end-to-end testing suite integrated into the CI/CD pipeline for critical health authorization portals.",
    impact: "Reduced regression bugs by 60% and enabled daily deployments with confidence."
  }
];
