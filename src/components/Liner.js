import React from 'react'
import '../styles/Liner.css';
import riderhero from '../assests/riderhero.jpg';

const Liner = () => {
  return (
    <section className='liner'>
      <div className='liner-container'>
        <div className='text-container'>
          <h1>Get to your destination with ease</h1>
          <p>Tech is at the heart of everything we do. Our goal? To transform the everyday lives of people around the world</p>
          <button>Book a ride</button>
        </div>
        <img
          src={riderhero}
          alt='Rider Hero'
          className='rider-hero'
         />
      </div>
    </section>                                        
  )
}

export default Liner