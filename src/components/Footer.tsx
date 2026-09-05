import { PageId } from '../types';
import { Phone, Mail, MapPin, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export function Footer({ onNavigate, onOpenConsultation }: FooterProps) {
  const companyPages: { id: PageId; label: string }[] = [
    { id: 'services', label: 'Services Catalog' },
    { id: 'about', label: 'About Company' },
    { id: 'solutions', label: 'Tech Solutions' },
    { id: 'portfolio', label: 'Case Studies' },
    { id: 'pricing', label: 'Pricing Packages' },
    { id: 'process', label: 'Development Process' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'faq', label: 'FAQ' }
  ];

  const policyPages: { id: PageId; label: string }[] = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'cancellation', label: 'Cancellation Policy' },
    { id: 'duration', label: 'Project Duration' },
    { id: 'late', label: 'Late Delivery Policy' },
    { id: 'terms', label: 'Terms & Conditions' }
  ];

  return (
    <footer className="bg-[#0B1120] text-slate-200 mt-20 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-extrabold text-lg overflow-hidden p-1">
                <img
                  src="/android-chrome-192x192.png"
                  alt="Hinton Evolution Tech Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const span = document.createElement('span');
                      span.className = 'text-white font-extrabold text-lg';
                      span.innerText = 'HE';
                      target.parentElement.appendChild(span);
                    }
                  }}
                />
              </div>
              <div>
                <div className="font-bold text-white text-base tracking-tight flex items-center gap-1.5">
                  <span>HINTON EVOLUTION</span>
                  <span className="text-purple-400 font-bold">TECH</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium tracking-normal mt-1">
                  Web Development & Digital Growth Agency
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Engineering high-performance websites, custom web applications, local SEO dominance, and ROI-driven marketing campaigns for ambitious businesses in India and worldwide.
            </p>

            {/* Direct Contact */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="tel:+919832727520"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+91 9832727520</span>
              </a>
              <a
                href="https://wa.me/918001891036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>+91 8001891036</span>
              </a>
              <a
                href="mailto:hintonevolutiontechdgp@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>hintonevolutiontechdgp@gmail.com</span>
              </a>
              <a
                href="mailto:businessmaildgp@gmail.com"
                className="flex items-center gap-2 hover:text-emerald-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>businessmaildgp@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Durgapur, West Bengal, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-[11px] font-medium text-slate-300">
                India & Global Delivery
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-[11px] font-medium text-slate-300">
                Fixed Transparent Pricing
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-[11px] font-medium text-slate-300">
                100% Code Ownership
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {companyPages.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => {
                      onNavigate(page.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <span>{page.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
              Client Protection & Policies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {policyPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onNavigate(page.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-slate-400 hover:text-white transition-colors py-1 flex items-center justify-between group cursor-pointer"
                >
                  <span>{page.label}</span>
                  <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Quick CTA Card */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Ready to start a project?</span>
              </div>
              <p className="text-xs text-slate-400">
                Get a free consultation and project cost estimate within 24 hours.
              </p>
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Hinton Evolution Tech. Founded Feb 5, 2026. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Durgapur, WB • Global Delivery</span>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
