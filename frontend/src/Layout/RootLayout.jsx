import React from 'react'
import NavBar from '../Components/AllComponents/NavBar/NavBar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/AllComponents/Footer/Footer'

function RootLayout() {
  const location = useLocation();
  
  // const isSignUpPage = location.pathname === '/signup';
  // const isLogInPage = location.pathname === '/login';

  return (
    <>
    <NavBar/>
    <main>
      <Outlet/>
    </main>
    {/* {!(isSignUpPage || isLogInPage) && <Footer />} */}
    </>
  )
}

export default RootLayout