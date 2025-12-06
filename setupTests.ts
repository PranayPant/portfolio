import '@testing-library/jest-dom';
import { vi, afterEach } from 'vitest';

// Polyfill for Request/Response/Fetch if running in a pure Node environment (vitest)
// This is typical setup for Next.js 13+ testing environments
import 'whatwg-fetch';

// Mock IntersectionObserver which is often used in modern React UI components
class IntersectionObserverMock {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
}

window.IntersectionObserver = IntersectionObserverMock;

// Clean up DOM after each test
afterEach(() => {
  vi.clearAllMocks();
});
