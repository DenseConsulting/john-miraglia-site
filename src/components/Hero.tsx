import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <section className="relative bg-navy-800 text-white min-h-screen flex flex-col overflow-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            
            {/* LOGO + MOBILE PHONE */}
            <div className="flex-shrink-0 flex flex-col">
              <a
                href="#"
                className="font-heading text-2xl font-bold tracking-wider text-white"
              >
                John M. Miraglia
              </a>
</div>
            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm"
              >
                Request a Confidential Consultation
              </a>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy-900 border-t border-navy-700">
            <div className="px-3 py-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="block text-center mt-4 px-6 py-3 rounded-sm text-navy-900 bg-gold-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Confidential Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO CONTENT */}
      <div className="relative flex-grow pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800/95 to-navy-900/80 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <p className="text-gold-400 uppercase text-sm mb-4">
                Chicago Criminal Defense Attorney
              </p>

              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                Aggressive Criminal Defense When Everything Is On The Line
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 border-l-4 border-gold-500 pl-4">
                John Miraglia is a Chicago criminal defense attorney who fights
                for clients facing serious charges throughout Chicago and Illinois.
              </p>

              <blockquote className="text-xl italic text-gray-200 mb-10">
                Trusted trial counsel. Strategic defense. Immediate action when your future is at risk.
              </blockquote>

              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gold-500 text-navy-900 font-medium rounded-sm hover:bg-gold-400 transition-colors"
              >
                Request a Confidential Consultation
              </a>

              <div className="mt-8 text-sm text-gray-300 flex flex-wrap gap-3">
                <span>24+ Years Experience</span>
                <span>▶</span>
                <span>Chicago Criminal Defense</span>
                <span>▶</span>
                <span>Bilingual: English & Spanish</span>
              </div>
            </div>

            {/* IMAGE (NOW VISIBLE ON MOBILE) */}
            <div className="mt-10 lg:mt-0">
              <div className="relative h-[320px] sm:h-[420px] lg:h-[720px] w-full rounded-sm overflow-hidden border border-navy-700 shadow-2xl">
                <img
                  src="/john-miraglia-hero.jpg"
                  alt="John Miraglia, Chicago criminal defense attorney"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-900/10" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}