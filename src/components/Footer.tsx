import React from 'react';
export function Footer() {
  return <footer className="bg-navy-900 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">
          John M. Miraglia, Ltd.
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          910 W. Van Buren St. #2S, Chicago, IL 60607 &nbsp;|&nbsp; © 2026 John
          M. Miraglia, Ltd. All rights reserved.
        </p>

        <p className="text-gray-500 text-xs max-w-2xl">
          Attorney advertising. Prior results do not guarantee a similar
          outcome. The information on this website is for general information
          purposes only. Nothing on this site should be taken as legal advice
          for any individual case or situation.
        </p>
      </div>
    </footer>;
}