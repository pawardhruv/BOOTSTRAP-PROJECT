import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>

        <div className="container py-5">
        <div className="row">
    
          <div className="col-md-4 mb-4">
            <h4 className="footer-logo">IPL 2026</h4>
            <p className="small text-secondary mt-3">
              The Indian Premier League is a professional men's Twenty20 cricket league, contested by ten teams based out of ten Indian cities.
            </p>
          </div>


          <div className="col-md-4 mb-4 text-center">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#teams">Teams</a></li>
              <li><a href="#news">Latest News</a></li>
              <li><a href="#stats">Points Table</a></li>
              <li><a href="#tickets">Buy Tickets</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 text-end">
            <h5 className="text-white mb-3">Follow Us</h5>
            <div className="social-icons d-flex justify-content-end gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
            <p className="small text-secondary mt-4">Contact: help@ipl.com</p>
          </div>
        </div>

        <hr className="footer-line" />


        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="small m-0">© 2026 IPL. All Rights Reserved.</p>
          <div className="footer-bottom-links small">
             <span className="me-3">Privacy Policy</span>
             <span>Terms & Conditions</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom-brand">
       <h2 class="wide-brand-text"> TATA IPL </h2>
      </div>
    </div>
  )
}

export default Footer
