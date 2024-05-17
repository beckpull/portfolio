import React from 'react';
import '../styles/Footer.css'
import githubIcon from '../assets/github.png';
import linkedInIcon from '../assets/linkedin.png';

function Footer() {
    return (
        <footer className="has-text-centered">
            <span>
            <a href="https://github.com/beckpull" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
            <a href="https://linkedin.com/in/beckpull" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" className="icon" />
            </a>
            </span>
            <p className="signature">made with love, bp</p>
        </footer>
    )
}

export default Footer;