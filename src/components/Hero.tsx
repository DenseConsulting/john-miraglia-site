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
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="font-heading text-2xl font-bold tracking-wider text-white"
              >
                John M. Miraglia
              </a>
            </div>

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
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm"
              >
                Request a Confidential Consultation
              </a>
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
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

        {isMenuOpen && (
          <div className="md:hidden bg-navy-900 border-t border-navy-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Confidential Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="relative flex-grow pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800/95 to-navy-900/80 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">
            <div className="max-w-3xl">
              <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">
  Chicago Criminal Defense Attorney
</p>

<h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
  Aggressive Criminal Defense When Everything Is On The Line
</h1>

<p className="text-xl md:text-2xl text-gray-300 font-light mb-8 border-l-4 border-gold-500 pl-4">
  John Miraglia is a Chicago criminal defense attorney who fights for clients
  facing serious charges throughout Chicago and Illinois.
</p>

              <blockquote className="text-2xl md:text-3xl font-heading italic text-white mb-12 opacity-90">
                Trusted trial counsel. Strategic defense. Immediate action when
                your future is at risk.
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-lg w-full sm:w-auto"
                >
                  Request a Confidential Consultation
                </a>
              </div>

              <div className="flex flex-wrap items-center text-sm md:text-base text-gray-300 gap-y-2">
                <span className="flex items-center">
                  <span className="text-gold-400 font-semibold mr-2">
                    24+ Years Experience
                  </span>
                  <span className="text-gold-500 mx-2 text-xs">▶</span>
                </span>
                <span className="flex items-center">
                  <span>Chicago Criminal Defense</span>
                  <span className="text-gold-500 mx-2 text-xs">▶</span>
                </span>
                <span className="flex items-center">
                  <span>Bilingual: English & Spanish</span>
                  <span className="text-gold-500 mx-2 text-xs">▶</span>
                </span>
                <span>Confidential Case Review</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative h-[720px] w-full rounded-sm overflow-hidden border border-navy-700 shadow-2xl">
<img
  src="/john-miraglia-hero.jpg"
  alt="John Miraglia, Chicago criminal defense attorney"
  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-transparent to-navy-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}