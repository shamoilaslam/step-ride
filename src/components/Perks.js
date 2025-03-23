import React from "react";
import "../styles/Perks.css";
import perkearnings from "../assests/perkearnings.png";
import perkflexible from "../assests/perkflexible.png";
import perksafe from "../assests/perksafe.png";

const Perks = () => {
  return (
    <section className="perks-section">
      <h2 className="title">Why Become a StepRides Rider?</h2>
      <p className="description">
        Earn money on your schedule while empowering women’s mobility.
      </p>
      <div className="perks-grid">
        <div className="perk-card">
          <div className="perk-text">
            <h3>Flexible Hours</h3>
            <p>Work when you want and earn more.</p>
          </div>
          <img src={perkflexible} alt="" className="img-card" />
        </div>
        <div className="perk-card">
          <img src={perksafe} alt="" className="img-card" />
          <div className="perk-text">
            <h3>Safe Rides</h3>
            <p>Female-only rider and driver network.</p>
          </div>

        </div>
        <div className="perk-card">
          <div className="perk-text">
          <h3>Good Earnings</h3>
          <p>Get fair pay with transparent policies.</p>
          </div>
          <img src={perkearnings} alt="" className="img-card" />
        </div>
      </div>
    </section>
  );
};

export default Perks;
