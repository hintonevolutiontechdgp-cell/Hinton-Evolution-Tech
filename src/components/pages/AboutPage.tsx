import { motion } from 'motion/react';
import { 
  UserCheck,
  Terminal,
  Cpu,
  Laptop,
  MapPin,
  Code2,
  TrendingUp
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: (pkg?: string) => void;
}

export function AboutPage({ onOpenConsultation }: AboutPageProps) {
  return (
    <div className="space-y-20 py-8 sm:py-12">
      {/* Hero / Engineering-First Thinking */}
      <motion.section 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              ABOUT HINTON EVOLUTION TECH
            </span>
            <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
          </div>

          {/* Heading with colored second line */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Engineering–First<br />
            <span className="text-indigo-600">Thinking.</span>
          </h1>

          {/* Intro Description */}
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Founded on <strong className="font-bold text-slate-900">February 5, 2026</strong> in Durgapur, West Bengal, Hinton Evolution Tech was established to replace complex agency overhead with clean code, direct collaboration, and performance-based marketing.
          </p>

          {/* Feature Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-8 sm:gap-12 text-slate-900">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-semibold leading-tight text-slate-800">
                Durgapur,<br />
                <span className="text-slate-600 font-normal">West Bengal</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-semibold leading-tight text-slate-800">
                Clean Code<br />
                <span className="text-slate-600 font-normal">Development</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-semibold leading-tight text-slate-800">
                Performance<br />
                <span className="text-slate-600 font-normal">Marketing</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600">
              Technical & Strategic Leadership
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Meet The Founders
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Experienced practitioners actively leading and architecting every client project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tamajit Banerjee */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-3xl bg-white border border-slate-200 p-8 flex items-start gap-6 relative shadow-xs hover:shadow-md hover:border-violet-300 transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-600 flex items-center justify-center font-black text-2xl text-white shrink-0">
                TB
              </div>
              <div className="space-y-3 flex-1">
                <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-wide block">
                  Founder & Digital Strategist
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Tamajit Banerjee
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Directing brand strategy, commercial web architecture, client growth pipelines, and conversion journeys for businesses in Durgapur, West Bengal, and worldwide.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                  <UserCheck className="w-4 h-4 text-cyan-600" />
                  <span>Strategic Discovery, Positioning & Growth</span>
                </div>
              </div>
            </motion.div>

            {/* Debashis Khan */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
              className="rounded-3xl bg-white border border-slate-200 p-8 flex items-start gap-6 relative shadow-xs hover:shadow-md hover:border-violet-300 transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-violet-600 flex items-center justify-center font-black text-2xl text-white shrink-0">
                DK
              </div>
              <div className="space-y-3 flex-1">
                <span className="text-xs font-mono font-bold text-violet-600 uppercase tracking-wide block">
                  Lead Software Developer
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Debashis Khan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Overseeing full-stack architecture, React & Next.js development, relational databases, secure API integrations, Core Web Vitals, and lightning-fast sub-second deployments.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                  <Terminal className="w-4 h-4 text-violet-600" />
                  <span>Full-Stack Engineering & Speed Architecture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Transparency & Standards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">100% Code Transparency</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Full ownership of domain, source code repositories, and credentials transferred directly to you upon launch.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.08 }} className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">Performance Standards</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Every website is optimized to score 90+ on Google PageSpeed Insights for optimal search placement.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.16 }} className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">Flexible Financing</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Clear project pricing with defined scope, deliverables, and milestones.
            </p>
          </motion.div>
        </div>

        {/* 3 Approach & Standard Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <motion.div 
            whileHover={{ y: -4 }} 
            transition={{ duration: 0.2 }}
            className="rounded-[28px] bg-white border border-slate-200 p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow"
          >
            <span className="text-xs font-bold tracking-wider text-violet-600 uppercase block">
              OUR APPROACH
            </span>
            <h3 className="text-xl font-bold text-slate-950">Direct collaboration</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We keep communication direct and practical, reducing unnecessary layers between business owners and the people responsible for design, development and delivery.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }} 
            transition={{ duration: 0.2 }}
            className="rounded-[28px] bg-white border-2 border-indigo-400 p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow relative"
          >
            <span className="text-xs font-bold tracking-wider text-teal-600 uppercase block">
              OUR STANDARD
            </span>
            <h3 className="text-xl font-bold text-slate-950">Ownership & transparency</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Projects are structured so clients can understand what is being built, what is included, what is optional and what ongoing costs may apply.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }} 
            transition={{ duration: 0.2 }}
            className="rounded-[28px] bg-white border border-slate-200 p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow"
          >
            <span className="text-xs font-bold tracking-wider text-fuchsia-600 uppercase block">
              OUR FOCUS
            </span>
            <h3 className="text-xl font-bold text-slate-950">Useful technology</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The goal is not technology for its own sake. We prioritize fast interfaces, clear user journeys, maintainable systems and digital tools that support real business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Our Engineering Philosophy
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -3 }} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-slate-300 transition-all">
              <Cpu className="w-6 h-6 text-violet-600" />
              <h4 className="text-base font-bold text-slate-900">Speed-First Architecture</h4>
              <p className="text-xs text-slate-600 leading-relaxed">We optimize assets, scripts, and server caching to consistently achieve 95+ Google PageSpeed scores.</p>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-slate-300 transition-all">
              <Laptop className="w-6 h-6 text-blue-600" />
              <h4 className="text-base font-bold text-slate-900">Zero Technical Debt</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Clean semantic code, scalable folder architecture, and modular TypeScript components that are easy to maintain.</p>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-slate-300 transition-all">
              <UserCheck className="w-6 h-6 text-emerald-600" />
              <h4 className="text-base font-bold text-slate-900">Direct Engineer Access</h4>
              <p className="text-xs text-slate-600 leading-relaxed">You speak directly to the engineers building your software, avoiding communication bottlenecks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Schedule a Direct Call with Our Team
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Discuss your project goals directly with our leadership team. We provide a full scope review within 24 hours.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenConsultation('Direct Founders Call')}
            className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
          >
            Book Free 30-Minute Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

