import React from 'react';
import { Phone, MessageCircle, Calendar, Navigation, ArrowRight } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicConfig';

interface QuickActionsProps {
  onOpenAppointmentModal: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onOpenAppointmentModal }) => {
  const actions = [
    {
      id: 'call',
      title: 'Call Clinic',
      subtitle: `+91 ${CLINIC_CONFIG.phone}`,
      actionText: 'Call Now',
      href: CLINIC_CONFIG.telUrl,
      icon: Phone,
      bgColor: 'bg-teal-50 hover:bg-teal-100/80',
      iconBg: 'bg-teal-600 text-white',
      borderColor: 'border-teal-200',
      isButton: false,
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Us',
      subtitle: 'Instant chat & enquiries',
      actionText: 'Message Now',
      href: CLINIC_CONFIG.getWhatsAppUrl(),
      icon: MessageCircle,
      bgColor: 'bg-emerald-50 hover:bg-emerald-100/80',
      iconBg: 'bg-emerald-600 text-white',
      borderColor: 'border-emerald-200',
      isButton: false,
      external: true,
    },
    {
      id: 'appointment',
      title: 'Book Appointment',
      subtitle: 'Choose preferred date & time',
      actionText: 'Reserve Slot',
      icon: Calendar,
      bgColor: 'bg-sky-50 hover:bg-sky-100/80',
      iconBg: 'bg-sky-600 text-white',
      borderColor: 'border-sky-200',
      isButton: true,
      onClick: onOpenAppointmentModal,
    },
    {
      id: 'directions',
      title: 'Get Directions',
      subtitle: 'B-405, Inder Enclave-2, Kirari',
      actionText: 'Open in Maps',
      href: CLINIC_CONFIG.googleMapsUrl,
      icon: Navigation,
      bgColor: 'bg-slate-50 hover:bg-slate-100/80',
      iconBg: 'bg-slate-800 text-white',
      borderColor: 'border-slate-200',
      isButton: false,
      external: true,
    },
  ];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((act) => {
          const Icon = act.icon;
          
          const content = (
            <div className={`p-5 rounded-2xl border transition-all duration-200 shadow-xs hover:shadow-md ${act.bgColor} ${act.borderColor} flex flex-col justify-between h-full group text-left`}>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform ${act.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200/60">
                  Direct Action
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-900 transition">
                  {act.title}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                  {act.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-teal-700">
                <span>{act.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );

          if (act.isButton) {
            return (
              <button
                key={act.id}
                onClick={act.onClick}
                className="w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-2xl"
                id={`quick-action-${act.id}`}
              >
                {content}
              </button>
            );
          }

          return (
            <a
              key={act.id}
              href={act.href}
              target={act.external ? '_blank' : undefined}
              rel={act.external ? 'noopener noreferrer' : undefined}
              className="w-full text-left focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-2xl block"
              id={`quick-action-${act.id}`}
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
};
