import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProfileInfo from '../Components/Profile Info/ProfileInfo'
import BottomBar from '../Components/Bottom Bar/BottomBar'

function Profile() {
  return (
    <div>
      <Navbar/>
      <ProfileInfo/>
      <BottomBar/>
    </div>
  )
}

export default Profile
