import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Zap, Layers, BarChart } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index: _index }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'legacy-migration':
        return <Zap size={24} className="text-amber-500" />;
      case 'design-system':
        return <Layers size={24} className="text-purple-500" />;
      case 'automation-suite':
        return <BarChart size={24} className="text-emerald-500" />;
      default:
        return <Layers size={24} />;
    }
  };

  return (
    <div className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="mb-6 flex justify-between items-start">
        <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">{getIcon(project.id)}</div>
        <div className="text-slate-300 group-hover:text-slate-900 transition-colors">
          <ArrowUpRight size={24} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
      <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>

      <div className="mb-6 bg-slate-50 p-4 rounded-lg">
        <p className="text-sm font-semibold text-slate-900 mb-1">Impact:</p>
        <p className="text-sm text-slate-600 italic">{project.impact}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 bg-white border border-slate-200 text-xs font-medium text-slate-500 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
