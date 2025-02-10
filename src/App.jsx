import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EducatorHome from './Pages/EducatorHome'
import Home from './Pages/Home'
import './index.css'
import AllCourses from './Pages/AllCourses'
import CourseDetails from './Pages/CourseDetails'
import EnrolledCourse from './Pages/EnrolledCourse'
import MyLearning from './Pages/MyLearning'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <div>
      <Routes>
      <Route path="/educater" element={<EducatorHome />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/courses" element={<AllCourses />}/>
      <Route path="/details" element={<CourseDetails />}/>
      <Route path="/enrolled" element={<EnrolledCourse />}/>
      <Route path="/learning" element={<MyLearning />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>

      </Routes>
    </div>
  )
}

export default App
