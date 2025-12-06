import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchTechArticles } from '../api';

// Mocking the global fetch function
// using globalThis to support both node and dom environments
(globalThis as any).fetch = vi.fn();

describe('fetchTechArticles Service', () => {
  beforeEach(() => {
    // Clear mocks before each test
    vi.clearAllMocks();
  });

  it('should return a list of blog posts when API call is successful', async () => {
    const mockPosts = [
      { id: 1, title: 'Test Post 1', body: 'Body 1' },
      { id: 2, title: 'Test Post 2', body: 'Body 2' },
    ];

    // Mock successful response
    vi.mocked(globalThis.fetch).mockResolvedValue({
      ok: true,
      json: async () => mockPosts,
    } as Response);

    const posts = await fetchTechArticles();

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(globalThis.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?_limit=4');
    expect(posts).toEqual(mockPosts);
    expect(posts).toHaveLength(2);
  });

  it('should return an empty array when the API call fails', async () => {
    // Mock failed response
    vi.mocked(globalThis.fetch).mockResolvedValue({
      ok: false,
    } as Response);

    const posts = await fetchTechArticles();

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(posts).toEqual([]);
    expect(posts).toHaveLength(0);
  });

  it('should return an empty array when network error occurs', async () => {
    // Mock network error
    vi.mocked(globalThis.fetch).mockRejectedValue(new Error('Network Error'));

    const posts = await fetchTechArticles();

    expect(posts).toEqual([]);
  });
});
