import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface LoadOnScrollProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

export const LoadOnScroll: React.FC<LoadOnScrollProps> = ({
  children,
  fallback = null,
  rootMargin = '200px', // Start loading 200px before component enters viewport
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{isInView ? children : fallback}</div>;
};

export default LoadOnScroll;
