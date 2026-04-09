import React from 'react';
import './Hero.css';
import videoSource from '../assets/The Hit-Man.mp4';

const Hero = () => {
  return (
    <div className="homepage-container">
      <div className="hero-banner">
        <video autoPlay muted loop className="bg-video">
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="banner-content">
          <span className="badge bg-danger mb-2">Video</span>
          <h1 className="fw-bold text-white">Rohit cha CLASS </h1>
          <p className="text-light">29, March,2026 | 01:51 mins </p>
          <button className="ipl-btn"> Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;