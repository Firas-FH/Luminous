import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './SignUpStyle.css'
import axios from 'axios';
// import ballon1 from '../../../public/Picture/signup images/'
// import ballon2 from './public/ballon2.png'
// import img from '../../assets/radiant-cosmic-burst-stockcake 2.png'

function SignUp() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("")
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { userName, userEmail, userPassword })
      .then(res => {
        setResponseMessage(res.data.message)
        navigate("/")
      }
      )
      .catch(err => {
        setResponseMessage(err.response.data.error)
      }
      );
  }

  return (
    <>
      <div
        className="signup relative min-h-screen  pt-24 pb-14 bg-primarybg"
        style={{}}
      >
        <img src="./Picture/signup images/Line 5.png" alt="" 
        className="absolute right-[9%] h-[100vh] top-[-50px] z-1000"/>
        <img src="./Picture/signup images/Line 6.png" alt="" 
        className="absolute left-[6%] h-[90%] top-[-50px] z-1000"/>
        <img
          src="./Picture/signup images/ballon1.png"
          className="absolute hidden md:block lg:block left-[6%] top-72 w-[225px] h-[225px] balloon-image"
          alt=""
        />
        <form
          action=""
          onSubmit={handleSignUp}
          className="signup-form relative  lg:w-1/3 md:w-2/3 w-3/4  flex justify-center align-middle mx-auto border border-bordercolor rounded-[36px] z-1000"
        >
          <div className="overlay absolute w-full h-full rounded-[36px] "></div>
          <div className="w-2/3 py-[25px] z-[1]">
            <p
              className="text-headerscolor pb-[22px]"
              style={{ fontSize: "28px" }}
            >
              Create Account
            </p>
            <label htmlFor="" className="text-primarytxt text-base ">
              Full Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="block w-full border border-bordercolor mt-[3px] mb-[18px] py-[4px] px-[15px] focus:outline-none focus:shadow-inner focus:shadow-headerscolor text-secondarytxt"
            />
            <label htmlFor="" className="text-primarytxt text-base ">
              Email Address
            </label>
            <div className='relative'>
              <input
                type="text"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                className="block w-full border border-bordercolor mt-[3px] mb-[18px] py-[4px] px-[15px] focus:outline-none focus:shadow-inner focus:shadow-headerscolor text-secondarytxt"
              />
              <img src="./Picture/signup images/sms.png" className="absolute top-2 right-1" alt="" />
              </div>
            <label htmlFor="" className="text-primarytxt text-base ">
              Password
            </label>
            <div className='relative'>
              <input
                type="passowrd"
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                className="block w-full border border-bordercolor mt-[3px] mb-[18px] py-[4px] px-[15px] focus:outline-none focus:shadow-inner focus:shadow-headerscolor text-secondarytxt"
              />
              <img src="./Picture/signup images/Group (2).png" className="absolute top-2 right-1" alt="" />
            </div>
            <input
              type="submit"
              value={"Create Account"}
              className="w-full bg-headerscolor text-white py-[9px] mb-[21px] hover:bg-highlightcolor transition"
            />
            <p className="text-primarytxt mb-3">
              Already have an account?
              <Link to={'/login'}>
                <span className="text-headerscolor">Login</span>
              </Link>
            </p>
            <span className=""
              style={{
                color:
                  responseMessage === "🎉 Account created successfully!"
                    ? "green"
                    : "#ff0000e8",
              }}
            >
              {responseMessage}
            </span>
          </div>
        </form>
        <img
          src="./Picture/signup images/ballon2.png"
          className="absolute hidden md:block lg:block right-[27px] top-[192px] w-[157px] h-[157px] z-10 balloon-image"
          alt=""
        />
      </div>
    </>
  )
}

export default SignUp