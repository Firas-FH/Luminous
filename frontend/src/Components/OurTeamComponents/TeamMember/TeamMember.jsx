import React from 'react'

function TeamMember({name,position,dots,person,top,bg}) {
  return (
    <>
    <div className=' sm:px-14 md:px-10 lg:px-4 px-16 relative  ' style={{top:top}}>
    <div>
        <img src={dots} className='relative top-[30px] left-[-8px]' alt="" />
          <div className='relative sm:rounded-[200px] rounded-[200px] h-[35%] flex flex-col justify-center align-middle' style={{backgroundColor:bg}}>
            <div className='font-montsFont text-center text-white mx-auto pt-[50px] pb-[52px]'>
              <p className='font-[20px] font-bold'>{name}</p>
              <p className='font-[18px] mt-[10px]'>{position}a</p>
            </div>
            <img src={person} className='relative md:bottom-[-1px] bottom-[-1px] ' alt="" />
          </div>
    </div>
    </div>
    </>
  )
}

export default TeamMember