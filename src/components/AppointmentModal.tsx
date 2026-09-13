import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Phone, 
  User, 
  Mail, 
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_SERVICES } from '../data/clinicConfig';
import { 
  getBookings, 
  saveBooking, 
  MORNING_SLOTS, 
  EVENING_SLOTS, 
  BookedSlot 
} from '../utils/appointmentManager';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment = '',
}) => {
  // Today's date YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState(defaultTreatment || CLINIC_SERVICES[0].name);
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [selectedSlot, setSelectedSlot] = useState<string>('05:00 PM - 05:30 PM');
  const [shiftTab, setShiftTab] = useState<'evening' | 'morning'>('evening');
  const [notes, setNotes] = useState('');

  const [existingBookings, setExistingBookings] = useState<BookedSlot[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookedSlot | null>(null);

  useEffect(() => {
    if (defaultTreatment) {
      setTreatment(defaultTreatment);
    }
  }, [defaultTreatment]);

  // Load existing bookings whenever modal opens or date changes
  useEffect(() => {
    if (isOpen) {
      setExistingBookings(getBookings());
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

  // Check if a specific slot is already taken on selected date
  const isSlotBooked = (slot: string) => {
    return existingBookings.some(b => b.date === selectedDate && b.timeSlot === slot);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('Please enter patient name and contact number.');
      return;
    }

    if (phoneNumber.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!selectedSlot) {
      setErrorMsg('Please select an available time slot.');
      return;
    }

    // Save with real-time conflict prevention
    const result = saveBooking({
      patientName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      treatment,
      date: selectedDate,
      timeSlot: selectedSlot,
    });

    if (!result.success) {
      setErrorMsg(result.error || 'This slot was just booked! Please choose another time.');
      // Refresh local bookings list so UI updates disabled state
      setExistingBookings(getBookings());
      return;
    }

    setConfirmedBooking(result.booking || null);
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `*🦷 New Dental Appointment Request*\n` +
      `• *Clinic:* ${CLINIC_CONFIG.clinicName}\n` +
      `• *Patient Name:* ${fullName}\n` +
      `• *Phone:* ${phoneNumber}\n` +
      `• *Treatment:* ${treatment}\n` +
      `• *Requested Date:* ${selectedDate}\n` +
      `• *Time Slot:* ${selectedSlot}\n` +
      (notes ? `• *Problem/Note:* ${notes}\n` : '') +
      `\n_Please confirm my appointment slot. Thank you!_`;
    return `https://wa.me/918586992673?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-teal-800 to-teal-700 text-white flex items-start justify-between">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-900/70 px-2 py-0.5 rounded text-teal-200">
                1-on-1 Patient Slot Booking
              </span>
              <span className="text-[11px] bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> No Double Booking
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Book Doctor Appointment
            </h3>
            <p className="text-xs text-teal-100">
              {CLINIC_CONFIG.clinicName} • Inder Enclave-2, Kirari
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-teal-200 hover:text-white p-2 rounded-xl hover:bg-white/10 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto text-left space-y-4">
          
          {isSubmitted && confirmedBooking ? (
            /* Success View */
            <div className="py-4 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Your Slot Request Has Been Locked!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Reference Token: <span className="font-mono font-bold text-teal-700">{confirmedBooking.id.toUpperCase()}</span>
                </p>
              </div>

              {/* Appointment Summary Card */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold text-slate-800">{fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-semibold text-slate-800">+91 {phoneNumber}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Treatment:</span>
                  <span className="font-semibold text-teal-700">{treatment}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-bold text-slate-900">{selectedDate} ({selectedSlot})</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    Slot Held • Clinic Verifying
                  </span>
                </div>
              </div>

              {/* Clear Solution to Prevent Double Booking */}
              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-teal-950 text-xs text-left flex items-start gap-2.5 max-w-md mx-auto">
                <CalendarCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Double-Booking Safety Active:</strong> Yeh time slot (<span className="font-semibold">{selectedSlot}</span>) ab kisi aur patient ke liye available nahi rahega. Doctor ki team WhatsApp/Call par 10 minute me final token bhej degi.
                </p>
              </div>

              {/* Instant WhatsApp Send Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition text-xs sm:text-sm w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Slot Details to Doctor on WhatsApp (+91 {CLINIC_CONFIG.whatsapp})</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  Book another slot
                </button>
              </div>
            </div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* How it prevents collision info banner */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span>Only 1 patient per 30-min slot. Booked slots get automatically locked.</span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs font-semibold border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Mobile Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Dental Treatment / Concern <span className="text-red-500">*</span>
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none text-slate-800 font-medium"
                >
                  {CLINIC_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name}
                    </option>
                  ))}
                  <option value="General Consultation / Toothache">General Consultation / Toothache</option>
                  <option value="Dental Emergency">Dental Emergency / Severe Pain</option>
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Appointment Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    min={todayStr}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                  />
                </div>
              </div>

              {/* Real Clinic Timing Slots (Morning 9-2 PM, Evening 5-10 PM) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>Choose Specific 30-Minute Slot:</span>
                  </label>
                  
                  {/* Morning vs Evening Shift Selector */}
                  <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[11px] font-semibold">
                    <button
                      type="button"
                      onClick={() => setShiftTab('morning')}
                      className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                        shiftTab === 'morning' ? 'bg-white text-teal-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Morning (9 AM–2 PM)
                    </button>
                    <button
                      type="button"
                      onClick={() => setShiftTab('evening')}
                      className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                        shiftTab === 'evening' ? 'bg-white text-teal-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Evening (5 PM–10 PM)
                    </button>
                  </div>
                </div>

                {/* Slots Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 max-h-44 overflow-y-auto p-1 bg-slate-50/50 rounded-xl border border-slate-200">
                  {(shiftTab === 'morning' ? MORNING_SLOTS : EVENING_SLOTS).map((slot) => {
                    const booked = isSlotBooked(slot);
                    const isSelected = selectedSlot === slot;

                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={booked}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-2.5 py-2 rounded-lg text-[11px] font-semibold border transition text-center cursor-pointer flex flex-col items-center justify-center ${
                          booked 
                            ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed line-through' 
                            : isSelected
                              ? 'bg-teal-600 border-teal-600 text-white shadow-xs font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-teal-400 hover:bg-teal-50/50'
                        }`}
                      >
                        <span>{slot}</span>
                        <span className="text-[9px] mt-0.5">
                          {booked ? 'Occupied ❌' : isSelected ? 'Selected ✓' : 'Available'}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-slate-500 mt-1.5">
                  Grey / crossed-out slots are already reserved by another patient on {selectedDate}.
                </p>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Symptoms / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Tooth sensitivity in lower jaw, bleeding gums, or regular checkup..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  className="w-full flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold py-3 px-4 rounded-xl shadow transition cursor-pointer text-xs sm:text-sm"
                  id="submit-appointment-btn"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Lock Slot & Request Confirmation</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-slate-500">
                  Emergency Toothache? Call Dr. Govind Jha directly at <strong className="text-teal-700 font-bold">+91 {CLINIC_CONFIG.phone}</strong>
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
