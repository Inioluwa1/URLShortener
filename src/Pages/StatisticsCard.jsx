import React from 'react'
import './StatisticsCard.css'

export default function StatisticsCard() {
  return (
    <div className='StatisticsCardContainer'>
        <div className='StatisticsCard'>
            <img src='assets/icon-brand-recognition.svg' alt='Brand recognition'className='image'/>
            <h1> Brand Recognition </h1>
            <p> Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content</p>
            <div className='divider'> </div>
        </div>
        <div className='StatisticsCard2'>
            <img src='assets/icon-detailed-records.svg' alt='Detailed Records' className='image'/>
            <h1> Detailed Records </h1>
            <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content help inform better decisions </p>
            <div className='divider2'> </div>
        </div>
        <div className='StatisticsCard3'>
            <img src='assets/icon-fully-customizable.svg' alt='Fully Customizable' className='image'/>
            <h1> Fully Customizable </h1>
            <p> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
        </div>
    </div>
  )
}
