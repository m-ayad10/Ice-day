import React, { useEffect } from 'react'
import './style.css'
import './Responsive.css'
import AOS from "aos";
import "aos/dist/aos.css";
 

function CourseCard() {
    useEffect(() => {
        AOS.init({
          once: true, // Whether animation should happen only once
        });
      }, []);
    return (
        <div>
            <div className="d-flex justify-content-center">
                <h2>Popular Courses</h2>
            </div>
            <div className="courseCard-border">
                <div className="courseCard-container">
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h4>React - The full course</h4>
                        </div>
                    </div>
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h4>React - The full course</h4>
                        </div>
                    </div>
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h4>React - The full course</h4>
                        </div>
                    </div>
                    <div className="courseCard-box" data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="courseCard-img-box">
                            <img src="https://fireship.io/courses/react/img/featured.png" alt="" className="courseCard-img" />
                        </div>
                        <div className='courseCard-content'>
                            <h4>₹ 800</h4>
                            <h4>React - The full course</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseCard
