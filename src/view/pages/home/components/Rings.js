import React from "react";
import { Link } from "react-router-dom";
export const Rings = () => {
  return (
    <div className="lg:flex md:flex lg:gap-20 md:gap-10 gap-5 sm-columndirection justify-center items-center lg:px-40 md:px-40 px-5 m-auto lg:py-10 md:py-10 py-5">
      <div className="lg:w-1/2 md:w-1/2" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        <h5 className="lg:text-2xl font-semibold">Certified Diamonds</h5>
        {/* <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">
          Rings
        </h2> */}
        <h4 className="lg:text-2xl md:text-xl font-semibold ">Excellence You Can Trust
        </h4>
        <p className="pt-2 lg:text-lg md:text-lg text-justify">
        Every certified diamond in our collection undergoes rigorous assessment by globally renowned laboratories—IGI, GIA, HRD—ensuring precision, authenticity, and uncompromising quality.

        </p>
        <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
          <li className="text-lg pb-1">Size Range: 0.08 pts to 3 ct</li>
          <li className="text-lg pb-1">Colour Spectrum: D to M </li>
          <li className="text-lg pb-1">Clarity Grades: IF to SI2</li>
          <li className="text-lg pb-1">Perfectly Cut Diamonds: Round Brilliant, Fancy Shapes, and Special Cuts on order</li>
        </ul>
        <p className="pt-2 lg:text-lg md:text-lg text-justify">
        We guarantee superior traceability, ethical sourcing, and adherence to global standards.
        </p>
        {/* <p className="pt-2 lg:text-xl md:text-lg text-justify">
          Custom or Statement Ring: Emphasize uniqueness and individuality
        </p> */}
        {/* <div className="pt-5">
          <Link to="/collection">
            <button className="bg-primary px-8 py-2 rounded-md text-white">
            See Collection
            </button>
          </Link>
        </div> */}
      </div>
      <div  className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-8  rounded-md"  data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
       <div className="">
       <img
          className="m-auto  sm-h-250px"
          src={require("../../../assets//images/4ee8a004-05ab-450e-9ab2-b1e3d9c6f156-0.png")}
          alt="img"
        />
       </div>
      </div>
    </div>
  );
};
