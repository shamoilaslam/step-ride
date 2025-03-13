import React from 'react';
import '../styles/About.css';
import FemaleBike from '../assests/FemaleBike.jpg';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Image Container */}
        <div className="about-image-container">
          <div className="image-wrapper">
            <img className="about-image" src={FemaleBike} alt="About Step Ride" />
            <div className="image-overlay">
              <p>Empowering Women Through Mobility</p>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="about-text-container">
          <h2 className="about-title">What is Step Ride?</h2>
          <p className="about-description">
            Step Ride is a movement that goes beyond ride-sharing. It's about empowering women with
            safe, affordable, and reliable transportation tailored to their needs in Pakistan.
          </p>
          <div className="about-highlights">
            {[{ icon: '🛡️', text: 'Safety First' },
              { icon: '💰', text: 'Affordable' },
              { icon: '🌟', text: 'Empowering Women' },
            ].map((highlight, index) => (
              <div key={index} className="highlight">
                <span className="highlight-icon">{highlight.icon}</span>
                <p>{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
