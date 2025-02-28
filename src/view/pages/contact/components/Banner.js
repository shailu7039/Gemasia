import React from "react";
import bannerimage from "../../../assets/images/5.jpg"
export const Banner = () => {
  return (
    <div>
      <div className="relative">
       <div className="overflow-hidden">
       <img
          className="w-full h-530px object-cover sm-h-200px brightness-50"
          src={bannerimage}
        />
       </div>

        <div className="centered-axis-xy">
          <div data-aos="zoom-in" data-aos-duration="3000">
          <h2 className="lg:text-2xl text-white  text-center md:text-2xl text-xl tracking-widest uppercase">We’d Love to Hear from You</h2>
          <p className="text-center text-white uppercase pt-5 font-medium tracking-widest">Contact Us</p>
          </div>
        </div>
      </div>
      <p data-aos="fade-up"
    //  data-aos-offset="300"
    data-aos-duration="3000"
     className="lg:text-lg md:text-lg text-base m-auto pt-8 text-center lg:w-2/3 md:w-2/3 lg:px-0 md:px-0 px-5">Whether you are looking for certified diamonds, tailored assortments, or strategic partnerships, our team is ready to assist.
        </p>
    </div>
  );
};
