import { useState } from 'react';
import { SEO } from '../SEO';
import { PORTFOLIO_ITEMS } from '../../data/portfolioData';
import { 
  ArrowRight, 
  ExternalLink
} from 'lucide-react';
import { EditorialPortfolioCardSkeleton } from '../skeletons/Skeleton';

interface PortfolioPageProps {
  onOpenConsultation: (pkg?: string) => void;
}

const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Applications' },
  { id: 'ecom', label: 'E-Commerce' },
  { id: 'app', label: 'Booking & Systems' }
];

export function PortfolioPage({ onOpenConsultation }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFilterChange = (filterId: string) => {
    if (filterId === activeFilter) return;
    setIsLoading(true);
    setActiveFilter(filterId);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return item.category.toLowerCase().includes('hospitality') || item.category.toLowerCase().includes('education') || item.category.toLowerCase().includes('dining');
    if (activeFilter === 'ecom') return item.category.toLowerCase().includes('commerce') || item.tag.toLowerCase().includes('e-commerce');
    if (activeFilter === 'app') return item.category.toLowerCase().includes('booking') || item.category.toLowerCase().includes('healthcare') || item.tag.toLowerCase().includes('system');
    return true;
  });

  return (
    <>
      <SEO 
        title="Portfolio | Hinton Evolution Tech"
        description="View our recent website design, software engineering, and digital growth projects."
      />
      <div className="space-y-20 py-8 sm:py-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              LIVE APPLICATIONS & PROJECTS
            </span>
            <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Recent <span className="text-violet-600">Projects</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real production web applications, custom e-commerce platforms, booking systems, and business portals deployed live on Vercel with zero bloat and instant loading speeds.
          </p>

          {/* Filter Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_FILTERS.map((f) => {
                const isSelected = activeFilter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => handleFilterChange(f.id)}
                    className={`px-4 py-2 text-xs rounded-xl font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <EditorialPortfolioCardSkeleton key={idx} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:shadow-md hover:border-violet-300 transition-all shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-mono font-bold">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                      {item.title}
                    </h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-50 hover:bg-violet-50 text-slate-600 hover:text-violet-700 transition-colors shrink-0"
                        title={`Visit ${item.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Engineered Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl border border-slate-300 hover:border-violet-400 bg-white text-slate-800 hover:text-violet-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => onOpenConsultation(`Request Architecture like ${item.title}`)}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Request Similar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
    </>
  );
}