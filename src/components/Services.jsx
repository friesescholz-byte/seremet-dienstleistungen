import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Trees, 
  Truck, 
  ParkingSquare, 
  DoorOpen, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';

const services = [
  {
    id: 'hausmeister',
    icon: Building2,
    trade: 'Hausmeister- & Objektservice',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/leistung-hausmeister-handwerk.webp',
    description: 'Regelmäßige Kontrollgänge, Müllbereitstellung, Kleinreparaturen und Objektbetreuung für Wohnanlagen, Gewerbeobjekte und Privatkunden.',
    points: [
      'Laufende Objektkontrolle & Funktionsprüfung',
      'Koordination & handwerkliche Kleinreparaturen',
      'Fester Ansprechpartner für Mieter & Verwaltung',
    ],
  },
  {
    id: 'reinigung',
    icon: Sparkles,
    trade: 'Gründliche Gebäudereinigung',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/leistung-gebaeudereinigung-glas.webp',
    description: 'Treppenhausreinigung, Büroreinigung, Fenster- und Glasflächen sowie Bau- und Grundreinigungen – pünktlich und rückstandslos sauber.',
    points: [
      'Feste Reinigungsintervalle oder auf Abruf',
      'Treppenhäuser, Flure & Eingangsbereiche',
      'Moderne Reinigungsgeräte & umweltfreundliche Mittel',
    ],
  },
  {
    id: 'garten',
    icon: Trees,
    trade: 'Garten- & Grünflächenpflege',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-laubblaeser-aussenanlagen.webp',
    description: 'Rasenmähen, Heckenschnitt, Beetpflege und Unkrautbeseitigung: Gepflegte Außenanlagen das ganze Jahr über ohne eigenen Zeitaufwand.',
    points: [
      'Großflächenmähen mit eigenem Aufsitzmäher',
      'Formschnitt für Hecken, Büsche & Gehölze',
      'Inklusive fachgerechter Grünschnitt-Entsorgung',
    ],
  },
  {
    id: 'umzug',
    icon: Truck,
    trade: 'Umzüge, Transporte & Entrümpelung',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-umzug-transport-ausladen.webp',
    description: 'Zuverlässige Transporte, Firmenumzüge und besenreine Haushaltsauflösungen inklusive fachgerechter Entsorgung in Nienburg & Region.',
    points: [
      'Möbeltransport mit firmeneigenem LKW & Transportern',
      'Besenreine Übergabe bei Wohnungsauflösungen',
      'Transparente Festpreise ohne versteckte Kosten',
    ],
  },
  {
    id: 'parkplatz',
    icon: ParkingSquare,
    trade: 'Parkplatzservice & Flächenreinigung',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/leistung-parkplatz-leer-rueckansicht.webp',
    description: 'Damit Kunden sich auf den ersten Blick wohlfühlen: Maschinelle Kehrarbeiten, Beseitigung von Unrat und Winterdreck für Gewerbe- und Kundenparkplätze.',
    points: [
      'Maschinelle Reinigung großer Pflasterflächen',
      'Befreiung von Laub, Schmutz und Unkraut',
      'Flexible Einsatzzeiten vor Geschäftsöffnung',
    ],
  },
  {
    id: 'montage',
    icon: DoorOpen,
    trade: 'Fenster- & Türenmontage',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-handwerk-fenster-baustelle.webp',
    description: 'Fachkundiger Montageservice und Einbau von Türen, Fenstern und Bauelementen für ein einwandfreies, sicheres und energieeffizientes Gebäude.',
    points: [
      'Passgenauer Einbau & saubere Justierung',
      'Austausch und Reparatur beschädigter Elemente',
      'Erfahrene Handwerker vor Ort',
    ],
  },
];

export default function Services({ onOpenInquiry }) {
  return (
    <section id="leistungen" className="relative overflow-hidden py-24 sm:py-32">
      {/* Feststehendes Parallax-Hintergrundbild mit realer Seremet Firmenflotte */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed z-0"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/hero-firmenflotte-front.webp')`,
        }}
      />

      {/* Edles, abgetöntes Overlay: Tiefe Waldgrün- und Anthrazit-Töne für maximale Lesbarkeit & Parallax-Tiefe */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(4, 14, 9, 0.96) 0%, rgba(6, 20, 13, 0.92) 25%, rgba(8, 24, 16, 0.88) 70%, rgba(4, 14, 9, 0.97) 100%)',
        }}
      />

      {/* Oberer geschwungener Übergang (fließend von #FBF9F5 der darüberliegenden Sektion) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -mt-px">
        <svg
          className="relative block w-full h-12 sm:h-16 lg:h-24 text-[#FBF9F5]"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,30 C1080,85 720,10 360,65 C200,88 80,60 0,40 Z" />
        </svg>
      </div>

      {/* Unterer geschwungener Übergang (fließend in reinweiß #FFFFFF der Referenzen-Sektion) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -mb-px">
        <svg
          className="relative block w-full h-12 sm:h-16 lg:h-24 text-white"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,45 C360,90 720,15 1080,65 C1240,85 1360,55 1440,35 L1440,90 L0,90 Z" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-12 sm:pb-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs sm:text-sm font-extrabold tracking-widest text-emerald-400 uppercase mb-3">
            Alles aus einer Hand
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-4">
            Sechs Gewerke. Ein verlässlicher Ansprechpartner.
          </h2>
          <p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed font-sans max-w-2xl">
            Keine Reibungsverluste durch verschiedene Firmen: Wir decken alle Kernbereiche rund um Hausverwaltung, Gewerbeobjekte und Privatimmobilien mit eigenem Fachpersonal ab.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Clean Image Frame */}
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-100">
                  <img
                    src={item.image}
                    alt={item.trade}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Trade Icon & Title Row */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-800 transition-colors leading-snug">
                        {item.trade}
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <ul className="space-y-2.5 mb-7">
                      {item.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => onOpenInquiry(item.id)}
                    className="w-full py-3 px-4 rounded-xl border border-neutral-200 hover:border-brand-700 hover:bg-brand-50/50 text-neutral-800 hover:text-brand-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Diesen Bereich anfragen</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
