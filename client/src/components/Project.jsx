import React from 'react';

function EachProject(props) {
  const { title, description, technologies, features, image, video, github, deployed } = props;
  return (
    <div className="container">
      <h2>{title}</h2>
      <img src={image} alt="project photo"></img>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => {
          <li>{tech}</li>
        })}
      </ul>
      <ul>
        {features.map((feature) => {
          <li>{feature}</li>
        })}
      </ul>
      <span><a href={github}>Github Link</a></span>
      <span><a href={video}>Video Link</a></span>
      <span><a href={deployed}>Deployed Link</a></span>
    </div>
  )
}

export default EachProject;