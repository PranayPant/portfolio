import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { ExperienceTimeline } from '../ExperienceTimeline';

// Mock icons
vi.mock('lucide-react', () => ({
  Briefcase: (props: any) => <span data-testid="briefcase" className={props.className} />,
  Calendar: (props: any) => <span data-testid="calendar" className={props.className} />,
}));

// Mock EXPERIENCES constant
vi.mock('../../constants', () => ({
  EXPERIENCES: [
    {
      id: 'exp1',
      company: 'Tech Corp',
      role: 'Senior Frontend Engineer',
      period: '2022 - Present',
      description: ['Led development of React applications', 'Improved performance by 40%', 'Mentored junior developers'],
    },
    {
      id: 'exp2',
      company: 'StartupXYZ',
      role: 'Frontend Developer',
      period: '2020 - 2022',
      description: ['Built responsive web applications', 'Implemented modern UI/UX designs'],
    },
  ],
}));

describe('ExperienceTimeline Component', () => {
  it('renders section heading and description', () => {
    render(<ExperienceTimeline />);

    expect(screen.getByText('Career Path')).toBeInTheDocument();
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
  });

  it('renders all experience items', () => {
    render(<ExperienceTimeline />);

    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
    expect(screen.getByText('Senior Frontend Engineer')).toBeInTheDocument();
    expect(screen.getByText('2022 - Present')).toBeInTheDocument();

    expect(screen.getByText('StartupXYZ')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('2020 - 2022')).toBeInTheDocument();
  });

  it('displays job descriptions correctly', () => {
    render(<ExperienceTimeline />);

    expect(screen.getByText('Led development of React applications')).toBeInTheDocument();
    expect(screen.getByText('Improved performance by 40%')).toBeInTheDocument();
    expect(screen.getByText('Mentored junior developers')).toBeInTheDocument();
    expect(screen.getByText('Built responsive web applications')).toBeInTheDocument();
    expect(screen.getByText('Implemented modern UI/UX designs')).toBeInTheDocument();
  });

  it('renders briefcase and calendar icons', () => {
    render(<ExperienceTimeline />);

    const briefcaseIcons = screen.getAllByTestId('briefcase');
    const calendarIcons = screen.getAllByTestId('calendar');

    expect(briefcaseIcons).toHaveLength(2); // One for each experience
    expect(calendarIcons).toHaveLength(2); // One for each experience
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<ExperienceTimeline />);

    const section = container.querySelector('#experience');
    expect(section).toBeInTheDocument();
  });

  it('applies correct background styling', () => {
    const { container } = render(<ExperienceTimeline />);

    const section = container.querySelector('#experience');
    expect(section).toHaveClass('py-24', 'bg-slate-50');
  });

  it('displays timeline structure correctly', () => {
    const { container } = render(<ExperienceTimeline />);

    // Check for timeline dots (should have 2, one for each experience)
    const timelineDots = container.querySelectorAll('.rounded-full');
    expect(timelineDots.length).toBeGreaterThanOrEqual(2);
  });
});
