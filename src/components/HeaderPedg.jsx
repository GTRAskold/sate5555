import the from '../images/the.png'
import bright from '../images/bright.png'
import vogue from '../images/vogue.png'
import React from 'react'

const HealderPedg = () => {
  return (
    <div className='ctl'>
      <h1>They talked about us</h1>
      <div className="ctl-container">
        <div className='txt1'>
          <h3>"One of the best e-bikes available at <br/>any price and far and away my <br/>favourite ride of the year."</h3>
          <img src={the} className='the' alt=""/>
        </div>
        <div className='txt1'>
          <h3>“This second-generation Ace is a <br/>superhero amongst urban e- <br/>bikes… 9/10.”</h3>
          <img src={bright} className='bright' alt=""/>
        </div>
        <div className='txt1'>
          <h3>"The timeless, chic design and <div/> stunning craftsmanship make <div/>them the perfect way to get <div/>around the city."</h3>
          <img src={vogue} className='vogue' alt=""/>
        </div>
      </div>
    </div>
  )
}

export default HealderPedg