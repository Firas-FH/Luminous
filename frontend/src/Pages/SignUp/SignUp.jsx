import React, { useState } from 'react'

import './SignUpStyle.css'
// import ballon1 from '../../../public/Picture/signup images/'
// import ballon2 from './public/ballon2.png'
// import img from '../../assets/radiant-cosmic-burst-stockcake 2.png'

function SignUp() {


  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [responseMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    alert('ddd')

    try {
      

    
    } catch (error) {
    }
  }



  return (
    <>
    <div className='signup relative flex justify-center items-center mt-20' style={{}}>
      <img src='./Picture/signup images/ballon1.png' className='absolute left-20 top-72 w-[225px] h-[225px]' alt="" />
      <form action="" onSubmit={handleSignUp} className='signup-form relative w-1/2 flex justify-center align-middle border border-bordercolor rounded-[36px]'>
      <div className='overlay absolute w-full h-full rounded-[36px] ' ></div>
        <div className='w-2/3 py-8 z-[1]'>
          <p className='text-headerscolor pb-[20px]' style={{fontSize:'28px'}}>Create Account</p>
          <label htmlFor="" className='text-primarytxt text-base '>Full Name</label>
          <input type="text" className='block w-full border border-bordercolor mt-[5px] mb-[20px] py-[7px] px-[15px] focus:outline-none focus:shadow-inner focus:shadow-headerscolor text-secondarytxt'/>
          <label htmlFor="" className='text-primarytxt text-base '>Email Address</label>
          <div>
            <input type="text" className='block w-full border border-bordercolor mt-[5px] mb-[20px] py-[7px] px-[15px] focus:outline-none focus:shadow-inner focus:shadow-headerscolor text-secondarytxt'/>
            <img src="" alt="" />
          </div>
          <label htmlFor="" className='text-primarytxt text-base '>Password</label>
          <input type="passowrd" className='block w-full border border-bordercolor mt-[5px] mb-[20px] py-[7px] px-[15px] focus:outline-none focus:shadow-inner focus:shadow-headerscolor text-secondarytxt'/>
          <input type="submit" value={'Create Account'} className='w-full bg-headerscolor text-white py-[9px] mb-[21px] hover:bg-highlightcolor transition'/>
          <p className='text-primarytxt '>Already have an account? <span className='text-headerscolor'>Login</span></p>
        </div>
      </form>
      <img src='./Picture/signup images/ballon2.png' className='absolute right-0 bottom-64 w-[157px] h-[157px]' alt="" />
    </div>

  
    </>
  )
}

export default SignUp