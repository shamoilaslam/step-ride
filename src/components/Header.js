import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ComsatsLogo from '../assests/ComsatsLogo.png';

function Header() {
  return (
      <nav className="nav">
          <div className="logo">
            <Link to="/" className="logo-link">Step Ride</Link>
          </div>
          <div className='container'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="#features" className="nav-link">Features</Link>
            <Link to="#locations" className="nav-link">Locations</Link>
            <Link to="/rider" className="nav-link">Become a Driver</Link>
            <Link to="#how-it-works" className="nav-link">How It Works</Link>
          </div>
          <img
            src={ComsatsLogo}
            alt="Comsats Logo"
            className="comsats-logo"
          />
      </nav>
  );
}

export default Header;
