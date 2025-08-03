import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import CareerAddonsSection from './components/CareerAddonsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ReferralSection from './components/ReferralSection';
import TrainersSection from './components/TrainersSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-grafanaBg text-white font-body overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main className="overflow-x-hidden">
        <HeroSection />
        <PricingSection />
        <CoursesSection />
        <CareerAddonsSection />
        <TestimonialsSection />
        <TrainersSection />
        <AboutSection />
        <ReferralSection />
        <ContactSection />
      </main>

      <FloatingWhatsApp />
    </div>
  );
};

export default HomePage; 