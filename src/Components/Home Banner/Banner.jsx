import React from 'react'
import './Banner.css'
import './Responsive.css'


function Banner() {
    return (
        <div>
            <div className='banner-container'>
                <img className='w-100' src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/11/GettyImages-1146979125.jpg" alt="" />
                <div className='banner-content-box'>
                <h5 className='banner-color'>Best online course</h5>
                <h1 className='text-white'>The Best Online Learning Platform</h1>
                <p className='text-white banner-text'>Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries. 
                </p>
                </div>
                <div className="banner-fade"></div>
            </div>
        </div>
    )
}

export default Banner
