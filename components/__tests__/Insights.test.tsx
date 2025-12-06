import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Insights } from '../Insights';
import { BlogPost } from '../../types';

// Mock icons
vi.mock('lucide-react', () => ({
  Loader2: (props: any) => <span data-testid="loader" className={props.className} />,
  BookOpen: (props: any) => <span data-testid="book-open" className={props.className} />,
  ArrowUpRight: (props: any) => <span data-testid="arrow-up-right" className={props.className} />,
}));

// Mock the API service
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    body: 'React Hooks provide a way to use state and lifecycle features in functional components.'
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    body: 'Learn the best practices for writing maintainable TypeScript code.'
  }
];

vi.mock('../../services/api', () => ({
  fetchTechArticles: vi.fn()
}));

import { fetchTechArticles } from '../../services/api';

describe('Insights Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(fetchTechArticles).mockResolvedValue(mockBlogPosts);
  });

  it('renders section heading and description', () => {
    render(<Insights />);

    expect(screen.getByText('API Integration Demo')).toBeInTheDocument();
    expect(screen.getByText('Latest Tech Insights')).toBeInTheDocument();
    expect(screen.getByText(/Fetched dynamically from a placeholder API/)).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<Insights />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByText('Fetching latest data...')).toBeInTheDocument();
  });

  it('displays blog posts after loading', async () => {
    render(<Insights />);

    // Wait for loading to complete (1500ms timeout + API call)
    await waitFor(
      () => {
        expect(screen.getByText('Understanding React Hooks')).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument();
    expect(screen.getByText(/React Hooks provide a way/)).toBeInTheDocument();
    expect(screen.getByText(/Learn the best practices/)).toBeInTheDocument();
  });

  it('displays article numbers correctly', async () => {
    render(<Insights />);

    await waitFor(
      () => {
        expect(screen.getByText('Article #1')).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    expect(screen.getByText('Article #2')).toBeInTheDocument();
  });

  it('renders "View All Posts" button on desktop', () => {
    render(<Insights />);

    expect(screen.getByText('View All Posts')).toBeInTheDocument();
    expect(screen.getByTestId('book-open')).toBeInTheDocument();
  });

  it('renders "Read More" links for each article', async () => {
    render(<Insights />);

    await waitFor(
      () => {
        const readMoreLinks = screen.getAllByText('Read More');
        expect(readMoreLinks).toHaveLength(2);
      },
      { timeout: 2000 }
    );

    const arrowIcons = screen.getAllByTestId('arrow-up-right');
    expect(arrowIcons).toHaveLength(2);
  });

  it('calls fetchTechArticles API', async () => {
    render(<Insights />);

    await waitFor(
      () => {
        expect(fetchTechArticles).toHaveBeenCalledTimes(1);
      },
      { timeout: 2000 }
    );
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<Insights />);
    
    const section = container.querySelector('#insights');
    expect(section).toBeInTheDocument();
  });

  it('applies correct background styling', () => {
    const { container } = render(<Insights />);
    
    const section = container.querySelector('#insights');
    expect(section).toHaveClass('py-24', 'bg-slate-900', 'text-white');
  });

  it('handles empty blog posts array', async () => {
    vi.mocked(fetchTechArticles).mockResolvedValue([]);
    
    render(<Insights />);

    await waitFor(
      () => {
        expect(screen.queryByText('Fetching latest data...')).not.toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    // Should not show any article cards
    expect(screen.queryByText('Article #1')).not.toBeInTheDocument();
  });
});