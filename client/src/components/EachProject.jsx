import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../assets/github-icon.jpg';
import videoIcon from '../assets/video-icon.jpg';
import deployedIcon from '../assets/deployed-icon.jpeg';
import '../styles/Project.css';

function EachProject({ id, title, image, github, video, deployed }) {
  return (
    <div className="project-summary box">
      <Link to={`/Projects/${id}`}>
        <div className="project-content">
          <img src={image} alt={title} className="project-image" />
          <h3 className="project-title">{title}</h3>
        </div>
      </Link>
      <div className="icons-container">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon mx-3" />
          </a>
        )}
        {video && (
          <a href={video} target="_blank" rel="noopener noreferrer">
            <img src={videoIcon} alt="Video" className="icon mx-3" />
          </a>
        )}
        {deployed && (
          <a href={deployed} target="_blank" rel="noopener noreferrer">
            <img src={deployedIcon} alt="Deployed" className="icon mx-3" />
          </a>
        )}
      </div>
    </div>
  );
}

export default EachProject;
