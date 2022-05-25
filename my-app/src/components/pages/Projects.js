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
  }
}

export default function Projects() {
  return (
    <div style={styles.outterbody}>
        <h1>Projects</h1>
        <div style={styles.innerBody}>
          <div>
            <img src={img1} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <img src={img2} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <img src={img3} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <img src={img4} style={styles.imgs} alt=""></img>
          </div>
          <div>
            <img src={img5} style={styles.imgs} alt=""></img>
          </div>
        </div>
    </div>
  );
}
