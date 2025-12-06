import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { ProjectCard } from '../ProjectCard';
import { Project } from '../../types';

// Mock icons
vi.mock('lucide-react', () => ({
  ArrowUpRight: () => <span data-testid="arrow-up-right" />,
  Zap: (props: any) => <span data-testid="zap-icon" className={props.className} />,
  Layers: (props: any) => <span data-testid="layers-icon" className={props.className} />,
  BarChart: (props: any) => <span data-testid="bar-chart-icon" className={props.className} />,
}));

const mockProject: Project = {
  id: 'legacy-migration',
  title: 'Legacy Migration Project',
  description: 'Migrated a legacy system to modern architecture',
  impact: 'Reduced load time by 60% and improved user satisfaction',
  tech: ['React', 'TypeScript', 'Node.js', 'Docker']
};

describe('ProjectCard Component', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} index={0} />);

    expect(screen.getByText('Legacy Migration Project')).toBeInTheDocument();
    expect(screen.getByText('Migrated a legacy system to modern architecture')).toBeInTheDocument();
    expect(screen.getByText('Reduced load time by 60% and improved user satisfaction')).toBeInTheDocument();
  });

  it('renders technology stack', () => {
    render(<ProjectCard project={mockProject} index={0} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('displays correct icon for legacy-migration project', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    const zapIcon = screen.getByTestId('zap-icon');
    expect(zapIcon).toBeInTheDocument();
    expect(zapIcon).toHaveClass('text-amber-500');
  });

  it('displays correct icon for design-system project', () => {
    const designSystemProject: Project = {
      ...mockProject,
      id: 'design-system',
      title: 'Design System'
    };
    
    render(<ProjectCard project={designSystemProject} index={0} />);
    
    const layersIcon = screen.getByTestId('layers-icon');
    expect(layersIcon).toBeInTheDocument();
    expect(layersIcon).toHaveClass('text-purple-500');
  });

  it('displays correct icon for automation-suite project', () => {
    const automationProject: Project = {
      ...mockProject,
      id: 'automation-suite',
      title: 'Automation Suite'
    };
    
    render(<ProjectCard project={automationProject} index={0} />);
    
    const barChartIcon = screen.getByTestId('bar-chart-icon');
    expect(barChartIcon).toBeInTheDocument();
    expect(barChartIcon).toHaveClass('text-emerald-500');
  });

  it('displays default icon for unknown project type', () => {
    const unknownProject: Project = {
      ...mockProject,
      id: 'unknown-project',
      title: 'Unknown Project'
    };
    
    render(<ProjectCard project={unknownProject} index={0} />);
    
    expect(screen.getByTestId('layers-icon')).toBeInTheDocument();
  });

  it('renders arrow up right icon', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    expect(screen.getByTestId('arrow-up-right')).toBeInTheDocument();
  });

  it('displays impact section with proper styling', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    expect(screen.getByText('Impact:')).toBeInTheDocument();
    expect(screen.getByText('Reduced load time by 60% and improved user satisfaction')).toBeInTheDocument();
  });
});