import React from 'react';
import EachProject from '../components/EachProject';
import projects from '../data/projects';
import '../styles/Project.css';

function Project() {
  return (
    <div className="projects-container">
      <h2 className='subtitle is-2'>Here are a few of my recent works:</h2>
      <br />
      <div className="columns is-multiline">
        {projects.map((project) => (
          <div className="column is-half" key={project.id}>
            <EachProject id={project.id} title={project.title} image={project.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;