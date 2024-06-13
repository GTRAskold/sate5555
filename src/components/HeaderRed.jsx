import red from '../images/red.png'
import React from 'react'

const HeaderNoga = () => {
  return (
    <div className='rrirl'>
      
      <div className='rirl-text'>
        <div className='blocekr'>
        <h1>LED brake light</h1>
        </div>
        <div className='textin'>
        <h3>When commuting, safety is priority. We acknowledge <br/>the significance of being alert and responsive on the <br/>road. That's why we created our brake light to activate <br/>instantly and illuminate brightly upon pressing the <br/>brakes. This feature guarantees that other drivers and <br/>commuters are immediately notified of your intention to <br/>slow down or come to a complete stop, ensuring your <br/>safety on the road.</h3>
        </div>
       
    
      </div>


      <img src={red} className='red'alt=''/>
    
    
    
    </div>
  )
}

export default HeaderNoga