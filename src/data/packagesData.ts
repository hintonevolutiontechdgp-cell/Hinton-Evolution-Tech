import { WebsitePackage } from '../types';

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '₹20,000',
    priceNum: 20000,
    emiAdvance: '₹8,000',
    emiMonthly: '₹2,000',
    emiDuration: '6 months',
    oneTimeNote: 'Single invoice upon project agreement',
    targetAudience: 'Ideal for Small Businesses & Professionals',
    supportPeriod: '1 Month Support',
    bgGradient: 'from-blue-950 via-slate-900 to-slate-950',
    accentColor: 'text-cyan-300',
    features: [
      'Up to 8 Pages',
      'Mobile Responsive Design',
      'Contact Form & WhatsApp Integration',
      'Basic SEO Setup & SSL Installation',
      'Google Maps & Social Integration',
      'Speed Optimization (Sub-second loading)',
      '1 Month Post-Launch Support',
      'Full Source Code & Domain Ownership'
    ]
  },
  {
    id: 'business',
    name: 'Business Website',
    badge: 'Most Popular',
    popular: true,
    price: '₹40,000',
    priceNum: 40000,
    emiAdvance: '₹16,000',
    emiMonthly: '₹4,000',
    emiDuration: '6 months',
    oneTimeNote: 'Single invoice upon project agreement',
    targetAudience: 'Advanced features for Growing Companies',
    supportPeriod: '3 Months Support',
    bgGradient: 'from-violet-950 via-purple-900 to-slate-950',
    accentColor: 'text-fuchsia-300',
    features: [
      'Up to 20 Pages & Advanced UI/UX',
      'Blog & Dynamic Content Management System (CMS)',
      'Google Analytics 4 & Google Search Console Integration',
      'Lead Generation Forms & Security Hardening',
      'Advanced Speed & Core Web Vitals Optimization',
      '3 Months Priority Support & Maintenance',
      'Conversion Architecture & Interactive Elements',
      'Complete Database & Asset Handover'
    ],
    extraIncluded: [
      'Everything in Starter Website',
      'Interactive Custom UI Components',
      'Structured Schema Markup for Search Engines'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Corporate',
    price: '₹80,000',
    priceNum: 80000,
    emiAdvance: '₹32,000',
    emiMonthly: '₹8,000',
    emiDuration: '6 months',
    oneTimeNote: 'Single invoice upon project agreement',
    targetAudience: 'Complete digital solution for Large Brands',
    supportPeriod: '6 Months Support',
    bgGradient: 'from-cyan-950 via-blue-950 to-slate-950',
    accentColor: 'text-cyan-300',
    features: [
      'Unlimited Pages & Bespoke Architectural Design',
      'Distributor / Dealer / Partner Portal',
      'Multi-language Support (Optional)',
      'HR / Career Portal & Corporate Ingestion Forms',
      'Advanced Full-Spectrum SEO & Enterprise Security Suite',
      '6 Months Dedicated Support & Performance Monitoring',
      'Custom API & Third-party Microservice Integrations',
      'White-glove Deployment & Team Training'
    ],
    extraIncluded: [
      'Everything in Business Website',
      'Scalable Backend Architecture',
      'Custom Admin Workflow Engine'
    ]
  }
];
