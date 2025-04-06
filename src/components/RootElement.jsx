import React from 'react'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'

export default function RootElement() {
  return (
    <>
        <Navber/>
        <Outlet/>
        <Footer/>
    </>
  )
}
