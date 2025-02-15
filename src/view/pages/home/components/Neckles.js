import React from 'react'
import { Link } from 'react-router-dom'
export const Neckles = () => {
  return (
    <div className="lg:flex lg:gap-20 md:gap-12 gap-5 sm-columndirection  items-center lg:px-40 md:px-40 px-5 m-auto lg:py-10 md:py-10 py-5">
      <div className="lg:w-1/2 md:w-1/2" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        <h5 className="lg:text-2xl font-semibold">The</h5>
        <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Neckles</h2>
        <h4 className="lg:text-2xl md:text-xl font-semibold">Collection</h4>
        <p className="pt-2 lg:text-xl md:text-lg text-justify">
        Classic: Simple and timeless designs, such as a solitaire pendant or a pearl necklace.<br/>
Modern: Trendy designs that might incorporate unconventional materials or geometric shapes.<br/>
Vintage: Designs inspired by a particular historical era, often with intricate details.<br/>
Bohemian: Free-spirited and often includes natural elements or a mix of materials.
        </p>
        <div className="pt-5">
        <Link to="/collection"><button className="bg-primary px-8 py-2 rounded-md text-white">See Collection</button></Link> 
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full border-primary rounded-md" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
      <div className="mx-10 my-10">

        <img className="m-auto h-270px sm-h-250px" src={require("../../../assets//images/neckles/DM 3D MSN01359.jpg")} alt="img" />
      </div>
      </div>
    </div>
  )
}
