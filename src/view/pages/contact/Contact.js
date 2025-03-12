import React from 'react'
import { Banner } from './components/Banner'
import { ContactAddress } from './components/ContactAddress'
import { ContactForm } from './components/ContactForm'
import { OurTeam } from './components/OurTeam'

export const Contact = () => {
  return (
    <div>
        <Banner/>
        {/* <ContactAddress/> */}
        <div className='lg:px-20 md:px-20 px-5 lg:py-20 md:py-10 py-8'>

        <ContactForm />
        {/* <OurTeam/> */}
        </div>
    </div>
  )
}
