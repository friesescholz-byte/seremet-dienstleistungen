import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, mode = 'impressum' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-modal border border-neutral-200 overflow-hidden z-10 max-h-[85vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-[#FBF9F5]">
              <h3 className="text-xl font-bold text-neutral-900">
                {mode === 'impressum' 
                  ? 'Impressum' 
                  : mode === 'datenschutz' 
                  ? 'Datenschutzerklärung' 
                  : 'Erklärung zur Barrierefreiheit'}
              </h3>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-700 leading-relaxed">
              {mode === 'impressum' && (
                <>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Angaben gemäß § 5 TMG</h4>
                    <p>
                      <strong>Seremet Dienstleistungen GmbH</strong><br />
                      Führser Mühlweg 77b<br />
                      31582 Nienburg (Weser)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Vertreten durch</h4>
                    <p>Geschäftsführer: Hamdi Seremet</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Kontakt</h4>
                    <p>
                      Telefon: 05021 / 807 6900<br />
                      E-Mail: mail@seremet-dienstleistungen.de<br />
                      Internet: seremet-dienstleistungen.de
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Registereintrag</h4>
                    <p>
                      Eintragung im Handelsregister.<br />
                      Registergericht: Amtsgericht Walsrode<br />
                      Registernummer: HRB 207596
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Umsatzsteuer-ID</h4>
                    <p>
                      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                      DE321372645
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
                    <p>
                      Hamdi Seremet<br />
                      Führser Mühlweg 77b, 31582 Nienburg (Weser)
                    </p>
                  </div>
                </>
              )}

              {mode === 'datenschutz' && (
                <>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">1. Datenschutz auf einen Blick</h4>
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">2. Verantwortliche Stelle</h4>
                    <p>
                      Seremet Dienstleistungen GmbH<br />
                      Geschäftsführer: Hamdi Seremet<br />
                      Führser Mühlweg 77b<br />
                      31582 Nienburg (Weser)<br />
                      Telefon: 05021 / 807 6900<br />
                      E-Mail: mail@seremet-dienstleistungen.de
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">3. Erhebung von Daten bei Anfragen</h4>
                    <p>
                      Wenn Sie uns per Anfrage-Modal oder E-Mail kontaktieren, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">4. Hosting & Content Delivery Network (CDN)</h4>
                    <p>
                      Diese Website wird über ein Content Delivery Network (Cloudflare) bereitgestellt. Beim Aufruf unserer Website werden technische Server-Log-Dateien verarbeitet, um die Sicherheit und Stabilität des Betriebs zu gewährleisten.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">5. Ihre Rechte</h4>
                    <p>
                      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                    </p>
                  </div>
                </>
              )}

              {mode === 'barrierefreiheit' && (
                <>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Erklärung zur Barrierefreiheit</h4>
                    <p>
                      Die <strong>Seremet Dienstleistungen GmbH</strong> ist bestrebt, ihren Webauftritt im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates sowie dem Barrierefreiheitsstärkungsgesetz (BFSG) und der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) barrierefrei zugänglich zu machen.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Stand der Vereinbarkeit mit den Anforderungen</h4>
                    <p>
                      Dieser Webauftritt ist mit den technischen Anforderungen der BITV 2.0 sowie den Web Content Accessibility Guidelines (WCAG) 2.1 auf Konformitätsstufe AA weitestgehend vereinbar.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-neutral-600">
                      <li>Vollständige semantische HTML5-Strukturierung mit klaren Orientierungsbereichen (Header, Main, Section, Nav, Footer).</li>
                      <li>Tastaturbedienbarkeit aller wesentlichen interaktiven Elemente (Buttons, Links, Dialogfenster).</li>
                      <li>Deutliche Farbkontraste für optimale Lesbarkeit (Text auf hellem Hintergrund mit Kontrastverhältnis &ge; 4,5:1).</li>
                      <li>Skalierbarkeit von Texten und Layouts ohne Informationsverlust auf mobilen Endgeräten.</li>
                      <li>Hinterlegung aussagekräftiger Alternativtexte (Alt-Tags) für Bild- und Grafikelemente.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Erstellung dieser Erklärung</h4>
                    <p>
                      Diese Erklärung wurde im November 2026 erstellt und basiert auf einer Selbstbewertung der digitalen Barrierefreiheit anhand der BITV/WCAG-Prüfkriterien.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Feedback und Kontaktangaben</h4>
                    <p>
                      Sollten Ihnen Mängel in Bezug auf die barrierefreie Gestaltung unseres Webauftritts auffallen oder haben Sie Anmerkungen, können Sie sich jederzeit an uns wenden:
                    </p>
                    <div className="mt-2 text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                      <strong>Seremet Dienstleistungen GmbH</strong><br />
                      Führser Mühlweg 77b<br />
                      31582 Nienburg (Weser)<br />
                      Telefon: 05021 / 807 6900<br />
                      E-Mail:{' '}
                      <a href="mailto:mail@seremet-dienstleistungen.de" className="text-brand-700 underline font-semibold">
                        mail@seremet-dienstleistungen.de
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Durchsetzungsverfahren</h4>
                    <p>
                      Sollten Sie nach Ihrer Kontaktaufnahme keine zufriedenstellende Rückmeldung erhalten, können Sie sich an die zuständige Schlichtungsstelle wenden, um eine außergerichtliche Streitbeilegung zu beantragen:
                    </p>
                    <p className="mt-1 text-xs text-neutral-600">
                      Schlichtungsstelle nach dem Behindertengleichstellungsgesetz bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen<br />
                      Mauerstraße 53, 10117 Berlin<br />
                      Internet:{' '}
                      <a href="https://www.schlichtungsstelle-bgg.de" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">
                        www.schlichtungsstelle-bgg.de
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-neutral-200 bg-[#FBF9F5] text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Schließen
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
