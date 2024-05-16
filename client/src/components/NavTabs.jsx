import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img from '../assets/logo.png';
import '../styles/Navbar.css';

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <img src={img} alt="logo" className='logo navbar-start' id="navbar-logo"></img>
      <p className='title is-6 mt-4' id="nav-name">Beck Pull</p>

        <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={toggleMenu}  >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'navbar-item is-active' : 'navbar-item'}>About Me</Link>
          <Link to="/Blog" onClick={toggleMenu} className={currentPage === '/Blog' ? 'navbar-item is-active' : 'navbar-item'}>Tech Blog</Link>
          <Link to="/Projects" onClick={toggleMenu} className={currentPage === '/Projects' ? 'navbar-item is-active' : 'navbar-item'}>Portfolio</Link>
          <Link to="/Resume" onClick={toggleMenu} className={currentPage === '/Resume' ? 'navbar-item is-active' : 'navbar-item'}>Resumé</Link>
          <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'navbar-item is-active' : 'navbar-item'}>Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
