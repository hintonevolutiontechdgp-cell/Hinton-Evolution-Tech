import React, { useState } from 'react';
import { WEBSITE_PACKAGES } from '../../data/packagesData';
import { AllOtherServicesPricing } from '../AllOtherServicesPricing';
import { 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  CreditCard, 
  Sparkles, 
  Percent, 
  Calendar, 
  Zap,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingPageProps {
  onOpenConsultation: (pkgName?: string) => void;
}

export function PricingPage({ onOpenConsultation }: PricingPageProps) {
  const [paymentMode, setPaymentMode] = useState<'onetime' | 'emi'>('emi');

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="max-w-4xl space-y-6 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            <div className="hidden sm:block w-8 h-[2px] bg-violet-200 rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              WEBSITE INVESTMENT
            </span>
            <div className="hidden sm:block w-8 h-[2px] bg-violet-200 rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Premium website packages.<br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Clear pricing.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Choose the website package that matches your business stage. Choose between a single upfront invoice or our 0% interest 6-Month Easy EMI plan with 40% advance.
          </p>
        </div>

        {/* Payment Method Selector & Guaranteed 0% Interest Banner */}
        <div className="mt-10 flex flex-col items-center space-y-4 px-2 sm:px-0">
          {/* Main Toggle Bar */}
          <div className="flex flex-col sm:flex-row bg-[#0f172a] p-1.5 rounded-[24px] sm:rounded-full border border-slate-800 shadow-xl items-stretch sm:items-center gap-1 w-full max-w-[280px] sm:max-w-none sm:w-auto">
            {/* One-Time Payment Button */}
            <button
              onClick={() => setPaymentMode('onetime')}
              className={`relative px-4 sm:px-6 py-3 sm:py-2.5 rounded-full text-sm font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer whitespace-nowrap ${
                paymentMode === 'onetime'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <CreditCard className="w-4 h-4 shrink-0" />
              <span>One-Time Payment</span>
            </button>

            {/* 6-Month Easy EMI Button */}
            <button
              onClick={() => setPaymentMode('emi')}
              className={`relative px-4 sm:px-6 py-3 sm:py-2.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                paymentMode === 'emi'
                  ? 'bg-[#00E5FF] text-[#0f172a] shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>6-Month Easy EMI</span>
              <span className={`ml-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${
                paymentMode === 'emi' ? 'bg-[#0f172a] text-[#00E5FF]' : 'bg-slate-800 text-[#00E5FF]'
              }`}>
                40% ADVANCE
              </span>
            </button>
          </div>

          {/* Subtitle / Sub-banner from reference image */}
          <div className="flex bg-[#1e293b] rounded-[14px] px-4 sm:px-5 py-3 items-start sm:items-center gap-3 text-sm shadow-sm border border-slate-700/60 w-full max-w-sm sm:max-w-none sm:w-auto">
            <Info className="w-[18px] h-[18px] text-[#00E5FF] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed font-mono text-xs sm:text-sm tracking-tight text-slate-200 text-left sm:text-center">
              <span className="text-[#00E5FF] font-bold block sm:inline mb-1 sm:mb-0">Easy Installment Plan:</span>{' '}
              40% Advance to start + 6 Monthly EMIs (0% Interest)
            </p>
          </div>

          {/* Surcharge Guarantee Note */}
          <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-[13px] text-slate-500 font-medium px-2 sm:px-1 mt-1 max-w-sm sm:max-w-none text-left sm:text-center">
            <ShieldCheck className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
            <p>
              Both payment methods ultimately cost the exact same amount because the EMI plan has <strong className="text-slate-600 font-semibold">0% interest and no hidden surcharges.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Website Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {WEBSITE_PACKAGES.map((pkg) => {
            const isEmi = paymentMode === 'emi';

            return (
              <motion.div
                key={pkg.id}
                layout
                transition={{ duration: 0.3 }}
                className={`rounded-[32px] p-8 flex flex-col justify-between transition-all relative ${
                  pkg.popular
                    ? 'bg-white border-[2px] border-[#8B5CF6] shadow-xl'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#8B5CF6] text-white font-bold text-xs shadow-md tracking-wide flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" /> Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B5CF6]">
                      {pkg.id.toUpperCase()} TIER
                    </span>
                    <h3 className="text-[28px] font-extrabold text-slate-900 mt-2 tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2">
                      {pkg.targetAudience.startsWith('(') ? pkg.targetAudience : `(${pkg.targetAudience})`}
                    </p>
                  </div>

                  {/* Dynamic Pricing Box */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100">
                    <AnimatePresence mode="wait">
                      {isEmi ? (
                        <motion.div
                          key="emi-pricing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-teal-700 tracking-wide uppercase">6-MONTH EMI PLAN</span>
                            <span className="bg-cyan-100/50 text-teal-700 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide">0% INTEREST</span>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span className="text-sm text-slate-600">40% Advance (To Start):</span>
                            <span className="text-2xl font-black text-slate-900">{pkg.emiAdvance}</span>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/50">
                            <span className="text-sm text-slate-600">Monthly Installment:</span>
                            <span className="text-xl font-bold text-[#8B5CF6]">{pkg.emiMonthly} <span className="text-xs font-normal text-slate-400">/ mo</span></span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="onetime-pricing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-slate-500 tracking-wide uppercase">ONE-TIME PAYMENT</span>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span className="text-sm text-slate-600">Total Upfront:</span>
                            <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                          </div>
                          
                          <div className="pt-2 border-t border-slate-200/50">
                            <span className="text-xs text-slate-500">Single invoice upon project agreement</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-violet-700">
                      Includes {pkg.supportPeriod}
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultation(`${pkg.name} — ${isEmi ? `${pkg.emiAdvance} Advance + ${pkg.emiMonthly}/mo` : pkg.price}`)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.popular
                        ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Select {pkg.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How the EMI Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase text-cyan-400">
                TRANSPARENT FINANCING
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              How the 6-Month EMI Works
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              We make enterprise-grade digital experiences accessible for businesses of all sizes with zero financial friction.
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-6 pt-2">
            {/* Step 1 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center font-bold text-base font-mono border border-violet-500/30">
                01
              </div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                40% Advance Start
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The client pays the initial advance (e.g., ₹16,000 for the Business plan) to immediately initiate the design and development phase.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-bold text-base font-mono border border-cyan-500/30">
                02
              </div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                Flexible 6 Months
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The remaining 60% balance is split into 6 equal monthly payments (e.g. ₹4,000/month for 6 months).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-base font-mono border border-emerald-500/30">
                03
              </div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Percent className="w-4 h-4 text-emerald-400" />
                0% Interest
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                There is absolutely no extra fee, interest, or financial surcharge added to the EMI route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Other Services & Prices */}
      <AllOtherServicesPricing onOpenConsultation={onOpenConsultation} />

      {/* Guarantees Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 grid sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <ShieldCheck className="w-6 h-6 text-violet-600" />
            <h4 className="text-sm font-bold text-slate-900">Milestone Invoicing</h4>
            <p className="text-xs text-slate-600">Payments structured around verified milestones: Discovery, Design Approval, & Final Deployment.</p>
          </div>
          <div className="space-y-2">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h4 className="text-sm font-bold text-slate-900">Full Source Code Handover</h4>
            <p className="text-xs text-slate-600">You own 100% of your codebase, credentials, graphics, and server configuration files upon launch.</p>
          </div>
          <div className="space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h4 className="text-sm font-bold text-slate-900">Direct Support Period</h4>
            <p className="text-xs text-slate-600">Post-launch technical support with dedicated hotfixes and server monitoring included in every package.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

