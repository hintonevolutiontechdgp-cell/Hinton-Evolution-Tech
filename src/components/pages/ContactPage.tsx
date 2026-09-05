import React, { useState } from 'react';
import { SEO } from '../SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Check,
  MessageCircle
} from 'lucide-react';

interface ContactPageProps {
  onSuccess: (msg: string) => void;
}

export function ContactPage({ onSuccess }: ContactPageProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Starter Website');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Contact Page', name, phone, email, service, notes: message })
      });
      if (response.ok) {
        onSuccess(`Thank you ${name}! Your inquiry for "${service}" has been received. Founder Tamajit or Lead Developer Debashis will call you within 4 hours.`);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json().catch(() => ({}));
        alert(data.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us | Hinton Evolution Tech"
        description="Get in touch with Hinton Evolution Tech in Durgapur for professional web development, SEO, and custom software solutions."
      />
    <div className="space-y-20 py-8 sm:py-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-violet-600">
              DIRECT INQUIRIES & ESTIMATES
            </span>
            <div className="w-12 h-[2px] bg-violet-200 rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Let's Start Your <span className="text-violet-600">Project</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out directly to examine technical scope, receive milestone estimates, or speak directly with our engineering team in Durgapur, West Bengal.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:items-start">
          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900">
                Direct Developer Access
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero middle-managers. You talk directly with the engineers responsible for building and shipping your website.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+919832727520"
                className="block p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 transition-all shadow-xs group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-violet-600" /> Primary Phone
                    </span>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                      +91 9832727520
                    </div>
                  </div>
                  <span className="text-xs font-bold text-violet-600">
                    Call →
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918001891036"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#25D366] transition-all shadow-xs group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp Line
                    </span>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-[#25D366] transition-colors">
                      +91 8001891036
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#25D366]">
                    Message →
                  </span>
                </div>
              </a>

              {/* Email */}
              <div className="space-y-4">
                <a
                  href="mailto:hintonevolutiontechdgp@gmail.com"
                  className="block p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 transition-all shadow-xs group"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" /> Official Email
                      </span>
                      <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                        hintonevolutiontechdgp@gmail.com
                      </div>
                      <span className="text-xs text-slate-500">Typical response time: under 2 hours</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600">
                      Write →
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:businessmaildgp@gmail.com"
                  className="block p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs group"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-600" /> Business Email
                      </span>
                      <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors break-all">
                        businessmaildgp@gmail.com
                      </div>
                      <span className="text-xs text-slate-500">For business proposals & partnerships</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">
                      Write →
                    </span>
                  </div>
                </a>
              </div>

              {/* Office Location */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" /> Studio Headquarters
                </span>
                <div className="text-sm font-bold text-slate-900 leading-relaxed">
                  29th, Harshabardhan Rd, A-Zone<br />
                  Durgapur, West Bengal 713204
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Serving businesses locally across Durgapur, Asansol, Kolkata, and globally.
                </p>
              </div>
            </div>

            {/* Commitments */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-violet-700 uppercase tracking-wider block">
                Our Guarantee:
              </span>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                  <span>Free 30-minute technical roadmap & budget breakdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                  <span>Written fixed-cost proposal before any payment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                  <span>Zero spam, zero high-pressure sales calls</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Col */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Submit Project Scope Inquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Fill out the details below and we will prepare a milestone estimate for your review.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98000 00000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Primary Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-violet-500 transition-colors"
                    >
                      <option value="Starter Website">Starter Website</option>
                      <option value="Business Website">Business Website</option>
                      <option value="Premium Corporate">Premium Corporate</option>
                      <option value="Custom Web App / Portal">Custom Web App / Portal</option>
                      <option value="E-Commerce & Shopify">E-Commerce & Online Store</option>
                      <option value="SEO & Google Maps Ranking">SEO & Local Google Maps Ranking</option>
                      <option value="Paid Ads (Meta & Google)">Paid Ads (Meta & Google)</option>
                      <option value="General Technical Consultation">General Technical Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your business, desired features, reference websites, or deadlines..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>
                    {isSubmitting ? (
                      'Dispatching...'
                    ) : (
                      <>
                        <span className="sm:hidden">Submit Inquiry</span>
                        <span className="hidden sm:inline">Submit Inquiry & Get Free Roadmap</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-3 sm:p-4 shadow-xs">
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-100">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=29th,%20Harshabardhan%20Rd,%20A-Zone,%20Durgapur,%20West%20Bengal%20713204&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Hinton Evolution Tech Location"
              style={{ filter: "grayscale(20%) contrast(1.1)" }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
