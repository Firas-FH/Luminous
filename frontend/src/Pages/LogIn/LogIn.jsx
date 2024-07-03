import { Link, useNavigate } from "react-router-dom";
import "../SignUp/SignUpStyle.css";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [responseMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogIn(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        userEmail: email,
        userPassword: password,
      });

      setUserEmail("");
      setUserPassword("");
      // localStorage.setItem("userToken", response.data.userToken);
      setErrorMessage(response.data.error);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  }
  return (
    <>
      <div
        className="signup relative min-h-screen  pt-32 pb-14 bg-primarybg"
        style={{}}
      >
        <img
          src="./Picture/signup images/Line 5.png"
          alt=""
          className="absolute right-[9%] h-[100vh] top-[-50px] z-1000"
        />
        <img
          src="./Picture/signup images/Line 6.png"
          alt=""
          className="absolute left-[6%] h-[90%] top-[-50px] z-1000"
        />
        <img
          src="./Picture/signup images/ballon1.png"
          className="absolute hidden md:block lg:block left-[6%] top-72 w-[225px] h-[225px] balloon-image"
          alt=""
        />
        <form
          action=""
          onSubmit={handleLogIn}
          className="signup-form relative  lg:w-1/3 md:w-2/3 w-3/4  flex justify-center align-middle mx-auto my-auto border border-bordercolor rounded-[36px] z-1000"
        >
          <div className="overlay absolute w-full h-full rounded-[36px] "></div>
          <div className="w-2/3 py-[25px] z-[1]">
            <p
              className="text-headerscolor pb-[22px]"
              style={{ fontSize: "28px" }}
            >
              Log in
            </p>
            <label htmlFor="" className="text-primarytxt text-base ">
              Email Address
            </label>
            <div className="relative">
              <input
                type="text"
                value={email}
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
            <div className="relative">          
              <input
                type="passowrd"
                value={password}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                className="block w-full border border-bordercolor mt-[3px] mb-[18px] py-[4px] px-[15px] focus:outline-none focus:shadow-inner focus:shadow-headerscolor text-secondarytxt"
              />
              <img src="./Picture/signup images/Group (2).png" className="absolute top-2 right-1" alt="" />
            </div>

            {responseMessage && (
              <p
                style={{
                  color:
                    responseMessage === "🎉 Account created successfully!"
                      ? "#25d366"
                      : "#fe0000",
                }}
              >
                {responseMessage}
              </p>
            )}

            <input
              type="submit"
              value={"Log In"}
              className="w-full bg-headerscolor text-white py-[9px] mb-[21px] hover:bg-highlightcolor transition"
            />
            <p className="text-primarytxt mb-3">
              Don't have accout ?
              <Link to={"/signup"}>
                <span className="text-headerscolor">Sign up</span>
              </Link>
            </p>
          </div>
        </form>
        <img
          src="./Picture/signup images/ballon2.png"
          className="absolute hidden md:block lg:block right-[27px] top-[192px] w-[157px] h-[157px] z-10 balloon-image"
          alt=""
        />
      </div>
    </>
  );
}

export default Login;
