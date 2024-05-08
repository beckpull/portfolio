import React, { Component } from 'react';
import eachProject from '';

function Project() {
  const projects = [
    {
      title: "Gastronome",
      technologies: ["JS/Node.js", "Handlebars.js", "Express.js", "PostgreSQL", ""],
      features: [],
      
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    }
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="container">
          <Project title={project.title} technologies={project.technologies} features={}/>
        </div>
      ))}
    </div>
  )
}

export default Project;