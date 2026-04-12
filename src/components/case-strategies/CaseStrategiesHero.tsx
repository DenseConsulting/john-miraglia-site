import React from 'react';
export function CaseStrategiesHero() {
  return (
    <section className="relative bg-navy-800 text-white py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Case Strategies & Results
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            How We Win Complex Criminal Cases
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Strategic criminal defense built on 24+ years of trial experience,
            deep legal knowledge, and a relentless commitment to protecting your
            rights.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-sm text-navy-900 bg-gold-500 hover:bg-gold-400 transition-colors shadow-lg">
            
            Discuss Your Case
          </a>
        </div>
      </div>
    </section>);

}