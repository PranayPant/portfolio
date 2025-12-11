import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

              <div className={`md:flex items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white border-4 border-accent rounded-full -translate-x-[5px] md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content */}
                <div className="md:w-[45%] mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-slate-900">{exp.company}</h4>
                      <span className="inline-flex items-center text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                        <Calendar size={12} className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center text-slate-500 mb-4">
                      <Briefcase size={16} className="mr-2" />
                      <span className="font-medium">{exp.role}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                          <span className="text-accent mr-2 mt-1.5">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
