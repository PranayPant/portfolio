import React, { Suspense, ReactNode } from 'react';
import LoadOnScroll from './LoadOnScroll';

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

/**
 * LazyLoad - Combines viewport-based lazy loading with React.Suspense
 *
 * This wrapper component handles both aspects of lazy loading:
 * 1. LoadOnScroll - Only renders when component enters viewport
 * 2. Suspense - Handles async component loading with fallback
 */
export const LazyLoad: React.FC<LazyLoadProps> = ({ children, fallback = null, rootMargin = '200px' }) => {
  return (
    <LoadOnScroll fallback={fallback} rootMargin={rootMargin}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </LoadOnScroll>
  );
};

export default LazyLoad;
