import React from 'react'
import collectionbanner from "../../../assets/images/4.jpg"
export const CollectionBanner = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img className="w-full h-530px object-cover sm-h-200px brightness-50" src={collectionbanner} />
      </div>

      <div className="centered-axis-xy">
        <div data-aos="zoom-in" data-aos-duration="3000">
          <p className="tracking-widest lg:text-3xl text-center text-white uppercase">Our Product</p>
          {/* <p className="tracking-widest text-white text-center  pt-5 font-medium uppercase">Our Product</p> */}
        </div>
      </div>
      <p data-aos="fade-up"
        //  data-aos-offset="300"
        data-aos-duration="3000"
        className="text-lg m-auto pt-8 text-center w-2/3">Gemasia Antwerpen is dedicated to providing exquisite loose diamonds that meet the needs of the world’s most discerning
      </p>
    </div>
  )
}
