import React from 'react'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
    <>
    <h1>HomePage</h1>
    <Link to={'/signup'}>signup</Link>
    </>
  )
}

export default HomePage