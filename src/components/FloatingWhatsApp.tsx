import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs px-3 py-2 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2 animate-bounce max-w-[200px] text-left">
          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-ping" />
          <p className="font-semibold text-[11px] leading-tight">
            Chat on WhatsApp (+91 {CLINIC_CONFIG.whatsapp})
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={CLINIC_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp with Family Dental and Medical Centre"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
