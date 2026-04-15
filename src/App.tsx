import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { CaseStrategiesPage } from './pages/CaseStrategiesPage';
export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'case-strategies'>(
    'home'
  );
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      if (path === '/case-strategies' || hash === '#/case-strategies') {
        setCurrentPage('case-strategies');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };
    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  return currentPage === 'case-strategies' ?
  <CaseStrategiesPage /> :

  <HomePage />;

}