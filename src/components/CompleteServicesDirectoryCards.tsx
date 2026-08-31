import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';

interface ServiceItem {
  name: string;
  desc: string;
}

interface CategoryGroup {
  id: string;
  eyebrowNumber: string;
  eyebrowColor: string;
  title: string;
  cardBorderClass?: string;
  items: ServiceItem[];
}

export const DIRECTORY_CATEGORIES: CategoryGroup[] = [
  {
    id: '02',
    eyebrowNumber: '02 / WEB',
    eyebrowColor: 'text-blue-600',
    title: 'Additional Web Services',
    items: [
      {
        name: 'Landing Page Design',
        desc: 'Focused one-page experiences for campaigns, products, services and lead generation.',
      },
      {
        name: 'Website Redesign',
        desc: 'Modernize an existing website with improved UI, mobile responsiveness, structure and conversion flow.',
      },
      {
        name: 'Website Speed Optimization',
        desc: 'Improve loading performance, asset delivery, responsive behavior and practical Core Web Vitals factors.',
      },
      {
        name: 'WordPress Website Development',
        desc: 'Professional WordPress sites with page structure, forms, CMS setup, integrations and deployment.',
      },
      {
        name: 'E-commerce Development',
        desc: 'Online stores with product catalogues, checkout, payment integration, tracking and mobile-first shopping flows.',
      },
      {
        name: 'Shopify Development',
        desc: 'Shopify storefront setup, theme customization, product structure, conversion improvements and integrations.',
      },
    ],
  },
  {
    id: '03',
    eyebrowNumber: '03 / BRAND',
    eyebrowColor: 'text-violet-600',
    title: 'Branding & Creative',
    cardBorderClass: 'border-2 border-violet-400 shadow-lg shadow-violet-100/50 ring-4 ring-violet-50/50',
    items: [
      {
        name: 'Logo Design',
        desc: 'Distinctive logo concepts prepared for a professional and consistent brand presence.',
      },
      {
        name: 'Brand Identity Design',
        desc: 'Visual identity direction including typography, colors, graphic language and brand consistency.',
      },
      {
        name: 'Business Card Design',
        desc: 'Clean professional business-card layouts ready for print or digital sharing.',
      },
      {
        name: 'Brochure Design',
        desc: 'Structured marketing brochures for presenting services, products, company information or offers.',
      },
      {
        name: 'Graphic Design',
        desc: 'Custom graphics for digital campaigns, social content, marketing material and business communication.',
      },
    ],
  },
  {
    id: '04',
    eyebrowNumber: '04 / ENGINEERING',
    eyebrowColor: 'text-emerald-600',
    title: 'Development & Technical Services',
    items: [
      {
        name: 'Custom Web Development',
        desc: 'Bespoke websites and web systems with custom front-end, back-end logic, integrations and business workflows.',
      },
      {
        name: 'Application Development',
        desc: 'Business applications, dashboards, portals and custom software built around defined operational requirements.',
      },
      {
        name: 'Mobile App Development',
        desc: 'Mobile application planning and development for customer-facing or internal business use cases.',
      },
      {
        name: 'UI/UX Design',
        desc: 'User journeys, wireframes, interface systems, responsive layouts and conversion-focused experience design.',
      },
      {
        name: 'Payment Gateway Integration',
        desc: 'Integration of online payment flows into websites and e-commerce experiences.',
      },
      {
        name: 'Content Management Setup',
        desc: 'CMS configuration that makes agreed website content easier to manage and update.',
      },
      {
        name: 'Domain Registration & Setup',
        desc: 'Domain configuration and connection to the website environment.',
      },
      {
        name: 'Web Hosting',
        desc: 'Hosting setup and deployment support for the agreed website environment.',
      },
      {
        name: 'Site Maintenance',
        desc: 'Ongoing updates, fixes, monitoring and routine website support.',
      },
    ],
  },
  {
    id: '05',
    eyebrowNumber: '05 / CONTENT',
    eyebrowColor: 'text-orange-600',
    title: 'Social Media & Content',
    items: [
      {
        name: 'Social Media Post Design',
        desc: 'Branded post creatives designed for social platforms, promotions, announcements and ongoing content.',
      },
    ],
  },
  {
    id: '06',
    eyebrowNumber: '06 / PAID GROWTH',
    eyebrowColor: 'text-rose-600',
    title: 'Advertising',
    items: [
      {
        name: 'Google Ads Management',
        desc: 'Campaign planning, setup, optimization and performance monitoring for Google advertising.',
      },
      {
        name: 'Meta Ads Management',
        desc: 'Facebook and Instagram advertising setup, optimization and campaign management.',
      },
      {
        name: 'Meta Campaign Management',
        desc: 'Structured campaign execution with audiences, creatives, tracking and ongoing optimization.',
      },
      {
        name: 'Meta Business Suite Setup',
        desc: 'Business account and platform configuration for organized Meta operations.',
      },
    ],
  },
  {
    id: '07',
    eyebrowNumber: '07 / SEARCH',
    eyebrowColor: 'text-blue-600',
    title: 'SEO & Analytics',
    items: [
      {
        name: 'SEO Audit',
        desc: 'Review of technical, on-page and search visibility factors with practical improvement recommendations.',
      },
      {
        name: 'Website Audit',
        desc: 'Structured review of website usability, performance, content, technical setup and conversion readiness.',
      },
      {
        name: 'Local Search Analysis',
        desc: 'Assessment of local search opportunities and visibility for location-based customer acquisition.',
      },
      {
        name: 'Search Engine Optimization',
        desc: 'Ongoing SEO work focused on technical foundations, on-page improvements, content direction and search visibility.',
      },
      {
        name: 'Google Business Profile Setup',
        desc: 'Setup and optimization foundations for local business presence on Google.',
      },
      {
        name: 'Search Console Setup',
        desc: 'Search performance and indexing monitoring setup through Google Search Console.',
      },
      {
        name: 'Google Analytics (GA4) Setup',
        desc: 'Analytics configuration to measure traffic, user behavior and important conversion events.',
      },
      {
        name: 'Google Tag Manager Setup',
        desc: 'Tag and tracking management setup for cleaner measurement and campaign integrations.',
      },
      {
        name: 'Conversion Rate Optimization',
        desc: 'Improvements to page structure, messaging, calls-to-action and user journeys to increase inquiries or conversions.',
      },
    ],
  },
  {
    id: '08',
    eyebrowNumber: '08 / GROWTH',
    eyebrowColor: 'text-cyan-600',
    title: 'Digital Marketing',
    items: [
      {
        name: 'Digital Marketing',
        desc: 'Coordinated digital growth support across channels, campaigns, analytics and lead-generation activities.',
      },
      {
        name: 'Social Media Marketing',
        desc: 'Content planning, platform activity, campaign support and social presence management.',
      },
      {
        name: 'Email Marketing',
        desc: 'Email campaign planning, setup and customer communication workflows.',
      },
      {
        name: 'Marketing Automation',
        desc: 'Automated workflows designed to organize lead follow-up and repetitive marketing tasks.',
      },
      {
        name: 'Lead Generation',
        desc: 'Campaign and funnel support focused on generating qualified business inquiries.',
      },
      {
        name: 'Online Reputation Management',
        desc: 'Digital presence monitoring and reputation support for maintaining a professional public image.',
      },
      {
        name: 'Digital Marketing Consulting',
        desc: 'Focused strategy sessions covering digital positioning, channels, campaigns, measurement and next steps.',
      },
    ],
  },
  {
    id: '09',
    eyebrowNumber: '09 / BUSINESS',
    eyebrowColor: 'text-purple-600',
    title: 'B2B Business Services',
    items: [
      {
        name: 'Business-to-Business Service',
        desc: 'Tailored digital and business support for organizations with B2B requirements.',
      },
      {
        name: 'Telemarketing',
        desc: 'Structured outbound calling support for prospecting, lead qualification and business outreach.',
      },
      {
        name: 'E-commerce Consulting',
        desc: 'Practical guidance on store setup, customer journeys, platforms, payments, analytics and growth.',
      },
      {
        name: 'Corporate Website Consultation',
        desc: 'Requirement discovery and strategic guidance for businesses planning or upgrading a corporate website.',
      },
    ],
  },
];

interface CompleteServicesDirectoryCardsProps {
  selectedCategory: string;
  searchQuery: string;
  onNavigate?: (page: PageId) => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export function CompleteServicesDirectoryCards({
  selectedCategory,
  searchQuery,
  onNavigate,
  onOpenConsultation,
}: CompleteServicesDirectoryCardsProps) {
  // Filter groups based on selectedCategory and searchQuery
  const filteredCategories = DIRECTORY_CATEGORIES.map((cat) => {
    // If a category filter is applied and does not match
    const isCategorySelected =
      selectedCategory === 'all' ||
      selectedCategory === cat.id ||
      selectedCategory.padStart(2, '0') === cat.id ||
      selectedCategory.replace(/^0+/, '') === cat.id.replace(/^0+/, '');

    if (!isCategorySelected) {
      return null;
    }

    // Filter items inside the category if search query is present
    if (!searchQuery.trim()) {
      return cat;
    }

    const q = searchQuery.toLowerCase();
    const matchesCategoryTitle = cat.title.toLowerCase().includes(q);
    const filteredItems = cat.items.filter(
      (item) =>
        matchesCategoryTitle ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
    );

    if (filteredItems.length === 0) return null;

    return {
      ...cat,
      items: filteredItems,
    };
  }).filter(Boolean) as CategoryGroup[];

  // Helper renderer for a single category card
  const renderCategoryCard = (cat: CategoryGroup) => (
    <motion.div
      key={cat.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`rounded-[28px] bg-white border ${
        cat.cardBorderClass || 'border-slate-200'
      } p-8 sm:p-10 transition-all shadow-xs hover:shadow-md space-y-6`}
    >
      <div>
        <div className={`${cat.eyebrowColor} font-mono font-bold tracking-wider text-xs uppercase mb-2`}>
          {cat.eyebrowNumber}
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          {cat.title}
        </h3>
      </div>

      <div className="space-y-6 pt-2">
        {cat.items.map((item) => (
          <div
            key={item.name}
            className="group cursor-pointer"
            onClick={() => onOpenConsultation && onOpenConsultation(`${item.name} Inquiry`)}
          >
            <h4 className="text-base font-bold text-slate-900 group-hover:text-violet-600 transition-colors flex items-center gap-1.5">
              <span>{item.name}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  // If filtered down by search / category, render responsive grid
  if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {filteredCategories.map(renderCategoryCard)}
        </div>

        {/* Bottom Pricing disclaimer */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center text-xs sm:text-sm text-slate-600">
          <strong className="font-bold text-slate-900">Pricing:</strong> No prices are displayed in the Services Directory. Visit the{' '}
          <button
            onClick={() => onNavigate && onNavigate('pricing')}
            className="text-violet-700 font-semibold underline hover:text-violet-900 cursor-pointer"
          >
            Pricing page
          </button>{' '}
          for website package prices and detailed prices for additional services.
        </div>
      </section>
    );
  }

  // Full default layout matching the exact screenshot sequence:
  // Row 1: 02 / WEB (Additional Web Services) + 03 / BRAND (Branding & Creative)
  // Row 2: 04 / ENGINEERING (Development & Technical Services) + Column of [05 / CONTENT (Social Media & Content) and 06 / PAID GROWTH (Advertising)]
  // Row 3: 07 / SEARCH (SEO & Analytics) + 08 / GROWTH (Digital Marketing)
  // Row 4: 09 / BUSINESS (B2B Business Services) (Half width / large card)
  const cat2 = DIRECTORY_CATEGORIES.find((c) => c.id === '02');
  const cat3 = DIRECTORY_CATEGORIES.find((c) => c.id === '03');
  const cat4 = DIRECTORY_CATEGORIES.find((c) => c.id === '04');
  const cat5 = DIRECTORY_CATEGORIES.find((c) => c.id === '05');
  const cat6 = DIRECTORY_CATEGORIES.find((c) => c.id === '06');
  const cat7 = DIRECTORY_CATEGORIES.find((c) => c.id === '07');
  const cat8 = DIRECTORY_CATEGORIES.find((c) => c.id === '08');
  const cat9 = DIRECTORY_CATEGORIES.find((c) => c.id === '09');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Row 1: 02 & 03 */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat2 && renderCategoryCard(cat2)}
        {cat3 && renderCategoryCard(cat3)}
      </div>

      {/* Row 2: 04 & (05 + 06 stacked) */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat4 && renderCategoryCard(cat4)}
        <div className="space-y-8">
          {cat5 && renderCategoryCard(cat5)}
          {cat6 && renderCategoryCard(cat6)}
        </div>
      </div>

      {/* Row 3: 07 & 08 */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat7 && renderCategoryCard(cat7)}
        {cat8 && renderCategoryCard(cat8)}
      </div>

      {/* Row 4: 09 */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {cat9 && renderCategoryCard(cat9)}
      </div>

      {/* Bottom Pricing disclaimer */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center text-xs sm:text-sm text-slate-600">
        <strong className="font-bold text-slate-900">Pricing:</strong> No prices are displayed in the Services Directory. Visit the{' '}
        <button
          onClick={() => onNavigate && onNavigate('pricing')}
          className="text-violet-700 font-semibold underline hover:text-violet-900 cursor-pointer"
        >
          Pricing page
        </button>{' '}
        for website package prices and detailed prices for additional services.
      </div>
    </section>
  );
}
