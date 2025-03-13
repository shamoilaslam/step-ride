import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterRider from '../components/RegisterRider'; // Import the new page
import AboutPage from '../pages/AboutPage'
import Rider from '../pages/Rider'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-rider" element={<RegisterRider />} /> 
        <Route path='/about' element={< AboutPage />} />
        <Route path='/rider' element={<Rider />} />

      </Routes>
    </Router>
  );
}
