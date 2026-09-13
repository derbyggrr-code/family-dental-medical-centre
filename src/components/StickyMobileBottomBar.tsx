import React from 'react';
import { Phone, MessageCircle, Calendar, Navigation } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicConfig';

interface StickyMobileBottomBarProps {
  onOpenAppointmentModal: () => void;
}

export const StickyMobileBottomBar: React.FC<StickyMobileBottomBarProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 lg:hidden shadow-lg safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5">
        
        {/* Call Button */}
        <a
          href={CLINIC_CONFIG.telUrl}
          className="flex flex-col items-center justify-center py-1.5 px-1 text-slate-700 hover:text-teal-700 rounded-xl hover:bg-slate-50 transition active:scale-95"
          id="mobile-bottom-call"
        >
          <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CLINIC_CONFIG.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-emerald-800 hover:text-emerald-900 rounded-xl hover:bg-emerald-50 transition active:scale-95"
          id="mobile-bottom-whatsapp"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-0.5">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Book Appointment Button (Prominent) */}
        <button
          onClick={onOpenAppointmentModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-teal-600 active:bg-teal-700 text-white rounded-xl shadow-xs transition active:scale-95 cursor-pointer"
          id="mobile-bottom-book"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Book</span>
        </button>

        {/* Directions Button */}
        <a
          href={CLINIC_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-slate-700 hover:text-teal-700 rounded-xl hover:bg-slate-50 transition active:scale-95"
          id="mobile-bottom-directions"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-0.5">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Map</span>
        </a>

      </div>
    </div>
  );
};
