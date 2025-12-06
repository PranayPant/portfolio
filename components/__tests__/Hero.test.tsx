import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from '../Hero';
import { PERSONAL_INFO } from '../../constants';

// Mocking Lucide icons since they are not relevant to logic
vi.mock('lucide-react', () => ({
  ArrowRight: () => <span data-testid="arrow-right" />,
  Download: () => <span data-testid="download" />,
}));

describe('Hero Component', () => {
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
    // Mock window.alert
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<Hero />);
    
    const downloadButton = screen.getByText(/Download Resume/i);
    fireEvent.click(downloadButton);
    
    expect(alertMock).toHaveBeenCalledWith('Resume download simulation');
    
    alertMock.mockRestore();
  });
});