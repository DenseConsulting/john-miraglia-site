import React from 'react';
import { SEO } from '../components/SEO';
import { CaseStrategiesHero } from '../components/case-strategies/CaseStrategiesHero';
import { CaseStrategiesNav } from '../components/case-strategies/CaseStrategiesNav';
import { ResultsBar } from '../components/case-strategies/ResultsBar';
// import { NotableVictories } from '../components/case-strategies/NotableVictories';
import { StrategicMethods } from '../components/case-strategies/StrategicMethods';
import { CaseTypes } from '../components/case-strategies/CaseTypes';
import { TrialPhilosophy } from '../components/case-strategies/TrialPhilosophy';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function CaseStrategiesPage() {
  return (
    <div className="min-h-screen bg-white font-body antialiased selection:bg-gold-500 selection:text-navy-900">
      <SEO
        title="Case Strategies & Results | John Miraglia - Chicago Criminal Defense"
        description="Learn how Chicago criminal defense attorney John Miraglia builds winning case strategies through relentless investigation, expert witnesses, and trial-tested methods."
        canonicalUrl="https://johnmiraglialaw.com/case-strategies"
      />
      <CaseStrategiesNav />
      <CaseStrategiesHero />
      <ResultsBar />
      {/* <NotableVictories /> */}
      <StrategicMethods />
      <CaseTypes />
      <TrialPhilosophy />
      <Contact />
      <Footer />
    </div>
  );
}
