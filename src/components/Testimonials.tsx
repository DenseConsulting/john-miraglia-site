import React from 'react';
import { StarIcon, DiamondIcon } from 'lucide-react';
export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-6">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real words from real clients who trusted John Miraglia with their
            most important legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Client Review 1 */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-sm border border-gray-100 shadow-sm flex flex-col">
            <div className="flex text-gold-500 mb-6">
              {[...Array(5)].map((_, i) =>
              <StarIcon key={i} className="w-5 h-5 fill-current" />
              )}
            </div>
            <blockquote className="text-gray-700 italic mb-8 flex-grow">
              "I never had much trust in lawyers, but John Miraglia changed
              that. Though professional by all means, he seemed to take my case
              personally and went beyond what my money could afford to win my
              case. If you're fighting a case or know someone who is, I urge you
              to give him a call. Thanks again John!!!"
            </blockquote>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-bold text-navy-800">Angela</p>
              <p className="text-sm text-gray-500">
                Hired Attorney — 2020 — Google Verified
              </p>
            </div>
          </div>

          {/* Client Review 2 */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-sm border border-gray-100 shadow-sm flex flex-col">
            <div className="flex text-gold-500 mb-6">
              {[...Array(5)].map((_, i) =>
              <StarIcon key={i} className="w-5 h-5 fill-current" />
              )}
            </div>
            <blockquote className="text-gray-700 italic mb-8 flex-grow">
              "John is a great lawyer. He had been my lawyer for 8 years. He has
              helped win my son's case. He is unstoppable and fights to win."
            </blockquote>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-bold text-navy-800">Ann</p>
              <p className="text-sm text-gray-500">
                Hired Attorney — February 2018 — Avvo Verified
              </p>
            </div>
          </div>

          {/* Peer Endorsement */}
          <div className="bg-navy-800 text-white p-6 sm:p-8 rounded-sm shadow-md flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <DiamondIcon className="w-24 h-24 text-gold-500" />
            </div>
            <div className="relative z-10 flex-grow flex flex-col">
              <div className="flex items-center space-x-2 mb-6">
                <DiamondIcon className="w-5 h-5 text-gold-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-gold-400">
                  Peer Attorney Endorsement
                </span>
              </div>
              <div className="flex text-gold-400 mb-6">
                {[...Array(5)].map((_, i) =>
                <StarIcon key={i} className="w-5 h-5 fill-current" />
                )}
              </div>
              <blockquote className="text-gray-200 italic mb-8 flex-grow text-lg font-heading">
                "I endorse this lawyer. Mr. Miraglia is an unstoppable trial
                lawyer with absolute professionalism."
              </blockquote>
              <div className="border-t border-navy-600 pt-4">
                <p className="font-bold text-white">Edward Johnson</p>
                <p className="text-sm text-gray-400">
                  Criminal Defense Attorney — February 2024 — Avvo Verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}