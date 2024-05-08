import React, { Component } from 'react';

function Project() {
  const projects = [
    {
      title: "Gastronome",
      technologies: ["JS/Node.js", "Handlebars.js", "Express.js", "PostgreSQL", ""]
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
    <div className="container">
      {projects.map((project) => (
        <></>
      ))}
    </div>
  )
}

export default Project;