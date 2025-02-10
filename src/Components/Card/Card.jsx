import React, { useEffect } from 'react'
import './Card.css'
import './Responsive.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Card() {
     useEffect(() => {
            AOS.init({
              once: true, 
              easing:'ease-in-out',
              
            });
          }, []);
  return (
    <div>
      <div className="card-border">
        <div className="card-container">
            <div className="card-box" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset='200'> 
            <i class="fa-solid fa-graduation-cap card-icon"></i>
            <h4>Skilled Instructors</h4>
            <p className='p-3 pt-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className="card-box" data-aos="zoom-in-up" data-aos-duration="1000">
            <i class="fa-solid fa-book card-icon"></i>
            <h4>Book Library</h4>
            <p className='p-3 pt-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className="card-box" data-aos="zoom-in-up" data-aos-duration="1000">
            <i class="fa-solid fa-globe card-icon"></i>
            <h4>Online Classes</h4>
            <p className='p-3 pt-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className="card-box" data-aos="zoom-in-up" data-aos-duration="1000">
            <i class="fa-solid fa-home card-icon "></i>
            <h4>Home Projects</h4>
            <p className='p-3 pt-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
