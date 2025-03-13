import React from 'react'
import '../styles/Liner.css';
import riderhero from '../assests/riderhero.jpg';

const Liner = () => {
  return (
    <section className='liner'>
      <div className='liner-container'>
        <div className='text-container'>
          <h1>Get to your destination with ease</h1>
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