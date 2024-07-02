import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../Components/Container/OurServices/Services'
import About from '../../Components/Container/AboutUs/About'
import FAQ from '../../Components/Container/FAQ/FAQ.jsx'
import OurTeam from '../../Components/Container/OurTeam/OurTeam.jsx'
import Testimonials from '../../Components/Container/Testimonials/Testimonials.jsx'
import Gallery from '../../Components/Container/Gallery/Gallery.jsx'
// import HeroSection from '../../Components/Container/Hero/HeroSection'
import Hero from '../../Components/Container/Hero/Hero'

function HomePage() {
  return (
    <>
    <Link to={'/signup'}>sign up</Link>
    <br />
    <Link to={'/login'}>Log in</Link>
    {/* <HeroSection/> */}
    <Hero/>
    <About />
    <Services />
    <Gallery/>
    <Testimonials/>
    <OurTeam/>
    <FAQ />
    
    
    </>
  )
}

export default HomePage