import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle,
  AlertCircle,
  Award
} from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_IMAGES } from '../data/clinicConfig';

interface AboutSectionProps {
  onOpenAppointmentModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>About The Clinic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dedicated Care at {CLINIC_CONFIG.clinicName}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Family Dental and Medical Centre provides friendly, reliable, and patient-first oral healthcare in Kirari, Delhi, guided by verified dental surgeon Dr. Govind Jha.
          </p>

          {/* Demo Notice */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 text-xs px-3.5 py-1.5 rounded-lg">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
            <span className="font-medium">
              PRIVATE DEMO WEBSITE — Real clinic photos & verified credentials shown below.
            </span>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase using Real Consultation & Entrance Photos */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Consultation Desk Main Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src={CLINIC_IMAGES.consultationDesk}
                alt="Dr. Govind Jha Consultation Chamber and Diagnostic Desk"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-103 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-3 left-3 bg-teal-900/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow">
                <Award className="w-3 h-3 text-teal-300" />
                <span>Doctor Consultation Chamber</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">
                  Consultation & Diagnosis Suite
                </span>
                <p className="text-sm font-bold text-white">
                  Dr. Govind Jha, B.D.S. (RUHS) Consultation Desk with anatomical patient models
                </p>
              </div>
            </div>

            {/* Sub-cards with Entrance Ambiance & Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 h-28 group">
                <img
                  src={CLINIC_IMAGES.entranceAmbiance}
                  alt="Clinic Welcoming Entrance Ambiance"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <span className="text-[9px] uppercase font-bold text-teal-300">Entrance Ambiance</span>
                  <p className="text-[11px] font-semibold leading-tight text-white">Welcoming & Clean</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-teal-700 font-bold text-xs mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Two Shifts Daily</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  9:00 AM – 2:00 PM &<br />5:00 PM – 10:00 PM
                </p>
                <span className="text-[10px] text-teal-600 font-semibold mt-1">Mon – Sat</span>
              </div>
            </div>

            {/* Verified Signboard Credentials Inset */}
            <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
              <div className="font-bold flex items-center gap-1.5 text-teal-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Verified Credentials from Signboard & Consultation Suite:</span>
              </div>
              <ul className="text-[11px] text-teal-800 space-y-0.5 list-disc list-inside">
                <li>B.D.S. (RUHS) • Delhi Dental Council Reg. No. A-18801</li>
                <li>Ex-Resident: Sri Balaji Action Medical Institute</li>
                <li>Ex-Resident: Govt. Dental College & Hospital, Jaipur</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Mission & Clinical Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Dedicated to Patient Comfort, Clear Advice & Quality Oral Health
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Visiting the dentist should never feel intimidating. At {CLINIC_CONFIG.clinicName}, our philosophy centers on patient education, gentle clinical touch, and transparent treatment options tailored to your needs and budget.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you require regular cleaning, prompt toothache relief through root canal therapy, aesthetic tooth-colored fillings, or orthodontic braces, our operatory is prepared to provide supportive, high-grade dental care.
              </p>
            </div>

            {/* Core Commitments Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Gentle & Respectful Approach</h4>
                  <p className="text-xs text-slate-500">Every treatment step is explained clearly so you feel relaxed and fully informed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Complete Family Dental Services</h4>
                  <p className="text-xs text-slate-500">Laser fillings, root canals, crown & bridges, dentures, and braces under one roof.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Convenient Kirari, Delhi Location</h4>
                  <p className="text-xs text-slate-500">Easily accessible at Inder Enclave-2 near Shani Bazaar Road with quick WhatsApp enquiry support.</p>
                </div>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition cursor-pointer"
              >
                Schedule Consultation
              </button>
              <a
                href={CLINIC_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-800 text-xs sm:text-sm font-semibold hover:underline"
              >
                Chat on WhatsApp with Doctor →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
