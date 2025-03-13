import React from 'react';
import '../styles/HowItWorks.css';
import { FaMapMarkerAlt, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import MockUp from '../assests/MockUp.jpg';

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-content">
        <div className="info-section">
          <h2 className="how-it-works-title">Experience the Step Ride Difference</h2>
          <p className="how-it-works-description">
            Designed exclusively for women, Step Ride offers a safe, convenient, and reliable commuting solution. Here's how it works:
          </p>
          <div className="steps">
            <div className="step">
              <FaMapMarkerAlt className="step-icon" />
              <div className="step-content">
                <h3 className="step-title">1. Book Your Ride</h3>
                <p className="step-description">
                  Select your destination and confirm your booking in just a few taps.
                </p>
              </div>
            </div>
            <div className="step">
              <FaShieldAlt className="step-icon" />
              <div className="step-content">
                <h3 className="step-title">2. Ride Safely</h3>
                <p className="step-description">
                  Travel with verified female drivers for a secure journey.
                </p>
              </div>
            </div>
            <div className="step">
              <FaMoneyBillWave className="step-icon" />
              <div className="step-content">
                <h3 className="step-title">3. Seamless Payment</h3>
                <p className="step-description">
                  Pay affordably through cash or digital wallets.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img 
            src={MockUp}
            alt="Step Ride App Mockup" 
            className="app-image"
          />
        </div>
      </div>
      <div className="abstract-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
}
