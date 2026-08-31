import { 
  Building2, 
  Rocket, 
  ShoppingBag, 
  Briefcase, 
  MapPin, 
  ArrowRight,
  Check,
  Cpu
} from 'lucide-react';

interface SolutionsPageProps {
  onOpenConsultation: (pkg?: string) => void;
}

export function SolutionsPage({ onOpenConsultation }: SolutionsPageProps) {
  const solutions = [
    {
      id: '01',
      title: 'Local Businesses & Clinics',
      icon: MapPin,
      iconColor: 'text-violet-600',
      desc: 'Google Maps Business ranking optimization, instant WhatsApp booking triggers, review funnels, and ultra-fast local landing pages built to capture immediate customer calls.',
      points: [
        'Google Business Profile & 3-Pack SEO',
        'Direct WhatsApp & Click-to-Call CTAs',
        'Mobile Speed & Local Geo Schema'
      ],
      cta: 'Local Business Solution'
    },
    {
      id: '02',
      title: 'Startups & Product MVPs',
      icon: Rocket,
      iconColor: 'text-blue-600',
      desc: 'Rapid full-stack web applications, REST API development, custom React & Next.js interfaces, admin control panels, and cloud database architectures built for scale.',
      points: [
        'Full-Stack React & Node Architecture',
        'Interactive Admin & Customer Portals',
        'Role-Based Auth & Database Security'
      ],
      cta: 'Startup MVP Solution'
    },
    {
      id: '03',
      title: 'E-Commerce & Retail Brands',
      icon: ShoppingBag,
      iconColor: 'text-emerald-600',
      desc: 'High-conversion online stores, Shopify & WooCommerce setups, Razorpay & Stripe payment gateways, automated inventory notifications, and abandoned cart retargeting.',
      points: [
        'Custom Product Catalogs & Filtering',
        'Razorpay, UPI & International Gateways',
        'Automated Invoicing & WhatsApp Updates'
      ],
      cta: 'E-Commerce Store Solution'
    },
    {
      id: '04',
      title: 'Corporate Enterprises & Portals',
      icon: Building2,
      iconColor: 'text-amber-600',
      desc: 'Enterprise multi-page web architectures, dealer & distributor networks, recruitment portals, multi-tier access, and bespoke corporate security suites.',
      points: [
        'Dealer & Distributor Login Portals',
        'Enterprise Security & Compliance',
        'Multi-Region Content Delivery'
      ],
      cta: 'Enterprise Corporate Solution'
    },
    {
      id: '05',
      title: 'Professional Service Practices',
      icon: Briefcase,
      iconColor: 'text-purple-600',
      desc: 'Authority-building websites for lawyers, consultants, chartered accountants, and architects featuring case study vaults, appointment scheduling, and lead qualification.',
      points: [
        'Integrated Calendar Scheduling',
        'Client Intake Forms & Qualification',
        'High-Converting Case Study Showcase'
      ],
      cta: 'Professional Practice Solution'
    },
    {
      id: '06',
      title: 'Performance Growth & Paid Ads',
      icon: Cpu,
      iconColor: 'text-cyan-600',
      desc: 'High-ROI Meta (Facebook & Instagram) and Google Search ad campaigns, dedicated landing page funnels, pixel tracking, and lead generation machines.',
      points: [
        'High-Converting Funnel Architecture',
        'Meta Pixel & Google Tag Manager',
        'Weekly Attributable ROI Reporting'
      ],
      cta: 'Growth & Ads Solution'
    }
  ];

  return (
    <div className="space-y-20 py-8 sm:py-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              VERTICALS & APPLIED SOLUTIONS
            </span>
            <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Industry-Specific <span className="text-violet-600">Digital Solutions</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered software systems and conversion funnels tailored to specific business verticals, operational needs, and customer acquisition models.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="rounded-3xl bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-violet-300 hover:shadow-md transition-all shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-violet-700 bg-violet-50 px-2.5 py-1 rounded">
                      SOLUTION // {sol.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${sol.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.desc}
                  </p>

                  <ul className="pt-2 space-y-2 text-xs text-slate-700">
                    {sol.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultation(sol.cta)}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Discuss Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Need a Hybrid Architecture?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            We regularly blend e-commerce catalogs with portal dashboards and local lead generation systems. Let's design your exact workflow.
          </p>
          <button
            onClick={() => onOpenConsultation('Hybrid Architecture Scope')}
            className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
          >
            Design Custom Scope
          </button>
        </div>
      </section>
    </div>
  );
}
