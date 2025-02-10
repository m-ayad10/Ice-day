import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './style.css'

function LearningCard() {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <div className="card-border pt-0">
        <h2>My Courses</h2>
        <hr className="w-100 m-0" />
        <div className="courseCard-container">
          <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="courseCard-img-box">
              <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
            </div>
            <div className='courseCard-content mt-1'>
              <h5 className='m-0'>React - The full course</h5>
              <p className="light-text m-0"><strong>Ayad</strong></p>
              <button className='btn btn-watching p-1 mt-1'><i class="fa-solid fa-video"></i> Start Watching</button>
            </div>
          </div>
          <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="courseCard-img-box">
              <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
            </div>
            <div className='courseCard-content mt-1'>
              <h5 className='m-0'>React - The full course</h5>
              <p className="light-text m-0"><strong>Ayad</strong></p>
              <button className='btn btn-watching p-1 mt-1'><i class="fa-solid fa-video"></i> Start Watching</button>
            </div>
          </div>
          <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="courseCard-img-box">
              <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
            </div>
            <div className='courseCard-content mt-1'>
              <h5 className='m-0'>React - The full course</h5>
              <p className="light-text m-0"><strong>Ayad</strong></p>
              <button className='btn btn-watching p-1 mt-1'><i class="fa-solid fa-video"></i> Start Watching</button>
            </div>
          </div>
          <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="courseCard-img-box">
              <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
            </div>
            <div className='courseCard-content mt-1'>
              <h5 className='m-0'>React - The full course</h5>
              <p className="light-text m-0"><strong>Ayad</strong></p>
              <button className='btn btn-watching p-1 mt-1'><i class="fa-solid fa-video"></i> Start Watching</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningCard
