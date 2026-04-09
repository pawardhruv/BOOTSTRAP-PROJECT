import React from 'react'
import './Card.css'
import img1 from '../assets/MI.png'
import img2 from '../assets/rcb.png'
import img3 from '../assets/srh.png'


const Card = () => {
  return (
    <div className="pt-section py-5">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="text-dark fw-bold">Points Table</h3>
      <div className="slider-arrows">
        <span className="me-2">〈</span>
        <span>〉</span>
      </div>
    </div>

    <div className="d-flex justify-content-center gap-3 overflow-auto pb-4">
      
  
      <div className="pt-card">
        <div className="card-top d-flex align-items-start">
          <h1 className="rank-num">1</h1>
          <p className="team-name-text">MUMBAI <br/> INDIANS</p>
        </div>
        
        <div className="team-logo-mid">
          <img src={img1} alt="MI" className="pt-logo" />
        </div>

        <hr className="divider-line" />

        <div className="stats-grid d-flex justify-content-between">
          <div className="stat-box"><strong>4</strong><p>Points</p></div>
          <div className="stat-box"><strong>2</strong><p>Played</p></div>
          <div className="stat-box"><strong>2</strong><p>Won</p></div>
          <div className="stat-box"><strong className="text-success">2.501</strong><p>NRR</p></div>
        </div>
      </div>

  
      <div className="pt-card">
        <div className="card-top d-flex align-items-start">
          <h1 className="rank-num">2</h1>
          <p className="team-name-text">ROYAL CHALLENGERS <br/> BANGALORE</p>
        </div>
        <div className="team-logo-mid">
          <img src={img2} alt="RCB" className="pt-logo" />
        </div>
        <hr className="divider-line" />
        <div className="stats-grid d-flex justify-content-between">
          <div className="stat-box"><strong>4</strong><p>Points</p></div>
          <div className="stat-box"><strong>2</strong><p>Played</p></div>
          <div className="stat-box"><strong>2</strong><p>Won</p></div>
          <div className="stat-box"><strong className="text-success">1.170</strong><p>NRR</p></div>
        </div>
      </div>

      
      <div className="pt-card">
        <div className="card-top d-flex align-items-start">
          <h1 className="rank-num">3</h1>
          <p className="team-name-text">SUNRISES <br/> HYDERABAD</p>
        </div>
        <div className="team-logo-mid">
          <img src={img3} alt="SRH" className="pt-logo" />
        </div>
        <hr className="divider-line" />
        <div className="stats-grid d-flex justify-content-between">
          <div className="stat-box"><strong>4</strong><p>Points</p></div>
          <div className="stat-box"><strong>2</strong><p>Played</p></div>
          <div className="stat-box"><strong>2</strong><p>Won</p></div>
          <div className="stat-box"><strong className="text-success">1.170</strong><p>NRR</p></div>
        </div>
      </div>

      
    </div>

    
    <div className="text-center mt-4">
      <button className="full-pt-btn">Full Points Table</button>
    </div>

  </div>
  </div>
  )
}

export default Card
