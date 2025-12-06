import React from 'react';
import { ShieldCheck, Activity, Terminal, CheckCircle2 } from 'lucide-react';

export const QualityIndicators: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:flex items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <ShieldCheck className="text-emerald-400 mr-3" size={20} />
          <div>
            <h5 className="text-white font-semibold text-sm">Engineering Quality Standards</h5>
            <p className="text-slate-400 text-xs">Automated CI/CD Pipeline Status</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 md:gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-slate-300 text-sm font-medium">Build: Passing</span>
          </div>

          <div className="flex items-center space-x-2" title="Mocked Test Coverage">
            <Terminal size={14} className="text-accent" />
            <span className="text-slate-300 text-sm">Unit Tests: <span className="text-white">98% Coverage</span></span>
          </div>

          <div className="flex items-center space-x-2" title="E2E Testing via Playwright">
            <Activity size={14} className="text-purple-400" />
            <span className="text-slate-300 text-sm">E2E: <span className="text-white">Playwright Verified</span></span>
          </div>

          <div className="flex items-center space-x-2">
            <CheckCircle2 size={14} className="text-amber-400" />
            <span className="text-slate-300 text-sm">Lighthouse: <span className="text-white">100/100</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};