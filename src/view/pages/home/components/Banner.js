import React from "react";
import { Navigation,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"
export const Banner = () => {
  
  return (
    <div>
      <Swiper
        modules={[Navigation,Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
          // pagination={{ clickable: true }}
      >
        <SwiperSlide>
         <div className="relative">
       <div className="overflow-hidden">
       <img
          className="w-full h-530px sm-h-200px object-cover brightness-50"
          src={require("../../../assets/images/1_optimized_100.png")}
        />
       </div>

       <div className="centered-axis-xy-home">
       <div  data-aos="zoom-in" data-aos-duration="3000">
          <h2 className="lg:text-2xl md:text-xl text-lg text-white text-center tracking-widest uppercase">Masters in Diamonds, Specialists in Service.
          </h2>
          <p className="text-center lg:text-base md:text-base text-sm text-white uppercase pt-5 font-medium tracking-widest text">With decades of experience and a global network,<br/> we offer perfectly sourced diamonds with unmatched quality and reliability.
          </p>
        </div>
       </div>
      </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="overflow-hidden">
          <img
            className="sm-h-200px w-full md-h-300px object-contain"
            src={require("../../../assets/images/Asian-Star_Banner.jpg")}
            alt="img"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="overflow-hidden">
         <img
            className="sm-h-200px md-h-300px object-contain"
            src={require("../../../assets/images/Asian-Star_Banner.jpg")}
            alt="img"
          />
         </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden">
          <img
            className="md-h-300px  sm-h-200px object-contain"
            src={require("../../../assets/images/Asian-Star_Banner.jpg")}
            alt="img"
          />
          </div>
        </SwiperSlide> */}
        <p data-aos="fade-up"
    //  data-aos-offset="300"
    data-aos-duration="3000"
     className="lg:text-lg md:text-lg text-base m-auto pt-8 text-center lg:w-2/3 md:w-2/3 lg:px-0 md:px-0 px-5 ">Rooted in over five decades of excellence, Gemasia Antwerpen is a distinguished name in the global diamond industry. As the marketing arm of Asian Star Company Limited, we bring world-class diamonds to connoisseurs across 35+ countries, blending tradition with cutting-edge precision. Whether it’s certified brilliance or hand-selected diamonds, our collections cater to those who demand nothing but the best.
        </p>
      </Swiper>
    </div>
  );
};
