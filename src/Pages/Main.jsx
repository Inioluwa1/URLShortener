import React from 'react'
import "./Main.css"

export default function Main() {
  return (
    <div className='MainContainer'>
      <div className='HeaderandText'>
        <h1> More than just shorter links </h1>
        <p> Build your brand's recognition and get detailed insights on how your links are performing </p>
        <button> Get Started </button>
      </div>
      <img src='/public/assets/illustration-working.svg' alt='Working Image' className='WorkingImage' />
    </div>
  )
}
