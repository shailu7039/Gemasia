import React from 'react'
import { Link } from 'react-router-dom'
import { CollectionBanner } from './CollectionBanner'
export const CertifiedDiamond = () => {
  return (
    <div>
      <CollectionBanner />
      <div className='py-20'>
        <div className='flex justify-center items-center gap-10'>
          <img src={require("../../../assets/images/cdiamond.jpg")} alt='' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200" />
          <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
            <h5 className="lg:text-2xl font-semibold">Certified Diamonds</h5>
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
            <div className="lg:pt-5 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
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
            </div>
            <div className="pt-5">
              <Link to="/product-type"><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
