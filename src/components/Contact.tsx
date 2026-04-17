'use client';

import React, { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  GlobeIcon,
  ArrowRightIcon,
  CheckCircleIcon } from
'lucide-react';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-6">
            Your Case Demands This Level of Defense
          </h2>
          <p className="text-lg text-gray-600">
            Don't face criminal charges without an experienced trial attorney
            who knows how to win. Schedule a confidential consultation to
            discuss your case and explore your defense options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12 bg-white rounded-sm shadow-xl overflow-hidden">
          {/* Contact Info Left Side */}
          <div className="lg:col-span-2 bg-navy-800 text-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Office Address
                    </h4>
                    <p className="text-white">
                      910 W. Van Buren St. #2S
                      <br />
                      Chicago, IL 60607
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Phone
                    </h4>
                    <p className="text-white">(312) 829-2308</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <ClockIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Office Hours
                    </h4>
                    <p className="text-white">
                      OPEN 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <GlobeIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Languages
                    </h4>
                    <p className="text-white">English & Spanish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right Side */}
          <div className="lg:col-span-3 p-6 sm:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircleIcon className="w-16 h-16 text-gold-500 mb-6" />
                <h3 className="text-3xl font-heading font-bold text-navy-800 mb-4">Message Sent</h3>
                <p className="text-lg text-gray-600 max-w-md">
                  Thank you for reaching out. John Miraglia will review your message and contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-navy-600 font-semibold hover:text-navy-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-colors"
                    placeholder="John" />
                  
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-colors"
                    placeholder="Doe" />
                  
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-colors"
                    placeholder="john@example.com" />
                  
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-colors"
                    placeholder="(555) 123-4567" />
                  
                </div>
              </div>

              <div>
                <label
                  htmlFor="matter"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  
                  Legal Matter
                </label>
                <select
                  id="matter"
                  defaultValue=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-colors bg-white">
                  
                  <option value="" disabled>
                    Select a practice area...
                  </option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="litigation">Litigation</option>
                  <option value="civil">Civil Rights</option>
                  <option value="discrimination">Discrimination</option>
                  <option value="juvenile">Juvenile Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  
                  Brief Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none transition-colors resize-none"
                  placeholder="Please briefly describe your situation...">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRightIcon className="ml-2 w-5 h-5" />}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you understand that no attorney-client
                relationship is formed until a written agreement is signed. All
                information is kept strictly confidential.
              </p>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>);

}
