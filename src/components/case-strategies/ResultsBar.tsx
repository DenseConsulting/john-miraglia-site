import React from 'react';
export function ResultsBar() {
  const results = [
  {
    value: 'NOT GUILTY',
    label: 'Exposed false testimony'
  },
  {
    value: 'ACQUITTED',
    label: 'Exposed false testimony'
  },
  {
    value: 'DISMISSED',
    label: 'Exposed false testimony'
  },
  {
    value: '$45K',
    label: 'Settlement recovered'
  }];

  return (
    <section className="bg-navy-900 py-12 border-y border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-navy-700">
          {results.map((result, index) =>
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4">
            
              <span className="text-3xl md:text-4xl font-heading font-bold text-gold-500 mb-2">
                {result.value}
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-white uppercase">
                {result.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}