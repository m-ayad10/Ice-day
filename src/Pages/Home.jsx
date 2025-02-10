import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Home Banner/Banner'
import Card from '../Components/Card/Card'
import CourseCard from '../Components/Course Card/CourseCard'
import BottomBar from '../Components/Bottom Bar/BottomBar'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Card/>
      <CourseCard/>
      <BottomBar/>
      <Footer/>

    </div>
  )
}

export default Home
