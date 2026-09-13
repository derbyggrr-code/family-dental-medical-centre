import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  Code, 
  Globe, 
  Database, 
  MessageCircle, 
  FileText,
  Copy,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicConfig';

interface ClientPitchGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  viewportMode: 'responsive' | 'mobile-360' | 'mobile-390' | 'mobile-414';
  onSetViewportMode: (mode: 'responsive' | 'mobile-360' | 'mobile-390' | 'mobile-414') => void;
}

export const ClientPitchGuideModal: React.FC<ClientPitchGuideModalProps> = ({
  isOpen,
  onClose,
  viewportMode,
  onSetViewportMode,
}) => {
  const [activeTab, setActiveTab] = useState<'pitch' | 'config' | 'deployment' | 'backend'>('pitch');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyConfigSnippet = () => {
    const snippet = `// File: src/data/clinicConfig.ts
export const CLINIC_CONFIG = {
  clinicName: "${CLINIC_CONFIG.clinicName}",
  phone: "${CLINIC_CONFIG.phone}",
  whatsapp: "${CLINIC_CONFIG.whatsapp}",
  address: "${CLINIC_CONFIG.address}",
  email: "yourclinic@gmail.com",
  openingHours: {
    morning: "9:00 AM – 2:00 PM",
    evening: "5:00 PM – 10:00 PM",
    days: "Monday to Saturday"
  }
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Client Pitch & Handover Guide
              </h3>
              <p className="text-xs text-slate-400">
                Demonstration overview for {CLINIC_CONFIG.clinicName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewport Simulation Bar */}
        <div className="bg-slate-100 p-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-slate-700 flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-teal-600" />
            <span>Mobile Device Simulation:</span>
          </span>

          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => onSetViewportMode('responsive')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${
                viewportMode === 'responsive' ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Full Screen
            </button>
            <button
              onClick={() => onSetViewportMode('mobile-390')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${
                viewportMode === 'mobile-390' ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              iPhone (390px)
            </button>
            <button
              onClick={() => onSetViewportMode('mobile-360')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${
                viewportMode === 'mobile-360' ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Android (360px)
            </button>
            <button
              onClick={() => onSetViewportMode('mobile-414')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${
                viewportMode === 'mobile-414' ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Pro Max (414px)
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-5 pt-3 gap-2 bg-slate-50">
          <button
            onClick={() => setActiveTab('pitch')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer ${
              activeTab === 'pitch'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Clinic Pitch Checklist
          </button>
          <button
            onClick={() => setActiveTab('config')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer ${
              activeTab === 'config'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Configuration File
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer ${
              activeTab === 'backend'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Backend & WhatsApp Integration
          </button>
          <button
            onClick={() => setActiveTab('deployment')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition cursor-pointer ${
              activeTab === 'deployment'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Domain & Go-Live
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600">
          
          {activeTab === 'pitch' && (
            <div className="space-y-4">
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-teal-900 text-xs">
                <strong>Pitching to the Clinic Owner:</strong> When opening this website on your smartphone or presenting to Dr. Govind Jha / the clinic management, here is how real clinic identity and demo safeguards are balanced:
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Real Clinic Name:</strong> {CLINIC_CONFIG.clinicName} prominently displayed in header, hero, about, location, and footer.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Real Clinic Address:</strong> {CLINIC_CONFIG.address} with direct Google Maps turn-by-turn navigation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Real Phone & WhatsApp:</strong> Primary <strong>{CLINIC_CONFIG.phone}</strong> and Secondary <strong>{CLINIC_CONFIG.secondaryPhone}</strong> wired to direct <code>tel:</code> and WhatsApp pre-filled chats.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Real Clinic Timings:</strong> Morning 9:00 AM – 2:00 PM and Evening 5:00 PM – 10:00 PM (Monday to Saturday) reflected in hero and contact.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">5 Real Clinic Perspectives Integrated:</strong> Exterior Signboard, Doctor Consultation Chamber, Ergonomic Operatory Chair, Active Clinical Treatment, and Welcoming Glass Entrance Ambiance are integrated into the Hero photo-tab switcher, About section, Location street landmark guide, and interactive Lightbox Gallery.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Dr. Govind Jha Verified Credentials:</strong> B.D.S. (RUHS), Delhi Dental Council Reg. No. A-18801, and Ex-Residencies at Sri Balaji Action Medical Institute & Govt. Dental College Jaipur prominently displayed.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Strict Demo Protection:</strong> Zero invented claims (no fake 20+ years, no fake patient counts). Fictional doctor profiles, sample reviews, and sample services are explicitly labeled as <code>DEMO CONTENT</code>.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'config' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Central Configuration File: <code>src/data/clinicConfig.ts</code>
                </span>
                <button
                  onClick={handleCopyConfigSnippet}
                  className="flex items-center gap-1 text-xs text-teal-700 hover:text-teal-900 font-semibold cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <p className="text-xs text-slate-600">
                All clinic data (Name, Phone, WhatsApp, Address, Timings, Doctors, Services, and Gallery) is stored in a single TypeScript file with the comment <code>// CLIENT INFORMATION — EDIT HERE</code>. You can change any detail in one place without touching HTML or React components.
              </p>

              <pre className="p-3 bg-slate-900 text-teal-300 text-xs rounded-xl overflow-x-auto font-mono">
{`// src/data/clinicConfig.ts
export const CLINIC_CONFIG = {
  clinicName: "FAMILY DENTAL AND MEDICAL CENTRE",
  phone: "8586992673",
  whatsapp: "8586992673",
  secondaryPhone: "8700456811",
  address: "B-405, INDER ENCLAVE-2, NEAR SHANI BAZAAR ROAD, KIRARI, DELHI-110086",
  email: "yourclinic@gmail.com",
  // ...
};`}
              </pre>
            </div>
          )}

          {activeTab === 'backend' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">
                Connecting a Real Appointment Backend Later
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Currently, the appointment booking modal validates user inputs and demonstrates a friendly confirmation screen with an instant "Send via WhatsApp" button.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Option 1: Direct WhatsApp Lead Generator (Zero Setup Cost)</strong>
                  <p className="text-slate-500 mt-0.5">The current modal already generates a pre-filled WhatsApp message with patient name, treatment, and time, sending it directly to 8586992673.</p>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Option 2: Cloud Firestore or Supabase Database</strong>
                  <p className="text-slate-500 mt-0.5">Add an API endpoint (e.g. <code>/api/appointments</code>) or serverless Firestore trigger to record appointments and notify reception staff via SMS or Telegram.</p>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Option 3: Clinic CRM / Practo / Google Calendar Sync</strong>
                  <p className="text-slate-500 mt-0.5">Integrate Google Calendar API to block out doctor surgery slots directly.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'deployment' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">
                How to Connect a Custom Domain & Deploy
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-600">
                <li>
                  <strong>Build Production Assets:</strong> Run <code>npm run build</code> to generate the optimized static bundle in <code>dist/</code>.
                </li>
                <li>
                  <strong>Deploy to Hosting:</strong> Host on Vercel, Netlify, Firebase Hosting, or Cloud Run.
                </li>
                <li>
                  <strong>Connect Custom Domain:</strong> Purchase a domain like <code>familydentalcentre.com</code> and add standard CNAME / A records pointing to the hosting server.
                </li>
                <li>
                  <strong>SSL / HTTPS:</strong> Automatic free SSL certificates are provisioned on modern hosting platforms.
                </li>
              </ol>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
