import React from 'react';
import { BookOpenIcon, AwardIcon, BadgeCheckIcon, StarIcon, GlobeIcon, CreditCardIcon } from 'lucide-react';
export function Credentials() {
  const credentials = [{
    icon: BookOpenIcon,
    title: 'Juris Doctor (J.D.)',
    desc: 'John Marshall Law School, Chicago — 2001'
  }, {
    icon: AwardIcon,
    title: 'Illinois Bar License',
    desc: 'Active & Authorized to Practice — Licensed since 2001 — No misconduct'
  }, {
    icon: AwardIcon,
    title: 'Washington Bar License',
    desc: 'Licensed since 2011 — No misconduct found'
  }, {
    icon: StarIcon,
    title: 'Avvo Rating 5.0 / 5.0',
    desc: 'Top-rated by clients on Avvo — 2 verified client reviews'
  }, {
    icon: GlobeIcon,
    title: 'Languages',
    desc: "English & Spanish — Serving Chicago's diverse communities"
  }, {
    icon: CreditCardIcon,
    title: 'Payment Options',
    desc: 'Retainer basis — Cash, Check & Credit Card accepted'
  }];
  return <section className="py-20 bg-navy-800 text-white border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 font-semibold tracking-widest uppercase text-sm">
            Background & Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
            Education & Licensing
          </h2>
          <p className="text-lg text-gray-300">
            John Miraglia's qualifications reflect a commitment to legal
            excellence built over more than two decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, index) => {
          const Icon = cred.icon;
          return <div key={index} className="bg-navy-900 p-6 rounded-sm border border-navy-700 flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cred.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}