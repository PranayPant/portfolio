import React, { ReactNode, useState, useEffect, Suspense } from 'react';
import { Menu, X, GithubIcon, LinkedinIcon, Mail, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';

// Lazy load QualityIndicators since it's below the fold
const QualityIndicators = React.lazy(() => import('@components/widgets/QualityIndicators'));

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Insights', href: '#insights' }, // Dynamic API content
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-slate-900 tracking-tight">
            {PERSONAL_INFO.name.split(' ')[0]}
            <span className="text-accent">.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            <div className="flex items-center space-x-4 xl:space-x-6">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-accent transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-3 xl:space-x-4 border-l border-slate-200 pl-4 xl:pl-6">
              <a
                href="https://github.com/PranayPant/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-accent transition-colors flex items-center gap-1"
                title="View Source Code"
              >
                <GithubIcon size={16} />
                <span className="hidden xl:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pranay-pant-521174306/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-accent transition-colors flex items-center gap-1"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon size={16} />
                <span className="hidden xl:inline">LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-accent font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/PranayPant/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-accent font-medium py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
              title="View Source Code"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pranay-pant-521174306/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-accent font-medium py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
              title="Connect on LinkedIn"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">{children}</main>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{PERSONAL_INFO.name}</h3>
            <p className="text-slate-400 mb-6 max-w-xs">{PERSONAL_INFO.role}</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/PranayPant/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="View Source Code"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranay-pant-521174306/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span>{PERSONAL_INFO.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Smartphone size={16} className="text-accent" />
                <span>{PERSONAL_INFO.phone}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Education</h4>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-white font-medium">B.S. Computer Science</p>
              <p className="text-slate-400 text-sm">University of California, San Diego (UCSD)</p>
            </div>
          </div>
        </div>

        {/* Engineering Quality Indicators */}
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-8">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
              </div>
            </div>
          }
        >
          <QualityIndicators />
        </Suspense>

        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with React & Tailwind.
        </div>
      </footer>
    </div>
  );
};
