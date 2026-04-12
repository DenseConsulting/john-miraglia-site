import React from 'react';
export function Stats() {
  const stats = [
  {
    value: '24+',
    label: 'YEARS OF EXPERIENCE'
  },
  {
    value: '5.0',
    label: 'AVVO CLIENT RATING'
  },
  {
    value: '5',
    label: 'PRACTICE AREAS'
  },
  {
    value: '2',
    label: 'STATE LICENSES'
  }];

  return (
    <section className="bg-navy-900 py-12 border-y border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-navy-700">
          {stats.map((stat, index) =>
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4">
            
              <span className="text-4xl md:text-5xl font-heading font-bold text-gold-500 mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-white uppercase">
                {stat.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}