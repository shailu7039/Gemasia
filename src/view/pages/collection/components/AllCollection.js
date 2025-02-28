import React from 'react'
import { Link } from 'react-router-dom'
export const AllCollection = () => {
  return (
    <div className='py-10 lg:px-20 md:px-10 px-5'>
      <div>
        <div className='lg:flex justify-center items-center gap-10'>
          <img className='' src={require("../../../assets/images/4ee8a004-05ab-450e-9ab2-b1e3d9c6f156-0_optimized_100.png")} alt='' />
          <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
            <h5 className="lg:text-2xl font-semibold">Certified Diamonds
            </h5>
            <p className="pt-2 lg:text-lg md:text-lg text-base text-justify">
              Our certified diamonds come with internationally recognized grading reports from leading laboratories such as GIA, HRD, and IGI. Each diamond is meticulously evaluated for its cut, color, clarity, and carat weight, ensuring transparency and trust.
            </p>
            <ul className="pl-5 py-3" style={{ listStyleType: 'disc' }}>
              <li className="lg:text-lg md:text-lg text-base pb-1">Size Range: 0.08 pts to 3 ct</li>
              <li className="lg:text-lg md:text-lg text-base pb-1">Colour Spectrum: D to M</li>
              <li className="lg:text-lg md:text-lg text-base pb-1">Clarity Grades: IF to SI2</li>
              <li className="lg:text-lg md:text-lg text-base pb-1">Perfectly Cut Diamonds: Round Brilliant, Fancy Shapes, and Special Cuts on order</li>
            </ul>
            <h5 className="lg:text-2xl font-semibold">Why Choose Certified Diamonds?
          </h5>
          <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
            <li className="lg:text-lg md:text-lg text-base pb-1">Guaranteed quality and authenticity.</li>
            <li className="lg:text-lg md:text-lg text-base pb-1">Detailed grading reports for informed decisions</li>
            <li className="lg:text-lg md:text-lg text-base pb-1">Ideal for high-value jewellery and investment pieces</li>
          </ul>
            <div className="pt-5">
              <Link to="/product-type"><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link>
            </div>
          </div>
        </div>
       <div className='lg:flex justify-center sm-direction items-center lg:gap-10 md:gap-10 pt-10 '>
       <div className="lg:w-1/2 md:w-1/2 lg:pt-10 md:pt-0 pt-5" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
          <h5 className="lg:text-2xl font-semibold">Premium Non-Certified Diamonds
          </h5>
          <p className="pt-2 lg:text-lg md:text-lg text-base text-justify">
            For clients seeking exceptional value without the need for certification, our non-certified diamonds offer the perfect balance of quality and affordability. These diamonds are handpicked by our experts and are ideal for commercial jewellery and bulk purchases
          </p>
          <ul className="pl-5 py-3" style={{ listStyleType: 'disc' }}>
            <li className="lg:text-lg md:text-lg text-base pb-1">Cut: Round Brilliant, Fancy Shapes, Special Cuts</li>
            <li className="lg:text-lg md:text-lg text-base pb-1">Carat: 1 pt to 2 ct</li>
            <li className="lg:text-lg md:text-lg text-base pb-1">Clarity: IF to I3</li>
            <li className="lg:text-lg md:text-lg text-base pb-1">Loose Parcels & Custom Assortments</li>
          </ul>
          <h5 className="lg:text-2xl font-semibold">Why Choose Non-Certified Diamonds?
          </h5>
          <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
            <li className="lg:text-lg md:text-lg text-base pb-1">Competitive pricing for bulk orders</li>
            <li className="lg:text-lg md:text-lg text-base pb-1">Reliable quality assurance from our experienced team</li>
            <li className="lg:text-lg md:text-lg text-base pb-1">Suitable for a wide range of jewellery applications</li>
          </ul>
          
          <div className="pt-5">
            <Link to="/product-type"><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link>
          </div>
        </div>
        <img src={require("../../../assets/images/2_optimized_100.png")} alt='' />
       </div>
       <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200">
       <p className="pt-10 lg:text-lg md:text-lg text-base text-center">
            Whether you’re looking for certified or non-certified diamonds, Gemasia Antwerpen ensures a seamless buying experience with personalized service and expert guidance.
          </p>
          </div>
      </div>
    </div>
  )
}
  