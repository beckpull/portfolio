import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

function EachProject({ id, title, image }) {
  return (
    <div className="project-summary box">
      <Link to={`/Projects/${id}`}>
        <div className="project-content">
          <img src={image} alt={title} className="project-image" />
          <h3 className="project-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default EachProject;
