import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Camera
} from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_IMAGES } from '../data/clinicConfig';

export const LocationContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
  };

  const forwardToWhatsApp = () => {
    const text = `*New Contact Message for ${CLINIC_CONFIG.clinicName}*\n` +
      `• Name: ${formState.name}\n` +
      `• Phone: ${formState.phone}\n` +
      `• Subject: ${formState.subject || 'General Enquiry'}\n` +
      `• Message: ${formState.message}\n`;
    window.open(CLINIC_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinic Location & Contact</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Us or Get in Touch
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Conveniently located in Inder Enclave-2 near Shani Bazaar Road, Kirari, Delhi. Reach out by phone, WhatsApp, or message below.
          </p>
        </div>

        {/* 2-Column Layout: Details + Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Real Clinic Details Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-teal-700 block">
                    Verified Clinic Address
                  </span>
                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {CLINIC_CONFIG.clinicName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {CLINIC_CONFIG.address}
                  </p>
                  
                  <div className="pt-3">
                    <a
                      href={CLINIC_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xs transition"
                      id="contact-get-directions-btn"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Street Landmark & Entrance Guide Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-44 sm:h-48 w-full group">
                <img
                  src={CLINIC_IMAGES.exteriorSignboard}
                  alt="Family Dental and Medical Centre Real Signboard in Kirari, Delhi"
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-teal-950/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                  <Camera className="w-3 h-3 text-teal-300" />
                  <span>Look for this Illuminated Board</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-tight">
                    Ground Floor Entrance with Frosted Glass Doors
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    B-405, Inder Enclave-2, Near Shani Bazaar Road, Kirari
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-2 flex-1">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-700 block">
                    Phone & WhatsApp Direct
                  </span>
                  <div>
                    <span className="text-xs text-slate-500 block">Primary Helpline:</span>
                    <a
                      href={CLINIC_CONFIG.telUrl}
                      className="text-base font-bold text-slate-900 hover:text-teal-700 transition"
                    >
                      +91 {CLINIC_CONFIG.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Secondary Line (from signboard):</span>
                    <a
                      href={CLINIC_CONFIG.secondaryTelUrl}
                      className="text-sm font-semibold text-slate-700 hover:text-teal-700 transition"
                    >
                      +91 {CLINIC_CONFIG.secondaryPhone}
                    </a>
                  </div>
                  <div className="pt-1">
                    <a
                      href={CLINIC_CONFIG.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-bold hover:underline"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp (+91 {CLINIC_CONFIG.whatsapp})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings & Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1 text-xs">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-sky-700 block">
                    Clinic Timings
                  </span>
                  <div className="text-slate-700">
                    <strong>Monday to Saturday:</strong>
                    <div className="text-slate-600 pl-2">
                      • Morning: {CLINIC_CONFIG.openingHours.morning}
                      <br />
                      • Evening: {CLINIC_CONFIG.openingHours.evening}
                    </div>
                  </div>
                  <div className="text-slate-700 pt-1">
                    <strong>Sunday:</strong>
                    <p className="text-amber-800 font-medium pl-2">
                      {CLINIC_CONFIG.openingHours.sunday}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-slate-500">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email: <em>{CLINIC_CONFIG.email}</em></span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed + Direct Message Form */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Interactive Map Preview Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-3.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Google Maps Location Finder</span>
                </div>
                <a
                  href={CLINIC_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-900 font-bold inline-flex items-center gap-1 hover:underline"
                >
                  <span>Open Fullscreen Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Embed using exact provided address */}
              <div className="h-64 sm:h-72 w-full bg-slate-200 relative">
                <iframe
                  title="Family Dental and Medical Centre Location Map"
                  src="https://maps.google.com/maps?q=B-405,+INDER+ENCLAVE-2,+NEAR+SHANI+BAZAAR+ROAD,+KIRARI,+DELHI-110086&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-3 bg-white text-[11px] text-slate-500 text-center sm:text-left border-t border-slate-100">
                📌 <strong>Real Address:</strong> B-405, Inder Enclave-2, Near Shani Bazaar Road, Kirari, Delhi-110086
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Send a Message to Clinic
                </h3>
                <p className="text-xs text-slate-500">
                  Have a question about dental treatments or fees? Fill out the demo contact form below.
                </p>
              </div>

              {submitted ? (
                <div className="p-5 bg-teal-50 rounded-xl border border-teal-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-base">
                    Message Received!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you {formState.name}. In the production website, this message will be routed straight to the clinic's email or reception WhatsApp.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={forwardToWhatsApp}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward Directly to WhatsApp</span>
                    </button>
                  </div>
                  <div className="pt-1">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-slate-600 underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ramesh Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="9876543210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject / Treatment of Interest
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Toothache consultation, Root Canal, Braces"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your dental concern..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full p-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-6 rounded-xl text-xs sm:text-sm shadow-xs transition cursor-pointer"
                      id="contact-submit-btn"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>

                    <span className="text-[11px] text-slate-400">
                      Simulated demo message form
                    </span>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
