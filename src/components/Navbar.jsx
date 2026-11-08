import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Star } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Referenzen', href: '#referenzen' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Bewertungen', href: '#bewertungen' },
    { label: 'Standort', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-2 sm:py-2.5'
          : 'bg-[#FBF9F5]/80 backdrop-blur-xs py-4 sm:py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Groß & prominent ganz oben, schlank beim Runterscrollen */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <img
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/seremet-logo.svg"
              alt="Seremet Dienstleistungen GmbH"
              className={`w-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-[1.02] ${
                scrolled 
                  ? 'h-9 sm:h-10' 
                  : 'h-13 sm:h-16 lg:h-18'
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-neutral-700 hover:text-brand-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions & Rating */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Google Micro Badge */}
            <a
              href="https://share.google/1hTez8oTYnUJ1m2pu"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-neutral-200/80 text-xs font-semibold text-neutral-800 hover:border-neutral-300 transition-colors"
              title="Google Rezensionen ansehen"
            >
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="font-bold text-neutral-900">4,7</span>
              <span className="text-neutral-500 font-normal">Google</span>
            </a>

            <a
              href="tel:050218076900"
              className="flex items-center gap-2 text-sm font-bold text-neutral-800 hover:text-brand-700 transition-colors px-3 py-2 rounded-xl hover:bg-black/5"
            >
              <Phone className="w-4 h-4 text-brand-700" />
              <span>05021 / 807 6900</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-sm font-bold shadow-sm transition-all hover:shadow active:scale-[0.98]"
            >
              <span>Angebot anfordern</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry()}
              className="px-3 py-1.5 rounded-lg bg-brand-700 text-white text-xs font-bold"
            >
              Anfragen
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg focus:outline-none"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FBF9F5] border-b border-neutral-200 px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-800 hover:text-brand-700 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-neutral-200/80 space-y-2">
            <a
              href="tel:050218076900"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-neutral-300 text-neutral-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-brand-700" />
              <span>05021 / 807 6900 anrufen</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-xl bg-brand-700 text-white font-bold text-sm shadow-sm"
            >
              Kostenloses Angebot anfordern
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
