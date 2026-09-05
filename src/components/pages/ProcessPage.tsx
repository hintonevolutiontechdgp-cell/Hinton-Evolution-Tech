import { } from 'lucide-react';
import { SEO } from '../SEO';

interface ProcessPageProps {
  onOpenConsultation: (pkg?: string) => void;
}

export function ProcessPage({ onOpenConsultation }: ProcessPageProps) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Wireframing',
      desc: 'Defining exact functional deliverables, user journey flows, responsive wireframes, and technical architecture schemas.'
    },
    {
      num: '02',
      title: 'Engineering & UI Build',
      desc: 'Developing pixel-perfect React / Next.js interfaces, database models, backend API endpoints, and dynamic CMS elements.'
    },
    {
      num: '03',
      title: 'Testing & Core Web Vitals',
      desc: 'Rigorous cross-device viewport testing, SSL encryption, Google PageSpeed optimization, and security audits.'
    },
    {
      num: '04',
      title: 'Live Launch & Handover',
      desc: 'Publishing to production domain, transferring 100% source code repository, and initiating dedicated warranty support.'
    }
  ];

  const pipeline = [
    {
      stage: '01',
      title: 'Technical Discovery',
      desc: 'Deep-dive intake of user personas, competitive landscape, feature matrices, and server requirements.'
    },
    {
      stage: '02',
      title: 'UI/UX Prototyping',
      desc: 'Crafting responsive layouts, typography scales, conversion CTAs, and interactive design mockups.'
    },
    {
      stage: '03',
      title: 'Core Development',
      desc: 'Writing clean, modular, production-ready TypeScript code with zero unnecessary libraries or bloat.'
    },
    {
      stage: '04',
      title: 'QA & Optimization',
      desc: 'Auditing 95+ PageSpeed scores, Schema SEO validation, forms webhooks, and mobile ergonomics.'
    },
    {
      stage: '05',
      title: 'Handover & Growth',
      desc: 'DNS routing, repository transfer, Google Search Console indexing, and ongoing maintenance support.'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Process | Hinton Evolution Tech"
        description="How we build high-performing, revenue-driving websites and digital solutions."
      />
      <div className="space-y-20 py-8 sm:py-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              OPERATIONAL METHODOLOGY
            </span>
            <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Our 4-Stage Production <span className="text-violet-600">Methodology</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A structured, transparent development pipeline engineered to eliminate miscommunication, guarantee sprint deadlines, and ensure seamless delivery.
          </p>
        </div>
      </section>

      {/* 4 Core Steps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-3xl bg-white border border-slate-200 p-8 space-y-4 hover:border-violet-300 hover:shadow-md transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-4xl font-black text-slate-900 font-mono">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded 5-Stage Lifecycle Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Detailed 5-Stage Delivery Lifecycle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pipeline.map((p) => (
            <div
              key={p.stage}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-xs"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-600">
                STAGE {p.stage}
              </span>
              <h3 className="font-bold text-sm text-slate-900">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Begin Stage 1?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Book a discovery call today to receive your customized wireframe proposal and project roadmap.
          </p>
          <button
            onClick={() => onOpenConsultation('Stage 1 Discovery Kickoff')}
            className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
          >
            Start Project Discovery
          </button>
        </div>
      </section>
    </div>
    </>
  );
}