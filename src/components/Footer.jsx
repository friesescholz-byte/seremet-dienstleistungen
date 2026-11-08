import React from 'react';
import { ArrowUp, Star } from 'lucide-react';

export default function Footer({ onOpenLegal, onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            {/* Größeres Logo im Footer */}
            <div className="bg-white p-3 sm:p-3.5 rounded-2xl inline-block shadow-md">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/seremet-logo.svg"
                alt="Seremet Dienstleistungen GmbH"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-neutral-300 max-w-sm leading-relaxed">
              Ihr zuverlässiger Partner für Hausmeisterservice, Gebäudereinigung, Gartenpflege, Transporte und Parkplatzservice im Landkreis Nienburg und Umgebung.
            </p>

            {/* Schicker Google Bewertungs-Button im Footer */}
            <div>
              <a
                href="https://share.google/1hTez8oTYnUJ1m2pu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-neutral-800/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-emerald-600/50 transition-all text-xs group shadow-sm"
                title="Google Rezensionen von Seremet Dienstleistungen ansehen"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-white text-xs">4,7</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 group-hover:text-emerald-400 transition-colors">
                    18+ Google Bewertungen ansehen →
                  </span>
                </div>
              </a>
            </div>

            <p className="text-xs text-neutral-500 pt-1">
              Geschäftsführer: Hamdi Seremet • HRB 207596 (AG Walsrode) • USt-Id: DE321372645
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">
                  Unsere 6 Kernleistungen
                </a>
              </li>
              <li>
                <a href="#referenzen" className="hover:text-white transition-colors">
                  Referenzen & Einsatzfotos
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-white transition-colors">
                  Über die Familie Seremet
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors">
                  Standort & Kontakt
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry()}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  Kostenloses Angebot anfordern →
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Zentrale Nienburg
            </h4>
            <div className="text-sm space-y-1.5 text-neutral-300">
              <p>Führser Mühlweg 77b</p>
              <p>31582 Nienburg (Weser)</p>
              <p className="pt-2">
                Telefon:{' '}
                <a href="tel:050218076900" className="text-white font-bold hover:underline">
                  05021 / 807 6900
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:mail@seremet-dienstleistungen.de" className="text-white hover:underline">
                  mail@seremet-dienstleistungen.de
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© {new Date().getFullYear()} Seremet Dienstleistungen GmbH. Alle Rechte vorbehalten.</span>
            <button
              onClick={() => onOpenLegal('impressum')}
              className="text-neutral-400 hover:text-white transition-colors underline"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="text-neutral-400 hover:text-white transition-colors underline"
            >
              Datenschutz
            </button>
            <button
              onClick={() => onOpenLegal('barrierefreiheit')}
              className="text-neutral-400 hover:text-white transition-colors underline"
            >
              Barrierefreiheitserklärung
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Nach oben scrollen"
          >
            <span>Nach oben</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
