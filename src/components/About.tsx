import React from 'react';
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">
                About John
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 mt-3 mb-8">
                A Fighter in Your Corner
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                John Michael Miraglia is a seasoned criminal defense attorney
                based in Chicago, Illinois, with over two decades of courtroom
                experience. Licensed since 2001, he has built a reputation as a
                tenacious advocate who fights relentlessly for his clients'
                rights and freedoms.
              </p>
              <p>
                Operating through his firm, John M. Miraglia, Ltd., John handles
                a wide range of matters — from serious criminal charges to civil
                rights violations and discrimination claims. His clients
                describe him as "unstoppable" and someone who is always looking
                out for their best interests.
              </p>
              <p>
                John is fluent in both English and Spanish, allowing him to
                serve Chicago's diverse communities with the same level of
                dedication and care. Whether you are facing a misdemeanor or a
                complex felony charge, John brings the full weight of his
                experience to every case.
              </p>
            </div>
          </div>

          {/* Sidebar Details */}
          <div className="lg:col-span-1">
            <div className="bg-navy-50 p-8 rounded-sm border border-navy-100">
              <h3 className="text-xl font-heading font-bold text-navy-800 mb-6 border-b border-navy-200 pb-4">
                Firm Details
              </h3>

              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                    Firm
                  </dt>
                  <dd className="text-sm text-navy-800 font-medium">
                    John M. Miraglia, Ltd.
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                    Location
                  </dt>
                  <dd className="text-sm text-navy-800 font-medium">
                    910 W. Van Buren St. #2S
                    <br />
                    Chicago, IL 60607
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                    Education
                  </dt>
                  <dd className="text-sm text-navy-800 font-medium">
                    J.D., John Marshall Law School, Chicago (2001)
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                    Licenses
                  </dt>
                  <dd className="text-sm text-navy-800 font-medium">
                    Illinois (Active, 2001)
                    <br />
                    Washington (2011)
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                    Languages
                  </dt>
                  <dd className="text-sm text-navy-800 font-medium">
                    English & Spanish
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                    Fee Structure
                  </dt>
                  <dd className="text-sm text-navy-800 font-medium">
                    Retainer — Accepts Cash, Check & Credit Card
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>;
}