import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../Components/Container/OurServices/Services'
import About from '../../Components/Container/AboutUs/About'



function HomePage() {
  return (
    <>
    <h1>HomePage</h1>
    <Link to={'/signup'}>sign up</Link>
    <About />
    <Services />
   
    </>
  )
}

export default HomePage