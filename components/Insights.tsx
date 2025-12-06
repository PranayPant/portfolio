import React, { useState, useEffect } from 'react';
import { fetchTechArticles } from '../services/api';
import { BlogPost } from '../types';
import { Loader2, BookOpen, ArrowUpRight } from 'lucide-react';

export const Insights: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating "fetching insights" to show API integration skills
    const loadData = async () => {
      // Artificial delay to show loading state nicely
      setTimeout(async () => {
        const data = await fetchTechArticles();
        setPosts(data);
        setLoading(false);
      }, 1500);
    };
    loadData();
  }, []);

  return (
    <section id="insights" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">API Integration Demo</h2>
            <h3 className="text-3xl font-bold">Latest Tech Insights</h3>
            <p className="text-slate-400 mt-2 text-sm">Fetched dynamically from a placeholder API to demonstrate async data handling.</p>
          </div>
          <button className="hidden md:flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors mt-4 md:mt-0">
             View All Posts <BookOpen size={16} className="ml-2" />
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 size={40} className="animate-spin text-accent mb-4" />
            <p className="text-slate-400">Fetching latest data...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map(post => (
              <div key={post.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="text-accent text-xs font-bold mb-3 uppercase tracking-wide">Article #{post.id}</div>
                <h4 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h4>
                <p className="text-slate-400 text-sm line-clamp-3 mb-4">{post.body}</p>
                <a href="#" className="text-sm text-white hover:text-accent inline-flex items-center">
                  Read More <ArrowUpRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};