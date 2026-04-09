import React from 'react'
import './Thumbnail.css';
import img1 from '../assets/csk vs rcb.png'
import img2 from '../assets/Srh vs Lsg.png'
import img3 from '../assets/GtvsRr.png'
import img4 from '../assets/MivsDc.png'
import img5 from '../assets/CskvsPbks.png'


const Thumbnail = () => {
  return (
    <div className="thumbnail-section">
        <div className="container-fluid px-8">
          <h5 className="text-white mb-3">Good Evening! Curated shorts for you</h5>
          <div className="d-flex gap-3 pb-3 custom-scroll">
            
            <div className="match-card">
              <img src={img1} alt="match" className="thumb-img" />
              <p className="match-label">RCB v CSK</p>
            </div>
      
            <div className="match-card">
              <img src={img2} alt="match" className="thumb-img" />
              <p className="match-label">SRH V LSG</p>
            </div>

            <div className="match-card">
              <img src={img3} alt="match" className="thumb-img" />
              <p className="match-label">GT V RR</p>
            </div>

            <div className="match-card">
              <img src={img4} alt="match" className="thumb-img" />
              <p className="match-label">MI V DC</p>
            </div>

            <div className="match-card">
              <img src={img5} alt="match" className="thumb-img" />
              <p className="match-label">CSK v PBKS</p>
            </div>

            
          </div>
        </div>
      </div>
  )
}

export default Thumbnail

