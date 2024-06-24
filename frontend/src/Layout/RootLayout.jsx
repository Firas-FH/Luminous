import React from 'react'
import NavBar from '../Components/AllComponents/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/AllComponents/Footer/Footer'

function RootLayout() {
  return (
    <>
    <NavBar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RootLayout