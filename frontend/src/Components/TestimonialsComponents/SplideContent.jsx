import React from "react";
import './SplideContentStyle.css'

function SplideContent({img,text,name,star}) {

  return (
    <>
      <div className="lg:flex mx-auto w-[87.5%] pb-10 ">
        <img src={img} className="h-[533px] mx-auto md:w- lg:w-[35%]" alt="" />
        <div className="bg-secondarybg relative h-3/4 my-auto  lg:left-[-3%]">
          <div className="md:p-[60px] p-[20px] font-montserratefont">
            <p className="text-[14px] md:text-[18px]">{text}</p>
            <p className="text-lg my-[20px] font-semibold">{name}</p>
            <div className="flex justify-between">
              <div className="flex ">
                <img src="./Picture/Testimonials/Star 2.png" alt="" />
                <img src="./Picture/Testimonials/Star 2.png" alt="" />
                <img src="./Picture/Testimonials/Star 2.png" alt="" />
                <img src="./Picture/Testimonials/Star 2.png" alt="" />
                <img src={star} alt="" />
              </div>
              <div className="flex">
                {/* <img src="./Picture/Testimonials/left.png" alt="" /> */}
                {/* <img src="./Picture/Testimonials/right.png" alt="" /> */}
              </div>
            </div>
          </div>
          <img
            src="./Picture/Testimonials/border.png"
            className="absolute bottom-0 w-[10%]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SplideContent;
