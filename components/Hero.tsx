import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'PranaysResume.pdf';
    link.click();
  };
  return (
    <section id="about" className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-100/50 rounded-bl-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold rounded-full text-sm">
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building scalable <br />
              <span className="text-accent">Web Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">{PERSONAL_INFO.summary}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#experience"
                className="group flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:scale-105"
              >
                View Experience
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                className="flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all"
                onClick={handleResumeDownload}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-slate-200">
              <div>
                <p className="text-3xl font-bold text-slate-900">8+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide mt-1">Years Exp</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">Next.js</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide mt-1">Expert</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide mt-1">Optimization</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              {/* Placeholder for professional headshot */}
              <img
                src="https://picsum.photos/800/800?grayscale"
                srcSet="https://picsum.photos/400/400?grayscale 400w,
                        https://picsum.photos/600/600?grayscale 600w,
                        https://picsum.photos/800/800?grayscale 800w"
                sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
                alt="Pranay Pant"
                loading="eager"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-xl">Pranay Pant</p>
                  <p className="text-slate-200 text-sm">Senior Frontend Engineer</p>
                </div>
              </div>
            </div>
            {/* Decor elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
