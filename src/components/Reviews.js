import React from "react";
import "../styles/Reviews.css";

const Reviews = () => {
  const reviews = [
    { text: "StepRides changed my life! I earn well and feel safe.", name: "Ayesha R." },
    { text: "An amazing service for women, by women. Highly recommend!", name: "Sara K." },
  ];

  return (
    <section className="reviews-section">
      <h2 className="title">What Riders Say</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>{review.text}</p>
            <span className="reviewer">{review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
