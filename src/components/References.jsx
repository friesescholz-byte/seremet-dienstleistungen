import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import SeremetHeroButton from './SeremetHeroButton';

const ITEMS_PER_PAGE = 6;

const referenceItems = [
  {
    title: 'Fachgerechte Fenstermontage & Dachausbau',
    categorySlug: 'montage',
    location: 'Wohnprojekt, Nienburg (Weser)',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-team-fenstermontage-dach.webp',
    details: 'Einbau und justiergenaue Montage von großen Fensterelementen durch unser 3-köpfiges Handwerker-Team vor Ort.',
  },
  {
    title: 'Baustellenmontage & Rollladensysteme',
    categorySlug: 'montage',
    location: 'Neubauprojekt Landkreis Nienburg',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-handwerk-fenster-baustelle.webp',
    details: 'Einpassung von Fenstern und Wärmeschutz-Elementen im Rohbau. Zuverlässig und termingetreu mit eigenem Werkzeug.',
  },
  {
    title: 'Großflächen-Rasenpflege mit Profi-Aufsitzmäher',
    categorySlug: 'gruen',
    location: 'Gewerbegebiet & Wohnanlagen, Nienburg',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-aufsitzmaeher-gruenpflege.webp',
    details: 'Laufende Pflege weitläufiger Rasenareale mit modernem Aufsitzmäher. Sauberer Mulchschnitt und zügige Abwicklung ohne Ausfallzeiten.',
  },
  {
    title: 'Maschinelle Parkplatzreinigung für Gewerbebetrieb',
    categorySlug: 'flaeche',
    location: 'Kundenparkplatz Nienburg (Weser)',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-parkplatzreinigung-gewerbe.webp',
    details: 'Tiefenreinigung von Verbundsteinpflaster, Fugenentkrautung und Beseitigung von Schmutz und Splitter für einen einladenden Firmeneingang.',
  },
  {
    title: 'Einsatzflotte & Werkstattwagen direkt vor Ort',
    categorySlug: 'transport',
    location: 'Kreisgebiet Nienburg',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/flotte-mercedes-sprinter-profil.webp',
    details: 'Moderner Mercedes-Benz Sprinter mit Vollausstattung für Fenster, Türen und Sofortreparaturen im Außendienst.',
  },
  {
    title: 'Baumfällung & Totholzbeseitigung im Kundenauftrag',
    categorySlug: 'gruen',
    location: 'Privatgrundstück Landkreis Nienburg',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-baumfaellung-holz.webp',
    details: 'Sichere Fällung eines morschen Baumes, Zersägen des Stammholzes und vollständige Abfuhr des Astwerks.',
  },
  {
    title: 'Privatumzug & Möbeltransport mit Hebebühne',
    categorySlug: 'transport',
    location: 'Stadtrand Nienburg (Weser)',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-umzug-transport-ausladen.webp',
    details: 'Schonender Transport von Möbeln und Hausrat mit eigenem LKW, fachgerechter Ab- und Wiederaufbau in den neuen Wohnräumen.',
  },
  {
    title: 'Herbstliche Arealreinigung & Laubmanagement',
    categorySlug: 'gruen',
    location: 'Gewerbepark Landkreis Nienburg',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/einsatz-laubblaeser-aussenanlagen.webp',
    details: 'Beseitigung von nassem Laub auf Gehwegen und Zufahrten zur Vermeidung von Rutschunfällen für Kunden und Mitarbeiter.',
  },
  {
    title: 'Haushaltsauflösung & besenreine Übergabe',
    categorySlug: 'montage',
    location: 'Wohnanlage Nienburg',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/hero-umzug-einsatz-live.webp',
    details: 'Schnelle und diskrete Räumung von Wohnungen, fachgerechte Wertstofftrennung und ordnungsgemäße Endreinigung.',
  },
  {
    title: 'Flottenlogistik für parallele Großprojekte',
    categorySlug: 'transport',
    location: 'Einsatzgebiet Weserbergland & Nienburg',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/hero-firmenflotte-front.webp',
    details: 'Bereitstellung mehrerer Einsatzfahrzeuge und Fachhandwerker parallel für terminkritische Übergaben und Großaufträge.',
  },
];

export default function References({ onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filters = [
    { label: 'Alle Projekte', value: 'all' },
    { label: 'Handwerk & Montage', value: 'montage' },
    { label: 'Garten & Grün', value: 'gruen' },
    { label: 'Parkplatz & Fläche', value: 'flaeche' },
    { label: 'Fuhrpark & Transport', value: 'transport' },
  ];

  const handleFilterChange = (val) => {
    setActiveFilter(val);
    setCurrentPage(1);
  };

  const filteredItems = activeFilter === 'all'
    ? referenceItems
    : referenceItems.filter(item => item.categorySlug === activeFilter);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const elem = document.getElementById('referenzen');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="referenzen" className="py-20 sm:py-28 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header mit linksbündigem CTA direkt über den Sortierungen */}
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-brand-800 uppercase mb-3">
            Echte Einsätze & Arbeitsbeweise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
            Arbeit aus Nienburg, die man sieht.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 max-w-2xl leading-relaxed">
            Keine gekauften Stockfotos, sondern reale Einsätze unserer 15 Mitarbeiter im Landkreis Nienburg und Umgebung.
          </p>

          {/* CTA-Button linksbündig über den Sortierungen platziert */}
          <div className="mt-6 mb-8">
            <SeremetHeroButton 
              onClick={() => onOpenInquiry()} 
              text="Projekt anfragen" 
              size="sm" 
            />
          </div>
        </div>

        {/* Filter Chips / Sortierung */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-neutral-100">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider mr-2 hidden sm:inline">
            Bereich:
          </span>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilterChange(f.value)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                activeFilter === f.value
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-[#FBF9F5] text-neutral-700 hover:bg-neutral-200/70 border border-neutral-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Editorial Grid - Maximal 6 Projekte pro Seite */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((ref, idx) => (
            <div
              key={`${ref.title}-${idx}`}
              className="bg-[#FBF9F5] rounded-2xl overflow-hidden border border-neutral-200/90 flex flex-col group hover:shadow-elevated transition-all"
            >
              <div className="aspect-[16/11] overflow-hidden bg-neutral-200">
                <img
                  src={ref.image}
                  alt={ref.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                    <span>{ref.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2.5 leading-snug">
                    {ref.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {ref.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination: Wenn mehr als 6 Projekte vorhanden sind */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 font-medium">
              Zeige {startIndex + 1} bis {Math.min(startIndex + ITEMS_PER_PAGE, filteredItems.length)} von {filteredItems.length} Einsätzen
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                  currentPage === 1
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed bg-neutral-50'
                    : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 active:scale-[0.98]'
                }`}
                aria-label="Vorherige Seite"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Vorherige</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-brand-700 text-white shadow-xs'
                        : 'text-neutral-600 hover:bg-neutral-100 border border-transparent hover:border-neutral-200'
                    }`}
                    aria-label={`Seite ${pageNum}`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                  currentPage === totalPages
                    ? 'border-neutral-200 text-neutral-300 cursor-not-allowed bg-neutral-50'
                    : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 active:scale-[0.98]'
                }`}
                aria-label="Nächste Seite"
              >
                <span>Nächste</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
