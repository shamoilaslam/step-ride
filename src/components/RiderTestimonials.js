import React from "react";
import "../styles/RidersTestimonials.css"; // Importing the styles



const riders = [
  { name: "Ayesha Khan", image: "/images/rider1.jpg" },
  { name: "Sara Ahmed", image: "/images/rider2.jpg" },
  { name: "Fatima Malik", image: "/images/rider3.jpg" },
  { name: "Zainab Ali", image: "/images/rider4.jpg" }
];

const testimonials = [
  {
    client: "Courtney Henry",
    role: "Happy Customer",
    comment:
      "Massa tincidunt dui ut ornare lectus sit amet est placerat mauris augue neque gravida in fermentum turpis egestas sed tempus. Adipiscing elit habitant morbi."
  },
  {
    client: "Jane Doe",
    role: "Regular Rider",
    comment:
      "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit. Auctor eu augue ut lectus arcu bibendum at varius vel."
  }
];

const RidersTestimonials = () => {
  return (
    <div className="rider-container">
       <div className="riders-header">
        <h1>Meet Our Riders</h1>
        <p>Our community is growing every day with passionate and dedicated riders.</p>
      </div>
      {/* Riders Section */}
      <div className="rider-scroll">
        {riders.map((rider, index) => (
          <div key={index} className="rider-card">
            <img src={rider.image} alt={rider.name} className="rider-image" />
            <p className="rider-name">{rider.name}</p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stat-box">
          <h2>500+</h2>
          <p>Riders</p>
        </div>
        <div className="stat-box">
          <h2>1.2K</h2>
          <p>Reviews</p>
        </div>
        <div className="stat-box">
          <h2>5K+</h2>
          <p>Total Rides</p>
        </div>
        <div className="stat-box">
          <h2>20+</h2>
          <p>Awards</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonial-header">
          <h2>Loved by Thousands of Riders</h2>
          <p>
            Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.
          </p>
        </div>
        <div className="testimonial-scroll">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h3>{testimonial.client}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-comment">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RidersTestimonials;
