import React from 'react'
import TeamMember from '../../OurTeamComponents/TeamMember/TeamMember'

function OurTeam() {
  return (
    <>
    <div className='relative sm:pb-32 md:pb-40 lg:pb-24 xl:pb-0   sm:min-h-[100vh] md:min-h-[120vh] lg:min-h-[130vh] xl:min-h-[110vh] 2xl:min-h-[0vh] min-h-[450vh]'>
    <div className=' mx-[9%] py-[40px] '>
        <p className='text-headerscolor font-montsFont font-semibold text-[20px] mb-[20px]'>Our Team</p>
        <p className='font-montsFont text-[16px]' >Meet our team...the creative minds behind every unforgettable event.</p>
        <div className='mt-[50px] relative gap-[7.2%] grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
          <TeamMember name={'Anna Dian'} position={'CEO'} top={'100px'} bg={'#D4AF37'} person={"./Picture/Our Team/person1.png" } dots={"./Picture/Our Team/dots1.png"}/>
          <TeamMember name={'Chris Merz'} position={'CEP'} top={'0px'} bg={'#B0B0B0'} person={"./Picture/Our Team/person2.png" } dots={"./Picture/Our Team/dots2.png"}/>
          <TeamMember name={'Linda Romy'} position={'SEP'} top={'100px'} bg={'#D4AF37'} person={"./Picture/Our Team/person3.png" } dots={"./Picture/Our Team/dots1.png"}/>
          <TeamMember name={'Jack Bill'} position={'SMM'} top={'0px'} bg={'#B0B0B0'} person={"./Picture/Our Team/person4.png" } dots={"./Picture/Our Team/dots2.png"}/>
        </div>
        <img src="./Picture/Our Team/border-l.png" className='absolute right-0 bottom-0' alt="" />
        <img src="./Picture/Our Team/border-r.png" className='absolute left-0 bottom-0' alt="" />
    </div>
    </div>
    </>
  )
}

export default OurTeam

// 143   51