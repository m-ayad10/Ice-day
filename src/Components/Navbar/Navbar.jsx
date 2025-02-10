import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h4 onClick={()=>navigate('/')} className='cursor-p'><i class="fa-solid fa-graduation-cap"></i> YenLearn</h4>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button className='btn explore-button shadow-none' onClick={()=>navigate('/courses')}>Explore course</button>
        </li>
      </ul>
      <div>
  <ul className="navbar-nav ms-auto navbar-hide">
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle d-flex align-items-center"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="loged-initial"><p>MA</p></div>
      </a>
      <ul className="dropdown-menu dropdown-menu-loged" aria-labelledby="navbarDropdownMenuLink">
        <li><a className="dropdown-item" href="#" onClick={()=>navigate('/profile')}><i className="fa-solid fa-user"></i> My profile</a></li>
        <li><a className="dropdown-item" href="#" onClick={() => navigate('/learning')}><i class="fa-solid fa-book"></i> My Learnings</a></li>
        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-right-from-bracket"></i> Logout</a></li>
      </ul>
    </li>
  </ul>
</div>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
