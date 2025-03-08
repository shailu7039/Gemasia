import React,{useEffect} from 'react'
import { Banner } from './components/Banner'
import { Rings } from './components/Rings'
import { Earrings } from './components/Earrings'
import { Neckles } from './components/Neckles'
import { Bangles } from './components/Bangles'
import { Bracelet } from './components/Bracelet'
import { Pendant } from './components/Pendant'
import { Affilation } from './components/Affilation'

export const Home = () => {
  return (
    <div>
       <Banner/> 
       <Rings/>
       <Earrings/>
       <Affilation/>
       {/* <Neckles/>
       <Bangles/>
       <Bracelet/>
       <Pendant/> */}
    </div>
  )
}
