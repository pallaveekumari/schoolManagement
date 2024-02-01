import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Homepage from './Dashboard/Homepage/Homepage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default AllRoutes