import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { Toast } from './components/Toast';

// Lazy load page components to reduce initial bundle size
const HomePage = lazy(() => import('./components/pages/HomePage').then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const SolutionsPage = lazy(() => import('./components/pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const PricingPage = lazy(() => import('./components/pages/PricingPage').then(m => ({ default: m.PricingPage })));
const PortfolioPage = lazy(() => import('./components/pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const ProcessPage = lazy(() => import('./components/pages/ProcessPage').then(m => ({ default: m.ProcessPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PolicyPage = lazy(() => import('./components/pages/PolicyPage').then(m => ({ default: m.PolicyPage })));
const FaqPage = lazy(() => import('./components/pages/FaqPage').then(m => ({ default: m.FaqPage })));

export default function App() {
  const getInitialPage = (): PageId => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
    
    // Map common SEO or old indexed URLs to our internal PageIds
    if (path === 'about-us') return 'about';
    if (path === 'contact-us') return 'contact';
    if (path === 'our-work') return 'portfolio';
    
    const validPages: PageId[] = [
      'home', 'services', 'about', 'solutions', 'portfolio', 'pricing', 
      'process', 'contact', 'privacy', 'refund', 'cancellation', 
      'duration', 'late', 'terms', 'faq'
    ];
    
    if (validPages.includes(path as PageId)) {
      return path as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage());
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState('General Web Consultation');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
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

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update the browser URL for direct linking and SEO
    const newPath = page === 'home' ? '/' : `/${page}`;
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
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-white min-h-[50vh]">
            <div className="w-10 h-10 border-4 border-slate-100 border-t-violet-600 rounded-full animate-spin"></div>
          </div>
        }>
          <AnimatePresence mode="wait">
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
        </Suspense>
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
