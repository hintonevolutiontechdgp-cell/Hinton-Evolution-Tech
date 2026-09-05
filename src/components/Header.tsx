import { useState } from 'react';
import { PageId } from '../types';
import { Phone, Mail, Smartphone, Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export function Header({ currentPage, onNavigate, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services Directory' },
    { id: 'about', label: 'About Us' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Meta Bar */}
      <div className="bg-[#2D0B4E] text-white py-2 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Direct contact info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-white w-full sm:w-auto">
            <div className="flex items-center gap-4">
              <a
                href="tel:+919832727520"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                title="Primary Phone Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#00E5FF] fill-none shrink-0" />
                <span>+91 9832727520</span>
              </a>

              <a
                href="https://wa.me/918001891036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>+91 8001891036</span>
              </a>
            </div>

            <a
              href="mailto:hintonevolutiontechdgp@gmail.com"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              title="Official Email Address"
            >
              <Mail className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
              <span className="hidden sm:inline">hintonevolutiontechdgp@gmail.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>

          {/* Right Status & Location */}
          <div className="hidden sm:flex items-center gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 text-white/90 text-[11px] font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>Project-based pricing</span>
            </div>
            <span className="text-purple-200/90 text-xs">
              Durgapur, WB
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group shrink-0 focus:outline-none cursor-pointer"
              aria-label="Hinton Evolution Tech Home"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0F172A] flex items-center justify-center shadow-xs overflow-hidden border border-slate-200/60 p-1">
                <img
                  src="/favicon-48x48.png"
                  alt="Hinton Evolution Tech Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text initials if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const span = document.createElement('span');
                      span.className = 'font-extrabold text-white text-lg tracking-tight';
                      span.innerText = 'HE';
                      target.parentElement.appendChild(span);
                    }
                  }}
                />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-base tracking-tight leading-none flex items-center gap-1">
                  <span>HINTON EVOLUTION</span>
                  <span className="text-violet-600 font-bold">TECH</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium tracking-normal mt-1">
                  Web Development & Digital Growth Agency
                </div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-[13px] font-medium transition-colors cursor-pointer py-1 ${
                      isActive
                        ? 'text-slate-900 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenConsultation('Free Website Audit & Roadmap')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-all cursor-pointer shadow-xs"
              >
                Request Audit
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-6 space-y-2 text-sm font-semibold shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2.5 px-4 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                currentPage === item.id
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}

          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Free Website Audit & Roadmap');
              }}
              className="w-full py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold text-center cursor-pointer shadow-xs"
            >
              Request Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
