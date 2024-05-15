import React, { Component } from 'react';
import About from './About';
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className="container my-6 has-text-centered">
        <h3 className="subtitle is-4 mt-6"><i>☀️ Welcome! ☀️</i></h3>
      </div>

      <div className="img-container">
        <img src="./logo.png" id="about-logo"></img>
          <span className="subtitle is-2 about-me">About Me</span>
      </div>

      <div className="container">
        <About />
      </div>
    </>
  );
}

export default Home;