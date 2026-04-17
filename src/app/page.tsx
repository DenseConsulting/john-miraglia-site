import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Stats } from '@/components/Stats';
import { PracticeAreas } from '@/components/PracticeAreas';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Credentials } from '@/components/Credentials';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <PracticeAreas />
      <WhyChooseUs />
      <Credentials />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
