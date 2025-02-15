import React from 'react'
import { Link } from 'react-router-dom'
export const AllCollection = () => {
  return (
    <div className='py-10 px-20'>
      <div>
        <div className='flex justify-center items-center gap-10'>
          <img src={require("../../../assets/images/cdiamond.jpg")} alt='' />
          <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
            <h5 className="lg:text-2xl font-semibold">Certified Diamonds
            </h5>
            {/* <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Earring</h2> */}
            {/* <h4 className="lg:text-2xl md:text-xl font-semibold">Unparalleled Quality, Unrestricted Creativity</h4> */}
            <p className="pt-2 g:text-xl md:text-lg text-justify">
              Our certified diamonds come with internationally recognized grading reports from leading laboratories such as GIA, HRD, and IGI. Each diamond is meticulously evaluated for its cut, color, clarity, and carat weight, ensuring transparency and trust.
            </p>
            <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
              <li className="text-lg pb-1">Size Range: 0.08 pts to 3 ct</li>
              <li className="text-lg pb-1">Colour Spectrum: D to M</li>
              <li className="text-lg pb-1">Clarity Grades: IF to SI2</li>
              <li className="text-lg pb-1">Perfectly Cut Diamonds: Round Brilliant, Fancy Shapes, and Special Cuts on order</li>
            </ul>
            {/* <p className="pt-2 lg:text-lg md:text-lg text-justify">
        With our internal quality assurance and ROOTS traceability program, these diamonds are an ethical, high-value alternative to certified stones.
        </p> */}
            <div className="pt-5">
              <Link to=""><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/2 lg:pt-10 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
          <h5 className="lg:text-2xl font-semibold">Why Choose Certified Diamonds?
          </h5>
          {/* <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Earring</h2> */}
          {/* <h4 className="lg:text-2xl md:text-xl font-semibold">Unparalleled Quality, Unrestricted Creativity</h4> */}
          {/* <p className="pt-2 g:text-xl md:text-lg text-justify">
        For those seeking flexibility in design and pricing, our non-certified diamonds provide a curated selection of stones with expert quality control.
        </p> */}
          <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
            <li className="text-lg pb-1">Guaranteed quality and authenticity.</li>
            <li className="text-lg pb-1">Detailed grading reports for informed decisions</li>
            <li className="text-lg pb-1">Ideal for high-value jewellery and investment pieces</li>
            {/* <li className="text-lg pb-1">Loose Parcels & Custom Assortments</li> */}
          </ul>
          {/* <p className="pt-2 lg:text-lg md:text-lg text-justify">
        With our internal quality assurance and ROOTS traceability program, these diamonds are an ethical, high-value alternative to certified stones.
        </p> */}
          <div className="pt-5">
            <Link to=""><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 lg:pt-10 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
          <h5 className="lg:text-2xl font-semibold">Premium Non-Certified Diamonds
          </h5>
          {/* <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Earring</h2> */}
          {/* <h4 className="lg:text-2xl md:text-xl font-semibold">Unparalleled Quality, Unrestricted Creativity</h4> */}
          <p className="pt-2 g:text-xl md:text-lg text-justify">
            For clients seeking exceptional value without the need for certification, our non-certified diamonds offer the perfect balance of quality and affordability. These diamonds are handpicked by our experts and are ideal for commercial jewellery and bulk purchases
          </p>
          <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
            <li className="text-lg pb-1">Cut: Round Brilliant, Fancy Shapes, Special Cuts</li>
            <li className="text-lg pb-1">Carat: 1 pt to 2 ct</li>
            <li className="text-lg pb-1">Clarity: IF to I3</li>
            <li className="text-lg pb-1">Loose Parcels & Custom Assortments</li>
          </ul>
          {/* <p className="pt-2 lg:text-lg md:text-lg text-justify">
        With our internal quality assurance and ROOTS traceability program, these diamonds are an ethical, high-value alternative to certified stones.
        </p> */}
          <div className="pt-5">
            <Link to=""><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/2 lg:pt-10 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
          <h5 className="lg:text-2xl font-semibold">Why Choose Non-Certified Diamonds?
          </h5>
          {/* <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Earring</h2> */}
          {/* <h4 className="lg:text-2xl md:text-xl font-semibold">Unparalleled Quality, Unrestricted Creativity</h4> */}
          {/* <p className="pt-2 g:text-xl md:text-lg text-justify">
        For clients seeking exceptional value without the need for certification, our non-certified diamonds offer the perfect balance of quality and affordability. These diamonds are handpicked by our experts and are ideal for commercial jewellery and bulk purchases
        </p> */}
          <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
            <li className="text-lg pb-1">Competitive pricing for bulk orders</li>
            <li className="text-lg pb-1">Reliable quality assurance from our experienced team</li>
            <li className="text-lg pb-1">Suitable for a wide range of jewellery applications</li>
            {/* <li className="text-lg pb-1">Loose Parcels & Custom Assortments</li> */}
          </ul>
          <p className="pt-2 lg:text-lg md:text-lg text-justify">
            Whether you’re looking for certified or non-certified diamonds, Gemasia Antwerpen ensures a seamless buying experience with personalized service and expert guidance.
          </p>
          <div className="pt-5">
            <Link to=""><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link>
          </div>
        </div>


      </div>
    </div>
  )
}
