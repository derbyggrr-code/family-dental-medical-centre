import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  Shield, 
  Heart,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_SERVICES } from '../data/clinicConfig';

interface FooterProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Disclaimer Badge Bar */}
        {/* Top subtle notification */}
        <div className="mb-12 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <strong className="font-semibold text-slate-200">{CLINIC_CONFIG.clinicName}</strong>
            <span className="hidden sm:inline text-slate-400">— Inder Enclave-2, Kirari, Delhi</span>
          </div>
          <span className="text-teal-400 font-medium">Opening Hours: 9 AM–2 PM & 5 PM–10 PM</span>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-teal-400 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6.5 2.5 10 .5 2 1.5 4 3.5 4s3-2 3.5-4c1-3.5 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" />
                  <path d="M9 9h6" />
                  <path d="M12 6v6" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                  {CLINIC_CONFIG.clinicName}
                </h3>
                <span className="text-[11px] text-teal-400 font-semibold tracking-wider block">
                  KIRARI, DELHI-110086
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Family Dental and Medical Centre is presented in this demo concept as a patient-friendly dental health practice providing preventive, restorative, and aesthetic oral healthcare services.
            </p>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 font-medium block mb-2">
                Social Media Placeholders:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={CLINIC_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => handleNavClick('#home')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#about')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  About Clinic
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#doctors')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Dentist Profiles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#treatments')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Dental Treatments
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#gallery')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Clinic Photos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#faq')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="hover:text-teal-400 transition cursor-pointer"
                >
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Dental Treatments
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {CLINIC_SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenAppointmentModal(s.name)}
                    className="hover:text-teal-400 transition cursor-pointer text-left"
                  >
                    • {s.name}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => handleNavClick('#treatments')}
                  className="text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
                >
                  View All 12 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Real Clinic Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinic Contact
            </h4>
            
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Real Address:</span>
                  <p className="text-slate-400 leading-snug">{CLINIC_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <div>
                  <a href={CLINIC_CONFIG.telUrl} className="hover:text-teal-300 font-bold text-white">
                    +91 {CLINIC_CONFIG.phone}
                  </a>
                  <span className="text-slate-500 block text-[11px]">Alt: +91 {CLINIC_CONFIG.secondaryPhone}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={CLINIC_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: +91 {CLINIC_CONFIG.whatsapp}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Timings:</span>
                  <p className="text-slate-400">
                    Morning: 9:00 AM – 2:00 PM<br />
                    Evening: 5:00 PM – 10:00 PM<br />
                    (Mon–Sat) • Sun by Appt.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-xl transition text-center block"
              >
                Book An Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {currentYear} {CLINIC_CONFIG.clinicName}. Private Demo Concept.
          </p>

          <p className="text-[11px]">
            Designed for demonstration purposes. Not an official medical diagnosis portal.
          </p>
        </div>

      </div>
    </footer>
  );
};
