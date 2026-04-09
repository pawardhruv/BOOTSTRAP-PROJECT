import React from 'react'
import './Header.css'
import img from '../assets/ipl-logo-new-old.png'


const Header = () => {
  return (
    <div>
      <nav className="main-navbar navbar navbar-expand-lg px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={img} alt="IPL Logo" height="50" />
          </a>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

            <ul className="navbar-nav text-uppercase fw-bold">
              <li className="nav-item"><a className="nav-link" href="#">Tickets</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Matches</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Points Table</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Videos</a></li>
              <li className="nav-item"><a className="nav-link" href="#">News</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="#">More</a></li>
            </ul>
          </div>

          <div className="nav-right-icons d-flex align-items-center">
             <div className="icon-group me-3 text-center">
                <i className="bi bi-graph-up-arrow"></i>
                <div className="small-text">Fan Poll</div>
             </div>
             <div className="icon-group me-3 text-center">
                <i className="bi bi-trophy"></i>
                <div className="small-text">Viewers Choice</div>
             </div>
             <i className="bi bi-search fs-5"></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
