import React from 'react'
import { Link } from 'react-router-dom'
// import { Select } from '@chakra-ui/react'
import { CollectionBanner } from './CollectionBanner'
export const NonCertifiedDiamond = () => {
  return (
    <div>
      <CollectionBanner />
      <div className='py-10'>
        <div className='flex gap-10 justify-center'>
          <img src={require("../../../assets/images/cdiamond.jpg")} alt='' />
          <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
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
            <div className="lg:pt-5 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
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
              {/* <div className="pt-5">
                        <Link to=""><button className="bg-primary px-8 py-2 rounded-md text-white">EXPLORE</button></Link> 
                        </div> */}
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
