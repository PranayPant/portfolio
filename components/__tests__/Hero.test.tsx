import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { Hero } from '../Hero';
import { PERSONAL_INFO } from '../../constants';

// Mocking Lucide icons since they are not relevant to logic
vi.mock('lucide-react', () => ({
  ArrowRight: () => <span data-testid="arrow-right" />,
  Download: () => <span data-testid="download" />,
}));

describe('Hero Component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders the main heading correctly', () => {
    render(<Hero />);

    // Check for "Web Experiences" text which is emphasized
    const headingAccent = screen.getByText(/Web Experiences/i);
    expect(headingAccent).toBeInTheDocument();

    // Check for the availability badge
    expect(screen.getByText(/Available for new opportunities/i)).toBeInTheDocument();
  });

  it('renders personal summary from constants', () => {
    render(<Hero />);
    expect(screen.getByText(PERSONAL_INFO.summary)).toBeInTheDocument();
  });

  it('renders stat counters correctly', () => {
    render(<Hero />);

    expect(screen.getByText('8+')).toBeInTheDocument();
    expect(screen.getByText('Years Exp')).toBeInTheDocument();

    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Expert')).toBeInTheDocument();
  });

  it('handles resume download click', () => {
    render(<Hero />);

    // Set up mocks after component is rendered
    const mockClick = vi.fn();
    const mockAnchor = {
      href: '',
      download: '',
      style: { display: '' },
      click: mockClick,
    };

    // Mock document.createElement
    const originalCreateElement = document.createElement;
    const createElementSpy = vi.spyOn(document, 'createElement').mockImplementation(tagName => {
      if (tagName === 'a') {
        return mockAnchor as any;
      }
      return originalCreateElement.call(document, tagName);
    });

    // Mock appendChild and removeChild to be no-ops
    const appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation(() => mockAnchor as any);

    const removeChildSpy = vi.spyOn(document.body, 'removeChild').mockImplementation(() => mockAnchor as any);

    const downloadButton = screen.getByText(/Download Resume/i);
    fireEvent.click(downloadButton);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(mockAnchor.href).toContain('Resume_frontend.pdf');
    expect(mockAnchor.download).toBe('Resume_frontend.pdf');
    expect(mockClick).toHaveBeenCalled();

    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
    removeChildSpy.mockRestore();
  });
});
