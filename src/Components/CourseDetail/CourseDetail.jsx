import React from 'react'
import Notepad from '../Notepad/Notepad'
import './style.css'

function CourseDetail() {
    return (
        <div>
            <div className='header-bg'>
                <div className="d-flex  t">
                    <button className='btn btn-white p-2 back-header m-1'><i class="fa-solid fa-arrow-left"></i>  Back to Course page</button>
                    <h3 className='header-name m-2 ms-3'>React Full Course 2024</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-8">
                    <video controls autoPlay muted className="course-video w-100">
                        <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3 className='ps-4 p-1'>Introduction</h3>
                </div>
                <div className="col-lg-4">
                    <div className="p-2">
                        <h5>Course Content</h5>
                        <p className='bg-light p-3 m-2'><i class="fa-solid fa-video"></i> Introduction</p>
                        <p className='bg-light p-3 m-2'><i class="fa-solid fa-video"></i> Basics</p>
                        <p className='bg-light p-3 m-2'><i class="fa-solid fa-video"></i> Javascript</p>
                    </div>
                    <Notepad/>  
                </div>
            </div>
            <div className="p-4 courseVideo-content-box mt-4 m-5 mt-0">
          <h5>Summary</h5>
          <div className="row">
            <p>Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries. It does not have any meaningful content and is often used to fill spaces in design mockups</p>
          </div>
        </div>
            <div>

            </div>
        </div>
    )
}

export default CourseDetail
