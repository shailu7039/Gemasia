import React from 'react'
import { Autoplay,Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"
import 'swiper/css/pagination';
export const Affilation = () => {
  return (
    <div>
          <div className='py-8 lg:px-0 md:px-0 px-5'>
        <h2 data-aos="fade-up" data-aos-duration="3000" className='uppercase text-2xl letterspacing2px text-center font-semibold'>AFFILIATIONS</h2>
        <div className='lg:w-1/2 m-auto pt-4'>
        <Swiper
        className='custswiperpg'
        modules={[Autoplay,Pagination]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
       
        <SwiperSlide>
          
         <div className='w-260px m-auto'>
         <img
            className="w-260px m-auto"
            src={require("../../../assets/images/RJC-logo.jpg")}
            alt="img"
          />
         </div>
         
        </SwiperSlide>
        {/* <SwiperSlide>
      
      <div className='w-260px'>
      <img
         className="w-260px m-auto"
         src={require("../../../assets/images/home/affiliation_TCP.png")}
         alt="img"
       />
      </div>
     </SwiperSlide> */}
       
        {/* {/* <SwiperSlide>
          
         <div className='w-260px'>
         <img
            className="w-260px m-auto"
            src={require("../../../assets/images/home/Affil-01.png")}
            alt="img"
          />
        //  </div>
          
        </SwiperSlide>*/}
        {/* <SwiperSlide>
      
      <div className='w-260px'>
      <img
         className="w-260px m-auto"
         src={require("../../../assets/images/home/Affil-02.png")}
         alt="img"
       />
      </div>
     </SwiperSlide> */}
      </Swiper>
        </div>
        {/* <img data-aos="fade-up" data-aos-duration="3000"  className='m-auto py-14' src={require("../../../assets/images/home/slide8_img4.png")} alt="" /> */}
    </div>
    </div>
  )
}
