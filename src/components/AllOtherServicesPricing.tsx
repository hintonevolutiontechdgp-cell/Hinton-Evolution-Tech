import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Sparkles, ArrowRight } from 'lucide-react';

interface ServicePriceItem {
  name: string;
  desc: string;
  price: string;
}

interface PriceCategory {
  id: string;
  eyebrow: string;
  eyebrowColor: string;
  priceColor: string;
  title: string;
  cardBorderClass?: string;
  items: ServicePriceItem[];
}

const PRICE_CATEGORIES: PriceCategory[] = [
  {
    id: '02',
    eyebrow: '02 / WEB',
    eyebrowColor: 'text-blue-600',
    priceColor: 'text-blue-600',
    title: 'Additional Web Services',
    items: [
      {
        name: 'Landing Page Design',
        desc: 'Focused one-page design for campaigns, products, services or lead generation.',
        price: '₹8,000',
      },
      {
        name: 'Website Redesign',
        desc: 'Modernize an existing site with improved UI, responsiveness and conversion flow.',
        price: '₹15,000',
      },
      {
        name: 'Website Speed Optimization',
        desc: 'Performance improvements covering assets, loading behavior and practical speed factors.',
        price: '₹7,500',
      },
      {
        name: 'WordPress Website Development',
        desc: 'Professional WordPress setup, pages, CMS, forms and deployment.',
        price: '₹20,000',
      },
      {
        name: 'E-commerce Development',
        desc: 'Store, catalogue, checkout, payment integration, tracking and responsive shopping flow.',
        price: '₹45,000',
      },
      {
        name: 'Shopify Development',
        desc: 'Shopify storefront setup, customization, products and integrations.',
        price: '₹35,000',
      },
    ],
  },
  {
    id: '03',
    eyebrow: '03 / BRAND',
    eyebrowColor: 'text-violet-600',
    priceColor: 'text-violet-600',
    title: 'Branding & Creative',
    items: [
      {
        name: 'Logo Design',
        desc: 'Professional logo concepts for a clear and consistent brand identity.',
        price: '₹5,000',
      },
      {
        name: 'Brand Identity Design',
        desc: 'Visual identity direction including typography, colors and graphic language.',
        price: '₹20,000',
      },
      {
        name: 'Business Card Design',
        desc: 'Clean business-card layouts for print or digital use.',
        price: '₹2,000',
      },
      {
        name: 'Brochure Design',
        desc: 'Marketing brochure layout for services, products or company information.',
        price: '₹8,000',
      },
      {
        name: 'Graphic Design',
        desc: 'Custom digital graphics for campaigns, social media and business communication.',
        price: '₹2,500 onwards',
      },
    ],
  },
  {
    id: '04',
    eyebrow: '04 / ENGINEERING',
    eyebrowColor: 'text-emerald-600',
    priceColor: 'text-emerald-600',
    title: 'Development & Technical Services',
    items: [
      {
        name: 'Custom Web Development',
        desc: 'Bespoke websites and web systems with custom functionality and integrations.',
        price: '₹60,000',
      },
      {
        name: 'Application Development',
        desc: 'Business applications, dashboards, portals and custom software.',
        price: '₹1,20,000',
      },
      {
        name: 'Mobile App Development',
        desc: 'Mobile applications for customer-facing or internal business use.',
        price: '₹1,80,000',
      },
      {
        name: 'UI/UX Design',
        desc: 'Wireframes, user journeys, interface systems and responsive experience design.',
        price: '₹20,000',
      },
      {
        name: 'Payment Gateway Integration',
        desc: 'Online payment integration for websites and e-commerce experiences.',
        price: '₹8,000',
      },
      {
        name: 'Content Management Setup',
        desc: 'CMS configuration for easier website content management.',
        price: '₹10,000',
      },
      {
        name: 'Domain Registration & Setup',
        desc: 'Domain configuration and connection to the website environment.',
        price: '₹2,000/year',
      },
      {
        name: 'Web Hosting',
        desc: 'Hosting setup and deployment support.',
        price: '₹4,000/year',
      },
      {
        name: 'Site Maintenance',
        desc: 'Routine updates, fixes, monitoring and website support.',
        price: '₹3,000/month',
      },
    ],
  },
  {
    id: '05',
    eyebrow: '05 / CONTENT',
    eyebrowColor: 'text-orange-600',
    priceColor: 'text-orange-600',
    title: 'Social Media & Content',
    items: [
      {
        name: 'Social Media Post Design',
        desc: 'Branded creatives for promotions, announcements and ongoing social content.',
        price: '₹500/post',
      },
    ],
  },
  {
    id: '06',
    eyebrow: '06 / PAID GROWTH',
    eyebrowColor: 'text-rose-600',
    priceColor: 'text-rose-600',
    title: 'Advertising',
    items: [
      {
        name: 'Google Ads Management',
        desc: 'Campaign setup, optimization and performance monitoring.',
        price: '₹15,000/month',
      },
      {
        name: 'Meta Ads Management',
        desc: 'Facebook and Instagram advertising setup and management.',
        price: '₹15,000/month',
      },
      {
        name: 'Meta Campaign Management',
        desc: 'Campaign execution with audiences, creatives, tracking and optimization.',
        price: '₹20,000/month',
      },
      {
        name: 'Meta Business Suite Setup',
        desc: 'Business account and Meta platform configuration.',
        price: '₹5,000',
      },
    ],
  },
  {
    id: '07',
    eyebrow: '07 / SEARCH',
    eyebrowColor: 'text-blue-600',
    priceColor: 'text-blue-600',
    title: 'SEO & Analytics',
    cardBorderClass: 'border-2 border-violet-300 ring-4 ring-violet-50/50',
    items: [
      {
        name: 'SEO Audit',
        desc: 'Technical, on-page and search visibility review with recommendations.',
        price: '₹8,000',
      },
      {
        name: 'Website Audit',
        desc: 'Usability, performance, content, technical and conversion review.',
        price: '₹5,000',
      },
      {
        name: 'Local Search Analysis',
        desc: 'Local visibility and location-based search opportunity assessment.',
        price: '₹5,000',
      },
      {
        name: 'Search Engine Optimization',
        desc: 'Ongoing technical, on-page and search visibility improvement work.',
        price: '₹15,000/month',
      },
      {
        name: 'Google Business Profile Setup',
        desc: 'Local Google business presence setup and optimization foundations.',
        price: '₹5,000',
      },
      {
        name: 'Search Console Setup',
        desc: 'Search performance and indexing monitoring setup.',
        price: '₹3,000',
      },
      {
        name: 'Google Analytics (GA4) Setup',
        desc: 'Traffic, behavior and conversion measurement configuration.',
        price: '₹3,500',
      },
      {
        name: 'Google Tag Manager Setup',
        desc: 'Tag and tracking management configuration.',
        price: '₹3,500',
      },
      {
        name: 'Conversion Rate Optimization',
        desc: 'Improvements to messaging, CTAs, structure and user journeys.',
        price: '₹15,000',
      },
    ],
  },
  {
    id: '08',
    eyebrow: '08 / GROWTH',
    eyebrowColor: 'text-teal-600',
    priceColor: 'text-teal-600',
    title: 'Digital Marketing',
    items: [
      {
        name: 'Digital Marketing',
        desc: 'Coordinated digital growth support across channels and campaigns.',
        price: '₹20,000/month',
      },
      {
        name: 'Social Media Marketing',
        desc: 'Content planning, platform activity and campaign support.',
        price: '₹15,000/month',
      },
      {
        name: 'Email Marketing',
        desc: 'Email campaign planning, setup and customer communication workflows.',
        price: '₹10,000/month',
      },
      {
        name: 'Marketing Automation',
        desc: 'Automated workflows for lead follow-up and repetitive marketing tasks.',
        price: '₹25,000',
      },
      {
        name: 'Lead Generation',
        desc: 'Campaign and funnel support focused on generating business inquiries.',
        price: '₹20,000/month',
      },
      {
        name: 'Online Reputation Management',
        desc: 'Digital presence and reputation support.',
        price: '₹15,000/month',
      },
      {
        name: 'Digital Marketing Consulting',
        desc: 'Focused strategy session covering channels, campaigns and measurement.',
        price: '₹10,000/session',
      },
    ],
  },
];

const CATEGORY_TABS = [
  { id: 'ALL', label: 'All Services' },
  { id: '02', label: 'Web' },
  { id: '03', label: 'Branding' },
  { id: '04', label: 'Engineering' },
  { id: '05', label: 'Content' },
  { id: '06', label: 'Advertising' },
  { id: '07', label: 'SEO & Search' },
  { id: '08', label: 'Marketing' },
  { id: '09', label: 'B2B Business' },
];

interface AllOtherServicesPricingProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export function AllOtherServicesPricing({ onOpenConsultation }: AllOtherServicesPricingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter categories and items based on search and selected tab
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRICE_CATEGORIES.map((cat) => {
      // Check category match
      const categoryMatchesTab = selectedCategory === 'ALL' || cat.id === selectedCategory;
      if (!categoryMatchesTab) return null;

      if (!query) return cat;

      // Filter items within category
      const matchingItems = cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.price.toLowerCase().includes(query) ||
          cat.title.toLowerCase().includes(query)
      );

      if (matchingItems.length === 0) return null;

      return {
        ...cat,
        items: matchingItems,
      };
    }).filter(Boolean) as PriceCategory[];
  }, [selectedCategory, searchQuery]);

  // Check if B2B Business (09) matches search/tab filter
  const showB2B = useMemo(() => {
    const matchesTab = selectedCategory === 'ALL' || selectedCategory === '09';
    if (!matchesTab) return false;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    const b2bItems = [
      'Business-to-Business Service',
      'E-commerce Consulting',
      'Telemarketing',
      'Corporate Website Consultation',
      'B2B Business Services',
    ];

    return b2bItems.some((item) => item.toLowerCase().includes(query));
  }, [selectedCategory, searchQuery]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-3"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
            ADDITIONAL SERVICES
          </span>
          <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          All other services & prices
        </h2>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
          These services can be purchased individually or combined with a website package. Listed amounts are starting prices and the final quote may depend on scope.
        </p>
      </motion.div>

      {/* Filter & Search Bar Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-slate-50/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200/80 space-y-3 shadow-xs"
      >
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, deliverables or prices..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Stats or Reset */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium self-end md:self-auto">
            <Filter className="w-3.5 h-3.5 text-violet-600" />
            <span>
              Showing {filteredCategories.length + (showB2B ? 1 : 0)} categories
            </span>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-violet-600 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Dynamic Grid / Masonry Layout of Cards */}
      <AnimatePresence mode="popLayout">
        {filteredCategories.length === 0 && !showB2B ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-300 space-y-3"
          >
            <Sparkles className="w-8 h-8 text-violet-400 mx-auto animate-pulse" />
            <h3 className="text-lg font-bold text-slate-900">
              No matching services found
            </h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              Try adjusting your search query or clear the filter tab to see all services.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="px-4 py-2 bg-violet-600 text-white rounded-xl text-xs font-bold hover:bg-violet-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div layout className="columns-1 lg:columns-2 gap-8 space-y-8">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`break-inside-avoid mb-8 w-full rounded-[28px] bg-white border ${
                  cat.cardBorderClass || 'border-slate-200/90'
                } p-8 sm:p-10 space-y-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card`}
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <div className={`${cat.eyebrowColor} font-mono font-bold tracking-wider text-xs uppercase mb-1.5`}>
                      {cat.eyebrow}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    {cat.items.length} {cat.items.length === 1 ? 'service' : 'services'}
                  </span>
                </div>

                <div className="space-y-4 pt-1">
                  {cat.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 3 }}
                      onClick={() => onOpenConsultation && onOpenConsultation(`${item.name} (${item.price})`)}
                      className={`flex items-start justify-between gap-4 group/item cursor-pointer hover:bg-violet-50/50 -mx-3 px-3 py-2.5 rounded-xl transition-all border border-transparent hover:border-violet-100 ${
                        itemIdx !== cat.items.length - 1 ? 'border-b border-slate-100/60 hover:border-violet-100' : ''
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-base font-bold text-slate-900 group-hover/item:text-violet-700 transition-colors">
                            {item.name}
                          </h4>
                          <ArrowRight className="w-3.5 h-3.5 text-violet-600 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                          {item.desc}
                        </p>
                      </div>
                      <div className={`text-base font-bold ${cat.priceColor} shrink-0 text-right font-sans group-hover/item:scale-105 transition-transform`}>
                        {item.price}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card 09 / BUSINESS: Full-width container with animation */}
      {showB2B && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] bg-white border border-slate-200/90 p-8 sm:p-10 space-y-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="text-violet-600 font-mono font-bold tracking-wider text-xs uppercase mb-1.5">
                09 / BUSINESS
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                B2B Business Services
              </h3>
            </div>
            <span className="shrink-0 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
              4 services
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 pt-2">
            {/* Left Col */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 3 }}
                onClick={() => onOpenConsultation && onOpenConsultation('Business-to-Business Service (Custom Quote)')}
                className="flex items-start justify-between gap-4 group/item cursor-pointer hover:bg-violet-50/50 -mx-3 px-3 py-2.5 rounded-xl transition-all border border-transparent hover:border-violet-100 border-b border-slate-100/60"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 group-hover/item:text-violet-700 transition-colors">
                      Business-to-Business Service
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-violet-600 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                    Tailored digital and business support for B2B requirements.
                  </p>
                </div>
                <div className="text-base font-bold text-violet-600 shrink-0 text-right font-sans group-hover/item:scale-105 transition-transform">
                  Custom Quote
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                onClick={() => onOpenConsultation && onOpenConsultation('E-commerce Consulting (₹20,000)')}
                className="flex items-start justify-between gap-4 group/item cursor-pointer hover:bg-violet-50/50 -mx-3 px-3 py-2.5 rounded-xl transition-all border border-transparent hover:border-violet-100"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 group-hover/item:text-violet-700 transition-colors">
                      E-commerce Consulting
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-violet-600 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                    Guidance on store platforms, payments, customer journeys and growth.
                  </p>
                </div>
                <div className="text-base font-bold text-violet-600 shrink-0 text-right font-sans group-hover/item:scale-105 transition-transform">
                  ₹20,000
                </div>
              </motion.div>
            </div>

            {/* Right Col */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 3 }}
                onClick={() => onOpenConsultation && onOpenConsultation('Telemarketing (₹25,000/month)')}
                className="flex items-start justify-between gap-4 group/item cursor-pointer hover:bg-violet-50/50 -mx-3 px-3 py-2.5 rounded-xl transition-all border border-transparent hover:border-violet-100 border-b border-slate-100/60"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 group-hover/item:text-violet-700 transition-colors">
                      Telemarketing
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-violet-600 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                    Outbound calling support for prospecting and lead qualification.
                  </p>
                </div>
                <div className="text-base font-bold text-violet-600 shrink-0 text-right font-sans group-hover/item:scale-105 transition-transform">
                  ₹25,000/month
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                onClick={() => onOpenConsultation && onOpenConsultation('Corporate Website Consultation (₹10,000)')}
                className="flex items-start justify-between gap-4 group/item cursor-pointer hover:bg-violet-50/50 -mx-3 px-3 py-2.5 rounded-xl transition-all border border-transparent hover:border-violet-100"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 group-hover/item:text-violet-700 transition-colors">
                      Corporate Website Consultation
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-violet-600 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                    Requirement discovery and strategy for corporate website projects.
                  </p>
                </div>
                <div className="text-base font-bold text-violet-600 shrink-0 text-right font-sans group-hover/item:scale-105 transition-transform">
                  ₹10,000
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

