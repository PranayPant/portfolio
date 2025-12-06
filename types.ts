export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Core' | 'Testing' | 'Performance' | 'DevOps';
  level: number; // 0-100
}

export interface BlogPost {
  id: number;
  title: string;
  body: string;
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  impact: string;
}
