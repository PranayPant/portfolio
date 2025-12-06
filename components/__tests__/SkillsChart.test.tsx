import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { SkillsChart } from '../SkillsChart';

// Mock recharts components
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: any) => <div data-testid="responsive-container">{children}</div>,
  BarChart: ({ children }: any) => <div data-testid="bar-chart">{children}</div>,
  Bar: ({ children }: any) => <div data-testid="bar">{children}</div>,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  Tooltip: () => <div data-testid="tooltip" />,
  CartesianGrid: () => <div data-testid="cartesian-grid" />,
  Cell: () => <div data-testid="cell" />,
}));

// Mock SKILLS constant
vi.mock('../../constants', () => ({
  SKILLS: [
    { name: 'React', level: 95, category: 'Core' },
    { name: 'TypeScript', level: 90, category: 'Core' },
    { name: 'Node.js', level: 85, category: 'Core' },
    { name: 'Jest', level: 80, category: 'Testing' }
  ]
}));

describe('SkillsChart Component', () => {
  it('renders section heading and description', () => {
    render(<SkillsChart />);

    expect(screen.getByText('Expertise')).toBeInTheDocument();
    expect(screen.getByText('Technical Proficiency')).toBeInTheDocument();
    expect(screen.getByText(/Deep dive into the modern frontend stack/)).toBeInTheDocument();
  });

  it('renders chart components', () => {
    render(<SkillsChart />);

    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
    expect(screen.getByTestId('bar')).toBeInTheDocument();
    expect(screen.getByTestId('x-axis')).toBeInTheDocument();
    expect(screen.getByTestId('y-axis')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    expect(screen.getByTestId('cartesian-grid')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<SkillsChart />);
    
    const section = container.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<SkillsChart />);
    
    const section = container.querySelector('#skills');
    expect(section).toHaveClass('py-24', 'bg-white');
  });

  it('contains chart container with proper styling', () => {
    const { container } = render(<SkillsChart />);
    
    const chartContainer = container.querySelector('.h-\\[400px\\]');
    expect(chartContainer).toBeInTheDocument();
    expect(chartContainer).toHaveClass('bg-slate-50', 'rounded-xl');
  });
});