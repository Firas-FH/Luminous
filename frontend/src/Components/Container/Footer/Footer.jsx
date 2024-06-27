// const Footer = () => {
//   return (
//     <div className="bg-yellow-100 py-16 px-8">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
//         <p className="text-lg mb-8">
//           Join us in turning dreams into dazzling events. Contact us now.
//           Together, we'll make your event a memorable occasion
//         </p>
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="bg-yellow-400 rounded-lg p-8 flex flex-col gap-4">
//             <h3 className="text-white font-bold text-2xl">Contact Information</h3>
//             <div className="flex items-center gap-2">
//               <span className="text-white">📞</span>
//               <a href="tel:+963123456555" className="text-white">
//                 +963 123 456 555
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-white">✉️</span>
//               <a href="mailto:luminous@gmail.com" className="text-white">
//                 luminous@gmail.com
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-white">📸</span>
//               <span className="text-white">Syria, Damascus</span>
//             </div>
//           </div>
//           <form className="flex flex-col gap-4">
//             <div>
//               <label htmlFor="name" className="text-gray-700 font-bold">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Your Name"
//                 className="bg-white rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="text-gray-700 font-bold">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Your Email"
//                 className="bg-white rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label htmlFor="subject" className="text-gray-700 font-bold">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 placeholder="Subject"
//                 className="bg-white rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="text-gray-700 font-bold">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 placeholder="Your Message"
//                 className="bg-white rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//         <p className="text-gray-600 mt-8">Copyright © 2024 Luminous. All Rights Reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;



function Footer() {
    return (
        <div class="container ">
            <div class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-secondarybg"></div>
            <div class="container px-6 md:px-12">
                <div class="block bg-white px-5 py-12 border border-headerscolor , dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                    <div class="flex flex-wrap">
                        <div className="bg-headerscolor p-8 flex flex-col gap-4">
                            <h3 className="text-white font-bold text-2xl">Contact Information</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-white">📞</span>
                                <a href="tel:+963123456555" className="text-white">
                                    +963 123 456 555
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white">✉️</span>
                                <a href="mailto:luminous@gmail.com" className="text-white">
                                    luminous@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white">📸</span>
                                <span className="text-white">Syria, Damascus</span>
                            </div>
                        </div>
                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <form>
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput90" placeholder="Name" />
                                    <label
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        for="exampleInput90">Name
                                    </label>
                                </div>
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput91" placeholder="Email address" />
                                    <label
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        for="exampleInput91">Email address
                                    </label>
                                </div>
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <textarea
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                    <label for="exampleFormControlTextarea1"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                                </div>
                                <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                    class="mb-6 inline-block w-full  bg-headerscolor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow- lg:mb-0">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;