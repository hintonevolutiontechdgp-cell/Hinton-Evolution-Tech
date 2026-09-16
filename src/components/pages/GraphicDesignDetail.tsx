import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  Diamond,
  Zap,
  Users,
  Infinity as InfinityIcon,
  PenTool,
  Gift,
  Instagram,
  Image as ImageIcon,
  Monitor,
  Presentation,
  Megaphone,
  FileText,
  Layers,
  MessageSquare
} from 'lucide-react';
import { PageId } from '../../types';
import { SEO } from '../SEO';

const PINTEREST_HERO_IMAGE = 'https://i.pinimg.com/736x/e4/a8/32/e4a832c18a9d3d53949b16c53cc4e1fe.jpg';
const LOCAL_HERO_IMAGE = '/images/graphic-design-hero.jpg';

interface GraphicDesignDetailProps {
  onNavigate: (page: PageId, sId?: string) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export function GraphicDesignDetail({ onNavigate, onOpenConsultation }: GraphicDesignDetailProps) {
  const [heroImageSrc, setHeroImageSrc] = React.useState(PINTEREST_HERO_IMAGE);

  const whatsIncludedItems = [
    {
      icon: PenTool,
      title: 'Marketing creatives',
      desc: 'Campaign visuals that attract and engage.',
    },
    {
      icon: Gift,
      title: 'Promotional graphics',
      desc: 'Designs for offers, events and product launches.',
    },
    {
      icon: Instagram,
      title: 'Social media visuals',
      desc: 'Scroll-stopping content for all platforms.',
    },
    {
      icon: ImageIcon,
      title: 'Banners',
      desc: 'Web and print banners for various platforms.',
    },
    {
      icon: Monitor,
      title: 'Website graphics',
      desc: 'Custom graphics for websites and landing pages.',
    },
    {
      icon: Presentation,
      title: 'Presentation graphics',
      desc: 'Professional slides and visual aids.',
    },
    {
      icon: Megaphone,
      title: 'Digital advertisements',
      desc: 'Static and animated ad designs for better reach.',
    },
    {
      icon: FileText,
      title: 'Flyers',
      desc: 'Creative flyers for events, products and services.',
    },
    {
      icon: Layers,
      title: 'Marketing materials',
      desc: 'Brochures, posters, catalogs and more.',
    },
    {
      icon: MessageSquare,
      title: 'Business communication graphics',
      desc: 'Visuals for internal and external business communication.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Graphic Design | Custom Business & Marketing Graphics | Hinton Evolution Tech"
        description="We provide custom graphic design support for businesses requiring professional visual content across digital and offline marketing channels."
      />

      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white">
        
        {/* Soft background ambient light */}
        <div className="absolute top-0 right-0 w-[550px] h-[450px] bg-purple-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
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
                Graphic <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Design
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Custom Business & Marketing Graphics
              </h2>

              {/* Description paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                We provide custom graphic design support for businesses requiring professional visual content across digital and offline marketing channels. All designs are developed around the brand's visual identity and communication objectives.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenConsultation('Graphic Design - Inquire')}
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

              {/* Tagline below buttons */}
              <div className="pt-3 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-purple-600 rounded-full" />
                <span className="text-[11px] font-bold text-slate-600 tracking-[0.18em] uppercase">
                  GOOD DESIGN BUILDS STRONGER BRANDS
                </span>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: HIGH-RES GRAPHIC DESIGN MOCKUP HERO IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[560px] select-none">
                
                {/* Soft ambient blur behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/50 via-pink-100/40 to-transparent rounded-full blur-3xl -z-10" />

                {/* Hero Mockup Image Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                  <img 
                    src={heroImageSrc} 
                    alt="Hinton Evolution Tech Graphic Design Mockup"
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

      {/* "WHAT'S INCLUDED:" SECTION (10 HIGH-FIDELITY CARDS) */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Accent bar */}
          <div className="space-y-2 mb-10">
            <div className="w-12 h-1 bg-purple-600 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              What's Included:
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A complete range of graphic design solutions to meet your business and marketing needs.
            </p>
          </div>

          {/* 10 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatsIncludedItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-purple-100 border border-purple-100/80 flex items-center justify-center text-purple-600 shrink-0 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CONVERSION BANNER: "LET'S CREATE SOMETHING AMAZING" */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 border border-purple-100/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
          
          {/* Subtle Radial Burst Graphic at right */}
          <div className="absolute right-28 top-3 pointer-events-none opacity-40">
            <svg className="w-12 h-12 text-purple-600" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="25" y1="5" x2="25" y2="15" />
              <line x1="12" y1="12" x2="19" y2="19" />
              <line x1="38" y1="12" x2="31" y2="19" />
            </svg>
          </div>

          <div className="space-y-1 text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Let's Create Something{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Amazing
              </span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Bring your ideas to life with creative designs that make an impact.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Graphic Design - Get Started Today')}
            className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95 shrink-0 z-10"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* BOTTOM TRUST STRIP (4 VALUE PILLARS WITH DIVIDERS) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="flex items-center justify-center gap-3 py-2 px-2">
            <Diamond className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Creative & Unique Designs
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-2 px-2">
            <Zap className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              On-Time Delivery
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-2 px-2">
            <Users className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              100% Client Satisfaction
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-2 px-2">
            <InfinityIcon className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Unlimited Revisions
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
