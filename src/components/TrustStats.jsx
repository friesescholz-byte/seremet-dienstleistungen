import React from 'react';

const stats = [
  {
    number: 'Seit 2013',
    label: 'Fest verwurzelt',
    description: 'Über 10 Jahre verlässliche Handschlagqualität im Landkreis Nienburg.',
  },
  {
    number: '15 Mitarbeiter',
    label: 'Feste Mannschaft',
    description: 'Festangestelltes Fachpersonal statt unberechenbarem Subunternehmer-Chaos.',
  },
  {
    number: '7 Fahrzeuge',
    label: 'Voller Fuhrpark',
    description: 'Eigene Transporter, Pritschen & Großmaschinen jederzeit startklar.',
  },
  {
    number: '200+ Kunden',
    label: 'Zufriedene Partner',
    description: 'Langjährige Betreuung von Wohnungsbaugesellschaften & Betrieben.',
  },
];

export default function TrustStats() {
  return (
    <section className="py-12 sm:py-16 border-t border-neutral-200/80 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 mt-1 mb-2">
                {stat.label}
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
