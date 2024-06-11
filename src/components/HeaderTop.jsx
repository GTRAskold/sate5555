import retr from '../images/retr.png'
import React from 'react'

const HeaderTop = () => {
  return (
    <div className='name'>
        <div className='uryfg'>
            <h1>Make your commute <br/> the best part of your day.</h1>
       </div>
       <div className='ofn'>
        <h3><p>Clean and timeless designs that make every ride a thrill.<br/>Wherever you're heading, our bikes are made to make your daily<br/>commute a joy.</p></h3>
       <img src={retr} className='R'alt=''/>
       </div>
    </div>
    

  )
}

export default HeaderTop