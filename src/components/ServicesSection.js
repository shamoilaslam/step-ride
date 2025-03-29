import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';
import demoImg from '../assests/demoImg.avif';

const ServicesSection = () => {
  const servicesData = [
    {
      image: demoImg,
      alt: 'Demo Image 1',
      title: 'Seamless Rides, Anytime, Anywhere',
      description: 'Enjoy hassle-free rides with affordable fares, safe drivers, and exclusive discounts.',
      buttonText: 'Book a Ride',
    },
    {
      image: demoImg,
      alt: 'Demo Image 2',
      title: 'Prioritizing Women’s Health & Security',
      description: 'Access affordable healthcare plans and insurance designed for women’s safety and well-being.',
      buttonText: 'Explore Plans',
    },
    {
      image: demoImg,
      alt: 'Demo Image 3',
      title: 'Fast & Secure Deliveries',
      description: 'From food to parcels—experience lightning-fast and reliable delivery services at your doorstep.',
      buttonText: 'Send a Parcel',
    },
    {
      image: demoImg,
      alt: 'Demo Image 4',
      title: 'Shop Smart, Save More',
      description: 'Get amazing discounts and cashback offers while shopping at your favorite stores.',
      buttonText: 'Start Shopping',
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className='service-liner'>
          <h1>Explore Our Services!</h1>
        </div>
        {servicesData.map((service, index) => {
          const isGradientCard = index === 0 || index === 2; // Apply gradient to 1st & 3rd card (0-based index)
          return (
            <div key={index} className={`service-wrapper ${isGradientCard ? `with-gradient gradient-${index}` : ''}`}>
              <ServiceCard
                image={service.image}
                alt={service.alt}
                title={service.title}
                description={service.description}
                isGradientCard={isGradientCard} // Passing a prop to change text color
                buttonText={service.buttonText} // Pass unique button text
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
