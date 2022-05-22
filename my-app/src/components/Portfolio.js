import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Resume');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    } else if (currentPage === 'About')  {
      return <About />;
    } else if (currentPage === 'Projects') {
      return <Projects />;
    } else {
    return <Contact />;
    }
  };

  const changePage = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs setCurrentPage={currentPage} changePage={changePage} />
      {renderPage()}
    </div>
  );
}
