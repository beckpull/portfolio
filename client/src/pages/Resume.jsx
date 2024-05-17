import React from 'react';
import EachXP from '../components/Experience';
import '../styles/Resume.css';
import { briefOverview, jobXP } from '../data/resume';

function Resume() {
  return (
    <div className="container">
    <br />
    <br />
    <div className='has-text-centered'>
    <h2 className='subtitle is-5'><a href="./resume.pdf" target="_blank" rel="noopener noreferrer">Link to view my Resume</a> • <a href="./resume.pdf" download>Download</a></h2>
    <h2 className='subtitle is-4'>Tech proficiencies thus far:</h2>
    <ul>
      <li>HTML, CSS, CSS Frameworks: Bootstrap, Bulma</li>
      <li>JavaScript, Node.js</li>
      <li>SQL, PostgreSQL, Sequelize</li>
      <li>Web APIs, Third-Party APIs, using and creating REST APIs</li>
      <li>Object Oriented Programming</li>
      <li>JavaScript algorithms</li>
      <li>MVC, client/server full-stack web application creation</li>
      <li>NoSQL - MongoDB & Mongoose</li>
      <li>Progressive Web Applications (webpack)</li>
      <li>React.js (frontend), Apollo Server integration (backend/server-side)</li>
    </ul>
    </div>
    <br />
    <br />
    <br />
    <h2 className='subtitle is-3'>Prior Work Experience:</h2>
    <br />
    <br />
    <br />
    <h3 className='subtitle is-4'>Brief overview of my more recent responsiblities & achievements ...</h3>
    <br />
    <br />
    <ul>
      {briefOverview.map((responsiblity, index) => (
        <li key={index}> • {responsiblity}</li>
      ))}
    </ul>
    <br />
    <br />
    <br />
    <br />
    <h3 className='subtitle is-3'>... Broken down in more detail</h3>
    <br />
    <br />
      {jobXP.map((xp, index) => (
        <EachXP key={index} company={xp.company} role={xp.role} location={xp.location} length={xp.length} description={xp.description} duties={xp.duties} skills={xp.skills} />
      ))}
    </div>
  )
};

export default Resume;