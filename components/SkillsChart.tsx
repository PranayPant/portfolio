import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import { SKILLS } from '../constants';

export const SkillsChart: React.FC = () => {
  const data = SKILLS.map(skill => ({
    name: skill.name,
    level: skill.level,
    category: skill.category,
  })).sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Technical Proficiency</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Deep dive into the modern frontend stack. High proficiency in React ecosystem and performance optimization tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', border: 'none' }}
                  itemStyle={{ color: '#38bdf8' }}
                />
                <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.level > 90 ? '#0ea5e9' : '#94a3b8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-slate-900 mb-3">Core Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React 18', 'Next.js 13/14', 'TypeScript', 'Tailwind', 'HTML5', 'CSS3'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-slate-900 mb-3">Testing & Performance</h4>
              <div className="flex flex-wrap gap-2">
                {['Playwright', 'Cypress', 'Jest', 'Lighthouse', 'Web Vitals', 'a11y'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-slate-900 mb-3">Architecture & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {['GitHub Actions', 'Docker', 'Azure DevOps', 'SSR/ISR', 'GraphQL'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
