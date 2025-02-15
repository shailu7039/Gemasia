import React from 'react'
import { Link } from 'react-router-dom'

export const Bangles = () => {
  return (
    <div>
         <div className="lg:flex md:flex gap-20  items-center lg:px-40 md:px-40 px-5 m-auto lg:py-10 md:py-10 py-10">
        <div className="lg:w-1/2 md:w-1/2 border-primary rounded-md" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        <div className="mx-10 my-10">

        <img className="m-auto h-270px sm-h-250px" src={require("../../../assets//images/bangles/AMBG0402.jpg")} alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
        <h5 className="lg:text-2xl font-semibold">The</h5>
        <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Bangles</h2>
        <h4 className="lg:text-2xl md:text-xl font-semibold">Collection</h4>
        <p className="pt-2 lg:text-xl md:text-lg text-justify">
        Kundan Bangles: Intricate designs with embedded gemstones, often seen in Indian bridal wear.<br/>
        Meenakari Bangles: Enamel work with vibrant colors and patterns.
        </p>
        <p className="pt-2 lg:text-xl md:text-lg text-justify">
        Minimalist Bangles: Sleek, simple designs suitable for everyday wear.<br/>
        Stackable Bangles: Multiple thin bangles worn together to create a layered look.
        </p>
        <div className="pt-5">
           <Link to="/collection"><button className="bg-primary px-8 py-2 rounded-md text-white">See Collection</button></Link> 
        </div>
      </div>
     
    </div>
    </div>
  )
}
