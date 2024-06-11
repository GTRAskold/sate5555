import planet from '../images/planet.png'
import React from 'react'

const HeaderPlnt = () => {
  return (
    <div>
      <div className='text-name'>
        <h1><p>Discover your <br/>local Veloretti <br/>partner store</p></h1>
        <h4><p>Our partner stores across the Netherlands <br/>are there for you. Whether you're looking to <br/> pick up a newly ordered bike, need a fix, or <br/>want to take a test ride on our Ivy or Ace Two,<br/>your ideal biking experience is closer than <br/>you think.</p></h4>
        <button className='head-btn'>Find a partner store near you</button>
      </div>
         <img src={planet} className='karta' alt="" />
    </div>

  )
}

export default HeaderPlnt