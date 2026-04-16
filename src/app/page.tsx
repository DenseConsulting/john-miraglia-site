'use client';
import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, GlobeIcon, ArrowRightIcon } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-6">Your Case Demands This Level of Defense</h2>
          <p className="text-lg text-gray-600">Don't face criminal charges without an experienced trial attorney who knows how to win. Schedule a confidential consultation to discuss your case and explore your defense options.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12 bg-white rounded-sm shadow-xl overflow-hidden">
          <div className="lg:col-span-2 bg-navy-800 text-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Office Address</h4>
                    <p className="text-white">910 W. Van Buren St. #2S  
Chicago, IL 60607</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-white font-bold text-lg">(312) 829-2308</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ClockIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Office Hours</h4>
                    <p className="text-white">OPEN 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <GlobeIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Languages</h4>
                    <p className="text-white">English & Spanish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Legal Matter</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all">
                  <option>Criminal Defense</option>
                  <option>DUI / Traffic</option>
                  <option>Federal Crimes</option>
                  <option>Civil Rights</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brief Description</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-8 rounded-sm transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              {status === 'success' && (
                <p className="text-green-600 font-semibold text-center mt-4">Thank you! Your message has been sent successfully.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
