import React from 'react'
import aboutbanner from "../../../assets/images/aboutbanner.jpg"
export const AboutBanner = () => {
  return (
    <div className="relative">
    <div className="overflow-hidden">
    <img className="h-530px object-cover sm-h-200px brightness-75 w-full" src={aboutbanner} />
    </div>

    <div className="centered-axis-about">
      <div data-aos="zoom-in" data-aos-duration="3000">
      <p className="tracking-widest lg:text-3xl text-justify text-white uppercase">Celebrating a journey of 50+ glorious years</p>
      <p className="tracking-widest text-white text-center  pt-5 font-medium">ABOUT GEMASIA</p>
      </div>
    </div>
  </div>
  )
}
