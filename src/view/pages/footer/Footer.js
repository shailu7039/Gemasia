
import React,{useEffect} from "react";

export const Footer = () => {
  return (
    <div className="bg-abd7d1 lg:px-40 md:px-20 px-5 lg:py-20 md:py-12 py-5">
      <div className="flex gap-1 justify-center">
        <a href="" target="_blank"><img src={require("../../assets/images/skype.png")} alt="logo" /></a>
       <a href="" target="_blank"><img src={require("../../assets/images/Linkd.png")} alt="logo" /></a> 
        <a href="" target="_blank"><img src={require("../../assets/images/fb.png")} alt="logo" /></a>
       <a href="" target="_blank"><img src={require("../../assets/images/insta.png")} alt="logo" /></a> 
      </div>
      <p className="text-center uppercase font-light text-white opacity-100 text-2xl py-4">Quick Links</p>
      <div className="flex gap-8 justify-center">
        <p className="text-white font-light">Site Map</p>
        <p className="text-white font-light">About us</p>

        <p className="text-white font-light">Contact</p>
      </div>
      <hr className="horlinecss"/>
      <p className="text-center font-light text-white  py-4">All Rights Reserved @{new Date().getFullYear()} . Gemasia</p>
    </div>
  );
};
