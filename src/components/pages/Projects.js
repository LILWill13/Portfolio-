import React from 'react';
import img1 from "../imgs/1.jpg"
import img2 from "../imgs/2.jpg"
import img3 from "../imgs/3.jpg"
import img4 from "../imgs/4.jpg"
import img5 from "../imgs/5.jpg"
const styles = {
  outterbody:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexwrap: "wrap"
  },

  innerBody: {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: "wrap",
  alignItems: 'center',
  justifyContent: 'center',
  width: "90vw"
  },

  imgs:{
    width: "20rem",
    height: "20rem",
    border: "3px solid black",
    margin: "15px",
    boxShadow: '10px 10px  10px black',
  },

  divBody: {
    display: "flex",
    justifyContent: "space-between",
    top: '300px',
    position: "relative",
    zindex: '2',
    width: '75%',
    left: "40px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
    backgroundColor: 'white',
    boxShadow: "0px 0px 20px black",
    border: "1px solid black",
    padding:"3px",
    textDecoration: "none",
    width: '7rem',
    color: 'black'
  }

}

export default function Projects() {
  return (
    <div style={styles.outterbody}>
        <h1>Projects</h1>
        <div style={styles.innerBody}>
          <div>
            <div style={styles.divBody}>
               <a target="_blank" rel="noreferrer" href="https://github.com/LILWill13/Future-Pet-Place" style={styles.links}>Repository</a>

               <a target="_blank" rel="noreferrer" href="https://lilwill13.github.io/Future-Pet-Place/" style={styles.links}>Webpage</a>
             </div>
            <img src={img1} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <div style={styles.divBody}>
              <a target="_blank" rel="noreferrer" href="https://github.com/LILWill13/Scheduler" style={styles.links}>Repository</a>

              <a target="_blank" rel="noreferrer" href="https://lilwill13.github.io/Scheduler/" style={styles.links}>Webpage</a>
            </div>
            <img src={img2} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <div style={styles.divBody}>
              <a target="_blank" rel="noreferrer" href="https://github.com/LILWill13/js-quiz" style={styles.links}>Repository</a>

              <a target="_blank" rel="noreferrer" href="https://lilwill13.github.io/js-quiz/" style={styles.links}>Webpage</a>
            </div>
            <img src={img3} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <div style={styles.divBody}>
              <a target="_blank" rel="noreferrer" href="https://github.com/LILWill13/blog" style={styles.links}>Repository</a>

              <a target="_blank" rel="noreferrer" href="https://blog123455.herokuapp.com/" style={styles.links}>Webpage</a>
            </div>
            <img src={img4} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <div style={styles.divBody}>
              <a target="_blank" rel="noreferrer" href="https://github.com/elizabethbillings93/LEND_Inventory_Management" style={styles.links}>Repository</a>

              <a target="_blank" rel="noreferrer" href="https://lend-database.herokuapp.com/login" style={styles.links}>Webpage</a>
            </div>
            <img src={img5} style={styles.imgs} alt=""></img>
          </div>
        </div>
    </div>
  );
}
