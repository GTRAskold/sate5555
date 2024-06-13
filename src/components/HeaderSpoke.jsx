import spoke from '../images/spoke.png'
import React from 'react'

const HeaderNoga = () => {
  return (
    <div className='spoke'>
      
      <div className='spoke-text'>
        <div className='bloceksp'>
        <h1>Shimano® <br/>hydraulic <br/>discbrakes</h1>
        </div>
        <div className='textisp'>
        <h3>The Shimano® discbrakes are premium hydraulic disc brakes <br/>designed to deliver lightning-fast stopping power, so you can ride <br/>with complete confidence and control. Rest assured, you'll feel the <br/>difference in the moments you need it most.</h3>
        </div>
       
    
      </div>


      <img src={spoke} className='spoke'alt=''/>
    
    
    
    </div>
  )
}

export default HeaderNoga