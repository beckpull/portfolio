import React from 'react';
import githubIcon from '../assets/github-icon.jpg';
import linkedInIcon from '../assets/linkedin-icon.jpeg';

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