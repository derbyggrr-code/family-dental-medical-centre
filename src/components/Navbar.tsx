import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicConfig';

interface NavbarProps {
  onOpenAppointmentModal: (defaultTreatment?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      // Determine active section for nav link highlight
      const sections = ['home', 'about', 'doctors', 'treatments', 'why-choose-us', 'gallery', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Doctors', href: '#doctors', id: 'doctors' },
    { label: 'Treatments', href: '#treatments', id: 'treatments' },
    { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs transition-all">
      {/* Top Clinical Utility Bar (Desktop / Tablet) */}
      <div className="hidden md:block bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={CLINIC_CONFIG.telUrl} 
              className="flex items-center gap-1.5 hover:text-teal-400 transition"
              id="top-bar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Call: <strong className="text-white">{CLINIC_CONFIG.phone}</strong></span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Timings: {CLINIC_CONFIG.openingHours.morning} | {CLINIC_CONFIG.openingHours.evening}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Kirari, Delhi-110086</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-teal-300/80 text-[11px] bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/60">
              Verified Real Details
            </span>
            <a
              href={CLINIC_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition"
              id="top-bar-whatsapp-link"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 ${isScrolled ? 'py-2.5 shadow-md bg-white/95 backdrop-blur-md' : 'py-3.5 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Clinic Brand & Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group text-left"
            id="clinic-brand-logo-link"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-teal-700 to-teal-500 text-white flex items-center justify-center shadow-md shadow-teal-700/20 flex-shrink-0 group-hover:scale-105 transition-transform">
              {/* Custom Medical Tooth Icon SVG */}
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6.5 2.5 10 .5 2 1.5 4 3.5 4s3-2 3.5-4c1-3.5 2.5-6.5 2.5-10 0-3.5-2.5-6-6-6z" />
                <path d="M9 9h6" />
                <path d="M12 6v6" />
              </svg>
            </div>
            <div>
              <span className="block text-sm sm:text-base md:text-lg font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition leading-tight">
                {CLINIC_CONFIG.clinicName}
              </span>
              <span className="block text-[10px] sm:text-xs font-medium text-teal-700 tracking-wide">
                DENTAL & ORAL HEALTHCARE • KIRARI, DELHI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition cursor-pointer ${
                    isActive 
                      ? 'text-teal-700 bg-teal-50/80 font-bold' 
                      : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CLINIC_CONFIG.telUrl}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 px-3 py-2 rounded-lg border border-slate-200 hover:border-teal-300 transition"
              id="navbar-call-button"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{CLINIC_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-xs xl:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition cursor-pointer"
              id="navbar-book-appointment-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Quick Action Buttons & Hamburger Toggle */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={CLINIC_CONFIG.telUrl}
              className="p-2 rounded-lg text-slate-700 hover:text-teal-700 hover:bg-slate-100 transition"
              aria-label="Call clinic"
              id="mobile-quick-call"
            >
              <Phone className="w-5 h-5 text-teal-600" />
            </a>

            <a
              href={CLINIC_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition"
              aria-label="WhatsApp clinic"
              id="mobile-quick-whatsapp"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </a>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-teal-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-xs"
              id="mobile-quick-book"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto"
          id="mobile-drawer-menu"
        >
          {/* Real Clinic Info Header in Mobile Drawer */}
          <div className="p-3 bg-teal-50/80 rounded-xl border border-teal-100 text-xs text-teal-950 space-y-1">
            <p className="font-bold text-teal-900">{CLINIC_CONFIG.clinicName}</p>
            <p className="text-slate-600 flex items-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>{CLINIC_CONFIG.address}</span>
            </p>
            <p className="text-slate-600 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span>{CLINIC_CONFIG.phone} / {CLINIC_CONFIG.secondaryPhone}</span>
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-1 py-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50/60 transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl shadow transition"
              id="mobile-drawer-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book An Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={CLINIC_CONFIG.telUrl}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-semibold transition"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Clinic</span>
              </a>

              <a
                href={CLINIC_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold transition border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href={CLINIC_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs text-slate-600 hover:text-teal-700 transition text-center"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>Get Directions to Inder Enclave-2</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
            </a>
          </div>

        </div>
      )}
    </header>
  );
};
