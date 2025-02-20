import React from 'react'
import './Statistics.css'
import StatisticsCard from './StatisticsCard'

export default function Statistics() {
  return (
    <div className='Statisticscontainer'>
      <div className='HeaderandContent'>
        <h1> Advanced Statistics </h1>
        <p> Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>
      <div className='StatisticsImage'>  
        <StatisticsCard />
      </div>
    </div>
  )
}
