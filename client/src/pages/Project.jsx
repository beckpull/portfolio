import React, { Component } from 'react';
import eachProject from '../components/Project';

function Project() {
  const projects = [
    {
      title: "Gastronome",
      description: "",
      technologies: ["JS/Node.js", "Handlebars.js", "Express.js", "PostgreSQL", ""],
      features: [],
      image: "",
      video: "",
      github: "",
      deployed: ""
    },
    {
      title: "",
      description: "",
      technologies: ["", "", "", "", ""],
      features: [],
      image: "",
      video: "",
      github: "",
      deployed: ""
    },
    {
      title: "",
      description: "",
      technologies: ["", "", "", "", ""],
      features: [],
      image: "",
      video: "",
      github: "",
      deployed: ""
    },
    {
      title: "",
      description: "",
      technologies: ["", "", "", "", ""],
      features: [],
      image: "",
      video: "",
      github: "",
      deployed: ""
    },
    {
      title: "",
      description: "",
      technologies: ["", "", "", "", ""],
      features: [],
      image: "",
      video: "",
      github: "",
      deployed: ""
    },
    {
      title: "",
      description: "",
      technologies: ["", "", "", "", ""],
      features: [],
      image: "",
      video: "",
      github: "",
      deployed: ""
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="container">
          <eachProject title={project.title} description={project.description} technologies={project.technologies} features={project.features} image={project.image} video={project.video} github={project.github} deployed={project.deployed}/>
        </div>
      ))}
    </div>
  )
}

export default Project;