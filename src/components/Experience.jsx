import React from 'react';
import '../styles/Project.css'

function EachXP(props) {
  const { company, role, location, length, description, duties, skills } = props;
  return (
    <div className="container">
    <br />
      <h2 className='subtitle is-4'>{company} • {role}</h2>
      <br />
      <p className='subtitle is-6'>{location} <span id="divider">|</span> {length} </p>
      <p>{description}</p>
      <br />
      <br />
      <p>Duties:</p>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>• {duty}</li>
        ))}
      </ul>
      <br />
      <br />
      <p>Skills: {skills}</p>
      <br />
      <br />
      <br />
    </div>
  )
}

export default EachXP;