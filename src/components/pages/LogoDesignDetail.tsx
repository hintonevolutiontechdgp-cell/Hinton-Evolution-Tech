import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Lightbulb, 
  Copy, 
  Type, 
  PenTool, 
  Star, 
  Layers, 
  SunMoon, 
  Download, 
  Printer, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Headphones, 
  Target, 
  Sparkles,
  Package,
  Award,
  Infinity as InfinityIcon
} from 'lucide-react';
import { PageId } from '../../types';
import { SEO } from '../SEO';

interface LogoDesignDetailProps {
  onNavigate: (page: PageId, sId?: string) => void;
  onOpenConsultation: (packageName?: string) => void;
}

const PINTEREST_HERO_IMAGE = 'https://i.pinimg.com/736x/03/31/85/03318512fa7c6922dc6dd6ca946c0d2a.jpg';
const LOCAL_HERO_IMAGE = '/images/logo-design-hero.jpg';

export function LogoDesignDetail({ onNavigate, onOpenConsultation }: LogoDesignDetailProps) {
  const [heroImageSrc, setHeroImageSrc] = React.useState(PINTEREST_HERO_IMAGE);

  const whatsIncludedItems = [
    {
      icon: Users,
      title: 'Brand understanding and creative direction',
      desc: 'Research & strategy to match your brand vision.',
    },
    {
      icon: Lightbulb,
      title: 'Logo concept development',
      desc: 'Multiple unique concepts based on your requirements.',
    },
    {
      icon: Copy,
      title: 'Multiple design directions where agreed',
      desc: 'Explore different styles and directions.',
    },
    {
      icon: Type,
      title: 'Typography selection',
      desc: 'Carefully chosen fonts that represent your brand.',
    },
    {
      icon: PenTool,
      title: 'Symbol or icon development',
      desc: 'Unique symbols and icons for strong identity.',
    },
    {
      icon: Star,
      title: 'Primary logo version',
      desc: 'Main logo in final approved format.',
    },
    {
      icon: Layers,
      title: 'Alternate logo variations',
      desc: 'Horizontal, vertical, icon-only and more.',
    },
    {
      icon: SunMoon,
      title: 'Light and dark versions',
      desc: 'Optimized for all backgrounds.',
    },
    {
      icon: Download,
      title: 'Digital-ready files',
      desc: 'JPG, PNG, SVG, PDF and more.',
    },
    {
      icon: Printer,
      title: 'Print-ready files',
      desc: 'High-resolution files for merchandise, packaging, etc.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand your brand, goals and audience.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Create unique concepts and refine.',
      icon: PenTool,
    },
    {
      num: '03',
      title: 'Review',
      desc: 'Share concepts, get your feedback.',
      icon: MessageSquare,
    },
    {
      num: '04',
      title: 'Finalize',
      desc: 'Deliver all files and guidelines.',
      icon: CheckCircle2,
    },
  ];

  const recentLogos = [
    {
      name: 'Verdant',
      sub: 'NATURALS',
      bg: 'bg-[#0f1712]',
      textColor: 'text-white',
      subColor: 'text-emerald-400',
      symbol: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          <path d="M40 10 C32 24, 25 38, 40 50 C55 38, 48 24, 40 10 Z" fill="#22c55e" opacity="0.95" />
          <path d="M40 28 C26 30, 16 38, 20 48 C30 52, 38 42, 40 28 Z" fill="#16a34a" opacity="0.85" />
          <path d="M40 28 C54 30, 64 38, 60 48 C50 52, 42 42, 40 28 Z" fill="#4ade80" opacity="0.85" />
        </svg>
      ),
    },
    {
      name: 'PixelForge',
      sub: 'CREATIVE STUDIO',
      bg: 'bg-[#f8f9fa]',
      textColor: 'text-slate-900',
      subColor: 'text-slate-500',
      symbol: (
        <svg viewBox="0 0 70 70" className="w-12 h-12">
          {/* Isometric colorful origami P */}
          <polygon points="20,15 42,15 32,32 10,32" fill="#f97316" />
          <polygon points="42,15 56,28 46,45 32,32" fill="#ec4899" />
          <polygon points="32,32 46,45 28,60 14,46" fill="#8b5cf6" />
          <polygon points="10,32 32,32 14,46 10,46" fill="#06b6d4" />
        </svg>
      ),
    },
    {
      name: 'Nexora',
      sub: 'SOLUTIONS',
      bg: 'bg-[#0b1021]',
      textColor: 'text-white',
      subColor: 'text-cyan-400',
      symbol: (
        <svg viewBox="0 0 80 60" className="w-14 h-12">
          <defs>
            <linearGradient id="nexoraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          {/* Ribbon N */}
          <path d="M22 48 L22 14 L36 14 L50 38 L50 14 L60 14 L60 48 L46 48 L32 24 L32 48 Z" fill="url(#nexoraGrad)" />
        </svg>
      ),
    },
    {
      name: 'Brew & Beyond',
      sub: 'COFFEE HOUSE',
      bg: 'bg-[#f6f2ec]',
      textColor: 'text-[#3c2a21]',
      subColor: 'text-[#8d6b4f]',
      symbol: (
        <svg viewBox="0 0 80 60" className="w-14 h-12">
          {/* Coffee cup with steam and heart */}
          <path d="M24 24 C24 38, 30 46, 44 46 C58 46, 64 38, 64 24 Z" fill="#6f4e37" />
          <path d="M64 28 C70 28, 73 34, 70 40 C67 43, 63 42, 63 42" fill="none" stroke="#6f4e37" strokeWidth="4" strokeLinecap="round" />
          <path d="M36 14 Q40 8, 38 4" fill="none" stroke="#a07855" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M44 16 Q48 10, 46 6" fill="none" stroke="#a07855" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M52 14 Q56 8, 54 4" fill="none" stroke="#a07855" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Luminex',
      sub: 'TECHNOLOGY',
      bg: 'bg-[#080c16]',
      textColor: 'text-white',
      subColor: 'text-cyan-400',
      symbol: (
        <svg viewBox="0 0 80 70" className="w-14 h-12">
          <defs>
            <linearGradient id="luminexGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          {/* Delta Prism Triangle */}
          <polygon points="40,10 68,58 12,58" fill="none" stroke="url(#luminexGrad)" strokeWidth="6" strokeLinejoin="round" />
          <polygon points="40,24 56,52 24,52" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.6" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const whyChooseUsFeatures = [
    {
      icon: Target,
      title: 'Creative & Strategic Approach',
      desc: 'Designs backed by research and strategy.',
    },
    {
      icon: Star,
      title: '100% Original Designs',
      desc: 'No templates, fully custom work.',
    },
    {
      icon: Clock,
      title: 'Fast & Reliable Delivery',
      desc: 'On-time delivery with clear communication.',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      desc: "We're here even after delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Logo Design | Distinctive Logo Development | Hinton Evolution Tech"
        description="We design professional logos that provide a recognizable foundation for your brand. Research, concept development, typography, primary and alternate variations, and print/digital-ready guidelines."
      />

      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-white">
        
        {/* Soft background glow */}
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-5"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/70 text-purple-700 text-xs font-bold tracking-wider uppercase">
                BRANDING & CREATIVE
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.05]">
                Logo <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Design
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl font-bold text-purple-700 tracking-tight">
                Distinctive Logo Development
              </h2>

              {/* Description paragraph */}
              <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                We design professional logos that provide a recognizable foundation for your brand. The process focuses on creating a visual mark that is appropriate for the business, audience and intended market position.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenConsultation('Logo Design - Inquire')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm tracking-wide shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  View All Services
                </button>
              </div>

              {/* Stats Strip under buttons */}
              <div className="pt-5 flex flex-wrap items-center gap-6 sm:gap-8 text-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center text-blue-600">
                    <Package className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-black text-slate-900">100+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Brands Created</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100/80 flex items-center justify-center text-purple-600">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-black text-slate-900">98%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Client Satisfaction</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100/80 flex items-center justify-center text-pink-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-black text-slate-900">3x</div>
                    <div className="text-[11px] text-slate-500 font-medium">Stronger Recognition</div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: AURORA TECHNOLOGIES LUXURY MOCKUP IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[500px] select-none">

                {/* Soft purple circular ambient glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/50 via-pink-100/40 to-transparent rounded-full blur-3xl -z-10" />

                {/* The Hero Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                  <img 
                    src={heroImageSrc} 
                    alt="Aurora Technologies Luxury Logo Design and Brand Identity Mockup"
                    className="w-full h-auto object-cover select-none transition-transform duration-500 hover:scale-[1.02]"
                    onError={() => {
                      if (heroImageSrc !== LOCAL_HERO_IMAGE) {
                        setHeroImageSrc(LOCAL_HERO_IMAGE);
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* "WHAT'S INCLUDED:" SECTION */}
      <section className="py-14 sm:py-20 bg-[#fafbfe] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-10">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                What's Included:
              </h2>
            </div>
            <p className="text-slate-500 text-sm font-medium">
              Everything you need for a professional brand identity
            </p>
          </div>

          {/* 10 Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatsIncludedItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:shadow-md hover:border-purple-200 transition-all group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-50 group-hover:bg-purple-100/80 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-900 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* "OUR PROCESS" SECTION */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative mb-14">
            {/* Tag */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
              OUR PROCESS
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  From Idea to Icon
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  A simple and collaborative process to bring your brand to life.
                </p>
              </div>

              {/* Hand-drawn Annotation: "Simple Steps, Great Results" */}
              <div className="flex flex-col items-center md:items-end pointer-events-none">
                <span className="font-['Caveat',cursive] font-bold text-blue-600 text-2xl sm:text-3xl tracking-wide transform -rotate-3">
                  Simple Steps,
                </span>
                <span className="font-['Caveat',cursive] font-bold text-blue-600 text-2xl sm:text-3xl tracking-wide -mt-2 transform -rotate-3">
                  Great Results
                </span>
                <svg className="w-8 h-8 text-blue-600 transform rotate-45 -mt-1 mr-4" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 5 Q 16 26, 26 28" />
                  <path d="M16 26 L 27 28 L 26 18" />
                </svg>
              </div>
            </div>
          </div>

          {/* 4 Process Steps in Horizontal Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-start p-4">
                
                {/* Icon in soft circle */}
                <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 mb-4 shadow-xs">
                  <step.icon className="w-5 h-5" />
                </div>

                {/* Step Number */}
                <span className="text-xs font-bold text-purple-600 tracking-wider mb-1">
                  {step.num}
                </span>

                {/* Step Title */}
                <h3 className="text-lg font-black text-slate-900 mb-1">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>

                {/* Dotted connector arrow on desktop between steps */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 text-slate-300">
                    <svg viewBox="0 0 40 10" className="w-full h-3">
                      <line x1="0" y1="5" x2="32" y2="5" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
                      <polyline points="28,2 34,5 28,8" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* "RECENT WORK" SECTION */}
      <section className="py-16 sm:py-20 bg-[#fafbfe] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                RECENT WORK
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Logos That Make an Impact
              </h2>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-1.5 text-purple-700 hover:text-purple-900 font-bold text-sm tracking-wide transition-colors cursor-pointer group"
            >
              <span>View All Logos</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 5 Logo Showcase Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {recentLogos.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`${item.bg} rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-[1.1/1] shadow-md border border-slate-200/30 group cursor-pointer`}
                onClick={() => onNavigate('portfolio')}
              >
                <div className="mb-3 transform group-hover:scale-105 transition-transform duration-300">
                  {item.symbol}
                </div>
                <div className={`text-sm font-black tracking-wide ${item.textColor}`}>
                  {item.name}
                </div>
                <div className={`text-[8px] font-bold tracking-[0.2em] ${item.subColor} uppercase mt-0.5`}>
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* "WHY CHOOSE US" SECTION */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Description & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider">
                WHY CHOOSE US
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                More Than Just a Logo. <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                  A Brand Advantage.
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We create logos that don't just look good — they build trust, create recognition, and help your business grow.
              </p>

              <div>
                <button
                  onClick={() => onOpenConsultation('Logo Design - Create Logo')}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-pink-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Let's Create Your Logo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Middle Column: 4 Key Features */}
            <div className="lg:col-span-4 space-y-4">
              {whyChooseUsFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-purple-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Hand-drawn "Design Brand Grow" & Botanical leaf */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center relative min-h-[220px]">
              
              <div className="space-y-1 transform -rotate-12 text-center pointer-events-none select-none">
                <span className="font-['Caveat',cursive] font-bold text-blue-600 text-4xl block drop-shadow-xs">
                  Design
                </span>
                <span className="font-['Caveat',cursive] font-bold text-blue-600 text-4xl block drop-shadow-xs -mt-2">
                  Brand
                </span>
                <span className="font-['Caveat',cursive] font-bold text-blue-600 text-5xl block drop-shadow-xs -mt-2">
                  Grow
                </span>
                {/* Dynamic Underline */}
                <svg className="w-32 h-6 text-blue-600 mx-auto -mt-2" viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M5 10 Q 60 18, 115 6" />
                </svg>
              </div>

              {/* Botanical Leaf in bottom-right */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 pointer-events-none opacity-80">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M10 90 Q 50 50, 90 10" fill="none" stroke="#2e5233" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M50 50 C30 35, 20 60, 40 70 C60 65, 65 55, 50 50 Z" fill="#2d6a4f" />
                  <path d="M70 30 C55 15, 45 40, 65 50 C80 45, 85 35, 70 30 Z" fill="#40916c" />
                  <path d="M90 10 C75 2, 65 25, 85 30 C95 25, 98 15, 90 10 Z" fill="#52b788" />
                </svg>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0d0729] via-[#1a0f44] to-[#120736] p-8 sm:p-12 text-white shadow-2xl">
          
          {/* Glowing Silk Wave in background right */}
          <div className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none opacity-80 overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
              <defs>
                <linearGradient id="ctaSilkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path 
                d="M50 180 C 150 120, 220 220, 320 140 C 370 100, 390 120, 420 80 L 420 200 L 50 200 Z" 
                fill="url(#ctaSilkGrad)" 
              />
              <path 
                d="M120 190 C 200 130, 260 170, 340 110 C 380 80, 400 90, 420 60" 
                fill="none" 
                stroke="#06b6d4" 
                strokeWidth="3" 
                opacity="0.7" 
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] font-bold text-purple-300 uppercase tracking-widest block">
                READY TO BUILD YOUR BRAND?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Let's Design a Logo <br />
                That <span className="text-pink-400">Speaks for You.</span>
              </h2>
              <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed">
                Turn your ideas into a powerful visual identity that stands out in the market.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onOpenConsultation('Logo Design - Banner CTA')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-pink-500/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* TRUST STRIP (BOTTOM GUARANTEES) */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xs py-5 px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center text-center">
            
            <div className="flex items-center gap-2.5">
              <InfinityIcon className="w-5 h-5 text-purple-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Unlimited Concepts
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                100% Original Designs
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Satisfaction Guarantee
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-purple-600 fill-purple-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Fast & Friendly Support
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
