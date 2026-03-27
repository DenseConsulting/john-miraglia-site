import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="relative bg-navy-800 text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-between items-center py-6">
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <a
                href="#"
                className="font-heading text-2xl font-bold tracking-wider text-white hidden md:block">
                
                John M. Miraglia, Ltd.
              </a>
              {/* Mobile: Show phone icon and number - centered and larger */}
              <a
                href="tel:3128292308"
                className="md:hidden inline-flex items-center text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                <PhoneIcon className="w-5 h-5 mr-2" />
                (312) 829-2308
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-4">
              <a
                href="tel:3128292308"
                className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                <PhoneIcon className="w-4 h-4 mr-2" />
                (312) 829-2308
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm">
                
                Free Consultation
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden absolute right-4 top-6 p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle menu">
              
              {isMenuOpen ?
              <XIcon className="w-6 h-6" /> :

              <MenuIcon className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen &&
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-gray-700 shadow-xl z-40">
            <nav className="px-4 py-6 space-y-4">
              <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                About
              </a>
              <a
              href="#practice-areas"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                Practice Areas
              </a>
              <a
              href="#credentials"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                Credentials
              </a>
              <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                Testimonials
              </a>
              <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm mt-4">
              
                Free Consultation
              </a>
            </nav>
          </div>
        }
      </header>

      {/* Hero Content */}
      <div className="flex-grow flex items-center relative pt-20 pb-16">
        {/* Subtle background gradient/texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 opacity-90 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">
                Chicago Criminal Defense Attorney
              </p>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
                Law Office of John M. Miraglia
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 border-l-4 border-gold-500 pl-4">
                Attorney at Law
              </p>

              <blockquote className="text-2xl md:text-3xl font-heading italic text-white mb-12 opacity-90">
                "An unstoppable trial lawyer with absolute professionalism."
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-lg w-full sm:w-auto">
                  
                  Free Consultation
                </a>
              </div>

              {/* Stats Bar (Hero inline) */}
              <div className="flex flex-wrap items-center text-sm md:text-base text-gray-300 gap-y-2">
                <span className="flex items-center">
                  <span className="text-gold-400 font-semibold mr-2">
                    Avvo Rating 5.0
                  </span>
                  <span className="text-gold-500 mx-2 text-xs">▶</span>
                </span>
                <span className="flex items-center">
                  <span>Licensed 24 Years</span>
                </span>
              </div>
            </div>

            {/* Right Column - Headshot */}
            <div className="flex lg:justify-end items-start justify-end">
              <div className="relative">
                <div className="w-72 h-96 md:w-96 md:h-[32rem] lg:w-[28rem] lg:h-[36rem] rounded-sm overflow-hidden shadow-2xl border-2 border-gold-500/30">
                  <img
                    src="/pasted-image.jpg"
                    alt="John M. Miraglia, Attorney at Law"
                    className="w-full h-full object-cover" />
                  
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold-500/20 rounded-sm -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}