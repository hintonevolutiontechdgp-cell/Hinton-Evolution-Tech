import { motion } from 'motion/react';
import { SEO } from '../SEO';
import { ALL_SERVICES } from '../../data/servicesData';
import { DIRECTORY_CATEGORIES } from '../CompleteServicesDirectoryCards';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../../types';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: PageId, sId?: string) => void;
  onOpenConsultation: (pkg?: string) => void;
}

export function ServiceDetailPage({ serviceId, onNavigate, onOpenConsultation }: ServiceDetailPageProps) {
  let service: any = ALL_SERVICES.find((s) => s.id === serviceId);
  
  if (!service) {
    // Check directory categories
    for (const cat of DIRECTORY_CATEGORIES) {
      const found = cat.items.find(item => item.id === serviceId);
      if (found) {
        service = {
          id: found.id,
          name: found.name,
          category: cat.title,
          shortDesc: found.desc,
          deliverables: []
        };
        break;
      }
    }
  }

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <button onClick={() => onNavigate('services')} className="text-violet-600 hover:underline">
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${service.name} Services | Hinton Evolution Tech`}
        description={service.shortDesc}
      />
      <div className="py-12 sm:py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold tracking-wider uppercase">
              {service.category}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {service.shortDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={() => onOpenConsultation(service.name)}
                className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                Inquire Now <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm tracking-wide transition-all"
              >
                View All Services
              </button>
            </div>
          </motion.div>
        </section>

        {service.deliverables && service.deliverables.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What's Included</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((item: string, index: number) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0" />
                  <span className="font-medium text-slate-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
