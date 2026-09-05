import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { Toast } from './components/Toast';
import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { AboutPage } from './components/pages/AboutPage';
import { SolutionsPage } from './components/pages/SolutionsPage';
import { PricingPage } from './components/pages/PricingPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { ProcessPage } from './components/pages/ProcessPage';
import { ContactPage } from './components/pages/ContactPage';
import { PolicyPage } from './components/pages/PolicyPage';
import { FaqPage } from './components/pages/FaqPage';

export default function App() {
  const getInitialRoute = (): { page: PageId, serviceId?: string } => {
    if (typeof window === 'undefined') return { page: 'home' };
    
    const path = window.location.pathname.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
    
    // Service Detail Route parsing (e.g. /services/web-development)
    if (path.startsWith('services/') && path.length > 9) {
      const sId = path.split('/')[1];
      return { page: 'service-detail', serviceId: sId };
    }
    
    // Map common SEO or old indexed URLs to our internal PageIds
    if (path === 'about-us') return { page: 'about' };
    if (path === 'contact-us') return { page: 'contact' };
    if (path === 'our-work') return { page: 'portfolio' };
    
    const validPages: PageId[] = [
      'home', 'services', 'about', 'solutions', 'portfolio', 'pricing', 
      'process', 'contact', 'privacy', 'refund', 'cancellation', 
      'duration', 'late', 'terms', 'faq'
    ];
    
    if (validPages.includes(path as PageId)) {
      return { page: path as PageId };
    }
    
    return { page: 'home' };
  };

  const initialRoute = getInitialRoute();
  const [currentPage, setCurrentPage] = useState<PageId>(initialRoute.page);
  const [currentServiceId, setCurrentServiceId] = useState<string | undefined>(initialRoute.serviceId);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState('General Web Consultation');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRoute();
      setCurrentPage(route.page);
      setCurrentServiceId(route.serviceId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Auto-dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleNavigate = (page: PageId, serviceId?: string) => {
    setCurrentPage(page);
    setCurrentServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update the browser URL for direct linking and SEO
    let newPath = '/';
    if (page === 'service-detail' && serviceId) {
      newPath = `/services/${serviceId}`;
    } else if (page !== 'home') {
      newPath = `/${page}`;
    }
    
    window.history.pushState({}, '', newPath);
  };

  const handleOpenConsultation = (pkgName?: string) => {
    setSelectedPackageForModal(pkgName || 'General Website Consultation');
    setIsConsultationOpen(true);
  };

  const handleToastSuccess = (msg: string) => {
    setToastMessage(msg);
  };

  const isPolicyPage = [
    'privacy',
    'refund',
    'cancellation',
    'duration',
    'late',
    'terms'
  ].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-900 font-sans selection:bg-violet-600 selection:text-white">
      {/* Top Navbar Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Dynamic Content Views */}
      <main className="flex-grow relative">
          <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}
            {currentPage === 'service-detail' && currentServiceId && (
              <ServiceDetailPage
                serviceId={currentServiceId}
                onNavigate={handleNavigate}
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'solutions' && (
              <SolutionsPage
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'pricing' && (
              <PricingPage
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'portfolio' && (
              <PortfolioPage
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'process' && (
              <ProcessPage
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onSuccess={handleToastSuccess}
              />
            )}

            {currentPage === 'faq' && (
              <FaqPage
                onOpenConsultation={handleOpenConsultation}
              />
            )}

            {isPolicyPage && (
              <PolicyPage
                policyId={currentPage}
                onNavigate={handleNavigate}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultPackage={selectedPackageForModal}
        onSuccess={handleToastSuccess}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
