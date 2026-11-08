import React from 'react';
import { Shield, Users, Wrench } from 'lucide-react';
import SeremetHeroButton from './SeremetHeroButton';

export default function About({ onOpenInquiry }) {
  return (
    <section id="ueber-uns" className="relative py-20 sm:py-32 bg-[#FBF9F5] overflow-hidden border-t border-neutral-200/80">
      {/* Aufwändiges Architektur- & Markenmuster im Hintergrund in Seremet-Logofarben (#009846) */}
      {/* Sanft sichtbar, edel als Wasserzeichen im Hintergrund */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Weiche, dezente Radial-Glows in Seremet-Grün */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#009846]/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full bg-emerald-600/8 blur-[120px]" />

        {/* Vektorbasiertes geometrisches Markenmuster - dezent & elegant wahrnehmbar */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.14) 25%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.72) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.14) 25%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.72) 100%)'
          }}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="seremet-brand-pattern"
                width="96"
                height="96"
                patternUnits="userSpaceOnUse"
              >
                {/* Diagonale 45°-Schraffur aus den Baumkronen des Seremet-Logos */}
                <line x1="0" y1="0" x2="96" y2="96" stroke="#009846" strokeWidth="1.2" strokeOpacity="0.20" />
                <line x1="48" y1="0" x2="96" y2="48" stroke="#009846" strokeWidth="0.9" strokeOpacity="0.14" strokeDasharray="3 3" />
                <line x1="0" y1="48" x2="48" y2="96" stroke="#009846" strokeWidth="0.9" strokeOpacity="0.14" strokeDasharray="3 3" />

                {/* Sekundäre feine Schraffurlinien */}
                <line x1="-24" y1="24" x2="24" y2="72" stroke="#009846" strokeWidth="0.7" strokeOpacity="0.08" />
                <line x1="72" y1="-24" x2="120" y2="24" stroke="#009846" strokeWidth="0.7" strokeOpacity="0.08" />

                {/* Orthogonale Architektur- & Fenstergitter-Linien (Haus-Motiv des Logos) */}
                <line x1="0" y1="48" x2="96" y2="48" stroke="#009846" strokeWidth="1.0" strokeOpacity="0.16" />
                <line x1="48" y1="0" x2="48" y2="96" stroke="#009846" strokeWidth="1.0" strokeOpacity="0.16" />

                {/* Organische Kreisbögen der Logobäume */}
                <circle cx="0" cy="0" r="36" fill="none" stroke="#009846" strokeWidth="1.1" strokeOpacity="0.16" />
                <circle cx="96" cy="96" r="36" fill="none" stroke="#009846" strokeWidth="1.1" strokeOpacity="0.16" />
                <circle cx="48" cy="48" r="22" fill="none" stroke="#009846" strokeWidth="0.9" strokeOpacity="0.12" strokeDasharray="2 3" />

                {/* Handwerks-Kreuzpunkte & Knoten an den Schnittstellen */}
                <path d="M44 48 H52 M48 44 V52" stroke="#009846" strokeWidth="1.7" strokeOpacity="0.32" strokeLinecap="round" />
                <path d="M-4 0 H4 M0 -4 V4" stroke="#009846" strokeWidth="1.4" strokeOpacity="0.26" strokeLinecap="round" />
                <path d="M92 96 H100 M96 92 V100" stroke="#009846" strokeWidth="1.4" strokeOpacity="0.26" strokeLinecap="round" />

                {/* Grüne Akzent-Rauten */}
                <polygon points="48,22 51,25 48,28 45,25" fill="#009846" fillOpacity="0.28" />
                <polygon points="22,48 25,51 22,54 19,51" fill="#009846" fillOpacity="0.24" />
                <polygon points="74,48 77,51 74,54 71,51" fill="#009846" fillOpacity="0.24" />
                <polygon points="48,74 51,77 48,80 45,77" fill="#009846" fillOpacity="0.28" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#seremet-brand-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hamdi Seremet Portrait & Real Team at Work */}
          <div className="lg:col-span-6 space-y-5">
            {/* Hamdi Seremet Portrait Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-elevated">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden bg-neutral-100 shrink-0 border border-neutral-200 shadow-subtle">
                  <img
                    src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/hamdi-seremet-geschaeftsfuehrer.webp"
                    alt="Hamdi Seremet - Inhaber und Geschäftsführer Seremet Dienstleistungen GmbH"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                    Inhaber & Geschäftsführer
                  </span>
                  <h3 className="text-2xl font-black text-neutral-900 mt-1">
                    Hamdi Seremet
                  </h3>
                  <p className="text-xs text-neutral-500 mb-4">
                    Seit 2013 Ihr verlässlicher Partner in Nienburg (Weser)
                  </p>
                  <p className="text-sm text-neutral-700 italic leading-relaxed border-t border-neutral-100 pt-3">
                    „Bei uns gibt es kein anonymes Callcenter und kein Subunternehmer-Chaos. Ich stehe mit meinem Namen persönlich dafür ein, dass jeder Auftrag termingerecht, sauber und fair ausgeführt wird.“
                  </p>
                </div>
              </div>
            </div>

            {/* Real Craft Work Photos - Clean without any tags */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-100">
                <img
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-team-fenstermontage-dach.webp"
                  alt="Mitarbeiter der Seremet Dienstleistungen bei der Fenstermontage"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-100">
                <img
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-handwerk-fenster-baustelle.webp"
                  alt="Handwerker in Seremet-Arbeitskleidung auf der Baustelle"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Values & Promise */}
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-brand-800 uppercase mb-3">
              Familie Seremet • Das Versprechen
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-6">
              Regionale Schlagkraft mit festem Team & eigenem Fuhrpark.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              Was 2013 als regionaler Dienstleister begann, ist heute ein etablierter Handwerks- und Facility-Betrieb mit 15 festangestellten Fachkräften und 7 modernen Firmenfahrzeugen. Wir pflegen jedes Objekt so, als wäre es unser eigenes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">15 festangestellte Mitarbeiter</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    Keine anonyme Weitervermittlung an Subunternehmer: Bei Ihnen arbeiten ausschließlich unsere eigenen, festangestellten Mitarbeiter mit klarer Qualitätsverantwortung.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">7 Einsatzfahrzeuge & Profi-Equipment</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    Vom wendigen Service-Sprinter über Transport-LKW bis hin zu Großflächen-Aufsitzmähern und professionellen Kehrmaschinen sind wir unabhängig ausgerüstet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Verbindliche Festpreise & Handschlagqualität</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    Nach einer zügigen Vor-Ort-Besichtigung erhalten Sie ein transparentes, detailliertes Angebot ohne versteckte Kosten oder böse Überraschungen.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <SeremetHeroButton 
                onClick={() => onOpenInquiry()} 
                text="Angebot anfordern" 
                size="sm" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
