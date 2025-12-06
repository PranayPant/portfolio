import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock all child components
vi.mock('../components/Layout', () => ({
  Layout: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>
}));

vi.mock('../components/Hero', () => ({
  Hero: () => <div data-testid="hero">Hero Component</div>
}));

vi.mock('../components/ExperienceTimeline', () => ({
  ExperienceTimeline: () => <div data-testid="experience-timeline">Experience Timeline</div>
}));

vi.mock('../components/SkillsChart', () => ({
  SkillsChart: () => <div data-testid="skills-chart">Skills Chart</div>
}));

vi.mock('../components/ProjectCard', () => ({
  ProjectCard: ({ project }: any) => <div data-testid={`project-card-${project.id}`}>{project.title}</div>
}));

vi.mock('../components/Insights', () => ({
  Insights: () => <div data-testid="insights">Insights Component</div>
}));

vi.mock('../constants', () => ({
  PROJECTS: [
    {
      id: 'project-1',
      title: 'Test Project 1',
      description: 'Test description 1',
      tech: ['React', 'TypeScript'],
      impact: 'Test impact 1'
    },
    {
      id: 'project-2', 
      title: 'Test Project 2',
      description: 'Test description 2',
      tech: ['Node.js', 'Docker'],
      impact: 'Test impact 2'
    }
  ]
}));

describe('App Component', () => {
  it('renders the main layout', () => {
    render(<App />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('experience-timeline')).toBeInTheDocument();
    expect(screen.getByTestId('skills-chart')).toBeInTheDocument();
    expect(screen.getByTestId('insights')).toBeInTheDocument();
  });

  it('renders projects section with heading and description', () => {
    render(<App />);
    
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Featured Case Studies')).toBeInTheDocument();
    expect(screen.getByText(/Key projects extracted from professional experience/)).toBeInTheDocument();
  });

  it('renders project cards for each project', () => {
    render(<App />);
    
    expect(screen.getByTestId('project-card-project-1')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-project-2')).toBeInTheDocument();
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
  });

  it('has proper section structure with correct ids', () => {
    const { container } = render(<App />);
    
    const projectsSection = container.querySelector('#projects');
    expect(projectsSection).toBeInTheDocument();
    expect(projectsSection).toHaveClass('py-24', 'bg-white');
  });

  it('renders background decorative elements', () => {
    const { container } = render(<App />);
    
    const decorativeBlob = container.querySelector('.bg-slate-100.rounded-full.blur-3xl');
    expect(decorativeBlob).toBeInTheDocument();
  });

  it('renders all components in correct order', () => {
    render(<App />);
    
    const layout = screen.getByTestId('layout');
    const hero = screen.getByTestId('hero');
    const experienceTimeline = screen.getByTestId('experience-timeline');
    const skillsChart = screen.getByTestId('skills-chart');
    const insights = screen.getByTestId('insights');
    
    expect(layout).toContainElement(hero);
    expect(layout).toContainElement(experienceTimeline);
    expect(layout).toContainElement(skillsChart);
    expect(layout).toContainElement(insights);
  });
});