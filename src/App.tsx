import React, { useState } from 'react';
import { DemoDisclaimerBanner } from './components/DemoDisclaimerBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickActions } from './components/QuickActions';
import { AboutSection } from './components/AboutSection';
import { DoctorsSection } from './components/DoctorsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBottomBar } from './components/StickyMobileBottomBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('');

  const handleOpenAppointmentModal = (serviceName?: string) => {
    setSelectedTreatmentForBooking(serviceName || '');
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Demo Banner */}
      <DemoDisclaimerBanner />

      {/* Sticky Responsive Navbar */}
      <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* Quick Action Cards (Call, WhatsApp, Appointment, Directions) */}
        <QuickActions onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* About Section */}
        <AboutSection onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* Doctors Section */}
        <DoctorsSection onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* Comprehensive 12 Treatments Section with Detail Modal */}
        <ServicesSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* Clinic Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Testimonial UI Showcase */}
        <TestimonialsSection />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Location with Google Maps & Contact Form */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Sticky Mobile Bottom Action Bar (Call, WhatsApp, Book, Directions) */}
      <StickyMobileBottomBar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Floating WhatsApp Action Button with Pre-filled message */}
      <FloatingWhatsApp />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        defaultTreatment={selectedTreatmentForBooking}
      />
    </div>
  );
}
