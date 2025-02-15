import React,{useEffect} from 'react'
import { Banner } from './components/Banner'
import { Rings } from './components/Rings'
import { Earrings } from './components/Earrings'
import { Neckles } from './components/Neckles'
import { Bangles } from './components/Bangles'
import { Bracelet } from './components/Bracelet'
import { Pendant } from './components/Pendant'

export const Home = () => {
  return (
    <div>
       <Banner/> 
       <Rings/>
       <Earrings/>
       {/* <Neckles/>
       <Bangles/>
       <Bracelet/>
       <Pendant/> */}
    </div>
  )
}
