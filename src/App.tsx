import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-body antialiased selection:bg-gold-500 selection:text-navy-900">
      <Hero />
      <Stats />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <Credentials />
      <Contact />
      <Footer />
    </div>);

}