import React from 'react'
import './style.css'

function CourseVideos() {
  return (
    <div className=''>
      <div className="row">
        <div className="col-lg-6 ">
          <video controls autoPlay muted className="course-video w-100">
            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-6  ps-0">
          <div className="courseCard-border ">
            <h2>React - The full course</h2>
            <h4>React - The full course</h4>
            <h4>₹ 800</h4>
            <p className='light-text m-0'>Created by <strong>Sinan np</strong></p>
            <p className='light-text m-0'>Created on <strong>20-06-2004</strong></p>
            <p>English</p>
            <button className='btn btn-primary shadow-none'>Enroll</button>
          </div>
          {/* Add content here */}

        </div>
      </div>
      <div className="courseCard-border">
        <div className="p-4 courseVideo-content-box">
          <h5>What you'll learn</h5>
          <div className="row">
            <p className='m-0 col-lg-4 col-md-4 col-xs-6'><i class="fa-solid fa-check text-success"></i> React Full Course 2024 </p>
            <p className='m-0 col-lg-4 col-md-4 col-xs-6'><i class="fa-solid fa-check text-success"></i> React Full Course 2024</p>
            <p className='m-0 col-lg-4 col-md-4 col-xs-6'><i class="fa-solid fa-check text-success"></i> React Full Course 2024</p>
          </div>
        </div>
        <div className="p-4 courseVideo-content-box mt-4">
          <h5>Course Description</h5>
          <div className="row">
            <p>Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries. It does not have any meaningful content and is often used to fill spaces in design mockups</p>
          </div>
        </div>
        <div className="p-4 courseVideo-content-box mt-4">
          <h5>Course Curiculum</h5>
          <div className="row">
            <p>Introduction</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CourseVideos
