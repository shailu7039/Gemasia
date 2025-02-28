import React from 'react'
import { Link } from 'react-router-dom'
export const Earrings = () => {
  return (
    <div className='lg:py-10 md:py-10 py-10'>
        <div className="lg:flex md:flex gap-20 items-center lg:px-40 md:px-40 px-5 m-auto">
        <div className="lg:w-1/2 md:w-1/2 rounded-md" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        <div className="">

        <img className="m-auto w-webkit sm-h-250px" src={require("../../../assets//images/2_optimized_100.png")} alt="non certified image" />
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
        <h5 className="lg:text-2xl font-semibold">Premium Non-Certified Diamonds
        </h5>
        {/* <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Earring</h2> */}
        <h4 className="lg:text-2xl md:text-xl font-semibold">Unparalleled Quality, Unrestricted Creativity</h4>
        <p className="pt-2 g:text-xl md:text-lg text-justify">
        For those seeking flexibility in design and pricing, our non-certified diamonds provide a curated selection of stones with expert quality control.
        </p>
        <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
          <li className="lg:text-lg md:text-lg text-base pb-1">Cut: Round Brilliant, Fancy Shapes, Special Cuts</li>
          <li className="lg:text-lg md:text-lg text-base pb-1">Carat: 1 pt to 2 ct</li>
          <li className="lg:text-lg md:text-lg text-base pb-1">Clarity: IF to I3</li>
          <li className="lg:text-lg md:text-lg text-base pb-1">Loose Parcels & Custom Assortments</li>
        </ul>
       
        {/* <div className="pt-5">
        <Link to="/collection"><button className="bg-primary px-8 py-2 rounded-md text-white">See Collection</button></Link> 
        </div> */}
      </div>
     
    </div>
    <div data-aos="zoom-in" data-aos-duration="3000">
    <p className="pt-10 text-center lg:text-lg md:text-lg text-base lg:px-0 md:px-0 px-5 ">
        With our internal quality assurance and ROOTS traceability program, these diamonds are an ethical, high-value alternative to certified stones.
        </p>
        </div>
    </div>
  )
}
