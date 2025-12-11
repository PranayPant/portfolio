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

    expect(screen.getByText('CVS Health')).toBeInTheDocument();
    expect(screen.getByText('Frontend/UI Engineer')).toBeInTheDocument();
    expect(screen.getByText('2023 – Present')).toBeInTheDocument();

    expect(screen.getByText('Red Ventures')).toBeInTheDocument();
    expect(screen.getByText('Senior Frontend Engineer')).toBeInTheDocument();
    expect(screen.getByText('2021 – 2023')).toBeInTheDocument();
  });

  it('displays job descriptions correctly', () => {
    render(<ExperienceTimeline />);

    expect(screen.getByText('Rebuilt entire legacy RN-web UI into Next.js 13 App Router.')).toBeInTheDocument();
    expect(screen.getByText('Reduced bundle size and improved SEO via performance tools.')).toBeInTheDocument();
    expect(screen.getByText('Migrated multiple apps to Next.js + TypeScript.')).toBeInTheDocument();
    expect(screen.getByText('Standardized architecture using Tailwind + Context API.')).toBeInTheDocument();
  });

  it('renders briefcase and calendar icons', () => {
    render(<ExperienceTimeline />);

    const briefcaseIcons = screen.getAllByTestId('briefcase');
    const calendarIcons = screen.getAllByTestId('calendar');

    expect(briefcaseIcons).toHaveLength(4); // One for each experience
    expect(calendarIcons).toHaveLength(4); // One for each experience
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
