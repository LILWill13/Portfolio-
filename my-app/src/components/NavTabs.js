import React from 'react';

const styles = {
  background: {
    backgroundColor:"#afbfa6",
    display:"flex",
    flexwrap: "wrap",
    justifyContent:"center",
    alignItems: "center",
  },

  item: {
    margin:"10px"
  },

  title: {
    color: "#000000"
  }
};


function NavTabs({ currentPage, changePage }) {
  return (
    <div style={styles.background}>
      <ul className="nav nav-tabs">
        <div style={styles.item}>
          <li className="nav-item">
            <a href="#about" onClick={() => changePage('About')} style={styles.title}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            > About </a>
          </li>
        </div>
        <div style={styles.item}>
          <li className="nav-item">
            <a href="#Projects" onClick={() => changePage('Projects')} style={styles.title}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            > Projects </a>
          </li>
        </div>
        <div style={styles.item}>
          <li className="nav-item">
            <a href="#Resume" onClick={() => changePage('Resume')} style={styles.title}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            > Resume </a>
          </li>
        </div>
        <div style={styles.item}>
          <li className="nav-item">
            <a href="#contact" onClick={() => changePage('Contact')} style={styles.title}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            > Contact </a>
          </li>
        </div>  
      </ul>
    </div>
  );
}

export default NavTabs;
