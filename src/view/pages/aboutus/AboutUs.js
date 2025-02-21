import React from 'react'
import { AboutBanner } from './components/AboutBanner'
import { AboutService } from './components/AboutService'
// import { AboutMission } from './components/AboutMission'

export const AboutUs = () => {
  return (
    <div>
        <AboutBanner/>
        <AboutService/>
        {/* <AboutMission/> */}
    </div>
  )
}
