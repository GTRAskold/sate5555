import redbot from '../images/redbot.png'
import React from 'react'

const HeaderProd = () => {
  return (
    <div>
        <div className='tert'>
          <h1>Red Dot Award</h1>
          <h4>Good design is what drives us, and we're <br/>proud to share that Veloretti Electric Two has <br/>already won the prestigious Red Dot Design <br/>Award 2023, as judged by the world's best <br/>product designers.</h4>
        </div>
        <img src={redbot} className='velosiped' alt=""/>
    </div>
  )
}

export default HeaderProd