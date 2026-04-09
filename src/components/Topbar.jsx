import React from 'react'
import './Topbar.css'
import img from '../assets/BCCI_logo.png'

const Topbar = () => {
  return (
    <header className="ipl-header">


      <div className="top-bar d-flex justify-content-between align-items-center px-4">
        <div className="top-bar-left d-flex align-items-center">
          <img src={img} alt="BCCI" className="me-3" height="25" />
          <span className="text-white border-start ps-3 border-secondary">WPL</span>
        </div>
        <div className="top-bar-right d-flex align-items-center">
          <span className="me-3 text-white small">Follow Us</span>
          <div className="social-icons">
            <i className="bi bi-twitter-x me-3"></i>
            <i className="bi bi-instagram me-3"></i>
            <i className="bi bi-facebook"></i>
          </div>
        </div>
      </div>

      
    </header>
  );
};

export default Topbar;