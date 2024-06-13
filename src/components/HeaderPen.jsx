import door from '../images/door.png'
import React from 'react'

const HeaderZad = () => {
  return (
    <div className='door2'>
        <img src={door} className='door'alt=''/>
        <div className='pen-text'>
            <h1 className='textpen'>Safety tracking</h1>
            <h4 className='txtpen'><p>The Electric Two comes with safety tracking. In case you find <br/>yourself in an uncertain situation, simply press the button on your <br/>handlebar to alert your loved ones of your live location and feel <br/>more secure.</p></h4>
            <h4 className='txtpen'><p>Whether you're commuting in the city or exploring the countryside, <br/>you can have peace of mind knowing that notifying is just a button <br/>press away. Moreover, the tracking feature automatically <br/>deactivates after an hour, allowing you to enjoy your rides with <br/>complete privacy and security.</p></h4>
        </div>


    </div>

  )
}

export default HeaderZad