import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  Users, 
  Heart, 
  Target, 
  TrendingUp, 
  Layers, 
  Monitor, 
  Package, 
  MousePointerClick, 
  FileText, 
  Smartphone, 
  Search, 
  BarChart3, 
  MessageCircle, 
  Rocket, 
  PenTool, 
  Settings, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { PageId } from '../../types';
import { SEO } from '../SEO';

interface LandingPageDesignDetailProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenConsultation: (packageName?: string) => void;
}

const PINTEREST_HERO_IMAGE = 'https://i.pinimg.com/736x/d6/9a/12/d69a12a200c39ce43111a6f8944ac7ef.jpg';
const LOCAL_HERO_IMAGE = '/images/landing-page-hero.jpg';

export function LandingPageDesignDetail({ onNavigate, onOpenConsultation }: LandingPageDesignDetailProps) {
  const [heroImageSrc, setHeroImageSrc] = useState<string>(PINTEREST_HERO_IMAGE);

  const trustBadges = [
    { icon: Zap, label: 'Fast Delivery' },
    { icon: ShieldCheck, label: 'SEO Friendly' },
    { icon: Users, label: 'Conversion Focused' },
    { icon: Heart, label: 'Ongoing Support' },
  ];

  const features = [
    {
      icon: Layers,
      title: 'Conversion-focused page structure',
      desc: 'Strategic layout designed to convert visitors into customers.',
    },
    {
      icon: Monitor,
      title: 'Hero section and value proposition',
      desc: 'Compelling design that captures attention instantly.',
    },
    {
      icon: Package,
      title: 'Service or product presentation',
      desc: 'Beautifully showcase your offer with clear benefits.',
    },
    {
      icon: MousePointerClick,
      title: 'Call-to-action sections',
      desc: 'Strategically placed CTAs to drive more conversions.',
    },
    {
      icon: FileText,
      title: 'Lead forms or inquiry forms',
      desc: 'Custom forms to capture valuable leads.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-responsive layouts',
      desc: 'Looks perfect on all devices — desktop, tablet and mobile.',
    },
    {
      icon: Search,
      title: 'Basic SEO-friendly page structure',
      desc: 'Optimized for better visibility on search engines.',
    },
    {
      icon: BarChart3,
      title: 'Integration with analytics and tracking tools',
      desc: 'Track performance and measure results.',
    },
    {
      icon: MessageCircle,
      title: 'Contact, WhatsApp or other conversion points',
      desc: 'Make it easy for users to reach you.',
    },
  ];

  const whyChooseUsPoints = [
    { icon: Rocket, label: 'Goal-Oriented Design' },
    { icon: Smartphone, label: 'Mobile-First Approach' },
    { icon: PenTool, label: 'Clear & Persuasive Content Layout' },
    { icon: TrendingUp, label: 'High Converting CTAs' },
    { icon: Settings, label: 'SEO Optimized Structure' },
    { icon: Clock, label: 'Fast Loading & Lightweight' },
  ];

  const bottomStats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '3x', label: 'Average Conversion Increase' },
    { number: '24/7', label: 'Support & Assistance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/40 via-white to-slate-50/50">
      <SEO 
        title="Landing Page Design | Campaign-Focused Landing Pages | Hinton Evolution Tech"
        description="We design focused, high-converting landing pages for marketing campaigns, products, services, events and lead-generation initiatives. Structured for maximum conversions."
      />

      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden">
        {/* Soft background ambient glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-purple-700 text-xs font-bold tracking-wider uppercase">
                WEB SERVICES
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
                  Landing Page <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
                    Design
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl font-bold text-violet-700 tracking-tight">
                Campaign-Focused Landing Pages
              </h2>

              {/* Paragraph Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                We design focused, high-converting landing pages for marketing campaigns, products, services, events and lead-generation initiatives. Each page is structured around a specific objective, with clear messaging, strong calls-to-action and a user journey designed to encourage visitors to take the desired action.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation('Landing Page Design - Free Quote')}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 border-2 border-purple-500 text-purple-700 font-bold text-sm tracking-wide shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  View Our Work
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-3 gap-x-5 text-xs font-semibold text-slate-700">
                {trustBadges.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <b.icon className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: HERO MOCKUP IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[580px] flex items-center justify-center">
                <img 
                  src={heroImageSrc} 
                  alt="Landing Page Design Laptop and Smartphone Mockup - Hinton Evolution Tech" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl select-none transition-all duration-300 transform hover:scale-[1.01]"
                  onError={() => {
                    if (heroImageSrc !== LOCAL_HERO_IMAGE) {
                      setHeroImageSrc(LOCAL_HERO_IMAGE);
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BEST SUITED FOR & TURN TRAFFIC NOTICE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:mt-2 mb-14 sm:mb-20">
        <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
          
          {/* Left notice: Best suited for */}
          <div className="flex items-start sm:items-center gap-3.5 flex-1">
            <div className="p-2.5 rounded-full bg-amber-100 text-amber-600 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="font-bold text-slate-900">Best suited for:</strong>{' '}
              advertising campaigns, product launches, service promotions, lead-generation campaigns and specific marketing offers.
            </p>
          </div>

          {/* Desktop divider */}
          <div className="hidden md:block w-px h-10 bg-amber-200" />

          {/* Right badge: Turn Traffic Into Results */}
          <div className="flex items-center gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-amber-200/60 w-full md:w-auto">
            <div className="p-2 rounded-lg bg-orange-100/80 text-orange-600 shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-slate-900">
              Turn Traffic Into Results
            </span>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION ("WHAT'S INCLUDED") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-purple-700 text-xs font-bold tracking-wider uppercase mb-3">
              FEATURES
            </div>
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                What's Included
              </h2>
              {/* Hand-drawn accent curved stroke */}
              <svg className="w-20 sm:w-28 h-4 text-violet-500 absolute -bottom-2 right-0 transform translate-x-2" viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M5 12 Q 60 2, 115 14" />
              </svg>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-sm sm:text-right leading-relaxed">
            Everything you need to launch a high-performing landing page.
          </p>
        </div>

        {/* 9 Feature Cards (3x3 Grid) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-4 group"
            >
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                <item.icon className="w-5 h-5 transition-colors" />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION ("More Than Just a Design. A Growth Partner.") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-3xl bg-gradient-to-br from-white via-purple-50/30 to-purple-100/30 border border-purple-200/70 p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtext, CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-purple-700 text-xs font-bold tracking-wider uppercase">
                WHY CHOOSE US
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
                More Than Just a Design. <br />
                <span className="text-purple-600">A Growth</span> Partner.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                We don't just create pages — we build digital experiences that help you achieve real business results.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Landing Page Design - Build Proposal')}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
                >
                  <span>Let's Build Your Landing Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 6 Value Pillars (3 cols x 2 rows or 2 cols x 3 rows) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {whyChooseUsPoints.map((point, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 border border-purple-100/80 shadow-2xs hover:shadow-xs transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3">
                      <point.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {point.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {bottomStats.map((stat, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-4 md:pt-0' : ''}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-700 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
