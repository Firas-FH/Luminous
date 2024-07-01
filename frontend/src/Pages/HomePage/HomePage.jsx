import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../Components/Container/OurServices/Services'
import About from '../../Components/Container/AboutUs/About'
import Footer from '../../Components/Container/Footer/Footer'
import OurTeam from '../../Components/Container/OurTeam/OurTeam'
import Testimonials from '../../Components/Container/Testimonials/Testimonials'
import Gallery from '../../Components/Container/Gallery/Gallery'
// import Profile from '../../Components/Container/Profile/profile.JSX'



function HomePage() {
  return (
    <>
    <Link to={'/signup'}>sign up</Link>
    <br />
    <Link to={'/login'}>Log in</Link>
    <About />
    <Services />
    <Gallery/>
    <Testimonials/>
    <OurTeam/>
     {/* <Profile /> */}
     <Footer />
    </>
  )
}

export default HomePage