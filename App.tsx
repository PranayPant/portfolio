import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsChart } from './components/SkillsChart';
import { ProjectCard } from './components/ProjectCard';
import { Insights } from './components/Insights';
import { PROJECTS } from './constants';
import { Chat } from './components/ChatBot';

function App() {
  return (
    <Layout>
      <Hero />

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Skills Section */}
      <SkillsChart />

      {/* Featured Projects / Case Studies Section */}
      <section id="projects" className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Case Studies</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Key projects extracted from professional experience demonstrating impact on performance, architecture, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights / API Demo Section */}
      <Insights />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to improve your frontend architecture?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">I&apos;m currently based in Dallas, TX and open to discussing new opportunities.</p>
          <a
            href="mailto:punch.up0079@gmail.com"
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-sky-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
      <Chat />
    </Layout>
  );
}

export default App;
