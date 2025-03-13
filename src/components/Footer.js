import React from 'react';
import '../styles/Footer.css';
import '../styles/ComsatsLogo.css';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ComsatsLogo from '../assests/ComsatsLogo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3 className="footer-title">Step Ride</h3>
          <p className="footer-description">
            Step Ride is a female-to-female ride-sharing service, ensuring safety, affordability, and empowerment in Pakistan. 
            It is a proud startup of COMSATS University Islamabad, Islamabad Campus.
          </p>
        </div>
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#driver">Become a Driver</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <img src={ComsatsLogo} alt="Comsats Logo" className="comsats-logo" />
        </div>
      </div>
      <div className="footer-animation">
        <div className="vehicle car"></div>
        <div className="vehicle motorcycle"></div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Step Ride. All rights reserved.</p>
      </div>
    </footer>
  );
}
