import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'


function HomePage() {
  return (
    <>
    
    <SignUp/>
    {/* <h1>HomePage</h1>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <Link to={'/signup'}>sign up</Link> */}
    </>
  )
}

export default HomePage