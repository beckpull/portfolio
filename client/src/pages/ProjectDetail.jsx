import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects'; // Assuming projects data is moved to a separate file

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <h2 className='subtitle is-3'>{project.title}</h2>
      <img className='mt-6 mb-6' src={`../${project.image}`} alt="project photo" />
      <br />
      <p>{project.description}</p>
      <br />
      <br />
      <h4>Technologies:</h4>
      <br />
      <ol>
        {project.technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ol>
      <br />
      <br />
      <h4>Features:</h4>
      <br />
      <ol>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ol>
      <br />
      <button><a href={project.github} className='button'>Github Link</a></button>
      { project.video ? <button><a href={project.video} className='button'>Video Link</a></button> : ""}
      { project.deployed ? <button><a href={project.deployed} className='button'>Deployed Link</a></button> : ""}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ProjectDetail;
