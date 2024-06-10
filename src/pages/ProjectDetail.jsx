import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import githubIcon from '../assets/github.png';
import videoIcon from '../assets/video.png';
import deployedIcon from '../assets/deployed.png';

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
      <div className="icons-container">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon mx-3" />
          </a>
        )}
        {project.video && (
          <a href={project.video} target="_blank" rel="noopener noreferrer">
            <img src={videoIcon} alt="Video" className="icon mx-3" />
          </a>
        )}
        {project.deployed && (
          <a href={project.deployed} target="_blank" rel="noopener noreferrer">
            <img src={deployedIcon} alt="Deployed" className="icon mx-3" />
          </a>
        )}
      </div>      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ProjectDetail;
