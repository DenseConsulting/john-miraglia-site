import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="relative bg-navy-800 text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <a
              href="/"
              className="font-heading text-xl font-bold tracking-wider text-white">
              
              John M. Miraglia
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#about"
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                About
              </a>
              <a
                href="#practice-areas"
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                Practice Areas
              </a>
              <a
                href="#why-us"
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                Why Us
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                Contact
              </a>
              <a
                href="#/case-strategies"
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                
                Case Strategies
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm">
                
                Request a Confidential Consultation
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-gray-700 shadow-xl z-40">
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
              href="#why-us"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                Why Us
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
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                Contact
              </a>
              <a
              href="#/case-strategies"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                Case Strategies
              </a>
              <a
              href="tel:3128292308"
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              
                <PhoneIcon className="w-5 h-5 inline mr-2" />
                (312) 829-2308
              </a>
              <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm mt-4">
              
                Request a Confidential Consultation
              </a>
            </nav>
          </div>
        }
      </header>

      {/* Hero Content */}
      <div className="flex-grow flex items-center relative pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 opacity-90 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">
                Chicago Criminal Defense Attorney
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Aggressive Criminal Defense When Everything Is On The Line
              </h1>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                John Miraglia is a Chicago criminal defense attorney who fights
                for clients facing serious charges throughout Chicago and
                Illinois.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Trusted trial counsel. Strategic defense. Immediate action when
                your future is at risk.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-lg w-full sm:w-auto">
                  
                  Request a Confidential Consultation
                </a>
              </div>

              {/* Bottom Stats Line */}
              <div className="flex flex-wrap items-center text-sm md:text-base text-gray-300 gap-x-2 gap-y-2">
                <span className="flex items-center">
                  <span>24+ Years Experience</span>
                  <span className="text-gold-500 mx-3">▸</span>
                </span>
                <span className="flex items-center">
                  <span>Chicago Criminal Defense</span>
                  <span className="text-gold-500 mx-3">▸</span>
                </span>
                <span className="flex items-center">
                  <span>Bilingual: English & Spanish</span>
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
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold-500/20 rounded-sm -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}