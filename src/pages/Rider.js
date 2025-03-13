import React, { useState } from "react";
import Perks from "../components/Perks";
import RegisterRider from "../components/RegisterRider";
import Reviews from "../components/Reviews";
import Header from "../components/Header";
import Liner from "../components/Liner";
import "../styles/Rider.css";

const BecomeRider = () => {
  return (
    <div className="home-container">
      <Header />
      <Liner />
      <Perks />
      <Reviews />
    </div>
  );
};

export default BecomeRider;

