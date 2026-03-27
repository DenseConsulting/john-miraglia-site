import React from 'react';
import { ShieldIcon, ScaleIcon, GavelIcon, UsersIcon, HeartHandshakeIcon } from 'lucide-react';
export function PracticeAreas() {
  const practices = [{
    title: 'Criminal Defense',
    description: 'Defending clients against misdemeanor and felony charges with a strategic, aggressive approach designed to protect your freedom and future.',
    icon: ShieldIcon
  }, {
    title: 'Litigation',
    description: 'Comprehensive litigation services for civil disputes, leveraging courtroom expertise built over more than two decades of active practice.',
    icon: ScaleIcon
  }, {
    title: 'Civil Rights',
    description: 'Standing up for individuals whose constitutional rights have been violated by government actors, law enforcement, or institutions.',
    icon: GavelIcon
  }, {
    title: 'Discrimination',
    description: 'Protecting clients from unlawful discrimination in employment, housing, and public accommodations under state and federal law.',
    icon: UsersIcon
  }, {
    title: 'Juvenile Law',
    description: 'Compassionate and effective representation for minors facing the juvenile justice system, focusing on rehabilitation and protecting their futures.',
    icon: HeartHandshakeIcon
  }];
  return <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
            What We Handle
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-6">
            Practice Areas
          </h2>
          <p className="text-lg text-gray-600">
            John Miraglia provides aggressive, skilled representation across a
            broad spectrum of legal matters in Illinois and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
          const Icon = practice.icon;
          return <div key={index} className="bg-navy-800 p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold-500 flex flex-col h-full">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-700 text-gold-400">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  {practice.title}
                </h3>
                <p className="text-gray-300 flex-grow leading-relaxed">
                  {practice.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}