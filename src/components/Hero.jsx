import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone } from 'lucide-react';
import SeremetHeroButton from './SeremetHeroButton';

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative bg-[#FBF9F5] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-neutral-200/80">
      {/* Subtle modern geometric background accents (fine hairline grid lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="w-px h-full bg-neutral-200" />
          <div className="w-px h-full bg-neutral-200 hidden sm:block" />
          <div className="w-px h-full bg-neutral-200" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow: Google Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 sm:mb-8"
        >
          <a
            href="https://share.google/1hTez8oTYnUJ1m2pu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200/90 text-xs sm:text-sm text-neutral-700 transition-all shadow-xs group"
            title="Google Rezensionen von Seremet Dienstleistungen ansehen"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-neutral-900">4,7</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-600 font-medium underline decoration-neutral-300 group-hover:text-emerald-800 group-hover:decoration-emerald-800">
              18+ Google Bewertungen
            </span>
          </a>
        </motion.div>

        {/* Monumental Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal text-neutral-900 tracking-tight leading-[1.04] uppercase">
            Handwerk. Umzüge.<br />
            <span className="font-serif italic font-light text-brand-900 lowercase first-letter:uppercase">
              Verlässlich geregelt.
            </span>
          </h1>
        </motion.div>

        {/* Content & Action Split Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-14"
        >
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed font-sans max-w-2xl">
              15 feste Fachkräfte, 7 eigene Spezialfahrzeuge und faire Festpreise ohne versteckte Kosten. 
              Wir übernehmen Komplettumzüge, Haushaltsauflösungen, Hausmeisterservice und Gebäudereinigung im gesamten Landkreis Nienburg und bis zu 50 km Umkreis.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-2.5">
            <SeremetHeroButton onClick={() => onOpenInquiry()} />

            <a
              href="tel:050218076900"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-600 hover:text-emerald-800 transition-colors pl-2 sm:pl-3 py-1 group/phone"
            >
              <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 group-hover/phone:bg-emerald-100 transition-colors flex-shrink-0">
                <Phone className="w-3 h-3" />
              </span>
              <span className="text-neutral-500 font-normal">Oder direkt anrufen:</span>
              <span className="font-semibold text-neutral-900 underline underline-offset-4 decoration-neutral-300 group-hover/phone:decoration-emerald-700 whitespace-nowrap">
                05021 / 807 6900
              </span>
            </a>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* DIE MODERNE BILDFORM MIT GEOMETRISCHEN FORMEN & ARCHITEKTUR-LAYER */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="relative mt-4 sm:mt-8"
        >
          {/* Hintergrund-Form 1: Angled Architectural Offset Frame */}
          <div className="absolute -inset-2 sm:-inset-4 rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-tr from-brand-900/10 via-brand-900/5 to-amber-500/10 -rotate-1 sm:-rotate-1.5 transform pointer-events-none" />

          {/* Hintergrund-Form 2: Fein konturierte Sekundär-Geometrie */}
          <div className="absolute -inset-1 sm:-inset-2 rounded-[2rem] sm:rounded-[3rem] border-2 border-brand-900/15 rotate-1 transform pointer-events-none" />

          {/* Haupt-Bild-Container: Skulpturale moderne Bildform mit asymmetrischem Radius - 100% frei und unverdeckt */}
          <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-neutral-900 border-2 border-white shadow-2xl ring-1 ring-neutral-900/10">
            <div className="relative h-[380px] sm:h-[500px] md:h-[580px] lg:h-[640px] w-full overflow-hidden">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/hero-umzug-einsatz-live.webp"
                alt="Seremet Dienstleistungen Einsatzfahrzeuge und Team im realen Kundeneinsatz"
                className="w-full h-full object-cover object-[50%_35%] transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
