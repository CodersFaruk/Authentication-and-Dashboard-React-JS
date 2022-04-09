import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavbarMenu'


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout