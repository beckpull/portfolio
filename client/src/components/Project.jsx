import React from 'react';
import '../styles/Project.css';

function EachProject(props) {
  const { title, description, technologies, features, image, video, github, deployed } = props;
  return (
    <div className="container">
      <h2 className='subtitle is-3'>{title}</h2>
      <img src={image} alt="project photo" />
      <br />
      <p>{description}</p>
      <br />
      <br />
      <h4>Technologies:</h4>
      <br />
      <ol>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ol>
      <br />
      <br />
      <h4>Features:</h4>
      <br />
      <ol>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ol>
      <br />
      <button><a href={github} className='button'>Github Link</a></button>
      <button><a href={video} className='button'>Video Link</a></button>
      <button><a href={deployed} className='button'>Deployed Link</a></button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default EachProject;
