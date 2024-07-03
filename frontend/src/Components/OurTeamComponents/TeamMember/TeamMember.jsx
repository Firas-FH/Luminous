import React from 'react'
import { Col } from 'react-bootstrap'
import './TeamMemberStyle.css'

function TeamMember({name,position,dots,person,top,bg}) {
  return (
    <>
    <Col className='relative ' lg={3} md={6} sm={12}  >    
      <div className='relative mem-box lg:w-[65%] md:w-[40%] sm:w-[40%] w-[40%] mx-auto'  style={{top:top}}>
        <img className='relative top-8' src={dots} alt="" />
        <div className='rounded-[200px]' style={{backgroundColor:bg}}>
          <div className='font-montserratefont text-center text-white mx-auto pt-[50px] pb-[52px]'>
            <p className='font-[20px] font-bold'>{name}</p>
            <p className='font-[18px] mt-[10px]'>{position}</p>
          </div>
          <img src={person} className='relative  h-[200px] md:h-[150px] lg:h-[150px] w-[100%] rounded-[200px] mx-auto ' alt="" />
        </div>
      </div>
    </Col>
    </>
  )
}

export default TeamMember