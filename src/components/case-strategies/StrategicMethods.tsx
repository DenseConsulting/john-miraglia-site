import React from 'react';
export function StrategicMethods() {
  const methods = [
  {
    num: '01',
    title: 'Evidence Investigation & Analysis',
    description:
    "Thorough examination of all physical, digital, and testimonial evidence. We leave no stone unturned in scrutinizing police reports, witness statements, forensic data, and surveillance footage to identify weaknesses in the prosecution's case."
  },
  {
    num: '02',
    title: 'Procedural & Search Challenges',
    description:
    'Identifying violations of constitutional rights during arrest and investigation. We aggressively challenge illegal searches, improper interrogations, and procedural errors that can result in suppression of evidence or dismissal of charges.'
  },
  {
    num: '03',
    title: 'Expert Witness Utilization',
    description:
    "Engaging forensic, medical, and technical experts to challenge prosecution claims. Our network of credentialed experts provides critical testimony to counter the state's evidence and present alternative explanations."
  },
  {
    num: '04',
    title: 'Prosecution Case Deconstruction',
    description:
    "Systematically dismantling the state's narrative through cross-examination. We expose inconsistencies, bias, and unreliable testimony to create reasonable doubt in the minds of jurors."
  },
  {
    num: '05',
    title: 'Negotiation & Plea Strategy',
    description:
    'When appropriate, negotiating favorable outcomes while preserving trial options. We leverage our trial preparation and case knowledge to secure reduced charges, alternative sentencing, or dismissals through strategic negotiation.'
  },
  {
    num: '06',
    title: 'Full Trial Preparation',
    description:
    'Every case is prepared as if going to trial, ensuring maximum leverage. This comprehensive approach puts us in the strongest position whether negotiating a resolution or presenting your defense to a jury.'
  }];

  return (
    <section id="strategies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-6">
            Strategic Defense Methods
          </h2>
          <p className="text-lg text-gray-600">
            Winning criminal cases requires more than legal knowledge—it demands
            strategic thinking, meticulous preparation, and aggressive advocacy
            at every stage.
          </p>
        </div>

        <div className="space-y-0">
          {methods.map((method, index) =>
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-start py-8 ${index !== methods.length - 1 ? 'border-b border-gray-200' : ''}`}>
            
              <div className="text-5xl md:text-6xl font-heading font-bold text-gold-500 opacity-80 mb-4 sm:mb-0 sm:mr-8 sm:w-24 flex-shrink-0 leading-none">
                {method.num}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-navy-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}