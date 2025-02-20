import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='linkcontainer'>
        <div className='links'>
          <img src='/assets/logo.svg'/>
          <h2> Features </h2>
          <h2> Pricing </h2>
          <h2> Resources </h2>
        </div>
        <div className='checkin'>
          <h2> Login </h2>
          <h2> Sign up </h2>
        </div>
     </div>
  )
}
 