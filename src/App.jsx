import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Services from './components/Services';
import References from './components/References';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import LegalModal from './components/LegalModal';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState('');
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalMode, setLegalMode] = useState('impressum');

  const handleOpenInquiry = (category = '') => {
    setInquiryCategory(category);
    setInquiryOpen(true);
  };

  const handleOpenLegal = (mode = 'impressum') => {
    setLegalMode(mode);
    setLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-neutral-900 pb-16 sm:pb-0">
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main>
        <Hero onOpenInquiry={handleOpenInquiry} />
        <TrustStats />
        <Services onOpenInquiry={handleOpenInquiry} />
        <References onOpenInquiry={handleOpenInquiry} />
        <About onOpenInquiry={handleOpenInquiry} />
        <Testimonials />
        <ContactLocation onOpenInquiry={handleOpenInquiry} />
      </main>

      <Footer onOpenLegal={handleOpenLegal} onOpenInquiry={handleOpenInquiry} />

      {/* Inquiry Pop-up Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialCategory={inquiryCategory}
      />

      {/* Legal Impressum/Datenschutz Modal */}
      <LegalModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
        mode={legalMode}
      />

      {/* Mobile Sticky CTA Bar */}
      <MobileQuickBar onOpenInquiry={handleOpenInquiry} />
    </div>
  );
}
