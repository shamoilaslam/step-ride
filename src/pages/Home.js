import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import BecomeDriver from '../components/BecomeDriver';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import RideSharingArticles from '../components/RideSharingArticles';
import RiderTestimonials from '../components/RiderTestimonials';

// Importing CSS file for styling
import '../styles/Home.css';  // Create and import a new Home.css file for custom styles

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <About />
      <Features />
      <BecomeDriver />
      <HowItWorks />
      {/* <Locations /> */}
      <RiderTestimonials />
       <RideSharingArticles /> 
      <Footer />
    </div>
  );
}
