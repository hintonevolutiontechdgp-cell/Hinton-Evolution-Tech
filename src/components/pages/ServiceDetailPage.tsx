import { motion } from 'motion/react';
import { SEO } from '../SEO';
import { ALL_SERVICES } from '../../data/servicesData';
import { DIRECTORY_CATEGORIES } from '../CompleteServicesDirectoryCards';
import { CheckCircle2, ArrowRight, Target, Sparkles } from 'lucide-react';
import { PageId } from '../../types';
import { LandingPageDesignDetail } from './LandingPageDesignDetail';
import { LogoDesignDetail } from './LogoDesignDetail';
import { BusinessCardDesignDetail } from './BusinessCardDesignDetail';
import { BrochureDesignDetail } from './BrochureDesignDetail';
import { GraphicDesignDetail } from './GraphicDesignDetail';
import { ShopifyDevelopmentDetail } from './ShopifyDevelopmentDetail';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: PageId, sId?: string) => void;
  onOpenConsultation: (pkg?: string) => void;
}

export function ServiceDetailPage({ serviceId, onNavigate, onOpenConsultation }: ServiceDetailPageProps) {
  // If this is the Landing Page Design service, use the custom high-fidelity campaign design
  if (serviceId === 'landing-page-design' || serviceId === 'landing-page') {
    return (
      <LandingPageDesignDetail 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />
    );
  }

  // If this is the Logo Design service, use the dedicated high-fidelity brand design
  if (serviceId === 'logo-design' || serviceId === 'logo') {
    return (
      <LogoDesignDetail 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />
    );
  }

  // If this is the Business Card Design service, use the dedicated high-fidelity design
  if (serviceId === 'business-card' || serviceId === 'business-card-design') {
    return (
      <BusinessCardDesignDetail 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />
    );
  }

  // If this is the Brochure Design service, use the dedicated high-fidelity corporate brochure design
  if (serviceId === 'brochure-design' || serviceId === 'brochure') {
    return (
      <BrochureDesignDetail 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />
    );
  }

  // If this is the Graphic Design service, use the dedicated high-fidelity marketing graphics design
  if (serviceId === 'graphic-design' || serviceId === 'graphics') {
    return (
      <GraphicDesignDetail 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />
    );
  }

  // If this is the Shopify Development service, use the dedicated high-fidelity e-commerce design
  if (serviceId === 'shopify-dev' || serviceId === 'shopify-development' || serviceId === 'shopify') {
    return (
      <ShopifyDevelopmentDetail 
        onNavigate={onNavigate} 
        onOpenConsultation={onOpenConsultation} 
      />
    );
  }

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
          subtitle: found.subtitle,
          fullDesc: found.fullDesc,
          deliverables: found.deliverables || [],
          bestSuitedFor: found.bestSuitedFor,
          goal: found.goal,
          outcome: found.outcome
        };
        break;
      }
    }
  } else {
    // Merge any extra category data if present
    for (const cat of DIRECTORY_CATEGORIES) {
      const found = cat.items.find(item => item.id === serviceId || item.id === service.id || item.name.toLowerCase() === service.name.toLowerCase());
      if (found) {
        service = {
          ...service,
          subtitle: found.subtitle || service.subtitle,
          fullDesc: found.fullDesc || service.fullDesc,
          bestSuitedFor: found.bestSuitedFor || service.bestSuitedFor,
          goal: found.goal || service.goal,
          outcome: found.outcome || service.outcome,
          deliverables: (found.deliverables && found.deliverables.length > 0) ? found.deliverables : (service.deliverables || [])
        };
        break;
      }
    }
  }

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Service Not Found</h1>
        <button onClick={() => onNavigate('services')} className="text-violet-600 hover:underline cursor-pointer">
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${service.name} Services | Hinton Evolution Tech`}
        description={service.fullDesc || service.shortDesc}
      />
      <div className="py-12 sm:py-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold tracking-wider uppercase">
              {service.category}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {service.name}
            </h1>

            {service.subtitle && (
              <h2 className="text-xl sm:text-2xl font-bold text-violet-700 tracking-tight">
                {service.subtitle}
              </h2>
            )}

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              {service.fullDesc || service.shortDesc}
            </p>

            {service.bestSuitedFor && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-3.5">
                <Target className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong className="font-bold text-amber-950">Best suited for:</strong> {service.bestSuitedFor}
                </p>
              </div>
            )}

            {service.goal && (
              <div className="p-4 sm:p-5 rounded-2xl bg-violet-50/90 border border-violet-200/80 flex items-start gap-3.5">
                <Target className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-violet-950 leading-relaxed">
                  <strong className="font-bold text-violet-950">Goal:</strong> {service.goal}
                </p>
              </div>
            )}

            {service.outcome && (
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 flex items-start gap-3.5">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  <strong className="font-bold text-emerald-950">Outcome:</strong> {service.outcome}
                </p>
              </div>
            )}

            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={() => onOpenConsultation(service.name)}
                className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer active:scale-95"
              >
                Inquire Now <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm tracking-wide transition-all cursor-pointer active:scale-95"
              >
                View All Services
              </button>
            </div>
          </motion.div>
        </section>

        {service.deliverables && service.deliverables.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
            <div className="border-t border-slate-200 pt-12">
              <div className="flex items-center gap-2.5 mb-8">
                <Sparkles className="w-6 h-6 text-violet-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  What's Included:
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {service.deliverables.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3.5 p-5 bg-slate-50 hover:bg-white transition-all rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800 leading-relaxed text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
