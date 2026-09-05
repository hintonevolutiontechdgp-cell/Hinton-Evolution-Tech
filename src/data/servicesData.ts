import { ServiceItem } from '../types';

export const SERVICES_CATEGORIES = [
  { id: 'all', name: 'All Services', icon: 'LayoutGrid' },
  { id: '01', name: '01 / Website Development', icon: 'Globe' },
  { id: '02', name: '02 / Web Services', icon: 'Code' },
  { id: '03', name: '03 / Branding & Creative', icon: 'Palette' },
  { id: '04', name: '04 / Engineering & Tech', icon: 'Cpu' },
  { id: '05', name: '05 / Social & Content', icon: 'Share2' },
  { id: '06', name: '06 / Paid Advertising', icon: 'Megaphone' },
  { id: '07', name: '07 / SEO & Analytics', icon: 'Search' },
  { id: '08', name: '08 / Digital Marketing', icon: 'TrendingUp' },
  { id: '09', name: '09 / B2B Services', icon: 'Briefcase' }
];

export const ALL_SERVICES: ServiceItem[] = [
  // 01 / Website
  {
    id: 'starter-site',
    name: 'Starter Website',
    category: 'Website Development',
    categoryNumber: '01',
    shortDesc: 'Clean, modern 8-page responsive website with WhatsApp & contact integrations.',
    fullDesc: 'Tailored for small businesses, clinics, independent consultants, and service professionals who need a fast, credible digital identity.',
    price: '₹20,000',
    deliverables: ['Up to 8 Pages', 'Mobile Responsive', 'WhatsApp & Forms', 'Basic SEO & SSL', 'Google Maps', '1 Month Support']
  },
  {
    id: 'business-site',
    name: 'Business Website',
    category: 'Website Development',
    categoryNumber: '01',
    shortDesc: 'Comprehensive up to 20-page web presence with dynamic CMS, blog, and GA4 tracking.',
    fullDesc: 'Built for growing companies that require high-converting UI/UX, lead capture mechanisms, blog capabilities, and deep search visibility.',
    price: '₹40,000',
    popular: true,
    deliverables: ['Up to 20 Pages', 'Dynamic Blog CMS', 'GA4 & Search Console', 'Lead Forms & Security', '3 Months Support']
  },
  {
    id: 'premium-corporate-site',
    name: 'Premium Corporate',
    category: 'Website Development',
    categoryNumber: '01',
    shortDesc: 'Unlimited pages, custom portals, multi-language support, and enterprise performance.',
    fullDesc: 'For enterprises, large distributors, manufacturers, and corporate brands seeking a flagship digital platform.',
    price: '₹80,000',
    deliverables: ['Unlimited Pages', 'Distributor Portal', 'Multi-Language Option', 'HR/Careers Portal', 'Advanced SEO & 6 Mo Support']
  },

  // 02 / Web
  {
    id: 'landing-page',
    name: 'Landing Page Design',
    category: 'Web Services',
    categoryNumber: '02',
    shortDesc: 'Focused one-page conversion experiences for campaigns, product launches, or lead generation.',
    price: '₹8,000',
    deliverables: ['Custom hero section', 'A/B tested CTA layout', 'Lead capture hook', 'Sub-second speed score']
  },
  {
    id: 'website-redesign',
    name: 'Website Redesign',
    category: 'Web Services',
    categoryNumber: '02',
    shortDesc: 'Modernize an existing website with improved UI, responsiveness, and conversion flow.',
    price: '₹15,000',
    deliverables: ['UI/UX overhaul', 'Mobile responsiveness rewrite', 'Speed optimization', 'SEO preservation']
  },
  {
    id: 'speed-optimization',
    name: 'Website Speed Optimization',
    category: 'Web Services',
    categoryNumber: '02',
    shortDesc: 'Improve loading performance, asset delivery, and Core Web Vitals to score 90+ on PageSpeed.',
    price: '₹7,500',
    deliverables: ['Image compression & WebP format', 'CSS/JS minification', 'Server caching setup', 'Core Web Vitals tuning']
  },
  {
    id: 'wordpress-dev',
    name: 'WordPress Website Development',
    category: 'Web Services',
    categoryNumber: '02',
    shortDesc: 'Professional WordPress site setup with custom page structure, forms, CMS, and deployment.',
    price: '₹20,000',
    deliverables: ['Custom theme styling', 'Security plugin setup', 'Content manager training', 'Backup configuration']
  },
  {
    id: 'ecommerce-dev',
    name: 'E-commerce Development',
    category: 'Web Services',
    categoryNumber: '02',
    shortDesc: 'Online stores with product catalogues, checkout, UPI/Card payment integration, and tracking.',
    price: '₹45,000',
    deliverables: ['Product inventory catalog', 'Payment gateway integration', 'Automated tax & invoices', 'Order tracking flow']
  },
  {
    id: 'shopify-dev',
    name: 'Shopify Development',
    category: 'Web Services',
    categoryNumber: '02',
    shortDesc: 'Shopify storefront setup, theme customization, product structure, and conversion improvements.',
    price: '₹35,000',
    deliverables: ['Shopify theme customization', 'Product variants setup', 'App integrations', 'Mobile checkout optimization']
  },

  // 03 / Brand
  {
    id: 'logo-design',
    name: 'Logo Design',
    category: 'Branding & Creative',
    categoryNumber: '03',
    shortDesc: 'Distinctive vector logo concepts prepared for professional and consistent brand presence.',
    price: '₹5,000',
    deliverables: ['3 Unique concepts', 'Vector source files (SVG, AI, EPS)', 'Transparent PNG & dark/light variants', 'Full copyright']
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Design',
    category: 'Branding & Creative',
    categoryNumber: '03',
    shortDesc: 'Visual identity direction including typography, color palette, typography guidelines, and brand kit.',
    price: '₹20,000',
    deliverables: ['Brand style guide PDF', 'Typography rules', 'Color palettes & hex codes', 'Iconography language']
  },
  {
    id: 'business-card',
    name: 'Business Card Design',
    category: 'Branding & Creative',
    categoryNumber: '03',
    shortDesc: 'Clean professional business-card layouts ready for high-resolution print or digital sharing.',
    price: '₹2,000',
    deliverables: ['Print-ready CMYK files', 'Digital vCard / QR code layout', 'Double-sided design']
  },
  {
    id: 'brochure-design',
    name: 'Brochure Design',
    category: 'Branding & Creative',
    categoryNumber: '03',
    shortDesc: 'Structured marketing brochures for presenting services, products, or company credentials.',
    price: '₹8,000',
    deliverables: ['Bi-fold or Tri-fold layout', 'High-res print PDF', 'Digital interactive PDF', 'Content layout assistance']
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    category: 'Branding & Creative',
    categoryNumber: '03',
    shortDesc: 'Custom graphics for digital campaigns, social content, marketing material, and communication.',
    price: '₹2,500 onwards',
    deliverables: ['Bespoke digital banners', 'Social media creative assets', 'Ad creatives', 'Vector illustrations']
  },

  // 04 / Engineering
  {
    id: 'custom-web-dev',
    name: 'Custom Web Development',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'Bespoke web applications with custom front-end, back-end logic, integrations, and workflows.',
    price: '₹60,000',
    deliverables: ['React / Next.js architecture', 'Node.js backend endpoints', 'Custom database schemas', 'Role-based access control']
  },
  {
    id: 'app-dev',
    name: 'Application Development',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'Business applications, interactive dashboards, portals, and custom software systems.',
    price: '₹1,20,000',
    deliverables: ['Admin management dashboard', 'Data visualization tools', 'RESTful API infrastructure', 'Secure authentication']
  },
  {
    id: 'mobile-app-dev',
    name: 'Mobile App Development',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'Cross-platform mobile application planning and development for customer or internal business use.',
    price: '₹1,80,000',
    deliverables: ['iOS & Android build targets', 'Push notification service', 'Offline state synchronization', 'App Store / Play Store prep']
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'User journeys, wireframes, interface systems, responsive layouts, and conversion experience design.',
    price: '₹20,000',
    deliverables: ['Figma design system', 'Interactive prototype', 'Component design kit', 'User journey flows']
  },
  {
    id: 'payment-gateway',
    name: 'Payment Gateway Integration',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'Integration of online payment flows (Razorpay, Stripe, Cashfree, UPI QR) into websites.',
    price: '₹8,000',
    deliverables: ['Webhook configuration', 'Secure callback handling', 'Instant payment confirmation', 'Receipt dispatch']
  },
  {
    id: 'cms-setup',
    name: 'Content Management Setup',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'CMS configuration that makes website content easy to manage, update, and publish.',
    price: '₹10,000',
    deliverables: ['Custom post types', 'Visual editor setup', 'User role management', 'Publishing workflows']
  },
  {
    id: 'domain-setup',
    name: 'Domain Registration & Setup',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'Domain configuration, DNS management, MX records, and secure connection to website environment.',
    price: '₹2,000/year',
    deliverables: ['DNS management', 'SSL certificate binding', 'Professional email MX setup', 'Auto-renewal management']
  },
  {
    id: 'web-hosting',
    name: 'Web Hosting',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'Cloud hosting setup, SSD storage, 99.9% uptime SLA, and deployment support.',
    price: '₹4,000/year',
    deliverables: ['SSD fast cloud servers', 'Daily automated backups', 'SSL security', 'Continuous monitoring']
  },
  {
    id: 'site-maintenance',
    name: 'Site Maintenance',
    category: 'Development & Technical Services',
    categoryNumber: '04',
    shortDesc: 'Ongoing updates, bug fixes, uptime monitoring, security patches, and routine website support.',
    price: '₹3,000/month',
    deliverables: ['Monthly core updates', 'Uptime monitoring', 'Emergency bug fixes', 'Content updates']
  },

  // 05 / Content
  {
    id: 'social-post-design',
    name: 'Social Media Post Design',
    category: 'Social Media & Content',
    categoryNumber: '05',
    shortDesc: 'Branded post creatives designed for social platforms, promotions, announcements, and ongoing content.',
    price: '₹500/post',
    deliverables: ['Platform-optimized dimensions', 'High-res exports (JPG/PNG)', 'Source files', 'Copy suggestions']
  },

  // 06 / Paid
  {
    id: 'google-ads',
    name: 'Google Ads Management',
    category: 'Advertising',
    categoryNumber: '06',
    shortDesc: 'Campaign planning, search keyword intent targeting, bid optimization, and lead performance tracking.',
    price: '₹15,000/month',
    deliverables: ['Keyword research & negative lists', 'Ad copy A/B tests', 'Conversion tag setup', 'Bi-weekly performance reports']
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads Management',
    category: 'Advertising',
    categoryNumber: '06',
    shortDesc: 'Facebook and Instagram advertising setup, custom audience targeting, and ongoing optimization.',
    price: '₹15,000/month',
    deliverables: ['Audience demographic targeting', 'Creative testing', 'Pixel tracking', 'Budget efficiency control']
  },
  {
    id: 'meta-campaign-management',
    name: 'Meta Campaign Management',
    category: 'Advertising',
    categoryNumber: '06',
    shortDesc: 'Full-funnel campaign execution with lookalike audiences, retargeting sequences, and tracking.',
    price: '₹20,000/month',
    deliverables: ['Top/Middle/Bottom funnel flows', 'Dynamic retargeting setup', 'Creative refresh scheduling', 'ROAS analysis']
  },
  {
    id: 'meta-business-suite',
    name: 'Meta Business Suite Setup',
    category: 'Advertising',
    categoryNumber: '06',
    shortDesc: 'Business account, domain verification, event pixel configurations, and asset security setup.',
    price: '₹5,000',
    deliverables: ['Domain verification in Meta', 'Conversions API setup', 'Ad account security', 'Page role configuration']
  },

  // 07 / Search
  {
    id: 'seo-audit',
    name: 'SEO Audit',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Deep review of technical, on-page, and backlink factors with actionable priority recommendations.',
    price: '₹8,000',
    deliverables: ['Comprehensive PDF audit report', 'Crawl error identification', 'Page speed bottleneck analysis', 'Actionable priority roadmap']
  },
  {
    id: 'website-audit',
    name: 'Website Audit',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Structured review of website usability, mobile responsiveness, content, and conversion readiness.',
    price: '₹5,000',
    deliverables: ['UX friction review', 'Broken link check', 'Mobile layout test report', 'Call-to-action suggestions']
  },
  {
    id: 'local-search-analysis',
    name: 'Local Search Analysis',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Assessment of local search opportunities and visibility for location-based customer acquisition.',
    price: '₹5,000',
    deliverables: ['Local competitor gap report', 'Keyword ranking map', 'Citation consistency check', 'GMB review strategy']
  },
  {
    id: 'seo-monthly',
    name: 'Search Engine Optimization (SEO)',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Ongoing SEO work focused on technical foundations, on-page optimization, and organic ranking growth.',
    price: '₹15,000/month',
    deliverables: ['Target keyword tracking', 'On-page metadata optimization', 'Content optimization guidelines', 'Monthly ranking & traffic report']
  },
  {
    id: 'gmb-setup',
    name: 'Google Business Profile Setup',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Setup and optimization foundations for local business presence and map rankings on Google.',
    price: '₹5,000',
    deliverables: ['Profile verification assistance', 'Service catalogue configuration', 'Geo-tagged photos upload', 'Review link generator']
  },
  {
    id: 'search-console-setup',
    name: 'Search Console Setup',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Search performance and indexing monitoring setup through Google Search Console.',
    price: '₹3,000',
    deliverables: ['XML sitemap submission', 'URL inspection check', 'Robots.txt configuration', 'Indexation error check']
  },
  {
    id: 'ga4-setup',
    name: 'Google Analytics (GA4) Setup',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Analytics configuration to measure traffic, user behavior, and important custom conversion events.',
    price: '₹3,500',
    deliverables: ['GA4 property setup', 'Custom event tracking', 'Conversion goals configuration', 'Audience stream filters']
  },
  {
    id: 'gtm-setup',
    name: 'Google Tag Manager Setup',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Tag and tracking management setup for cleaner measurement and ad campaign integrations.',
    price: '₹3,500',
    deliverables: ['Container installation', 'Click and form submission triggers', 'Ad pixel synchronization', 'Debug & QA test']
  },
  {
    id: 'cro',
    name: 'Conversion Rate Optimization (CRO)',
    category: 'SEO & Analytics',
    categoryNumber: '07',
    shortDesc: 'Improvements to page structure, messaging, CTAs, and user journeys to increase inquiry rates.',
    price: '₹15,000',
    deliverables: ['Heatmap & click behavior review', 'Form abandonment reduction', 'A/B headline test proposal', 'UX layout tuning']
  },

  // 08 / Growth
  {
    id: 'digital-marketing-growth',
    name: 'Digital Marketing',
    category: 'Digital Marketing',
    categoryNumber: '08',
    shortDesc: 'Coordinated digital growth support across channels, campaigns, analytics, and lead generation.',
    price: '₹20,000/month',
    deliverables: ['Multi-channel strategy', 'Campaign monitoring', 'Performance dashboard', 'Monthly review calls']
  },
  {
    id: 'smm-monthly',
    name: 'Social Media Marketing (SMM)',
    category: 'Digital Marketing',
    categoryNumber: '08',
    shortDesc: 'Content planning, platform activity, campaign support, and social brand management.',
    price: '₹15,000/month',
    deliverables: ['12 Branded posts/month', 'Captions & hashtag research', 'Publishing calendar', 'Audience engagement monitoring']
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    category: 'Digital Marketing',
    categoryNumber: '08',
    shortDesc: 'Email campaign planning, template design, newsletter broadcasts, and customer communication.',
    price: '₹10,000/month',
    deliverables: ['Custom responsive HTML templates', 'List segmentation', 'Broadcast scheduling', 'Open & click rate analysis']
  },
  {
    id: 'marketing-automation',
    name: 'Marketing Automation',
    category: 'Digital Marketing',
    categoryNumber: '08',
    shortDesc: 'Automated workflows designed to organize lead follow-up and repetitive marketing tasks.',
    price: '₹25,000',
    deliverables: ['Welcome email sequence', 'WhatsApp notification hooks', 'Lead scoring setup', 'CRM contact syncing']
  },
  {
    id: 'lead-generation-funnel',
    name: 'Lead Generation',
    category: 'Digital Marketing',
    categoryNumber: '08',
    shortDesc: 'Campaign and funnel support focused on generating qualified business inquiries and sales appointments.',
    price: '₹20,000/month',
    deliverables: ['Dedicated lead capture funnel', 'Ad creative development', 'Lead qualification filters', 'Real-time lead alerts']
  },
  {
    id: 'orm',
    name: 'Online Reputation Management',
    category: 'Digital Marketing',
    categoryNumber: '08',
    shortDesc: 'Digital presence monitoring and reputation support for maintaining a credible public image.',
    price: '₹15,000/month',
    deliverables: ['Review monitoring across channels', 'Crisis response assistance', 'Positive review collection strategy', 'Brand mention alerts']
  },
  {
    id: 'digital-marketing-consulting',
    name: 'Digital Marketing Consulting',
    category: 'Digital Marketing',
    categoryNumber: '08',
    shortDesc: 'Focused strategy sessions covering digital positioning, channels, campaigns, and ROI measurement.',
    price: '₹10,000/session',
    deliverables: ['1-on-1 Strategy session (90 min)', 'Digital gap analysis document', 'Channel allocation roadmap', 'Action checklist']
  },

  // 09 / Business
  {
    id: 'b2b-service',
    name: 'Business-to-Business Service',
    category: 'B2B Business Services',
    categoryNumber: '09',
    shortDesc: 'Tailored digital and business support for organizations with specific B2B operational needs.',
    price: 'Custom Quote',
    deliverables: ['Custom scope of work', 'Enterprise SLA', 'Dedicated project lead', 'Custom billing terms']
  },
  {
    id: 'telemarketing',
    name: 'Telemarketing',
    category: 'B2B Business Services',
    categoryNumber: '09',
    shortDesc: 'Structured outbound calling support for prospecting, lead qualification, and business outreach.',
    price: '₹25,000/month',
    deliverables: ['Trained tele-calling agents', 'Call script preparation', 'Daily call log reporting', 'Hot lead transfer']
  },
  {
    id: 'ecommerce-consulting',
    name: 'E-commerce Consulting',
    category: 'B2B Business Services',
    categoryNumber: '09',
    shortDesc: 'Practical guidance on store setup, customer journeys, platforms, payments, analytics, and scaling.',
    price: '₹20,000',
    deliverables: ['Store architecture audit', 'Payment & checkout review', 'Inventory & logistics recommendations', 'Growth roadmap']
  },
  {
    id: 'corporate-website-consultation',
    name: 'Corporate Website Consultation',
    category: 'B2B Business Services',
    categoryNumber: '09',
    shortDesc: 'Requirement discovery and strategic guidance for businesses planning or upgrading corporate websites.',
    price: '₹10,000',
    deliverables: ['Technical requirements specification', 'Site architecture diagram', 'Scope & cost estimate matrix', 'Vendor RFP documentation']
  }
];
