import React from 'react';
import {
  ShieldIcon,
  ScaleIcon,
  GavelIcon,
  FileTextIcon,
  LockIcon,
  AlertTriangleIcon } from
'lucide-react';
export function CaseTypes() {
  const caseTypes = [
  {
    icon: ShieldIcon,
    title: 'Violent Crime Defense',
    description:
    'Murder, assault, battery, armed violence, and other serious violent offenses prosecuted in state or federal court — requiring aggressive trial defense at every level.'
  },
  {
    icon: ScaleIcon,
    title: 'Weapons & Gun Charges',
    description:
    'Unlawful use of weapons, aggravated UUW, FOID violations, and federal firearms offenses — defending clients against state and federal gun charges.'
  },
  {
    icon: GavelIcon,
    title: 'Sexual Assault Defense',
    description:
    'Criminal sexual assault, abuse charges, sex offender registry matters, and related allegations in both state and federal jurisdictions.'
  },
  {
    icon: FileTextIcon,
    title: 'Juvenile Criminal Defense',
    description:
    'Protecting minors facing delinquency petitions and criminal charges in state juvenile court and federal proceedings.'
  },
  {
    icon: LockIcon,
    title: 'Drug Crime Defense',
    description:
    'Possession, distribution, trafficking, and prescription fraud — defending against drug charges at both the state and federal level.'
  },
  {
    icon: AlertTriangleIcon,
    title: 'DUI & Traffic Offenses',
    description:
    'DUI defense, license reinstatement, traffic violations, and driving-related criminal charges in Illinois state courts and federal jurisdictions.'
  }];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
            Practice Focus
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-6">
            State &amp; Federal Cases We Handle
          </h2>
          <p className="text-lg text-gray-600">
            We defend clients facing the full spectrum of criminal charges
            across both Illinois state courts and the federal system,
            bringing over two decades of trial experience to every case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseTypes.map((caseType, index) => {
            const Icon = caseType.icon;
            return (
              <div
                key={index}
                className="bg-navy-800 p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold-500 flex flex-col h-full">
                
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-700 text-gold-400">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  {caseType.title}
                </h3>
                <p className="text-gray-300 flex-grow leading-relaxed">
                  {caseType.description}
                </p>
              </div>);

          })}
        </div>
      </div>
    </section>);

}