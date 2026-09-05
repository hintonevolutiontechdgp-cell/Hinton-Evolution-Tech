import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface WebsiteDevelopmentSectionProps {
  onOpenConsultation?: (serviceName: string) => void;
}

export function WebsiteDevelopmentSection({ onOpenConsultation }: WebsiteDevelopmentSectionProps) {
  const packages = [
    {
      name: 'Starter Website',
      audience: 'For small businesses and professionals.',
      cardClass: 'bg-[#0B132B]/90 border border-blue-950/80 hover:border-blue-800/80',
      features: [
        'Up to 8 pages',
        'Mobile responsive design',
        'Contact form & WhatsApp integration',
        'Basic SEO & SSL setup',
        'Google Maps & social integration',
        'Speed optimization',
        '1 month support',
      ],
    },
    {
      name: 'Business Website',
      audience: 'For growing companies that need a stronger digital presence.',
      cardClass: 'bg-[#150F2C]/95 border-2 border-[#8B5CF6] shadow-xl shadow-purple-950/40',
      features: [
        'Up to 20 pages & advanced UI/UX',
        'Blog & dynamic CMS',
        'Google Analytics & Search Console',
        'Lead forms & security setup',
        'Advanced speed optimization',
        '3 months support',
      ],
    },
    {
      name: 'Premium Corporate',
      audience: 'For larger businesses, brands and complex requirements.',
      cardClass: 'bg-[#091D26]/90 border border-cyan-950/80 hover:border-teal-700/80',
      features: [
        'Unlimited pages & custom design',
        'Distributor/dealer portal',
        'Multi-language option',
        'HR/career portal & corporate forms',
        'Advanced SEO & premium security',
        '6 months support',
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-[28px] sm:rounded-[32px] bg-[#060913] border border-slate-800/80 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
        {/* Subtle atmospheric accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3 max-w-4xl">
          <div className="text-[#00E5FF] font-mono font-bold tracking-wider text-xs sm:text-sm uppercase">
            01 / WEBSITE DEVELOPMENT
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Websites built for credibility, speed &amp; growth
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
            Business websites, corporate websites and conversion-focused digital experiences designed, developed, tested and deployed around your goals.
          </p>
        </div>

        {/* 3 Tier Deliverables Grid */}
        <div className="relative z-10 grid md:grid-cols-3 gap-6 mt-10 sm:mt-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${pkg.cardClass}`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed min-h-[34px]">
                    {pkg.audience}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-200 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-slate-300 font-semibold shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {onOpenConsultation && (
                <div className="mt-8 pt-5 border-t border-white/10">
                  <button
                    onClick={() => onOpenConsultation(`Website Development - ${pkg.name}`)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
