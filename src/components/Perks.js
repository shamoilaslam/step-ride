import React from "react";
import "../styles/Perks.css";

const Perks = () => {
  return (
    <section className="perks-section">
      <h2 className="title">Why Become a StepRides Rider?</h2>
      <p className="description">
        Earn money on your schedule while empowering women’s mobility.
      </p>
      <div className="perks-grid">
        <div className="perk-card">
          <h3>Flexible Hours</h3>
          <p>Work when you want and earn more.</p>
        </div>
        <div className="perk-card">
          <h3>Safe Rides</h3>
          <p>Female-only rider and driver network.</p>
        </div>
        <div className="perk-card">
          <h3>Good Earnings</h3>
          <p>Get fair pay with transparent policies.</p>
        </div>
      </div>
    </section>
  );
};

export default Perks;
