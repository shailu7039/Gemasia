import React from 'react'
import aboutbanner from "../../../assets/images/aboutbanner_optimized_100.png"
export const AboutBanner = () => {
  return (
    <div className="relative">
    <div className="overflow-hidden">
    <img className="h-530px object-cover sm-h-200px brightness-50 w-full" src={aboutbanner} />
    </div>

    <div className="centered-axis-xy w-full">
      <div data-aos="zoom-in" data-aos-duration="3000">
      <p className="tracking-widest text-center lg:text-2xl md:text-xl text-lg text-white uppercase">Celebrating a journey of 50+ glorious years</p>
      {/* <p className="tracking-widest text-white text-center  pt-5 font-medium">ABOUT GEMASIA</p> */}
      </div>
    </div>
  </div>
  )
}
