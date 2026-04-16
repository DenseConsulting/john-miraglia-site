import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { PracticeAreas } from '../components/PracticeAreas';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { Credentials } from '../components/Credentials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-body antialiased selection:bg-gold-500 selection:text-navy-900">
      <SEO
        title="Criminal Defense Attorney - John Miraglia | Chicago, IL"
        description="John Miraglia is an aggressive Chicago criminal defense attorney with 24+ years of experience defending clients facing serious felony charges. Available 24/7. Call (312) 829-2308."
        canonicalUrl="https://johnmiraglialaw.com/"
      />
      <Hero />
      <Stats />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
}
