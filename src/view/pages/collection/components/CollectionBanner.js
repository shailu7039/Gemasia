import React from 'react'
import collectionbanner from "../../../assets/images/4_optimized_50.png"
export const CollectionBanner = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img className="w-full h-530px object-cover sm-h-200px brightness-50" src={collectionbanner} />
      </div>

      <div className="centered-axis-xy">
        <div data-aos="zoom-in" data-aos-duration="3000">
          <p className="tracking-widest lg:text-2xl text-center text-white uppercase">Our Product</p>
          {/* <p className="tracking-widest text-white text-center  pt-5 font-medium uppercase">Our Product</p> */}
        </div>
      </div>
      <p data-aos="fade-up"
        //  data-aos-offset="300"
        data-aos-duration="3000"
        className="lg:text-lg md:text-lg text-base  m-auto pt-8 text-center lg:w-2/3 md:w-2/3 lg:px-0 md:px-0 px-5">Gemasia Antwerpen is dedicated to providing exquisite loose diamonds that meet the needs of the world’s most discerning
      </p>
    </div>
  )
}
