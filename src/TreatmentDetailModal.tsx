import React from 'react';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  AlertTriangle,
  Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';
import { ClinicService } from '../types/clinic';
import { CLINIC_CONFIG } from '../data/clinicConfig';

interface TreatmentDetailModalProps {
  service: ClinicService | null;
  onClose: () => void;
  onBook: (serviceName: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-teal-800 to-teal-700 text-white flex items-start justify-between relative">
          <div className="space-y-1">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-teal-900/60 px-2.5 py-0.5 rounded border border-teal-500/30 text-teal-200">
              {service.category} Dentistry • Sample Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {service.name}
            </h3>
            <p className="text-xs text-teal-100 max-w-lg">
              {service.shortDescription}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-teal-200 hover:text-white p-2 rounded-xl hover:bg-white/10 transition cursor-pointer flex-shrink-0"
            aria-label="Close treatment modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 space-y-6 overflow-y-auto text-left text-slate-700 text-sm">
          
          {/* Medical Disclaimer Alert */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">General Information Only:</strong> The details below describe the standard clinical approach. Personalized advice and exact diagnosis will be provided by the dental surgeon after an in-clinic examination.
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-600" />
              Treatment Overview
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              {service.overview}
            </p>
          </div>

          {/* Key Patient Benefits */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Key Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 bg-slate-50 rounded-lg text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Clinical Process */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              General Clinical Process
            </h4>
            <div className="space-y-2.5">
              {service.processSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-3 p-3 rounded-xl bg-teal-50/40 border border-teal-100">
                  <div className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {step.step}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">{step.title}</h5>
                    <p className="text-xs text-slate-600 mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                Frequently Asked Questions
              </h4>
              <div className="space-y-2">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-xs text-slate-900 mb-1">
                      Q: {faq.question}
                    </p>
                    <p className="text-xs text-slate-600">
                      A: {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clinic Contact Bar */}
          <div className="p-4 bg-slate-100 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-900">Have questions about this procedure?</span>
              <p className="text-slate-500">Contact {CLINIC_CONFIG.clinicName} in Kirari directly.</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={CLINIC_CONFIG.telUrl}
                className="flex items-center gap-1 text-slate-700 bg-white hover:bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-300 font-semibold"
              >
                <Phone className="w-3 h-3 text-teal-600" />
                <span>Call {CLINIC_CONFIG.phone}</span>
              </a>
              <a
                href={CLINIC_CONFIG.getWhatsAppUrl(`Hello, I have a question about ${service.name} at ${CLINIC_CONFIG.clinicName}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1.5 rounded-lg font-semibold"
              >
                <MessageCircle className="w-3 h-3 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-xl transition cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBook(service.name);
            }}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment for {service.name}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
