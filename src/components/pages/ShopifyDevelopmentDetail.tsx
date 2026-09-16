import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  Target,
  ShoppingCart,
  ShieldCheck,
  TrendingUp,
  Store,
  Palette,
  LayoutGrid,
  Package,
  FileText,
  Menu,
  CreditCard,
  Puzzle,
  LineChart,
  Smartphone,
  ArrowUpRight,
  MessageCircle,
  Lightbulb,
  Settings,
  Check,
  BarChart2,
  ChevronRight,
  Rocket,
  Clock,
  Users,
  Infinity as InfinityIcon
} from 'lucide-react';
import { PageId } from '../../types';
import { SEO } from '../SEO';

const PINTEREST_HERO_IMAGE = 'https://i.pinimg.com/736x/ae/ac/ad/aeacad103ce79595da4379218cf72e7d.jpg';
const LOCAL_HERO_IMAGE = '/images/shopify-development-hero.jpg';

interface ShopifyDevelopmentDetailProps {
  onNavigate: (page: PageId, sId?: string) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export function ShopifyDevelopmentDetail({ onNavigate, onOpenConsultation }: ShopifyDevelopmentDetailProps) {
  const [heroImageSrc, setHeroImageSrc] = React.useState<string>(PINTEREST_HERO_IMAGE);

  const whatsIncludedItems = [
    {
      icon: Store,
      title: 'Shopify store setup',
      desc: 'Complete store configuration.',
    },
    {
      icon: Palette,
      title: 'Theme installation and customization',
      desc: 'Tailored design to match your brand.',
    },
    {
      icon: LayoutGrid,
      title: 'Homepage and collection structure',
      desc: 'Organized and user-friendly layout.',
    },
    {
      icon: Package,
      title: 'Product organization',
      desc: 'Easy product management.',
    },
    {
      icon: FileText,
      title: 'Product-page optimization',
      desc: 'High-converting product pages.',
    },
    {
      icon: Menu,
      title: 'Navigation setup',
      desc: 'Smooth and intuitive user experience.',
    },
    {
      icon: ShoppingCart,
      title: 'Checkout configuration',
      desc: 'Secure and seamless checkout.',
    },
    {
      icon: CreditCard,
      title: 'Payment and shipping settings',
      desc: 'Popular gateways and shipping options.',
    },
    {
      icon: Puzzle,
      title: 'Apps and third-party integrations',
      desc: 'Connect essential tools and services.',
    },
    {
      icon: LineChart,
      title: 'Tracking configuration',
      desc: 'Analytics and conversion tracking.',
    },
    {
      icon: Smartphone,
      title: 'Mobile optimization',
      desc: 'Fully responsive design for all devices.',
    },
    {
      icon: ArrowUpRight,
      title: 'Conversion-focused improvements',
      desc: 'Strategies to increase sales.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Discuss Goals',
      desc: 'Understand your business needs.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Plan & Design',
      desc: 'Configure and customize your store.',
    },
    {
      number: '03',
      icon: Settings,
      title: 'Develop & Integrate',
      desc: 'Set up features and integrations.',
    },
    {
      number: '04',
      icon: Check,
      title: 'Test & Launch',
      desc: 'Check performance and go live.',
    },
    {
      number: '05',
      icon: BarChart2,
      title: 'Support & Grow',
      desc: 'Ongoing support for better results.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Shopify Development | Store Setup & Customization | Hinton Evolution Tech"
        description="We create and customize Shopify storefronts for businesses looking for a flexible and scalable e-commerce environment. From store configuration to theme customization and integrations."
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
              className="lg:col-span-5 space-y-5"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/70 text-purple-700 text-xs font-bold tracking-wider uppercase">
                ADDITIONAL WEB SERVICES
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.05]">
                Shopify <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Shopify Store Setup & Customization
              </h2>

              {/* Description paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                We create and customize Shopify storefronts for businesses looking for a flexible and scalable e-commerce environment. From store configuration to theme customization and integrations, we help build a storefront aligned with the brand and sales strategy.
              </p>

              {/* Best Suited For Callout Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-slate-800 flex items-start gap-3 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs sm:text-[13px] leading-relaxed">
                  <span className="font-bold text-slate-900">Best suited for: </span>
                  <span className="text-slate-700">
                    new Shopify stores, store migrations, growing e-commerce businesses and brands seeking a more professional online storefront.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={() => onOpenConsultation('Shopify Development - Inquire')}
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

              {/* 3 Value Badges in Horizontal Strip */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    Scalable Solutions
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    Secure & Reliable
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    Built for Growth
                  </span>
                </div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: HIGH-RES SHOPIFY STORE DEVELOPMENT HERO IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 relative flex items-center justify-center pt-4 sm:pt-6 pb-4"
            >
              <div className="relative w-full max-w-[620px] select-none">
                
                {/* Soft ambient blur behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/50 via-pink-100/40 to-transparent rounded-full blur-3xl -z-10" />

                {/* Hero Mockup Image Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                  <img 
                    src={heroImageSrc} 
                    alt="Shopify Store Development Mockup"
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

      {/* "WHAT'S INCLUDED:" SECTION (12 STRUCTURED CARDS) */}
      <section className="py-14 sm:py-20 bg-[#fafbfe] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Accent bar */}
          <div className="space-y-2 mb-10">
            <div className="w-12 h-1 bg-purple-600 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              What's Included:
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A complete range of Shopify development solutions to meet your business and marketing needs.
            </p>
          </div>

          {/* 12 Cards in 4-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whatsIncludedItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-50 group-hover:bg-purple-100 border border-purple-100/80 flex items-center justify-center text-purple-600 shrink-0 transition-colors">
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

      {/* "OUR PROCESS" SECTION (5-STEP WORKFLOW) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Accent bar */}
          <div className="space-y-2 mb-12">
            <div className="w-12 h-1 bg-purple-600 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Our Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A simple and transparent process to bring your Shopify store to life.
            </p>
          </div>

          {/* 5 Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-start space-y-3">
                
                {/* Step Header: Icon circle + Number + Chevron */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-base font-black text-purple-600 font-mono">
                    {step.number}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block w-5 h-5 text-slate-300 absolute -right-3 top-3.5" />
                  )}
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONVERSION BANNER: "READY TO START? LET'S BUILD YOUR SHOPIFY STORE" */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 border border-purple-100/90 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-purple-700">
              READY TO START?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Let's Build Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Shopify Store
              </span>
            </h3>
          </div>

          <div className="hidden lg:block h-12 w-px bg-purple-200/80" />

          <p className="text-slate-600 text-xs sm:text-sm text-center lg:text-left max-w-xs">
            Turn your products into a powerful online business.
          </p>

          <button
            onClick={() => onOpenConsultation('Shopify Development - Get Started Today')}
            className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95 shrink-0"
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
            <Rocket className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              100% Original Work
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-2 px-2">
            <Clock className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              On-Time Delivery
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-2 px-2">
            <Users className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Dedicated Support
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-2 px-2">
            <InfinityIcon className="w-5 h-5 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Long-Term Partnership
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
