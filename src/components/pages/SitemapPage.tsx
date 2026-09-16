import React, { useState, useMemo } from 'react';
import { 
  Network, 
  Search, 
  FileCode2, 
  Bot, 
  ExternalLink, 
  Check, 
  Copy, 
  Globe, 
  Layers, 
  ShieldCheck, 
  Briefcase, 
  ArrowRight,
  Compass,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../../types';
import { DIRECTORY_CATEGORIES } from '../../data/servicesDirectoryData';
import { INTEGRATED_SOLUTIONS } from '../../data/servicesDirectoryData';
import { SEO } from '../SEO';

interface SitemapPageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenConsultation?: (pkgName?: string) => void;
}

export function SitemapPage({ onNavigate, onOpenConsultation }: SitemapPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const mainPages: { id: PageId; title: string; desc: string; priority: string; changefreq: string; path: string }[] = [
    { id: 'home', title: 'Home Page', desc: 'Agency overview, high-performance web engineering, and core services.', priority: '1.0', changefreq: 'Daily', path: '/' },
    { id: 'services', title: 'Services Catalog', desc: 'Comprehensive directory of 40+ web, branding, engineering, and marketing services.', priority: '0.95', changefreq: 'Weekly', path: '/services' },
    { id: 'solutions', title: 'Tech Solutions & Ecosystem', desc: 'Architected digital stacks, integration pipelines, and custom enterprise setups.', priority: '0.90', changefreq: 'Weekly', path: '/solutions' },
    { id: 'pricing', title: 'Pricing & Transparent Packages', desc: 'Fixed milestone quotes, EMI options, website tiers, and ROI projections.', priority: '0.90', changefreq: 'Weekly', path: '/pricing' },
    { id: 'portfolio', title: 'Portfolio & Case Studies', desc: 'Live client projects, metrics, tech stacks, and delivery outcomes.', priority: '0.85', changefreq: 'Weekly', path: '/portfolio' },
    { id: 'process', title: 'Development Process', desc: '6-stage transparent development framework from audit to ongoing support.', priority: '0.85', changefreq: 'Weekly', path: '/process' },
    { id: 'about', title: 'About Hinton Evolution Tech', desc: 'Company vision, founded February 2026, engineering philosophy, and values.', priority: '0.75', changefreq: 'Monthly', path: '/about' },
    { id: 'faq', title: 'FAQ & Knowledge Base', desc: 'Frequently asked questions on timelines, deliverables, technology, and maintenance.', priority: '0.75', changefreq: 'Weekly', path: '/faq' },
    { id: 'contact', title: 'Contact Us & Free Consultation', desc: 'Get in touch via direct WhatsApp, call, email, or our inquiry desk.', priority: '0.85', changefreq: 'Monthly', path: '/contact' },
  ];

  const websiteCorePackages = [
    { id: 'starter-site', name: 'Starter Website Package', desc: 'Up to 8-page high-speed responsive site for small businesses & consultants.', path: '/services/starter-site' },
    { id: 'business-site', name: 'Business Website Package', desc: 'Up to 20-page full-featured web presence with dynamic CMS and analytics.', path: '/services/business-site' },
    { id: 'premium-corporate-site', name: 'Premium Corporate Package', desc: 'Enterprise architecture with custom portals, multi-language, and advanced security.', path: '/services/premium-corporate-site' },
  ];

  const policyPages: { id: PageId; title: string; desc: string; path: string }[] = [
    { id: 'privacy', title: 'Privacy Policy', desc: 'Commitment to data security, confidentiality, and GDPR/IT Act compliance.', path: '/privacy' },
    { id: 'terms', title: 'Terms & Conditions', desc: 'Service agreements, deliverables clarity, client responsibilities, and code ownership.', path: '/terms' },
    { id: 'refund', title: 'Refund Policy', desc: 'Transparent milestone-based refund commitments prior to production phase.', path: '/refund' },
    { id: 'cancellation', title: 'Cancellation Policy', desc: 'Clear terms and procedures for halting or adjusting active project contracts.', path: '/cancellation' },
    { id: 'duration', title: 'Project Duration Policy', desc: 'Guaranteed milestone delivery schedules and clear sprint timetables.', path: '/duration' },
    { id: 'late', title: 'Late Delivery Policy', desc: 'Protective fee deductions or compensation credits if deadlines are not met.', path: '/late' },
  ];

  const handleCopySitemapUrl = () => {
    navigator.clipboard.writeText('https://www.hintonevolution.com/sitemap.xml');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Filter services by search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return DIRECTORY_CATEGORIES;
    const q = searchQuery.toLowerCase();

    return DIRECTORY_CATEGORIES.map(cat => {
      const matchingItems = cat.items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q))
      );
      return {
        ...cat,
        items: matchingItems
      };
    }).filter(cat => cat.items.length > 0);
  }, [searchQuery]);

  const filteredMainPages = useMemo(() => {
    if (!searchQuery.trim()) return mainPages;
    const q = searchQuery.toLowerCase();
    return mainPages.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.path.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredCorePackages = useMemo(() => {
    if (!searchQuery.trim()) return websiteCorePackages;
    const q = searchQuery.toLowerCase();
    return websiteCorePackages.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredPolicies = useMemo(() => {
    if (!searchQuery.trim()) return policyPages;
    const q = searchQuery.toLowerCase();
    return policyPages.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [searchQuery]);

  const totalServicesCount = DIRECTORY_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0) + websiteCorePackages.length;
  const totalUrlsCount = mainPages.length + 1 + totalServicesCount + policyPages.length; // +1 for /sitemap itself

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      <SEO 
        title="HTML Sitemap & Complete Site Index | Hinton Evolution Tech"
        description="Explore the complete site map and architecture of Hinton Evolution Tech. Discover all 50+ pages, service catalogs, solutions, policies, and XML sitemap resources."
      />

      {/* Schema.org Structured Data for Sitemap */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hinton Evolution Tech HTML Sitemap",
            "description": "Comprehensive hierarchical index of all pages, services, packages, and policies across Hinton Evolution Tech.",
            "url": "https://www.hintonevolution.com/sitemap",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.hintonevolution.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sitemap",
                  "item": "https://www.hintonevolution.com/sitemap"
                }
              ]
            }
          })
        }}
      />

      {/* Hero Header Section */}
      <div className="bg-white border-b border-slate-200/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-700 mb-4">
            <Network className="w-4 h-4" />
            <span>Architecture & Site Index</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                HTML SITEMAP
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                A structured directory of every page, service offering, technology solution, and legal policy across Hinton Evolution Tech. Built for search engine crawlers and seamless user discovery.
              </p>
            </div>

            {/* Live Stats Indicators */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-violet-50 border border-violet-200/80 text-violet-900 text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                <span>{totalUrlsCount}+ Crawlable Pages</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold">
                <span>Last Updated: Sept 15, 2026</span>
              </div>
            </div>
          </div>

          {/* Quick Technical Actions Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide transition-all shadow-xs cursor-pointer"
              >
                <FileCode2 className="w-4 h-4 text-violet-400" />
                <span>View Raw XML Sitemap (sitemap.xml)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold tracking-wide transition-all cursor-pointer"
              >
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>View robots.txt</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <button
                onClick={handleCopySitemapUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold tracking-wide transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">XML Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy XML URL</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any page or service..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100/80 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sitemap Clusters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* SECTION 1: PRIMARY HUBS & MAIN PAGES */}
        <section>
          <div className="flex items-center gap-2.5 mb-6">
            <Globe className="w-5 h-5 text-violet-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              1. Core Website Hubs & Navigation
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800">
              {filteredMainPages.length} Pages
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMainPages.map((page) => (
              <div
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-violet-300 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
                      {page.path}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Priority: {page.priority}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {page.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Frequency: {page.changefreq}</span>
                  <span className="text-violet-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Open <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: CATEGORY 01 WEBSITE DEVELOPMENT PACKAGES */}
        <section>
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              2. Core Website Development Packages (Category 01)
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
              3 Tiers
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {filteredCorePackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => onNavigate('service-detail', pkg.id)}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {pkg.path}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors mt-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-500 font-medium">Priority: 0.85</span>
                  <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Package <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: SERVICES DIRECTORY BY CATEGORY (CATEGORIES 02 TO 09) */}
        <section className="space-y-10">
          <div className="border-t border-slate-200 pt-10">
            <div className="flex items-center gap-2.5 mb-2">
              <Briefcase className="w-5 h-5 text-violet-600" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                3. Comprehensive Services Directory (Categories 02 to 09)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              All 40+ specialized services with canonical URLs under <code className="text-violet-700 font-mono font-bold">/services/[service-id]</code>.
            </p>
          </div>

          <div className="space-y-12">
            {filteredCategories.map((cat) => (
              <div 
                key={cat.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100 mb-6">
                  <div>
                    <span className={`text-xs font-black tracking-widest uppercase ${cat.eyebrowColor}`}>
                      {cat.eyebrowNumber}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {cat.items.length} Direct Landing Pages
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.id || item.name}
                      onClick={() => onNavigate('service-detail', item.id)}
                      className="p-4 rounded-xl bg-slate-50/60 hover:bg-white border border-slate-200/60 hover:border-violet-300 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-200/60 px-1.5 py-0.5 rounded">
                            /services/{item.id}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">Priority: 0.80</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                          {item.name}
                        </h4>
                        {item.subtitle && (
                          <p className="text-[11px] font-semibold text-violet-700 mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200/40 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">
                          {item.deliverables?.length ? `${item.deliverables.length} Deliverables` : 'Full Scope'}
                        </span>
                        <span className="text-violet-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                          Inspect →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INTEGRATED DIGITAL SOLUTIONS */}
        <section>
          <div className="border-t border-slate-200 pt-10 mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              <Compass className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                4. Strategic Integrated Growth Solutions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Connected turnkey frameworks combining design, engineering, traffic acquisition, and conversion tracking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTEGRATED_SOLUTIONS.map((sol, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Solution Stack</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {sol.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sol.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {sol.formula.map((f, fIdx) => (
                      <span key={fIdx} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultation?.(sol.name)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: LEGAL & CLIENT PROTECTION POLICIES */}
        <section>
          <div className="border-t border-slate-200 pt-10 mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              <ShieldCheck className="w-5 h-5 text-slate-700" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                5. Client Protection & Governance Policies
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Published policies governing client rights, transparent pricing, on-time delivery guarantees, and intellectual property ownership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPolicies.map((pol) => (
              <div
                key={pol.id}
                onClick={() => onNavigate(pol.id)}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    {pol.path}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors mt-2">
                    {pol.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {pol.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Yearly Review</span>
                  <span className="text-slate-900 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Policy <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA IN SITEMAP */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black tracking-tight">
              Looking for a Custom Digital Requirement?
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Can't find the exact combination you need? We architect custom web applications, APIs, and targeted marketing campaigns tailored to your business model.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation?.('Custom Architecture Requirement')}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
            >
              Request Free Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
