import React from 'react';
import '../styles/Hero.css';
import orig from '../assests/orig.jpeg'

const Hero = () => {
  return (
    <div className="main-container">
      <div className="hero-container">
        {/* <img src={orig} className="img-card" alt="Female Biker" /> */}
        <div className="content">
          <h1>Empowering Women <br/> through Mobility</h1>
          <p>Safe and reliable female-to-female ride-sharing services.</p>
          <a href="#how-it-works" className="hero-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;