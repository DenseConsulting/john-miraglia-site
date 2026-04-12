import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface CaseResult {
  title: string;
  outcome: string;
  details: string;
}
export function NotableVictories() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const cases: CaseResult[] = [
  {
    title: 'First Degree Murder Acquittal',
    outcome: 'Not Guilty',
    details:
    "Client faced life sentence for first-degree murder. Through meticulous cross-examination, we exposed critical inconsistencies in witness testimony and challenged the prosecution's timeline. The jury returned a not guilty verdict after deliberating the lack of physical evidence connecting our client to the crime scene."
  },
  {
    title: 'Aggravated Criminal Sexual Abuse',
    outcome: 'Not Guilty',
    details:
    "Defended client against serious sexual abuse allegations. We challenged the forensic evidence collection procedures and systematically dismantled the credibility of the complaining witness through detailed cross-examination. Expert testimony revealed significant flaws in the state's case, resulting in a full acquittal."
  },
  {
    title: 'Armed Violence & Mob Action',
    outcome: 'Acquitted',
    details:
    "Client was one of multiple co-defendants charged with armed violence and mob action. We successfully separated our client's actions from the group, demonstrating he was not an active participant in the alleged criminal conduct. Strategic motion practice and compelling trial testimony led to acquittal on all counts."
  },
  {
    title: 'DUI Supervision Violation',
    outcome: 'Dismissed',
    details:
    'Client faced revocation of supervision and potential jail time for alleged DUI violation. We identified critical procedural errors in the breathalyzer testing protocol and chain of custody issues with blood samples. Motion to suppress evidence was granted, and all charges were dismissed.'
  },
  {
    title: 'Possession of Controlled Substance',
    outcome: 'Dismissed',
    details:
    'Client arrested for possession of controlled substances following a traffic stop. We filed a motion to suppress based on illegal search and seizure, demonstrating the officer lacked probable cause for the search. The court agreed, suppressing all evidence, and the state was forced to dismiss the charges.'
  },
  {
    title: 'Aggravated Battery to Police Officer',
    outcome: 'Reduced',
    details:
    'Client initially charged with felony aggravated battery to a police officer, facing significant prison time. Through strategic negotiation and presentation of mitigating evidence, we successfully negotiated a reduction to misdemeanor battery with no jail time and probation.'
  }];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section id="victories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
            Proven Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-6">
            Notable Victories
          </h2>
          <p className="text-lg text-gray-600">
            Our track record speaks for itself. These are real cases with real
            outcomes that changed our clients' lives. Each victory represents
            countless hours of investigation, preparation, and strategic
            advocacy.
          </p>
        </div>

        <div className="space-y-4">
          {cases.map((caseItem, index) =>
          <div
            key={index}
            className="border border-gray-200 rounded-sm shadow-sm overflow-hidden transition-shadow hover:shadow-md">
            
              <button
              onClick={() => toggleExpand(index)}
              className="w-full bg-navy-800 text-white p-6 flex items-center justify-between hover:bg-navy-700 transition-colors">
              
                <h3 className="text-xl font-heading font-bold text-left">
                  {caseItem.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="px-4 py-2 bg-gold-500 text-navy-900 text-sm font-bold rounded-sm">
                    {caseItem.outcome}
                  </span>
                  {expandedIndex === index ?
                <ChevronUpIcon className="w-5 h-5 text-gold-400" /> :

                <ChevronDownIcon className="w-5 h-5 text-gold-400" />
                }
                </div>
              </button>
              {expandedIndex === index &&
            <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {caseItem.details}
                  </p>
                </div>
            }
            </div>
          )}
        </div>
      </div>
    </section>);

}