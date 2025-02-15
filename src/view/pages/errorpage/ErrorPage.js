import React from 'react'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div>
     <NavLink to="/">  <img className='m-auto' src={require("../../assets/images/errorimage.jpg")} alt="" /></NavLink>
    </div>
  )
}
