import React from 'react'
import { Banner } from './components/Banner'
import { ContactAddress } from './components/ContactAddress'
import { ContactForm } from './components/ContactForm'

export const Contact = () => {
  return (
    <div>
        <Banner/>
        {/* <ContactAddress/> */}
        <ContactForm />
    </div>
  )
}
