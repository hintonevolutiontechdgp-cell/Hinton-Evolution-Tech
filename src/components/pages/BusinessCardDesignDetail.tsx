import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Contact, 
  Star, 
  Type, 
  QrCode, 
  Printer, 
  Share2, 
  Search, 
  PenTool, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Headphones, 
  Sparkles,
  Inbox,
  Infinity as InfinityIcon
} from 'lucide-react';
import { PageId } from '../../types';
import { SEO } from '../SEO';

const PINTEREST_HERO_IMAGE = 'https://i.pinimg.com/736x/bc/64/4f/bc644fc809e032f3ede33a7905d9eb71.jpg';
const LOCAL_HERO_IMAGE = '/images/business-card-hero.jpg';

interface BusinessCardDesignDetailProps {
  onNavigate: (page: PageId, sId?: string) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export function BusinessCardDesignDetail({ onNavigate, onOpenConsultation }: BusinessCardDesignDetailProps) {
  const [heroImageSrc, setHeroImageSrc] = React.useState(PINTEREST_HERO_IMAGE);

  const whatsIncludedItems = [
    {
      icon: Layers,
      title: 'Front and back design',
      desc: 'Clean, professional layouts for both sides.',
    },
    {
      icon: Contact,
      title: 'Contact information layout',
      desc: 'Well-organized and readable details.',
    },
    {
      icon: Star,
      title: 'Logo placement',
      desc: 'Strategic brand positioning.',
    },
    {
      icon: Type,
      title: 'Brand colors and typography',
      desc: 'Consistent with your brand identity.',
    },
    {
      icon: QrCode,
      title: 'QR code placement',
      desc: 'Link to your website, portfolio or contact.',
    },
    {
      icon: Printer,
      title: 'Print-ready artwork',
      desc: 'High-resolution files for professional printing.',
    },
    {
      icon: Share2,
      title: 'Digital sharing version',
      desc: 'Optimized files for email, WhatsApp and online use.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Learn about your brand and requirements.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Create initial concepts based on your goals.',
      icon: PenTool,
    },
    {
      num: '03',
      title: 'Review',
      desc: 'Refine the design with your feedback.',
      icon: MessageSquare,
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'Get final files ready for print and digital use.',
      icon: CheckCircle2,
    },
  ];

  const recentCards = [
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
            <linearGradient id="bcNexoraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <path d="M22 48 L22 14 L36 14 L50 38 L50 14 L60 14 L60 48 L46 48 L32 24 L32 48 Z" fill="url(#bcNexoraGrad)" />
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
            <linearGradient id="bcLuminexGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <polygon points="40,10 68,58 12,58" fill="none" stroke="url(#bcLuminexGrad)" strokeWidth="6" strokeLinejoin="round" />
          <polygon points="40,24 56,52 24,52" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.6" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Business Card Design | Professional Business Cards | Hinton Evolution Tech"
        description="We create clean and professionally structured business cards that communicate essential contact information while maintaining visual consistency with your brand identity."
      />

      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-white">
        
        {/* Soft background ambient glow */}
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
                Business Card <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Design
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                Professional Business Cards
              </h2>

              {/* Description paragraph */}
              <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                We create clean and professionally structured business cards that communicate essential contact information while maintaining visual consistency with your brand identity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenConsultation('Business Card Design - Inquire')}
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
                    <Inbox className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-black text-slate-900">100+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Brands Served</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100/80 flex items-center justify-center text-purple-600">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-black text-slate-900">4.9/5</div>
                    <div className="text-[11px] text-slate-500 font-medium">Client Satisfaction</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100/80 flex items-center justify-center text-pink-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-black text-slate-900">24h</div>
                    <div className="text-[11px] text-slate-500 font-medium">Delivery Support</div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: AURORA TECHNOLOGIES BUSINESS CARDS MOCKUP */}
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
                    alt="Aurora Technologies Luxury Business Card Design Mockup"
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
              Everything you need for a professional business card.
            </p>
          </div>

          {/* 7 Feature Cards Grid */}
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
                  From Concept to Card
                </h2>
              </div>

              <p className="text-slate-500 text-sm md:text-right max-w-md">
                A simple and collaborative process to bring your brand to life.
              </p>

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
                      <line x1="0" y1="5" x2="32" y2="5" stroke="#cbd5e1" strokeWidth="1.5" />
                      <polyline points="28,2 34,5 28,8" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
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
                Business Cards That Make an Impression
              </h2>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-1.5 text-purple-700 hover:text-purple-900 font-bold text-sm tracking-wide transition-colors cursor-pointer group"
            >
              <span>View All Designs</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 5 Card Showcase Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {recentCards.map((item, idx) => (
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

      {/* CTA BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0d0729] via-[#1a0f44] to-[#120736] p-8 sm:p-12 text-white shadow-2xl">
          
          {/* Glowing Silk Wave in background right */}
          <div className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none opacity-80 overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
              <defs>
                <linearGradient id="bcCtaSilkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path 
                d="M50 180 C 150 120, 220 220, 320 140 C 370 100, 390 120, 420 80 L 420 200 L 50 200 Z" 
                fill="url(#bcCtaSilkGrad)" 
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
                READY TO CREATE YOUR BUSINESS CARD?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Let's Design a Card <br />
                That <span className="text-pink-400">Opens Opportunities.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-4 shrink-0">
              <div className="text-left sm:text-right text-xs sm:text-sm text-purple-200/90 leading-tight">
                <div>Professional design. Lasting impression.</div>
                <div className="font-semibold text-white mt-0.5">Get started today!</div>
              </div>
              <button
                onClick={() => onOpenConsultation('Business Card Design - Banner CTA')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-pink-500/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Get Started Now</span>
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
                Unique & Creative Designs
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                100% Original Artwork
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                On-Time Delivery
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Headphones className="w-5 h-5 text-purple-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Friendly Support
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
