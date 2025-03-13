import React from 'react';
import { FaCamera, FaMapMarkerAlt, FaWater, FaMotorcycle, FaShieldAlt } from 'react-icons/fa';
import '../styles/Features.css';
import femalecar from '../assests/femalecar.webp'
const Features = () => {
  const featuresData = [
    {
      icon: <FaCamera />,
      title: 'Webcam Verification',
      description: 'Real-time rider identity verification ensures your safety.',
      alignment: 'left',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Live Tracking',
      description: 'Monitor your ride with real-time updates for peace of mind.',
      alignment: 'right',
    },
    {
      icon: <FaWater />,
      title: 'Complimentary Water',
      description: 'Stay hydrated with free water bottles during your ride.',
      alignment: 'left',
    },
    {
      icon: <FaMotorcycle />,
      title: 'Comfortable Rides',
      description: 'Reliable and comfortable rides tailored for every user.',
      alignment: 'right',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Enhanced Safety',
      description: 'Top-notch safety measures for a secure journey.',
      alignment: 'left',
    },
  ];

  return (
    <section className="features-section">
      <div className="image-container">
        <img src={femalecar} alt="Feature Image" className="feature-image" />
      </div>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div
            className={`feature-row ${
              feature.alignment === 'left' ? 'align-left' : 'align-right'
            }`}
            key={index}
          >
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-content">
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
