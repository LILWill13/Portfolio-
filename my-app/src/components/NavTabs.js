import React from 'react';

function NavTabs({ currentPage, changePage }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#about" onClick={() => changePage('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        > About </a>
      </li>
      <li className="nav-item">
        <a href="#Projects" onClick={() => changePage('Projects')} 
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        > Projects </a>
      </li>
      <li className="nav-item">
        <a href="#Resume" onClick={() => changePage('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        > Resume </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => changePage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        > Contact </a>
      </li>
    </ul>
  );
}

export default NavTabs;
