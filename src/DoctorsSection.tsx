import React from 'react';
import { 
  UserCheck, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  AlertCircle 
} from 'lucide-react';
import { DEMO_DOCTORS } from '../data/clinicConfig';

interface DoctorsSectionProps {
  onOpenAppointmentModal: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="doctors" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Demo Warning Notice */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200 mb-3">
            <UserCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Dental Team Showcase</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sample Dentist & Specialist Profiles
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            This section demonstrates the doctor presentation card layout. Actual doctor credentials, council registrations, and bios will be updated upon clinic sign-off.
          </p>

          {/* Mandatory Demo Content Tag */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-300/80 text-amber-900 text-xs px-4 py-2 rounded-xl shadow-xs">
            <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-left">
              DEMO CONTENT — Sample doctor profiles designed for preview purposes only. Not verified claims about the clinic.
            </span>
          </div>
        </div>

        {/* Doctor Profile Cards Grid (2 sample profiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DEMO_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait Header */}
                <div className="relative bg-slate-100 h-64 sm:h-72 overflow-hidden flex items-center justify-center">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top hover:scale-103 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Demo or Verified Tag Overlay */}
                  {doc.isDemoDoctor ? (
                    <div className="absolute top-3 left-3 bg-amber-500/90 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow backdrop-blur-xs">
                      SAMPLE SPECIALIST PROFILE
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-emerald-600/95 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow backdrop-blur-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-200" />
                      <span>VERIFIED FROM CLINIC BOARD</span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow backdrop-blur-xs">
                    {doc.isDemoDoctor ? 'DEMO CONTENT' : 'CLINIC SURGEON'}
                  </div>

                  {/* Name & Title on Image Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-teal-300 font-medium mt-0.5">
                      {doc.title}
                    </p>
                  </div>
                </div>

                {/* Doctor Details Body */}
                <div className="p-5 sm:p-6 space-y-4 text-left">
                  
                  {/* Qualifications & Specialization */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2 text-slate-700">
                      <GraduationCap className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900">
                          {doc.isDemoDoctor ? 'Qualification Placeholder:' : 'Verified Qualifications & Residencies:'}
                        </span>
                        <p className="text-slate-600">{doc.qualifications}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-slate-700">
                      <Briefcase className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900">
                          {doc.isDemoDoctor ? 'Specialization:' : 'Specialities & Clinical Focus:'}
                        </span>
                        <p className="text-slate-600">{doc.specialization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      {doc.isDemoDoctor ? 'Short Biography Placeholder' : 'About the Doctor'}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <button
                  onClick={onOpenAppointmentModal}
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer border border-teal-200 hover:border-transparent"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Consultation with Doctor</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Notice for Clinic Owner */}
        <div className="mt-8 text-center text-xs text-slate-500">
          💡 <em>Note for Clinic Owner: In the final production website, your actual degrees, Delhi Dental Council registration number, and clinic doctor bio will replace these sample placeholders.</em>
        </div>

      </div>
    </section>
  );
};
