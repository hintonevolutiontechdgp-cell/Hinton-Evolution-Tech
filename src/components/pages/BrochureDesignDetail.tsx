import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles,
  Diamond,
  Target,
  TrendingUp,
  ArrowRight,
  Layout,
  FileText,
  AlignLeft,
  Type,
  Image as ImageIcon,
  Table as TableIcon,
  ShieldCheck,
  FileCheck,
  Share2,
  Clock,
  RotateCcw,
  Sparkle
} from 'lucide-react';
import { PageId } from '../../types';
import { SEO } from '../SEO';

const PINTEREST_HERO_IMAGE = 'https://i.pinimg.com/736x/2f/66/41/2f66416faf2a4cf3178587639f7ef065.jpg';
const LOCAL_HERO_IMAGE = '/images/brochure-design-hero.jpg';

interface BrochureDesignDetailProps {
  onNavigate: (page: PageId, sId?: string) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export function BrochureDesignDetail({ onNavigate, onOpenConsultation }: BrochureDesignDetailProps) {
  const [heroImageSrc, setHeroImageSrc] = React.useState(PINTEREST_HERO_IMAGE);

  const topRowItems = [
    {
      icon: FileText,
      title: 'Content structure',
      desc: 'Well-organized information flow',
    },
    {
      icon: Layout,
      title: 'Page layout',
      desc: 'Professional and balanced layout',
    },
    {
      icon: AlignLeft,
      title: 'Visual hierarchy',
      desc: 'Clear and effective messaging',
    },
    {
      icon: Type,
      title: 'Typography and spacing',
      desc: 'Readable and consistent design',
    },
  ];

  const bottomRowItems = [
    {
      icon: ImageIcon,
      title: 'Images and graphic elements',
      desc: 'High-quality, relevant visuals',
    },
    {
      icon: TableIcon,
      title: 'Tables or service sections where required',
      desc: 'Structured data presentation',
    },
    {
      icon: ShieldCheck,
      title: 'Brand integration',
      desc: 'Aligned with your brand identity',
    },
    {
      icon: FileCheck,
      title: 'Print-ready PDF',
      desc: 'High-resolution, press-ready files',
    },
    {
      icon: Share2,
      title: 'Digital-friendly version',
      desc: 'Optimized for web and sharing',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Brochure Design | Marketing & Corporate Brochures | Hinton Evolution Tech"
        description="We design professional brochures that organize information in a clear and visually engaging format for services, products, and company credentials."
      />

      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white">
        
        {/* Soft background ambient glow */}
        <div className="absolute top-0 right-0 w-[550px] h-[450px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top-Right Ambient Slogan */}
          <div className="flex justify-end mb-3 sm:mb-4">
            <div className="flex flex-col items-end pointer-events-none select-none">
              <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Ideas Today. <span className="font-extrabold">A Stronger Tomorrow.</span>
              </span>
              {/* Vibrant brush stroke underline under A Stronger Tomorrow */}
              <svg className="w-36 sm:w-44 h-2 text-purple-600 -mt-0.5" viewBox="0 0 160 8" fill="none">
                <path d="M4 5 Q 80 1, 156 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-5"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/70 text-purple-700 text-xs font-bold tracking-wider uppercase">
                BRANDING & CREATIVE
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.05]">
                Brochure <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Design</span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Marketing & Corporate Brochures
              </h2>

              {/* Description paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                We design professional brochures that organize information in a clear and visually engaging format. Brochures can be used to present services, products, company information, solutions or promotional offers.
              </p>

              {/* 3 Value Badges in Horizontal Strip */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-purple-50/70 border border-purple-100 text-slate-800 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-purple-100/80 flex items-center justify-center text-purple-600 shrink-0">
                    <Diamond className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold leading-tight">Creative<br />Designs</span>
                </div>

                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-purple-50/70 border border-purple-100 text-slate-800 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-purple-100/80 flex items-center justify-center text-purple-600 shrink-0">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold leading-tight">Clear<br />Communication</span>
                </div>

                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-purple-50/70 border border-purple-100 text-slate-800 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-purple-100/80 flex items-center justify-center text-purple-600 shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold leading-tight">Stronger<br />Brand Presence</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenConsultation('Brochure Design - Inquire')}
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

              {/* Handwritten Note below buttons */}
              <div className="pt-2 select-none">
                <div className="inline-flex flex-col items-start">
                  <span className="font-['Caveat',cursive] font-bold text-slate-900 text-2xl sm:text-3xl tracking-wide transform -rotate-3">
                    Design That Speaks
                  </span>
                  <span className="font-['Caveat',cursive] font-bold text-slate-900 text-2xl sm:text-3xl tracking-wide -mt-2 transform -rotate-3">
                    For Your Business
                  </span>
                  <svg className="w-28 h-4 text-purple-600 -mt-1 ml-4" viewBox="0 0 100 12" fill="none">
                    <path d="M4 6 Q 50 11, 96 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: PHOTOREALISTIC HINTON EVOLUTION TECH TRI-FOLD BROCHURE HERO IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[650px] select-none">
                
                {/* Soft ambient blur behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/50 via-pink-100/40 to-transparent rounded-full blur-3xl -z-10" />

                {/* Hero Mockup Image Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                  <img 
                    src={heroImageSrc} 
                    alt="Hinton Evolution Tech Corporate Brochure Design Mockup"
                    className="w-full h-auto object-cover select-none transition-transform duration-500 hover:scale-[1.01]"
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

      {/* "WHAT'S INCLUDED:" SECTION (STRUCTURED 2-ROW GRID) */}
      <section className="py-12 sm:py-16 bg-[#fafbfe] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex items-center gap-2.5 mb-8">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              What's Included:
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Row 1: 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topRowItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-purple-200 transition-all flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/80 flex items-center justify-center text-purple-600 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 5 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {bottomRowItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-purple-200 transition-all flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/80 flex items-center justify-center text-purple-600 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* BOTTOM GUARANTEES STRIP & GIANT CTA PILL BUTTON */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-col xl:flex-row items-center justify-between gap-6">
          
          {/* 4 Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full xl:w-auto">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <Diamond className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                Unique & Creative Designs
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                On-Time Delivery
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                100% Satisfaction
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <RotateCcw className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                Unlimited Revisions
              </span>
            </div>
          </div>

          {/* Giant Pink/Magenta Gradient CTA Button */}
          <button
            onClick={() => onOpenConsultation('Brochure Design - Bottom CTA')}
            className="w-full xl:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 hover:from-cyan-600 hover:via-pink-600 hover:to-rose-600 text-white font-black text-sm sm:text-base tracking-wide shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center gap-3.5 cursor-pointer active:scale-95 group shrink-0"
          >
            <div className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-xs group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </div>
            <span>Let's Design a Brochure That Grows Your Business!</span>
          </button>

        </div>
      </section>

    </div>
  );
}
