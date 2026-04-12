import React from 'react';
export function TrialPhilosophy() {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-gold-400 font-semibold tracking-widest uppercase text-sm">
              Trial Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
              Why Cases Are Won or Lost
            </h2>
            <h3 className="text-2xl font-heading italic text-gray-300 mb-8">
              It's Not About Legal Theory. It's About What You Can Prove.
            </h3>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                After 24 years in the courtroom, I've learned that winning cases
                isn't about citing statutes or making eloquent arguments. It's
                about controlling the evidence, exposing weaknesses, and telling
                a story that resonates with jurors.
              </p>
              <p>
                Prosecutors have the burden of proof, but they also have
                resources—investigators, forensic labs, and the presumption that
                law enforcement is always right. Our job is to dismantle that
                presumption, piece by piece.
              </p>
              <p>
                Every case is won or lost in the details: the inconsistent
                witness statement, the flawed chain of custody, the
                constitutional violation during the arrest. We find those
                details through relentless investigation and preparation.
              </p>
              <p>
                When we walk into a courtroom, we know the case better than the
                prosecution. We've interviewed every witness, reviewed every
                report, and consulted with experts. That preparation gives us
                the confidence to fight—and win.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/pasted-image.webp"
                alt="Courtroom sketch of defense attorney representing client at trial"
                className="w-full h-auto object-cover" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-navy-800/95 p-4 sm:p-6 rounded-sm border-l-4 border-gold-500">
                <blockquote className="text-base sm:text-xl font-heading italic text-white">
                  "Preparation is the difference between hoping for the best and
                  knowing you've done everything possible to win."
                </blockquote>
                <p className="text-gold-400 font-semibold mt-3">
                  — John M. Miraglia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}