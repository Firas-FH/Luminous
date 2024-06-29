import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../Components/Container/OurServices/Services'
import About from '../../Components/Container/AboutUs/About'
import FAQ from '../../Components/Container/FAQ/FAQ.jsx'






function HomePage() {
  return (
    <>
    {/* <SignUp/> */}
    <h1>HomePage g</h1>
    <Link to={'/signup'}>sign up</Link>
    <About />
    <Services />
    <FAQ />
    
    
    </>
  )
}

export default HomePage