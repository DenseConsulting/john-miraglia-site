import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
export function Hero() {


  return (
    <section className="relative bg-navy-800 text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="font-heading text-2xl font-bold tracking-wider text-white">
                
                Law Office of John M. Miraglia
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
                  {link.name}
                </a>
              ))}
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu">
                
                {isMenuOpen ?
                <XIcon className="h-6 w-6" /> :

                <MenuIcon className="h-6 w-6" />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen &&
        <div className="md:hidden bg-navy-900 border-t border-navy-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-800"
                  onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a
                href="tel:3128292308"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-800"
                onClick={() => setIsMenuOpen(false)}>
                <PhoneIcon className="w-4 h-4 mr-2" />
                (312) 829-2308
              </a>
              <a
                href="#contact"
                className="block w-full text-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400"
                onClick={() => setIsMenuOpen(false)}>
                Free Consultation
              </a>
            </div>
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
                John M. Miraglia
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
                  <span className="text-gold-500 mx-2 text-xs">▶</span>
                </span>
                <span className="flex items-center">
                  <span>Illinois</span>
                  <span className="text-gold-500 mx-2 text-xs">▶</span>
                </span>
                <span>Bilingual: English & Spanish</span>
              </div>
            </div>

            {/* Right Column - Headshot */}
            <div className="flex lg:justify-end items-start justify-end">
              <div className="relative">
                <div className="w-62 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-sm overflow-hidden shadow-2xl border-2 border-gold-500/30">
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