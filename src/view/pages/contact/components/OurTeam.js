import React from 'react'
import { Facebook, Instagram, Youtube,Twitter } from 'lucide-react'
export const OurTeam = () => {
  return (
    <div>
         <div className='px-5 pt-10'>
        <h2 className='lg:text-3xl md:text-3xl text-xl font-semibold text-center'>Our Team</h2>
       <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-5 pt-10'>
       <div className='m-auto'>
            <img className='h-320px sm-h-200px' src={require("../../../assets/images/team1.webp")}/>
            <p className='lg:text-xl md:text-xl text-lg text-center font-semibold pt-5'>Rakesh</p>
            <p className='lg:text-lg md:text-lg text-md text-center pt-2'>IT Expert</p>
            <p className='lg:text-md md:text-md text-base text-center pt-2'>info@example.com</p>
            <div className='flex justify-center gap-4 pt-2'>
            <div className='custiconhover'>
               <Facebook className='w-4 h-4 '/>
               </div>
                <div className='custiconhover'>
                    <Twitter className='w-4 h-4'/>
                    </div>
                <div className='custiconhover'> 

                <Youtube className='w-4 h-4'/>
                </div>
               <div className='custiconhover'>
                <Instagram className='w-4 h-4'/>
                </div> 
            </div>
        </div>
        <div className='m-auto'>
            <img className='h-320px sm-h-200px' src={require("../../../assets/images/team2.webp")}/>
            <p className='lg:text-xl md:text-xl text-lg text-center font-semibold pt-5'>Anjali</p>
            <p className='lg:text-lg md:text-lg text-md text-center pt-2'>IT Expert</p>
            <p className='lg:text-md md:text-md text-base text-center pt-2'>info@example.com</p>
            <div className='flex justify-center gap-4 pt-2'>
               <div className='custiconhover'>
               <Facebook className='w-4 h-4 '/>
               </div>
                <div className='custiconhover'>
                    <Twitter className='w-4 h-4'/>
                    </div>
                <div className='custiconhover'> 

                <Youtube className='w-4 h-4'/>
                </div>
               <div className='custiconhover'>
                <Instagram className='w-4 h-4'/>
                </div> 
            </div>
        </div>
        <div className='m-auto'>
            <img className='h-320px sm-h-200px' src={require("../../../assets/images/team3.webp")}/>
            <p className='lg:text-xl md:text-xl text-lg text-center font-semibold pt-5'>Nitesh</p>
            <p className='lg:text-lg md:text-lg text-md text-center pt-2'>IT</p>
            <p className='lg:text-md md:text-md text-base text-center pt-2'>info@example.com</p>
            <div className='flex justify-center gap-4 pt-2'>
            <div className='custiconhover'>
               <Facebook className='w-4 h-4 '/>
               </div>
                <div className='custiconhover'>
                    <Twitter className='w-4 h-4'/>
                    </div>
                <div className='custiconhover'> 

                <Youtube className='w-4 h-4'/>
                </div>
               <div className='custiconhover'>
                <Instagram className='w-4 h-4'/>
                </div> 
            </div>
        </div>
        <div className='m-auto'>
            <img className='h-320px sm-h-200px' src={require("../../../assets/images/team4.webp")}/>
            <p className='lg:text-xl md:text-xl text-lg text-center font-semibold pt-5'>Falguni</p>
            <p className='lg:text-lg md:text-lg text-md text-center pt-2'>Marketing</p>
            <p className='lg:text-md md:text-md text-base text-center pt-2'>info@example.com</p>
            <div className='flex justify-center gap-4 pt-2'>
            <div className='custiconhover'>
               <Facebook className='w-4 h-4 '/>
               </div>
                <div className='custiconhover'>
                    <Twitter className='w-4 h-4'/>
                    </div>
                <div className='custiconhover'> 

                <Youtube className='w-4 h-4'/>
                </div>
               <div className='custiconhover'>
                <Instagram className='w-4 h-4'/>
                </div> 
            </div>
        </div>
       </div>
    </div>
    </div>
  )
}
