import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { FAQ_ITEMS, CLINIC_CONFIG } from '../data/clinicConfig';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Answers to common queries regarding appointments, treatments, clinic timings, and location in Kirari, Delhi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                    isOpen ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner at Bottom */}
        <div className="mt-10 p-6 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm sm:text-base text-teal-950">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-teal-800 mt-0.5">
              Contact our clinic reception directly via call or WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href={CLINIC_CONFIG.telUrl}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{CLINIC_CONFIG.phone}</span>
            </a>

            <a
              href={CLINIC_CONFIG.getWhatsAppUrl("Hello, I have an inquiry about Family Dental and Medical Centre.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
