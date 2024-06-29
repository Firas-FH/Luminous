function Footer() {
    return (
        <div class=" w-screen h-[627px]">
            <div class=" h-[300px] overflow-hidden  bg-[50%]  bg-secondarybg flex justify-center items-center">
                <div className='text-center mb-24'>
                    <h1 className="text-xl  text-headerscolor mb-3"> Get In Touch</h1>
                    <p className="text-xl text-black ">Join us in turning dreams into dazzling events. Contact us now.</p>
                    <p className="text-xl text-black "> Together, we'll make your event a memorable occasion.</p>
                </div>
            </div>
            <div class="container h-[281px] px-[9%]   ">
                <div class="block h-[374px] bg-white px-5 py-12 border border-headerscolor ,  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                    <div class="flex  ">
                        <div className="w-2/6 bg-headerscolor pl-20 pt-10 flex flex-col gap-4 ">
                            <h3 className="text-white font-bold text-2xl">Contact Information</h3>
                            <div className="flex items-center gap-3">
                                <img src="./Picture/tel.png" alt="tel" className="w-6 h-6 " />
                                <a href="tel:+963123456555" className="text-white text-xl ">
                                    +963 123 456 555
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="./Picture/Email.png" alt="Email" className="w-6 h-6 " />
                                <a href="mailto:luminous@gmail.com" className="text-white text-xl">
                                    luminous@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="./Picture/media.png" alt="media" className="w-6 h-6 " />
                                <span className="text-white text-xl">Syria, Damascus</span>
                            </div>
                        </div>
                        <div class="mb-12 w-3/6  grow-1 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <form >
                                <div class="flex mb-6" data-te-input-wrapper-init>
                                    <div class="relative mr-9" data-te-input-wrapper-init>
                                        <input type="text"
                                            class="peer min-h-[auto] w-full bg-transparent py-[0.32rem] px-3  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                                            id="exampleInput90" placeholder="Name" />
                                        <label
                                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem]  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                            for="exampleInput90">Name
                                        </label>
                                    </div>
                                    <div class="relative" data-te-input-wrapper-init>
                                        <input type="email"
                                            class="peer min-h-[auto] w-full bg-transparent py-[0.32rem] px-3  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                                            id="exampleInput91" placeholder="Email address" />
                                        <label
                                            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem]  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                            for="exampleInput91">Email address
                                        </label>
                                    </div>
                                </div>
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                                        id="exampleInput90" placeholder="Name" />
                                    <label
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        for="exampleInput90">Subject
                                    </label>
                                </div>
                                <div class="relative mb-6 " data-te-input-wrapper-init>
                                    <textarea
                                        class="peer block min-h-[auto] w-full bg-transparent py-[0.32rem] px-3  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-neutral-300"
                                        id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                    <label for="exampleFormControlTextarea1"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem]  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ">Message</label>
                                </div>
                                <div class="flex justify-center">
                                    <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                        class="w-[180px] bg-headerscolor px-7 pt-2.5 pb-2 text-xs  uppercase leading-normal text-white hover:bg-highlightcolor transition transition duration-150 text-  lg:mb-0">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p className=''>Copyright © 2024 Luminous. All Rights Reserved.</p> */}
        </div>

    )
}
export default Footer;