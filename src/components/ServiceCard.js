import React from 'react';
import '../styles/Services.css';

const ServiceCard = ({ image, alt, title, description, isGradientCard, buttonText }) => {
  return (
    <div className={`service-card ${isGradientCard ? 'gradient-text' : ''}`}>
      <img src={image} alt={alt} className="service-image" />
      <div className="service-content">
        <h2 className="service-title">{title}</h2>
        <p className="service-description">{description}</p>
        <button className="service-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default ServiceCard;
