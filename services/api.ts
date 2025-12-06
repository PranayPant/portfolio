import { BlogPost } from '../types';

// Simulating an API call to demonstrate async data handling capabilities
// Using jsonplaceholder as requested for "fake placeholder api"
export const fetchTechArticles = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data as BlogPost[];
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
};
