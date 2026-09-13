export interface BookedSlot {
  id: string;
  patientName: string;
  phoneNumber: string;
  treatment: string;
  date: string;
  timeSlot: string;
  status: 'pending_confirmation' | 'confirmed';
  createdAt: string;
}

const STORAGE_KEY = 'family_dental_appointments_v1';

// Initial realistic pre-booked slots for today/upcoming days so users can see slot conflicts handled in real-time
const INITIAL_DEMO_BOOKINGS: BookedSlot[] = [
  {
    id: 'b-1',
    patientName: 'Anil Kumar',
    phoneNumber: '98112XXXXX',
    treatment: 'Root Canal Treatment (RCT)',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '06:00 PM - 06:30 PM',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'b-2',
    patientName: 'Priya Verma',
    phoneNumber: '98731XXXXX',
    treatment: 'Teeth Cleaning & Polishing',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM - 11:30 AM',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  }
];

export const getBookings = (): BookedSlot[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_BOOKINGS));
      return INITIAL_DEMO_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_BOOKINGS;
  }
};

export const saveBooking = (newBooking: Omit<BookedSlot, 'id' | 'createdAt' | 'status'>): { success: boolean; error?: string; booking?: BookedSlot } => {
  const existing = getBookings();
  
  // Check conflict: Same date & same time slot
  const isConflict = existing.some(
    b => b.date === newBooking.date && b.timeSlot === newBooking.timeSlot
  );

  if (isConflict) {
    return {
      success: false,
      error: `Sorry, the slot "${newBooking.timeSlot}" on this date has just been booked. Please choose another available slot!`,
    };
  }

  const created: BookedSlot = {
    ...newBooking,
    id: 'book-' + Date.now(),
    status: 'pending_confirmation',
    createdAt: new Date().toISOString(),
  };

  const updated = [created, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignore storage issues
  }

  return { success: true, booking: created };
};

// Available discrete 30-min slots based on real clinic timings:
// Morning: 9:00 AM - 2:00 PM (10 slots)
// Evening: 5:00 PM - 10:00 PM (10 slots)
export const MORNING_SLOTS = [
  '09:00 AM - 09:30 AM',
  '09:30 AM - 10:00 AM',
  '10:00 AM - 10:30 AM',
  '10:30 AM - 11:00 AM',
  '11:00 AM - 11:30 AM',
  '11:30 AM - 12:00 PM',
  '12:00 PM - 12:30 PM',
  '12:30 PM - 01:00 PM',
  '01:00 PM - 01:30 PM',
  '01:30 PM - 02:00 PM',
];

export const EVENING_SLOTS = [
  '05:00 PM - 05:30 PM',
  '05:30 PM - 06:00 PM',
  '06:00 PM - 06:30 PM',
  '06:30 PM - 07:00 PM',
  '07:00 PM - 07:30 PM',
  '07:30 PM - 08:00 PM',
  '08:00 PM - 08:30 PM',
  '08:30 PM - 09:00 PM',
  '09:00 PM - 09:30 PM',
  '09:30 PM - 10:00 PM',
];
