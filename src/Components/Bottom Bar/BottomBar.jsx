import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

function BottomBar() {
    const navigate=useNavigate()
    return (
        <div className=''>
            <div className="bottom-hieght">

            </div>
            <div className="bottom-bar">


                <div className="bottom-container bg-light pt-2">
                    <div className="bottom-box">
                        <div className="cursor-p" onClick={()=>navigate('/')}>
                            <i class="fa-solid fa-house bottom-icon"></i>
                            <p className='mb-0 bottom-text'>Home</p>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="cursor-p" onClick={()=>navigate('/courses')}>
                        <i class="fa-solid fa-book-open bottom-icon"></i>
                            <p className='mb-0 bottom-text'>Explore Course</p>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div  className="cursor-p" onClick={()=>navigate('/learning')}>
                        <i class="fa-solid fa-book bottom-icon"></i>
                            <p className='mb-0 bottom-text'>My Learnings</p>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="">
                            <i class="fa-solid fa-user bottom-icon"></i>
                            <p className='mb-0 bottom-text'>Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBar
