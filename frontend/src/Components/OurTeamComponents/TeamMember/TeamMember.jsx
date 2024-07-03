import React from 'react'
import { Col } from 'react-bootstrap'

function TeamMember({name,position,dots,person,top,bg}) {
  const topValue = top === "0px" ? "0" : top;
  return (
    <>
    {/* <div className=' sm:px-14 md:px-10 lg:px-4 px-16 relative  ' style={{top:top}}>
    <div>
        <img src={dots} className='relative top-[30px] left-[-8px]' alt="" />
          <div className='relative sm:rounded-[200px] rounded-[200px] h-[35%] flex flex-col justify-center align-middle' style={{backgroundColor:bg}}>
            <div className='font-montserratefont text-center text-white mx-auto pt-[50px] pb-[52px]'>
              <p className='font-[20px] font-bold'>{name}</p>
              <p className='font-[18px] mt-[10px]'>{position}</p>
            </div>
            <img src={person} className='relative md:bottom-[-1px] bottom-[-1px] ' alt="" />
          </div>
    </div>
    </div> */}
    <Col className='relative' lg={3} md={6} sm={12} style={{top:top}}>    
      <div className='relative lg:w-[72%] md:w-[40%] sm:w-[40%] w-[40%] mx-auto' >
        <img className='relative top-8' src={dots} alt="" />
        <div className='rounded-[200px]' style={{backgroundColor:bg}}>
          <div className='font-montserratefont text-center text-white mx-auto pt-[50px] pb-[52px]'>
            <p className='font-[20px] font-bold'>{name}</p>
            <p className='font-[18px] mt-[10px]'>{position}</p>
          </div>
          <img src={person} className='relative  h-[150px] lg:h-[150px] w-[100%] rounded-[200px]' alt="" />
        </div>
      </div>
    </Col>
    </>
  )
}

export default TeamMember