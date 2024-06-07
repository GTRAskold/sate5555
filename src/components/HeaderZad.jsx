import Bike from '../images/Bike.png'
import React from 'react'

const HeaderZad = () => {
  return (
    <div className='velza'>
        <img src={Bike} className='velik'alt=''/>
        <div className='piip-text'>
            <h1 className='text'>Free of charge foremployers</h1>
            <h4 className='txt'>The bike plan is totally independent of the WKR
             and is free for you as <br/> an employer. 
             The employee pays the lease costs and you, as the <br/>
             employer, decide whether you want to contribute to the costs.</h4>
            <h3 className='txpro'>Cost example</h3>
        </div>


    </div>

  )
}

export default HeaderZad