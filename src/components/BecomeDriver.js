import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BecomeDriver.css';
import FemaleDriver from '../assests/FemaleDriver.jpg'; // Ensure this path is correct

export default function BecomeDriver() {
  return (
    <section className="become-driver" id="driver">
      <div className="driver-content">
        <h2 className="driver-title">
          Empower Your Journey
        </h2>
        <p className="driver-description">
          Join a bold and pioneering platform that celebrates female drivers. Shape your destiny, 
          earn competitively, and drive change.
        </p>
        <div className="driver-buttons">
          <Link className="driver-button primary" to="/register-rider">Apply Now</Link>
          <a className="driver-button secondary" href="#learn-more">Learn More</a>
        </div>
      </div>
      <div className="driver-graphic-container">
        <div className="graphic-wrapper">
          <img className="driver-graphic" src={FemaleDriver} alt="Empowering Female Drivers" />
        </div>
      </div>
      <div className="abstract-layer"></div>
      <div className="abstract-layer secondary"></div>
    </section>
  );
}
