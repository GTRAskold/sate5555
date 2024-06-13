import velortt from '../images/velortt.png'
import React from 'react'

const HeaderPlnt = () => {
  return (
    <div>
      <div className='bitvin'>
        <h1><p>Removable long- <br/>range battery</p></h1>
        <h4><p>Recharge anytime, anywhere. Our in-house developed battery is <br/>built to go the distance. With a powerful 540 Wh and an impressive <br/>range of up to 120km, you'll have the freedom to explore without <br/>worrying about running out of power. And if you do need to <br/>recharge, our removable and smart battery pack can be easily <br/>detached and charged with any electrical outlet.</p></h4>

      </div>
         <img src={velortt} className='velorett' alt="" />
    </div>

  )
}

export default HeaderPlnt