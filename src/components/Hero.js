import React from 'react';
import Vid from '../assests/Videoentry.mp4'; // Ensure this path is correct
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Empowering Women through Mobility</h1>
        <p>Safe and reliable female-to-female ride-sharing services.</p>
        <a href="#how-it-works" className="hero-button">Learn More</a>
      </div>
    </div>
  );
};

export default Hero;
