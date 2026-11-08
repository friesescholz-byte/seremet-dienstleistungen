import React from 'react';
import { Phone, Mail, Clock, MapPin, ShieldAlert } from 'lucide-react';
import SeremetHeroButton from './SeremetHeroButton';

export default function ContactLocation({ onOpenInquiry }) {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Opening Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-brand-800 uppercase">
                  Standort & Direkter Draht
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-4">
                Wir sind direkt in Nienburg für Sie erreichbar.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Ob geplante Wohnanlagenbetreuung oder kurzfristiger Sondereinsatz: Wir beraten Sie persönlich, ehrlich und unverbindlich.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-subtle space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Telefonischer Sofortkontakt
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="tel:050218076900"
                      className="text-xl sm:text-2xl font-black text-neutral-900 hover:text-brand-700 transition-colors"
                    >
                      05021 / 807 6900
                    </a>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Mo. – Sa. von 07:00 bis 18:00 Uhr direkt erreichbar.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 border border-neutral-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    E-Mail für Pläne & Ausschreibungen
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="mailto:mail@seremet-dienstleistungen.de"
                      className="text-base sm:text-lg font-bold text-neutral-900 hover:text-brand-700 transition-colors"
                    >
                      mail@seremet-dienstleistungen.de
                    </a>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Senden Sie uns gerne Leistungsverzeichnisse oder Ausschreibungsunterlagen.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 border border-neutral-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Betriebshof & Firmenadresse
                  </span>
                  <div className="text-sm font-bold text-neutral-900 mt-0.5 leading-snug">
                    Seremet Dienstleistungen GmbH<br />
                    Führser Mühlweg 77b<br />
                    31582 Nienburg (Weser)
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 border border-neutral-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Büro- & Einsatzzeiten
                  </span>
                  <div className="text-sm font-bold text-neutral-900 mt-0.5">
                    Montag – Samstag: 07:00 – 18:00 Uhr
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Notfalleinsätze nach vorheriger Vereinbarung rund um die Uhr.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Box & Standorthalle Photo */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-brand-900 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-elevated relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block text-xs font-bold tracking-wider uppercase text-emerald-300 mb-2">
                  Schnell & Unverbindlich
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                  Projekt anfragen oder Besichtigung vereinbaren
                </h3>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed mb-8 max-w-md">
                  Wählen Sie einfach im kurzen Anfrage-Fenster Ihr Gewerk aus. Wir melden uns umgehend bei Ihnen für eine zügige Kalkulation.
                </p>

                <div className="space-y-3">
                  <div className="pt-1">
                    <SeremetHeroButton 
                      onClick={() => onOpenInquiry()} 
                      text="Angebot anfordern" 
                      size="sm" 
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-300 pt-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Garantiert keine Weitergabe Ihrer Kontaktdaten.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Standort Visual */}
            <div className="rounded-2xl overflow-hidden border border-neutral-300/80 bg-white">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/standort-betriebshof-halle.webp"
                alt="Standort Führser Mühlweg 77b in Nienburg"
                className="w-full h-56 sm:h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white flex items-center justify-between text-xs text-neutral-600">
                <span>Betriebsgelände Führser Mühlweg 77b, Nienburg</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Seremet+Dienstleistungen+GmbH+F%C3%BChrser+M%C3%BChlweg+77b+31582+Nienburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-700 hover:underline"
                >
                  Auf Google Maps ansehen ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
