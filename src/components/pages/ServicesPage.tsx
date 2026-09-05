import { useState } from 'react';
import { PageId } from '../../types';
import { SERVICES_CATEGORIES } from '../../data/servicesData';
import { 
  Search
} from 'lucide-react';
import { EditorialServiceCardSkeleton } from '../skeletons/Skeleton';
import { WebsiteDevelopmentSection } from '../WebsiteDevelopmentSection';
import { CompleteServicesDirectoryCards } from '../CompleteServicesDirectoryCards';
import { SEO } from '../SEO';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export function ServicesPage({ onNavigate, onOpenConsultation }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = (catId: string) => {
    if (catId === selectedCategory) return;
    setIsLoading(true);
    setSelectedCategory(catId);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 150);
    }
  };

  return (
    <div className="space-y-16 py-8 sm:py-12">
      <SEO 
        title="Web Development Services in Durgapur | Website Design"
        description="Explore our premium website development services in Durgapur. We offer custom web design, eCommerce development, WordPress, and business website solutions."
      />
      {/* Header banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              COMPLETE SERVICES DIRECTORY
            </span>
            <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Premium Website Development{' '}
            <span className="text-[#7C3AED]">&</span>{' '}
            <span className="bg-gradient-to-r from-[#C026D3] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Design
            </span>{' '}
            <span className="text-[#0284C7]">Services.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            Explore our complete range of website development services in Durgapur. From high-converting business websites to custom eCommerce platforms, branding, and digital marketing. This directory describes what we provide; <strong className="font-bold text-slate-900">pricing is shown only on the Pricing page</strong>.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-10 space-y-4">
          <div className="max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by keyword: WordPress, SEO, Shopify, Portal..."
                className="w-full pl-11 pr-4 py-3 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {SERVICES_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flagship Website Development Tier Specification */}
      {(selectedCategory === 'all' || selectedCategory === '01' || selectedCategory === '1') && !searchQuery && (
        <WebsiteDevelopmentSection onOpenConsultation={onOpenConsultation} />
      )}

      {/* Directory Categories 02 to 09 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <EditorialServiceCardSkeleton key={idx} />
            ))}
          </div>
        ) : (
          <CompleteServicesDirectoryCards
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onNavigate={onNavigate}
            onOpenConsultation={onOpenConsultation}
          />
        )}
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Need a Custom Deliverable Not Listed?</h3>
            <p className="text-xs sm:text-sm text-slate-400">We architect bespoke software and custom integrations tailored to your specific operations.</p>
          </div>
          <button
            onClick={() => onOpenConsultation('Custom Architecture Request')}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold tracking-wide uppercase transition-all shadow-md shrink-0 cursor-pointer"
          >
            Request Custom Scope
          </button>
        </div>
      </section>
    </div>
  );
}
