import "./AboutStyle.css"
import video from './video.mp4'
function About() {
    return (
      <div className="about pl-[9%]  h-screen w-screen ">
<div className=" about1 flex flex-wrap justify-center md:flex-nowrap">
           <div className="w-full md:w-1/2 xl:w-1/2 pt-12 md:p-6 ">
            <h1 className="text-xl md:text-3xl lg:text-2xl  text-headerscolor mb-4">About Us</h1>
           <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Luminous started with a spark of inspiration to illuminate life's special moments. We've grown into a trusted name, known for our creativity, dedication, and passion for bringing people together.
            </p>
            <div className="flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div>
              <img
              src="./Picture/Vision.png"
              alt="Our Vision"
              className="w-30 h-30 mb-7"
            />
                             <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Our Vision:</h2>
              <p className="text-base md:text-lg lg:text-xl mb-4">
              We aim to transform events into unforgettable experiences through creativity and dedication, inspiring lasting memories.
            </p>
              </div>
              <div >
              <img
              src="./Picture/Layer.png"
              alt="Our Vision"
              className="w-30 h-30 mb-4"
            />
               <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Our Mission:</h2>
              <p className="text-base md:text-lg lg:text-xl mb-4">
              We create extraordinary events with a personal touch, ensuring perfection in every detail and unforgettable moments.
            </p>
              </div>
            </div>
            <button className="bg-headerscolor text-white py-2 px-4 text-lg mt-8 hover:bg-highlightcolor transition">Contact Us Now</button>
          </div>
         <div className=" md:w-1/2 xl:w-3/5 pl-[11rem]  md:pt-4 ">
          <img src="./Picture/Experience.png" alt="Luminous event planning" className=" Experience pt-11   object-cover " />
          </div>
        </div>
        <div className=" video flex justify-center pr-[9%] pt-8 ">
            <video
              className="shadow-md  w-1/2"
              controls
              autoplay
              muted
            >
              <source src={video} alt="Luminous event planning" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    );
  }
  
   export default About;