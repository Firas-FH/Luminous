import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../Components/Container/OurServices/Services'
import About from '../../Components/Container/AboutUs/About'
import Footer from '../../Components/Container/Footer/Footer'
// import Profile from '../../Components/Container/Profile/profile.JSX'



function HomePage() {
  return (
    <>
    {/* <SignUp/> */}
    <h1>HomePage g</h1>
    <Link to={'/signup'}>sign up</Link>
    <About />
    <Services />
     {/* <Profile /> */}
     <Footer />
    </>
  )
}

export default HomePage