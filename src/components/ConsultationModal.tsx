import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, Mail, User, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
  onSuccess: (msg: string) => void;
}

export function ConsultationModal({ isOpen, onClose, defaultPackage, onSuccess }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [packageName, setPackageName] = useState(defaultPackage || 'General Website Consultation');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultPackage) {
      setPackageName(defaultPackage);
    }
  }, [defaultPackage]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Consultation Modal', name, phone, email, packageName, notes })
      });
      if (response.ok) {
        onSuccess(`Thank you ${name}! Your consultation request for "${packageName}" has been received. Our engineering team will call you within 4 hours.`);
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
        onClose();
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 transition-all cursor-pointer rounded-lg hover:bg-slate-100"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 mb-6 text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Engineering Consultation</span>
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Schedule Free Scope Audit
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connect directly with Lead Developer Debashis Khan and Founder Tamajit in Durgapur. Receive realistic timelines, technical scope, and exact milestone pricing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left relative z-10">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98000 00000"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@business.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Target Project / Package
              </label>
              <input
                type="text"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:border-violet-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Brief Scope / Target Launch Date
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention desired features, reference links, or target completion deadline..."
                className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit & Receive Call'}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
