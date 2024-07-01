import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SplideContent from "../../TestimonialsComponents/SplideContent";

function Testimonials() {
  const testiData = [
    {
      img: "./Picture/Testimonials/testi1.png",
      text: '"Working with Event Magic was a breath of fresh air. Their team listened to our vision and brought it to life with precision and creativity. Every detail was attended to, ensuring our corporate event was not just successful but unforgettable. Highly recommended!"',
      name:'Stephen Brekke',
      star:"./Picture/Testimonials/Star 7.png"
    },
    {
      img: "./Picture/Testimonials/testi6.png",
      text: '"Before partnering with Event Pro, we struggled with organizing conferences due to logistical nightmares. Now, with their expertise, our events run smoothly, attracting larger audiences and boosting engagement. Our latest conference saw a 30% increase in attendance a testament to their excellence."',
      name:'Lean Breek',
      star:"./Picture/Testimonials/Star 2.png"

    },
    {
      img: "./Picture/Testimonials/testi2.png",
      text: '"I haveve worked with several event planners, but none compare to Celebrations Inc. Their innovative ideas and unwavering commitment to quality transformed our wedding reception into a magical night we will cherish forever. They truly made us feel special"',
      name:'Danial Khory',
      star:"./Picture/Testimonials/Star 2.png"

    },
    {
      img: "./Picture/Testimonials/testi3.png",
      text: '"As a fellow event planner, I have seen firsthand the exceptional service offered by Party Perfection. Their meticulous attention to detail and ability to execute complex events flawlessly sets them apart. They are not just a vendor; they are partners in creating memorable experiences"',
      name:'Sona Nory',
      star:"./Picture/Testimonials/Star 2.png"
    },
  ];
  return (
    <>
      <div className="mx-[9%] py-[40px]">
        <p className="text-headerscolor font-montsFont font-semibold text-[20px] mb-[20px]">
          Testimonials
        </p>
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            type: "loop",
            pagination: false,
          }}
          className=" flex justify-center"
        >
          {testiData.map((e) => {
            return (
              <>
                <SplideSlide>
                  <SplideContent img={e.img} text={e.text} name={e.name} star={e.star}/>
                </SplideSlide>
              </>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Testimonials;
