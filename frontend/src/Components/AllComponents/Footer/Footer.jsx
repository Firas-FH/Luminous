import "./FooterStyle.css"
function Footer() {
    return (
      <div className=" footer w-screen h-[627px]  px-[9%]">
          <div className="text-center pt-10 pb-[8rem] ">
            <h1 className="text-xl text-headerscolor mb-3">Get In Touch</h1>
            <p className="text-xl text-black">Join us in turning dreams into dazzling events. Contact us now.</p>
            <p className="text-xl text-black">Together, we'll make your event a memorable occasion.</p>
          </div>
        <div className=" ">
          <div className="block  bg-white px-5 py-12 border border-headerscolor md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] md:h-[400px] md:min-h-full">
            <div className="flex flex-wrap justify-center">
              <div className="block h-[250px] bg-headerscolor px-2 py-6 md:py-16 md:px-12  backdrop-blur-[30px] md:rounded-t-none" id="gold-box">
                <div className="items-center">
                  <h3 className="text-white font-bold text-xl md:">Contact Information</h3>
                  <div className="flex items-center gap-3">
                    <img src="./Picture/tel.png" alt="tel" className="w-6 h-6" />
                    <a href="tel:+963123456555" className="text-white text-xl">
                      +963 123 456 555
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="./Picture/Email.png" alt="Email" className="w-6 h-6" />
                    <a href="mailto:luminous@gmail.com" className="text-white text-xl">
                      luminous@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="./Picture/media.png" alt="media" className="w-6 h-6" />
                    <span className="text-white text-xl">Syria, Damascus</span>
                  </div>
                </div>
              </div>
              <div className="mb-12 pl-3 w-full justify-between, md:w-1/2 lg:w-1/2 xl:w-1/2 ">
                <form class="">
                  <div className="flex mb-6" data-te-input-wrapper-init>
                    <div className="relative mr-9 w-1/2" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                        id="exampleInput90"
                        placeholder="Name"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        for="exampleInput90"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative w-1/2" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                        id="exampleInput91"
                        placeholder="Email address"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        for="exampleInput91"
                      >
                        Email address
                      </label>
                    </div>
                  </div>
                  <div className="relative mb-6 w-full" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                      id="exampleInput90"
                      placeholder="Name"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      for="exampleInput90"
                    >
                      Subject
                    </label>
                  </div>
                  <div className="relative mb-6 w-full" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full bg-transparent py-[0.32rem] px-3  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                    <label
                      for="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:primary"
                    >
                      Message
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="w-[180px] bg-headerscolor px-7 pt-2.5 pb-2 text-xs uppercase leading-normal text-white hover:bg-highlightcolor transition transition duration-150 text- lg:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xl text-center pt-2 text-black">Copyright © 2024 Luminous. All Rights Reserved.</p>
      </div>
    );
  }
  
  export default Footer;


  