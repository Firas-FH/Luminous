function About() {
  return (
    <div className="container mx-auto px-4 pl-24 w-screen h-screen">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 ">
          <h1 className="text-xl  text-gold mb-4">About Us</h1>
          <p className="text-2xl text-black mb-8">
            Luminous started with a spark of inspiration to illuminate life's special moments. We've grown into a trusted name, known for our creativity, dedication, and passion for bringing people together.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
            {/* <img src="./Picture/Group.png" alt="Checklist Icon" /> */}
            <img
            src="./Picture/Group.png"
            alt="Our Vision"
            className="w-16 h-16 mb-4"
          />
              <h2 className="text-xl font-bold ">Our Vision:</h2>
              <p className=" text-base text-black">
                We aim to transform events into unforgettable experiences through creativity and dedication, inspiring lasting memories.
              </p>
            </div>
            <div >
            <img
            src="./Picture/Layar.png"
            alt="Our Vision"
            className="w-16 h-16 mb-4"
          />
              <h2 className="text-xl font-bold ">Our Mission:</h2>
              <p className="text-base text-black">
                We create extraordinary events with a personal touch, ensuring perfection in every detail and unforgettable moments.
              </p>
            </div>
          </div>
          <button className="bg-gold hover:bg-gold-darker text-cream-lightest font-bold py-2 px-4 rounded-md mt-8">Contact Us Now</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 space-x-36">
          <img src="./Picture/About.png" alt="Luminous event planning"  />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="relative w-full md:w-2/3">
          <video
            className="shadow-md w-full"
            controls
            autoplay
            muted
          >
            <source src="https://i.imgur.com/3wF1W1p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-brown text-white font-bold py-2 px-4  hover:bg-dark-brown">
              Play Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
