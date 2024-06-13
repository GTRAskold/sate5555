
import francuz from '../images/francuz.png'
import React from 'react'

const HeaderNoga = () => {
  return (
    <div className='fran'>
      
      <div className='fran-text'>
        <div className='blocek'>
        <h1>Ride carefree</h1>
        </div>
        <div className='texti'>
        <h3>Our Qover x Veloretti insurance plan has got you covered. It offers <br/>comprehensive coverage against theft, provides assistance in case <br/>of any issues, and covers any damages to your bike.</h3>
        </div>
        <div className='blocek1'>
        <h2>Learn more</h2>
        </div>
    
      </div>


      <img src={francuz} className='francuz'alt=''/>
    
    
    
    </div>
  )
}

export default HeaderNoga