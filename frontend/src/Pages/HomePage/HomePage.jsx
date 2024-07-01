import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../Components/Container/OurServices/Services'
import About from '../../Components/Container/AboutUs/About'
import FAQ from '../../Components/Container/FAQ/FAQ.jsx'






function HomePage() {
  return (
    <>
    <Link to={'/signup'}>sign up</Link>
    <br />
    <Link to={'/login'}>Log in</Link>
    <About />
    <Services />
    <FAQ />
    
    
    </>
  )
}

export default HomePage