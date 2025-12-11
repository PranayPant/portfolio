import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { QualityIndicators } from '../QualityIndicators';

// Mock icons
vi.mock('lucide-react', () => ({
  ShieldCheck: (props: any) => <span data-testid="shield-check" className={props.className} />,
  Activity: (props: any) => <span data-testid="activity" className={props.className} />,
  Terminal: (props: any) => <span data-testid="terminal" className={props.className} />,
  CheckCircle2: (props: any) => <span data-testid="check-circle" className={props.className} />,
}));

describe('QualityIndicators Component', () => {
  it('renders the main heading and description', () => {
    render(<QualityIndicators />);

    expect(screen.getByText('Engineering Quality Standards')).toBeInTheDocument();
    expect(screen.getByText('Automated CI/CD Pipeline Status')).toBeInTheDocument();
  });

  it('displays build status indicator', () => {
    render(<QualityIndicators />);

    expect(screen.getByText('Build: Passing')).toBeInTheDocument();
  });

  it('displays unit test coverage information', () => {
    render(<QualityIndicators />);

    expect(screen.getByText(/Unit Tests:/)).toBeInTheDocument();
    expect(screen.getByText('98% Coverage')).toBeInTheDocument();
  });

  it('displays E2E testing information', () => {
    render(<QualityIndicators />);

    expect(screen.getByText(/E2E:/)).toBeInTheDocument();
    expect(screen.getByText('Playwright Verified')).toBeInTheDocument();
  });

  it('displays Lighthouse score', () => {
    render(<QualityIndicators />);

    expect(screen.getByText(/Lighthouse:/)).toBeInTheDocument();
    expect(screen.getByText('100/100')).toBeInTheDocument();
  });

  it('renders all status icons', () => {
    render(<QualityIndicators />);

    expect(screen.getByTestId('shield-check')).toBeInTheDocument();
    expect(screen.getByTestId('terminal')).toBeInTheDocument();
    expect(screen.getByTestId('activity')).toBeInTheDocument();
    expect(screen.getByTestId('check-circle')).toBeInTheDocument();
  });

  it('has proper icon styling', () => {
    render(<QualityIndicators />);

    expect(screen.getByTestId('shield-check')).toHaveClass('text-emerald-400');
    expect(screen.getByTestId('terminal')).toHaveClass('text-accent');
    expect(screen.getByTestId('activity')).toHaveClass('text-purple-400');
    expect(screen.getByTestId('check-circle')).toHaveClass('text-amber-400');
  });

  it('displays proper tooltip attributes', () => {
    render(<QualityIndicators />);

    const unitTestElement = screen.getByTitle('Mocked Test Coverage');
    expect(unitTestElement).toBeInTheDocument();

    const e2eTestElement = screen.getByTitle('E2E Testing via Playwright');
    expect(e2eTestElement).toBeInTheDocument();
  });
});
