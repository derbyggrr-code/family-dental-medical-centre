export interface ClinicService {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  category: 'General' | 'Cosmetic' | 'Restorative' | 'Orthodontic' | 'Specialized';
  overview: string;
  benefits: string[];
  processSteps: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  isPopular?: boolean;
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  designation: string;
  qualifications: string;
  experienceBadge: string;
  specialization: string;
  bio: string;
  imageUrl: string;
  isDemoDoctor: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic Facility' | 'Operatory' | 'Clinical Care' | 'Reception';
  imageUrl: string;
  sourceType: 'CLIENT_PROVIDED' | 'SAMPLE_DEMO';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  treatmentName: string;
  feedback: string;
  rating: number;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Appointments' | 'Treatments' | 'Location & Timings' | 'General';
}

export interface AppointmentRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
