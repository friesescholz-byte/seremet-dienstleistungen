import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  FileText,
  Wrench,
  Sparkles,
  Trees,
  Truck,
  Car,
  Hammer
} from 'lucide-react';

const CATEGORIES = [
  { id: 'hausmeister', label: 'Hausmeister', subtitle: 'Objekt & Wartung', icon: Wrench },
  { id: 'reinigung', label: 'Gebäudereinigung', subtitle: 'Büro & Treppe', icon: Sparkles },
  { id: 'garten', label: 'Gartenpflege', subtitle: 'Rasen & Hecken', icon: Trees },
  { id: 'umzug', label: 'Umzug & Räumung', subtitle: 'Möbel & LKW', icon: Truck },
  { id: 'parkplatz', label: 'Parkplatzservice', subtitle: 'Kehren & Winter', icon: Car },
  { id: 'montage', label: 'Handwerk & Bau', subtitle: 'Fenster & Türen', icon: Hammer },
];

export default function InquiryModal({ isOpen, onClose, initialCategory = '' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'hausmeister');
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phoneOrEmail.trim()) {
      return;
    }
    setLoading(true);
    // Simulate smooth response feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phoneOrEmail: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/65 backdrop-blur-sm"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-modal border border-neutral-200/90 overflow-hidden z-10 my-4"
          >
            {/* Header mit warmem Empfang & Schnellkontakt */}
            <div className="relative p-6 sm:p-7 border-b border-neutral-100 bg-gradient-to-b from-[#FBF9F5] to-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Schnellanfrage • In 60 Sekunden
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                    Kostenloses Angebot anfordern
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Wählen Sie kurz Ihren Bereich – wir melden uns persönlich & transparent bei Ihnen.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors shrink-0"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Telefonische Sofort-Alternative */}
              <div className="mt-3.5 inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs text-xs text-neutral-700">
                <span className="text-neutral-500">Lieber direkt persönlich sprechen?</span>
                <a 
                  href="tel:050218076900" 
                  className="font-bold text-emerald-800 hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  05021 / 807 6900
                </a>
                <span className="text-neutral-400 text-[10px]">(Mo–Sa 7–18 Uhr)</span>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 sm:p-10 text-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200/80 shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">
                  Vielen Dank für Ihre Anfrage!
                </h4>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6 leading-relaxed">
                  Ihre Nachricht ist direkt bei Geschäftsführer Hamdi Seremet eingegangen. Wir prüfen die Eckdaten und melden uns kurzfristig bei Ihnen.
                </p>
                <div className="p-4 bg-[#FBF9F5] rounded-2xl border border-neutral-200/80 inline-flex items-center gap-2.5 text-xs text-neutral-800 mb-6">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Dringender Notfall? Rufen Sie direkt an: <strong>05021 / 807 6900</strong></span>
                </div>
                <div>
                  <button
                    onClick={handleReset}
                    className="w-full py-3.5 px-5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-sm font-bold transition-colors shadow-xs"
                  >
                    Fenster schließen
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-6">
                {/* 1. Bereich-Auswahl als visuelle, einladende Kacheln */}
                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2.5">
                    1. Für welchen Bereich suchen Sie Unterstützung?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory === cat.id;
                      const IconComponent = cat.icon;
                      return (
                        <button
                          type="button"
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`relative p-3 rounded-2xl border transition-all text-left group flex flex-col justify-between h-20 ${
                            isSelected
                              ? 'bg-brand-900 text-white border-brand-900 shadow-md ring-2 ring-emerald-500/30'
                              : 'bg-white text-neutral-800 border-neutral-200/90 hover:border-emerald-500/40 hover:bg-emerald-50/20 shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                              isSelected ? 'bg-white/15 text-emerald-300' : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                            }`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-tight">
                              {cat.label}
                            </div>
                            <div className={`text-[10px] leading-tight mt-0.5 ${
                              isSelected ? 'text-emerald-200/80' : 'text-neutral-500'
                            }`}>
                              {cat.subtitle}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Kontaktdaten - Übersichtliche Eingabefelder mit Icons */}
                <div className="space-y-3.5 pt-1">
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                    2. Wie dürfen wir Sie kontaktieren?
                  </label>

                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Ihr Name oder Firma (z. B. Familie Müller / Hausverwaltung)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border border-neutral-200 bg-[#FDFCFB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-all placeholder:text-neutral-400 text-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Telefonnummer oder E-Mail-Adresse für Rückfragen"
                        value={formData.phoneOrEmail}
                        onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 text-sm rounded-xl border border-neutral-200 bg-[#FDFCFB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-all placeholder:text-neutral-400 text-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-neutral-400">
                        <FileText className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Kurze Notiz zu Objekt, Adresse oder Umfang (optional)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 bg-[#FDFCFB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-all placeholder:text-neutral-400 text-neutral-900 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Absende-Button & Vertrauens-Garantie */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-brand-700 hover:bg-brand-800 active:scale-[0.99] text-white rounded-xl text-base font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Anfrage wird sicher übertragen...</span>
                    ) : (
                      <>
                        <span>Kostenloses Angebot jetzt anfordern</span>
                        <ArrowRight className="w-4 h-4 text-emerald-300" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 mt-3.5 text-xs text-neutral-600 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      100% unverbindlich
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      Rückmeldung meist in 2 Std.
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      Direkt aus Nienburg
                    </span>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
