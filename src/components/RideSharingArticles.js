import React from "react";
import "../styles/RideSharingArticle.css";  // For custom styling
import femalerider from '../assests/femalerider.jpg'; // Ensure this path is correct
import femalerider2 from '../assests/femalerider2.jpg'; // Ensure this path is correct
import femalerider3 from '../assests/femalerider3.jpg'; // Ensure this path is correct

const RideSharingArticles = () => {
  return (
    <div className="articles-container">
      <h1 className="articles-title">Female Ride Sharing Articles</h1>

      <div className="articles-list">
        <div className="article-card">
          <img src={femalerider} alt="Empowering Women" className="article-icon" />
          <div className="article-content">
            <h2>Empowering Women Through Ride Sharing</h2>
            <p>
              Learn how female-focused ride-sharing services empower women by
              providing safer and more reliable transportation options.
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src={femalerider2} alt="Step Ride" className="article-icon" />
          <div className="article-content">
            <h2>How Step Ride is Changing the Game</h2>
            <p>
              Discover how Step Ride is transforming the transportation landscape
              for female riders and drivers at Comsats University.
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src={femalerider3} alt="Benefits of Female Networks" className="article-icon" />
          <div className="article-content">
            <h2>Benefits of Female-Only Ride Networks</h2>
            <p>
              Explore the unique advantages of using female-only ride networks
              for commuting, safety, and a sense of community.
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src={femalerider2} alt="Safety and Security" className="article-icon" />
          <div className="article-content">
            <h2>Safety and Security in Ride Sharing</h2>
            <p>
              Why safety is a priority in ride-sharing, and how a female-centric
              service ensures peace of mind for riders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideSharingArticles;
