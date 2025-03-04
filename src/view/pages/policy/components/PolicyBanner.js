import React from "react";
import { Navigation,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"
export const PolicyBanner = () => {
  
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
          src={require("../../../assets/images/policybanner_optimized_100.jpg")}
        />
       </div>

       <div className="centered-axis-xy w-full">
       <div  data-aos="zoom-in" data-aos-duration="3000">
          <h2 className="lg:text-2xl md:text-xl text-lg text-white text-center tracking-widest uppercase">Policy
          </h2>
          {/* <p className="text-center text-white uppercase pt-5 font-medium tracking-widest">With decades of experience and a global network, we offer perfectly sourced diamonds with unmatched quality and reliability.
          </p> */}
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
     className="lg:text-lg md:text-lg text-base m-auto pt-8 lg:text-center md:text-center text-justify lg:w-2/3 md:w-2/3 lg:px-0 md:px-0 px-5">At Gemasia Antwerpen, we are committed to maintaining the highest standards of quality, ethics, and customer satisfaction. Our policies reflect our dedication to responsible business practices and transparency.
        </p>
      </Swiper>
    </div>
  );
};
