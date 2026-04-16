'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';

export function CaseStrategiesNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    router.push(`/#${sectionId}`);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-wider text-white">
            John M. Miraglia
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              About
            </button>
            <button
              onClick={() => scrollToSection('practice-areas')}
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Practice Areas
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Contact
            </button>
            <Link
              href="/case-strategies"
              className="text-sm font-medium text-gold-400 transition-colors">
              Case Strategies
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm">
              Request a Confidential Consultation
            </button>
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
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              About
            </button>
            <button
              onClick={() => scrollToSection('practice-areas')}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              Practice Areas
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              Contact
            </button>
            <Link
              href="/case-strategies"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-gold-400 transition-colors py-2">
              Case Strategies
            </Link>
            <a
              href="tel:3128292308"
              className="block text-lg font-medium text-gray-300 hover:text-gold-400 transition-colors py-2">
              <PhoneIcon className="w-5 h-5 inline mr-2" />
              (312) 829-2308
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm mt-4">
              Request a Confidential Consultation
            </button>
          </nav>
        </div>
      }
    </header>
  );
}
