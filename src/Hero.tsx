import React, { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Award,
  ChevronRight
} from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_IMAGES } from '../data/clinicConfig';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

const HERO_PHOTO_TABS = [
  {
    id: 'exterior',
    label: 'Clinic Signboard',
    image: CLINIC_IMAGES.exteriorSignboard,
    badge: 'Official Clinic Signboard & Entrance',
    title: 'Family Dental and Medical Centre Entrance',
    subtitle: 'B-405, Inder Enclave-2, Near Shani Bazaar Road, Kirari, Delhi',
  },
  {
    id: 'chair',
    label: 'Operatory Chair',
    image: CLINIC_IMAGES.treatmentChair,
    badge: 'Modern Operatory Unit',
    title: 'Ergonomic Dental Chair & Ultrasonic Setup',
    subtitle: 'High-grade hygienic operatory for comfortable treatments',
  },
  {
    id: 'consultation',
    label: 'Consultation Desk',
    image: CLINIC_IMAGES.consultationDesk,
    badge: 'Doctor Consultation Chamber',
    title: 'Dr. Govind Jha Consultation Suite',
    subtitle: 'Patient education models, diagnostic seating & clear guidance',
  },
  {
    id: 'procedure',
    label: 'Clinical Care',
    image: CLINIC_IMAGES.treatmentProcedure,
    badge: 'Gentle Treatment In Progress',
    title: 'Doctor & Assistant Clinical Care',
    subtitle: 'Sterile masks, gloves and focused patient-first attention',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const currentPhoto = HERO_PHOTO_TABS[selectedTab];

  return (
    <section id="home" className="relative bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Decorative subtle backdrop elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clinic Introduction & Real Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Real Clinic Location Pill */}
            <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-900 border border-teal-200/80 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
              <MapPin className="w-4 h-4 text-teal-700 flex-shrink-0" />
              <span>B-405, Inder Enclave-2, Near Shani Bazaar Road, Kirari, Delhi</span>
            </div>

            {/* REAL CLINIC NAME */}
            <div>
              <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-600 mb-1">
                DEMO PREVIEW FOR CLINIC OWNER
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {CLINIC_CONFIG.clinicName}
              </h1>
            </div>

            {/* Verified Doctor Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 p-2.5 rounded-xl bg-teal-50/90 border border-teal-200 text-xs text-teal-900 font-medium">
              <span className="flex items-center gap-1.5 font-bold text-teal-800">
                <Award className="w-4 h-4 text-teal-700 flex-shrink-0" />
                Dr. Govind Jha, B.D.S. (RUHS)
              </span>
              <span className="text-teal-400">•</span>
              <span>DDC Reg. No. A-18801</span>
              <span className="text-teal-400">•</span>
              <span>Dental & Oral Surgeon (Approved by NCT of Delhi Govt.)</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-800 tracking-tight">
              {CLINIC_CONFIG.tagline}
            </h2>

            {/* General, honest description without unsupported claims */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Family Dental and Medical Centre welcomes patients with patient-focused dental consultations, restorative tooth care, preventive checkups, and gentle treatments designed for individuals and families in Kirari, Delhi.
            </p>

            {/* Primary Action Buttons: Book, WhatsApp, Call Now */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer text-sm sm:text-base"
                id="hero-book-btn"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={CLINIC_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold px-5 py-3.5 rounded-xl shadow-md hover:shadow-lg transition text-sm sm:text-base"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={CLINIC_CONFIG.telUrl}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3.5 rounded-xl border border-slate-300 shadow-xs hover:border-teal-400 transition text-sm sm:text-base"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Now: {CLINIC_CONFIG.phone}</span>
              </a>
            </div>

            {/* Honest Highlights / Features Checklist */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/60 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Clean Operatory</h4>
                  <p className="text-[11px] text-slate-500">Sterilized modern dental equipment</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/60 border border-slate-100">
                <Clock className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Two Daily Shifts</h4>
                  <p className="text-[11px] text-slate-500">9:00 AM–2:00 PM & 5:00 PM–10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/60 border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Verified Credentials</h4>
                  <p className="text-[11px] text-slate-500">Ex-Resident Balaji Action & Govt. College</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Clinic Imagery & View Switcher */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Interactive Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-102 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                {/* Floating Image Label */}
                <div className="absolute top-3 left-3 bg-teal-900/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow">
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  <span>{currentPhoto.badge}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider block">
                    Real Clinic Photo
                  </span>
                  <p className="text-sm sm:text-base font-bold leading-snug">
                    {currentPhoto.title}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {currentPhoto.subtitle}
                  </p>
                </div>
              </div>

              {/* Interactive Thumbnail / View Selector Tabs */}
              <div className="mt-3 grid grid-cols-4 gap-2">
                {HERO_PHOTO_TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all p-0.5 cursor-pointer text-left ${
                      selectedTab === idx 
                        ? 'border-teal-600 ring-2 ring-teal-400/40 shadow-sm' 
                        : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="h-12 sm:h-14 w-full rounded-lg overflow-hidden relative">
                      <img 
                        src={tab.image} 
                        alt={tab.label}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-900/30" />
                    </div>
                    <span className="block text-[10px] font-bold text-slate-700 text-center truncate px-1 pt-1">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Inset Badge 1: Clinic Timings & Schedule */}
              <div className="absolute -bottom-8 -left-4 sm:-left-6 bg-white p-3 rounded-xl shadow-xl border border-slate-100 max-w-[230px] hidden md:block z-10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Clinic Timings</h5>
                    <span className="text-[10px] text-teal-700 font-semibold">Mon – Sat</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 font-medium">
                  {CLINIC_CONFIG.openingHours.morning}
                  <br />
                  {CLINIC_CONFIG.openingHours.evening}
                </p>
              </div>

              {/* Inset Badge 2: Real Contact / WhatsApp */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Direct Helpline
                  </span>
                  <a 
                    href={CLINIC_CONFIG.telUrl} 
                    className="text-xs font-bold text-slate-900 hover:text-teal-700"
                  >
                    +91 {CLINIC_CONFIG.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
