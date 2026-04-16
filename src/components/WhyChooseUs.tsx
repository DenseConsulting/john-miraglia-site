import React from 'react';
export function WhyChooseUs() {
  const reasons = [
  {
    num: '01',
    title: 'Trial-Tested Experience',
    desc: 'Over 24 years of active courtroom practice means John knows how to navigate the complexities of the Illinois justice system.'
  },
  {
    num: '02',
    title: 'Relentless Advocacy',
    desc: 'Peers and clients alike describe John as "unstoppable" — someone who fights hard for every client, every time.'
  },
  {
    num: '03',
    title: 'Bilingual Service',
    desc: 'Fluent in English and Spanish, John ensures that language is never a barrier to quality legal representation.'
  },
  {
    num: '04',
    title: 'Client-First Approach',
    desc: 'John is always on time, always prepared, and always looking out for your best interest — from the first consultation to the final verdict.'
  }];

  return (
    <section id="why-us" className="py-12 sm:py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <span className="text-gold-400 font-semibold tracking-widest uppercase text-sm">
            Why John Miraglia
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-gray-300">
            Clients choose John Miraglia because he delivers results with
            unwavering dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {reasons.map((reason, index) =>
          <div key={index} className="flex flex-col sm:flex-row items-start text-center sm:text-left">
              <div className="text-5xl md:text-6xl font-heading font-bold text-gold-500 opacity-80 mb-4 sm:mb-0 sm:mr-8 leading-none w-full sm:w-auto">
                {reason.num}
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}