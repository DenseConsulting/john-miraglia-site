import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { CaseStrategiesPage } from './pages/CaseStrategiesPage';
export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'case-strategies'>(
    'home'
  );
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/case-strategies') {
        setCurrentPage('case-strategies');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  return currentPage === 'case-strategies' ?
  <CaseStrategiesPage /> :

  <HomePage />;

}