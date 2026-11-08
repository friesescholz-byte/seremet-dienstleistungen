import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

export default function MobileQuickBar({ onOpenInquiry }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/90 p-3 shadow-lg flex items-center gap-2">
      <a
        href="tel:050218076900"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-100 text-neutral-900 font-bold text-xs border border-neutral-300 active:bg-neutral-200 transition-colors"
      >
        <Phone className="w-4 h-4 text-brand-700" />
        <span>05021 / 807 6900</span>
      </a>

      <button
        onClick={() => onOpenInquiry()}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-brand-700 text-white font-bold text-xs shadow-xs active:bg-brand-800 transition-colors"
      >
        <span>Angebot anfordern</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
