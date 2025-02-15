import React from 'react'
import { Link } from 'react-router-dom'
export const Pendant = () => {
  return (
    <div className="lg:flex md:flex gap-20  items-center lg:px-40 px-40 px-5 m-auto py-10 ">
    <div className="lg:w-1/2 md:w-1/2 border-primary rounded-md" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
    <div className="mx-10 my-10">

    <img className="m-auto h-270px sm-h-250px" src={require("../../../assets//images/pendantimage/DM 3D MSP00986_1.jpg")} alt="" />
    </div>
  </div>
  <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
    <h5 className="lg:text-2xl font-semibold">The</h5>
    <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Pendants</h2>
    <h4 className="lg:text-2xl md:text-xl font-semibold">Collection</h4>
    <p className="pt-2 lg:text-xl md:text-lg text-justify">
    Design Features:
<br/>
Incorporate details like engraving, stone settings, or filigree work.
Decide if the pendant will be a focal point or part of a larger design.
    </p>
    <p className="pt-2 lg:text-xl md:text-lg text-justify">Choose materials based on durability, color, and texture. Options include precious metals (gold, silver, platinum), gemstones, enamel, wood, or acrylic.</p>
    <div className="pt-5">
    <Link to="/collection"><button className="bg-primary px-8 py-2 rounded-md text-white">See Collection</button></Link> 
    </div>
  </div>
 
</div>
  )
}
