import React, { Component } from 'react';
import About from './About';
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className="container my-6 has-text-centered">
        <h1 className="title is-1 mt-6">Welcome!</h1>
        <h3 className="subtitle is-6"><i>☀️ thanks for stopping by! ☀️</i></h3>
      </div>
      <div className="container">
        <About />
      </div>
    </>
    );
}

export default Home;