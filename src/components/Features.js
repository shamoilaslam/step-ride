import React from 'react';
import '../styles/Features.css';

// Importing images for each feature
import cycle from '../assests/cycle.avif';

const Features = () => {
  const featuresData = [
    {
      image: cycle,
      title: 'Webcam Verification',
      description: 'Real-time rider identity verification ensures your safety.',
    },
    {
      image: cycle,
      title: 'Live Tracking',
      description: 'Monitor your ride with real-time updates for peace of mind.',
    },
    {
      image: cycle,
      title: 'Complimentary Water',
      description: 'Stay hydrated with free water bottles during your ride.',
    },
    {
      image: cycle,
      title: 'Comfortable Rides',
      description: 'Reliable and comfortable rides tailored for every user.',
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {/* Full-width "Why Us" title */}
        <div className="features-header">
          <h1>Why Us?</h1>
        </div>

        {/* 2x2 Grid for Feature Cards */}
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <div className="feature-text">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
