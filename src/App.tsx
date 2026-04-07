import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { PracticeAreas } from './components/PracticeAreas'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { Credentials } from './components/Credentials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-body antialiased selection:bg-gold-500 selection:text-navy-900 pb-20 md:pb-0">
      <Hero />
      <Stats />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <Credentials />
      <Contact />
      <Footer />

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-navy-700 bg-navy-900 shadow-2xl">
        <div className="grid grid-cols-2">
          <a
            href="tel:13128292308"
            className="flex items-center justify-center px-4 py-4 text-center font-semibold text-white bg-red-600"
          >
            Call (312) 829-2308
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center px-4 py-4 text-center font-semibold text-navy-900 bg-gold-500"
          >
            Free Consultation
          </a>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}