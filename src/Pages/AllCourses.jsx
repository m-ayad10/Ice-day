import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FilterCourse from '../Components/FilterCourse/FilterCourse'
import BottomBar from '../Components/Bottom Bar/BottomBar'

function AllCourses() {
  return (
    <div>
      <Navbar/>
      <FilterCourse/>
      <BottomBar/>
    </div>
  )
}

export default AllCourses
