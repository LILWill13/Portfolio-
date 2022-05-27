import React from 'react';
const styles = {
  outterBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor:'#eef2c4',
    height: '100vh',
  },

  innerBody: {
    margin: '30px 0 0 0',
    width: '75%',
  }
  
}

export default function About() {
  return (
    <div style={styles.outterBody}>
      <div style={styles.innerBody}>
        <div>
        <h3>Me</h3>
          <p>
          Hello, my name is Noah Gaston, I am an 18year-old junior software developer based in Atlanta GA. I am originally from south Florida, I graduated from North Cobb High School in December 2021. Once graduating I decided to pursue software development full-time. I have a passion for coding and the drive to improve my skills.  
          </p>
        </div>
        <div>
          <h3>My Intrests</h3>
          <p> 
          I enjoy problem-solving, Learning, working, music, and singing (although I am not the best at it). My favorite artist right now is Rod Wave, but my favorite song is Chosen One by Polo G. In my free time I like to build out projects, hang out with my friends, and exercise. 
          </p>
        </div>
        <div>
          <h3>My Goals</h3>
          <p>
          I would like to gain full-time employment as a Software Developer. To achieve this goal, I am in the process of taking a coding boot camp at the Georgia Institute of Technology, to help build a learning process and find ways to effectively and effectively Learn new coding skills. 
          </p>
          <p>
          I would like to maintain an active and healthy lifestyle. To achieve this goal, I try to eat a healthy and balanced diet, exercise regularly, maintain a healthy amount of sleep every night and keep a calm and happy mind as often as I can help it. 
          </p>
        </div>
      </div>
    </div>
  );
}
