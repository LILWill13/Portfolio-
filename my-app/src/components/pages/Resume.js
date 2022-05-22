import React from 'react';

const styles = {
  outterBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#faf0c0",
    textAlign: "center",
    color: "black",
  },

  innerBody: {
    margin: '10px',
    padding:"3px",
    width: "75%",
    boxShadow: "0px 0px 30px"
  },

  li: {
    textAlign: "left",
  },

  title:{
    listStyle: "none",
    fontSize: "20px"
  },

  jobTitle: {
    fontSize: "22px"
  },

  pBody: {
    width: '80%'
  },
}

export default function Resume() {
  return (
    <div style={styles.outterBody}>
      <div style={styles.innerBody}>
        <div>
          <h2> NOAH GASTON </h2>
          <p> Atlanta, GA 30144 | 1-954-669-3357 | Noahsfuture18@gmail.com </p>

          <ul style={styles.li} >
            <li> Github - LilWill13 </li>
            <li> Linkedin - https://www.linkedin.com/in/noah-gaston-54a30922b </li>
          </ul>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems:"center"}}>
          <h2>Professional Summary</h2>
          <div  style={styles.pBody}>
            <p>
              Collaborative leader with dedication to partnering with coworkers to promote engaged, empowering work culture. Strengths in building and maintaining relationships with diverse range of stakeholders in dynamic, agile settings. 
            </p> 
          </div>
        </div>

        <div>
          <h2>Skills</h2>
          <ul style={styles.li}> 
            <li>Front-End Programming: HTML5, CSS3, JavaScript</li>
            <li>Time Management</li>
            <li>Teamwork and Collaboration</li>
            <li>Avid Learner</li>
            <li>Work History</li>
            <li>Express</li>
            <li>React</li>
            <li>Sql/Nosql databases</li>
            <li>Continuous Improvement</li>
            <li>Version Control Systems: Git GitHub JavaScript/CSS Libraries and Frameworks </li>
          </ul>
        </div>

        <div >
          <h2>Experience</h2>
          <h3 style={styles.jobTitle}>Wing Zone</h3>
          <ul style={styles.li}> 
            <li style={styles.title}>Manager</li>
            <li>Jun 2020 - Apr 2021</li>
            <li>Kennesaw, GA</li>
          </ul>
          <div style={{display: 'flex', flexDirection: 'column', alignItems:"center"}}>
            <div style={styles.pBody}>
              <p> 
              Trained employees to maximize team agility and performance.
              Delivered feedback to decision-makers regarding employee performance and training needs. Maximized performance by monitoring daily activities and mentoring team members. Collaborated with team members to achieve goals 
              </p>
            </div>
          </div>
          <h3 style={styles.jobTitle}>The Varsity</h3>
          <ul style={styles.li}>
            <li style={styles.title}>Team Member</li>
            <li>Apr 2021 - Mar 2022</li>
            <li>Kennesaw, GA</li>
          </ul>
          <div style={{display: 'flex', flexDirection: 'column', alignItems:"center"}}>
            <div style={styles.pBody}>
              <p>
              Learned all required tasks quickly to maximize performance.
              Developed strong cooperative relationships with coworkers and managers.
              Pursued learning opportunities to advance knowledge and take on leadership position. Worked well with teammates and accepted coaching from management team.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2>Education</h2> 
          <h3 style={styles.jobTitle}> North Cobb High School </h3>
          <p> High School Diploma </p>
        </div>

        <div>
          <h2> Certifications </h2>
          <h3 style={styles.jobTitle}> Georgia Tech Full-Stack web-development training course </h3>
        </div>
      </div>
    </div>
  );
}
