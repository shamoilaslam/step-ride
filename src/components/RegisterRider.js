import React, { useState } from 'react';
import '../styles/RegisterRider.css';

export default function RegisterRider() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licenseNumber: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register-rider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage('Registration successful!');
        setResponseType('success-message');
        setFormData({ name: '', email: '', phone: '', licenseNumber: '' });
      } else {
        setResponseMessage(data.message || 'Something went wrong. Please try again.');
        setResponseType('error-message');
      }
    } catch (error) {
      setResponseMessage('Error connecting to the server.');
      setResponseType('error-message');
    }
  };

  return (
    <section className="register-rider">
      <div className="register-wrapper">
        <div className="register-info">
          <h2 className="register-title">Become a Rider</h2>
          <p className="register-description">
            Join us in redefining the way women travel. Become a part of a safe, empowering, and rewarding journey today.
          </p>
        </div>
        <div className="register-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Register Now</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
                <label htmlFor="licenseNumber">License Number</label>
                <input
                    type="text"
                    id="licenseNumber"
                    placeholder="Enter your license number"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className="register-button">Get Started</button>
          </form>
          {responseMessage && (
            <p className={`response-message ${responseType}`}>
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
