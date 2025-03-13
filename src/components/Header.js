import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ComsatsLogo from '../assests/ComsatsLogo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">Step Ride</Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="#features" className="nav-link">Features</Link>
          <Link to="#locations" className="nav-link">Locations</Link>
          <Link to="/rider" className="nav-link">Become a Driver</Link>
          <Link to="#how-it-works" className="nav-link">How It Works</Link>
        </nav>
        <img
          src={ComsatsLogo}
          alt="Comsats Logo"
          className="comsats-logo"
        />
      </div>
    </header>
  );
}

export default Header;
