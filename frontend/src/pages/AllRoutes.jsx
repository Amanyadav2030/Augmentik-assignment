import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/signup'} element={<Signup />} />
      <Route path={'/admin'} element={<Admin />} />
    </Routes>
  )
}

export default AllRoutes