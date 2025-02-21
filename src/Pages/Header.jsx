import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Header.css"

export default function Header({isOpen, setisOpen}) {

  return (
    <nav className='linkcontainer'>
        <img src='/assets/logo.svg' className='shortly'/>

        {/* Writing the hamburger code to display only in mobile mode */}
        <button className='hamburger' onClick={() => setisOpen(!isOpen)}> 
          {isOpen? <IoMdClose size={50} className='toggle' /> : <GiHamburgerMenu size={50} className='toggle'/> }
        </button>
        
        <div className={`all-links ${isOpen? 'show' : ''}`} >
          <div className='links'>
            <h2> Features </h2>
            <h2> Pricing </h2>
            <h2> Resources </h2>
          </div>
          <div className='checkin'>
            <h2> Login </h2>
            <h2> Sign up </h2>
          </div>
        </div>
     </nav> 
  )
}
 