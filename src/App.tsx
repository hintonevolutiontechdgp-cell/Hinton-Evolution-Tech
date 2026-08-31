import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { Toast } from './components/Toast';

import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { AboutPage } from './components/pages/AboutPage';
import { SolutionsPage } from './components/pages/SolutionsPage';
import { PricingPage } from './components/pages/PricingPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { ProcessPage } from './components/pages/ProcessPage';
import { ContactPage } from './components/pages/ContactPage';
import { PolicyPage } from './components/pages/PolicyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState('General Web Consultation');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
      <main className="flex-grow">
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
