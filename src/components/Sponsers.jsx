import React from 'react'
import './Sponsers.css'
import img1 from '../assets/new-sponsor-tata-logo.png'
import img2 from '../assets/new-sponsor-rupay-logo.png'
import img3 from '../assets/new-sponsor-ceat-logo.png'
import img4 from '../assets/new-sponsor-googleai-logo.png'

const Sponsers = () => {
  return (
    <div>

      <div className="sponsors-section py-5">
        <div className="container text-center">
          <p className="text-secondary small fw-bold mb-2">TITLE SPONSOR</p>
          <img src={img1} alt="Tata" className="main-sponsor mb-5" />
          
          <div className="row justify-content-center border-top pt-4">
            <div className="col-md-2 col-4"><img src={img2} alt="RuPay" className="img-fluid" /></div>
            <div className="col-md-2 col-4"><img src={img3} alt="CEAT" className="img-fluid" /></div>
            <div className="col-md-2 col-4"><img src={img4} alt="Google AI" className="img-fluid" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsers
