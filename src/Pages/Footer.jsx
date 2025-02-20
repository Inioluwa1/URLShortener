import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className='boostLinks'>
        <div className='noteandbutton'>
          <h1> Boost your links today </h1>
          <button> Get Started </button>
        </div>
      </div>
      <div className='linkContainer'>
        <h1 className='Shortly'> Shortly </h1>
        <div className='features'>
          <h1> Features </h1>
          <h2> URL Shortening </h2>
          <h2> BrandedLinks </h2>
          <h2> Analytics </h2>
        </div>
        <div className='resources'>
          <h1> Resources </h1>
          <h2> Blog </h2>
          <h2> Developers </h2>
          <h2> Support </h2>
        </div>
        <div className='company'>
          <h1> Company </h1>
          <h2> About </h2>
          <h2> Our Team </h2>
          <h2> Careers </h2>
          <h2> Contact </h2>
        </div>
        <div className='socials'>
          <img src='/assets/icon-facebook.svg' alt='facebook' />
          <img src='/assets/icon-twitter.svg' alt='twitter' />
          <img src='/assets/icon-pinterest.svg' alt='pinterest' />
          <img src='/assets/icon-instagram.svg' alt='instagram' />
        </div>

      </div>
    </div>
  )
}
