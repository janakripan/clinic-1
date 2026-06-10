import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import StatsCards from './components/StatsCards';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import AppointmentSection from './components/AppointmentSection';
import DoctorsSection from './components/DoctorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import PartnersSection from './components/PartnersSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans text-bodyText overflow-x-hidden">
      <Header />
      <Hero />
      <AnimatedSection><StatsCards /></AnimatedSection>
      <Services />
      <AnimatedSection><WhyChooseUs /></AnimatedSection>
      <ProcessSection />
      <AnimatedSection><AppointmentSection /></AnimatedSection>
      <AnimatedSection><DoctorsSection /></AnimatedSection>
      <AnimatedSection><TestimonialsSection /></AnimatedSection>
      <AnimatedSection><CTASection /></AnimatedSection>
      <AnimatedSection><PartnersSection /></AnimatedSection>
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
