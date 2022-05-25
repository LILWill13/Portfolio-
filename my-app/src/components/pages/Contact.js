import React from 'react';

import git from "../imgs/git.png"
import link from "../imgs/link.png"
import twit from "../imgs/twit.jpeg"

const styles = {
  outterBody:{
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "#deca92",
    height: '100vh'
  },
  list:{
    listStyle: 'none'
  },
  number: {
    fontSize: '25px',
    margin: '3px'
  },
  email:{
    fontSize: '22.5px',
    margin: '15px 0px 50px 0px',
    color: '#000000'
  },
  links:{
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }, 
  tags:{
   margin: '20px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '10rem',
   width: '10rem',
   fontSize: '20px',
  border: '1px solid black',
   boxShadow: '10px 10px black',
  }
}

export default function Contact() {
  return (
    <div style={styles.outterBody}>
      <h1>Contact</h1>
      <h2>Noah Gaston</h2>
      <div>
                <ul style={styles.list}>
                    <li style={styles.number}>Mobile: 954.669.3357</li>
                    <li style={styles.email}><a href = "mailto: Noahsfuture18@gmail.com">Noahsfuture18@gmail.com</a></li>
                    <li>
                      <div style={styles.links}>
                        <div>
                        <img src={git} style={styles.imgs} alt=""></img>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LILWill13" style={styles.tags} >GitHub</a>
                        </div>
                        <div>
                        <img src={twit} style={styles.imgs} alt=""></img>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/NoahW_Gaston" style={styles.tags}>Twitter</a>
                        </div>
                        <div>
                        <img src={link} style={styles.imgs} alt=""></img>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/noah-gaston-54a30922b/" style={styles.tags}>Linkedin</a>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
    </div>
  );
}
