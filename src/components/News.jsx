import React from 'react'
import './News.css'
import img1 from '../assets/ipl.png'
import img2 from '../assets/ceremony.png'

const News = () => {
  return (
    <div>
      <div className="news-section py-5 text-light">
        <div className="container">
          <h3 className="fw-bold mb-4">Latest News & Information</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
               <div className="news-item d-flex gap-3 align-items-center p-3 border rounded shadow-sm">
                  <img src={img1} alt="news" width="100" className="rounded" />
                  <div>
                    <h6>IPL 2026: Schedule Announced!</h6>
                    <p className="small m-0 text-secondary">Read more about the upcoming matches and venues.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
               <div className="news-item d-flex gap-3 align-items-center p-3 border rounded shadow-sm">
                  <img src={img2} alt="news" width="100" className="rounded" />
                  <div>
                    <h6>IPL 2026: No Opening Ceremony!</h6>
                    <p className="small m-0 text-secondary">Read more about the upcoming matches and venues.</p>
                  </div>
               </div>
            </div>
          </div> 
        </div>
    </div>
    </div>
  )
}

export default News
