import { useState } from 'react';
import { PageId } from '../../types';
import { POLICIES_DATA } from '../../data/policiesData';
import { 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  Check,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { EditorialPolicySkeleton } from '../skeletons/Skeleton';

interface PolicyPageProps {
  policyId: PageId;
  onNavigate: (page: PageId) => void;
}

export function PolicyPage({ policyId, onNavigate }: PolicyPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const policy = POLICIES_DATA[policyId] || POLICIES_DATA['terms'];

  const handlePolicyChange = (id: PageId) => {
    if (id === policyId) return;
    setIsLoading(true);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const policyNavItems: { id: PageId; label: string; icon: LucideIcon }[] = [
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'refund', label: 'Refund Policy', icon: RotateCcw },
    { id: 'cancellation', label: 'Cancellation Policy', icon: XCircle },
    { id: 'duration', label: 'Time & Duration', icon: Clock },
    { id: 'late', label: 'Late Delivery Policy', icon: AlertTriangle },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText }
  ];

  if (isLoading) {
    return (
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <EditorialPolicySkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{policy.badge} • Client Protection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {policy.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {policy.subtitle}
          </p>
          {policy.effectiveDate && (
            <div className="text-xs font-mono text-slate-500">
              Effective Date: {policy.effectiveDate}
            </div>
          )}
        </div>

        {/* Policy Quick Nav Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 pb-4 border-b border-slate-200">
          {policyNavItems.map((item) => {
            const isActive = policyId === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handlePolicyChange(item.id)}
                className={`px-4 py-2 text-xs rounded-xl font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-violet-600'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Policy Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Body */}
          <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 space-y-10 shadow-xs">
            {policy.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4 pb-8 border-b border-slate-100 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="text-xs font-mono text-violet-700 bg-violet-50 px-2.5 py-1 rounded">
                    0{idx + 1}
                  </span>
                  <span>{sec.heading}</span>
                </h3>

                {Array.isArray(sec.content) ? (
                  <ul className="space-y-2 pt-2">
                    {sec.content.map((item, cIdx) => (
                      <li key={cIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sec.content}
                  </p>
                )}
              </div>
            ))}

            {/* Additional Cards */}
            {policy.cards && policy.cards.length > 0 && (
              <div className="pt-6 grid sm:grid-cols-2 gap-4">
                {policy.cards.map((c, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 space-y-4 shadow-xs">
              <span className="text-xs font-mono font-bold text-violet-600 uppercase tracking-wider block">
                Direct Governance Help
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                Have questions about our terms or warranty?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in complete transparency. You can request customized contract adjustments prior to project kickoff.
              </p>
              <div className="pt-2 text-xs text-slate-600 font-mono space-y-1">
                <div>Phone: +91 9832727520</div>
                <div>Email: hintonevolutiontechdgp@gmail.com</div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 text-white p-8 space-y-4 shadow-md text-center">
              <Sparkles className="w-8 h-8 text-cyan-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">
                Start With Written Clarity
              </h4>
              <p className="text-xs text-slate-400">
                Book a consultation to receive your milestone schedule and formal contract draft.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                Contact Legal & Operations
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
