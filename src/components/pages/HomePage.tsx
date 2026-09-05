import { motion } from 'motion/react';
import { PageId } from '../../types';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Phone, 
  Code2,
  ExternalLink
} from 'lucide-react';
import { ALL_SERVICES } from '../../data/servicesData';
import { PORTFOLIO_ITEMS } from '../../data/portfolioData';
import { SEO } from '../SEO';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export function HomePage({ onNavigate, onOpenConsultation }: HomePageProps) {
  const featuredServices = ALL_SERVICES.slice(0, 6);
  const featuredCaseStudies = PORTFOLIO_ITEMS.slice(0, 2);

  return (
    <div className="space-y-24 pb-20">
      <SEO 
        title="Web Design Company in Durgapur | Hinton Evolution Tech"
        description="Looking for a premium web design company in Durgapur? We specialize in responsive custom web development, ecommerce, and high-converting modern websites."
      />
      {/* Exact Hero Section from Screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        <div className="max-w-5xl space-y-6 text-left">
          {/* Main Headline matching image typography and gradient colors */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-[72px] font-black text-[#0B1120] tracking-tight leading-[1.08]"
          >
            Build a <span className="gradient-text-premium">premium</span> <span className="gradient-text-digital">digital</span>{' '}
            <span className="gradient-text-presence">presence</span> that makes your{' '}
            <br className="hidden sm:inline" />
            business ready to grow.
          </motion.h1>

          {/* Subtitle / Intro for SEO */}
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-3xl font-normal pt-2">
            As a leading <strong>web development company in Durgapur</strong>, Hinton Evolution Tech creates high-converting business websites. We deliver thoughtful UI/UX, responsive custom development, eCommerce solutions, and professional SEO architecture to help your business dominate online.
          </p>

          {/* Interactive CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenConsultation('Free Discovery & Scope Audit')}
              className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs tracking-wider uppercase transition-all cursor-pointer shadow-xs"
            >
              Explore Packages
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-12 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-800">
            <div className="space-y-1">
              <div className="text-2xl font-black text-slate-900 flex items-center gap-1">
                <span>98+</span>
                <span className="text-emerald-700 text-sm font-bold">score</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Google PageSpeed Mobile</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-slate-900">
                <span>100%</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Code & Asset Ownership</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-slate-900">
                <span>₹0</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Hidden Lock-in Fees</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-slate-900">
                <span>Direct</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Developer Communication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Web Design & Digital Solutions
            </h2>
            <p className="text-slate-600 text-sm">
              From business website development to ecommerce platforms, local SEO, and custom applications.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((srv) => (
            <div
              key={srv.id}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-violet-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[10px] font-semibold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md">
                    {srv.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                  {srv.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.shortDesc}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  {srv.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4">
                <button
                  onClick={() => onOpenConsultation(srv.name)}
                  className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-violet-50 text-slate-700 hover:text-violet-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <Code2 className="w-3.5 h-3.5" />
              <span>Production Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              High-Converting Website Case Studies
            </h2>
            <p className="text-slate-600 text-sm">
              Real custom web development projects engineered with clean code and measurable commercial impact.
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredCaseStudies.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200 p-8 space-y-6 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {item.title}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-50 hover:bg-violet-50 text-slate-600 hover:text-violet-700 transition-colors shrink-0"
                      title={`Visit ${item.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl border border-slate-300 hover:border-violet-400 bg-white text-slate-800 hover:text-violet-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => onOpenConsultation(`Request Architecture similar to ${item.title}`)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Similar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Stage Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider block">
              EXECUTION PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Custom Web Development Process
            </h2>
            <p className="text-slate-400 text-sm">
              A milestone-driven approach to designing and launching your premium website on time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-2xl font-black text-violet-400 font-mono">01</div>
              <h3 className="text-sm font-bold text-white">Discovery & Wireframing</h3>
              <p className="text-xs text-slate-400">User journeys, feature mapping, and 30% milestone initiation.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-2xl font-black text-cyan-400 font-mono">02</div>
              <h3 className="text-sm font-bold text-white">Engineering & UI</h3>
              <p className="text-xs text-slate-400">React/Next.js frontend, secure APIs, and dynamic CMS elements.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-2xl font-black text-emerald-400 font-mono">03</div>
              <h3 className="text-sm font-bold text-white">QA & Speed Auditing</h3>
              <p className="text-xs text-slate-400">95+ PageSpeed checks, mobile ergonomics, and SSL security.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-2xl font-black text-amber-400 font-mono">04</div>
              <h3 className="text-sm font-bold text-white">Launch & Code Transfer</h3>
              <p className="text-xs text-slate-400">100% repository handover, DNS setup, and warranty support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-14 text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to Build Your Website with Confidence?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Book a 30-minute scope audit directly with Founder Tamajit and Lead Developer Debashis Khan in Durgapur.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Direct Discovery Call')}
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Start Free Discovery Call
            </button>
            <a
              href="tel:+919832727520"
              className="px-6 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-violet-600" />
              <span>Call +91 9832727520</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
