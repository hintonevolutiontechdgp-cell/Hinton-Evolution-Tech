import React from 'react';
import { 
  Compass, 
  Layers, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { 
  APPROACH_STEPS, 
  INTEGRATED_SOLUTIONS, 
  WHY_SERVICES_WORK_TOGETHER 
} from '../data/servicesDirectoryData';

interface IntegratedSolutionsSectionProps {
  onOpenConsultation?: (packageName?: string) => void;
}

export function IntegratedSolutionsSection({ onOpenConsultation }: IntegratedSolutionsSectionProps) {
  return (
    <div className="space-y-24 py-8">
      {/* SECTION 1: OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-16">
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-xs font-bold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              Our Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              OUR APPROACH
            </h2>
            <p className="text-sm sm:text-base font-semibold text-violet-700">
              Strategy → Design → Development → Launch → Growth
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our services can be delivered individually or combined into a complete digital solution. Depending on the requirement, a project may begin with strategy and consultation, continue through design and development, and then move into marketing, analytics and ongoing optimization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPROACH_STEPS.map((step) => (
              <div 
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all relative overflow-hidden group hover:border-violet-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-200 group-hover:text-violet-500 transition-colors font-mono">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-violet-400 group-hover:scale-150 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-violet-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: INTEGRATED DIGITAL SOLUTIONS (PACKAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-16">
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5" />
              Connected Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              INTEGRATED DIGITAL SOLUTIONS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Rather than treating each service as an isolated activity, we can connect multiple services into a single business growth solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATED_SOLUTIONS.map((pkg, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-violet-600" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600">
                      Solution Package
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {pkg.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Included Modules:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.formula.map((item, fIdx) => (
                        <span 
                          key={fIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/60 text-slate-700 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultation?.(pkg.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                  >
                    Inquire About Package <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY THESE SERVICES WORK TOGETHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950 text-white p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/60 border border-violet-700/80 text-violet-300 text-xs font-bold tracking-wider uppercase">
              <Network className="w-3.5 h-3.5" />
              Connected Growth Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              WHY THESE SERVICES WORK TOGETHER
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every channel and capability reinforces the next, forming an integrated flywheel rather than fragmented efforts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
            {WHY_SERVICES_WORK_TOGETHER.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-white font-bold">{item.factor}</strong> {item.role}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-violet-900/40 border border-violet-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-sm sm:text-base text-violet-100 leading-relaxed max-w-2xl font-medium">
              The result is a connected digital ecosystem designed not simply to create an online presence, but to support visibility, customer acquisition, engagement, conversion and long-term business growth.
            </p>
            <button
              onClick={() => onOpenConsultation?.('Connected Digital Ecosystem')}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold tracking-wide uppercase transition-all shadow-md shrink-0 cursor-pointer active:scale-95"
            >
              Start Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
