import pedal from '../images/pedal.png'
import React from 'react'

const HeaderZad = () => {
  return (
    <div className='pefallik2'>
        <img src={pedal} className='ped'alt=''/>
        <div className='ped-text'>
            <h1 className='text1'>Silent and powerful mid-motor</h1>
            <h4 className='txt2'><p>Natural and powerful. The 65Nm torque mid-engine <br/>gives you all the power you need. Because the engine is <br/>directly connected to your pedals, it automatically <br/>adjusts its power to your torque instead of speed. This <br/>gives you the most natural electric biking experience <br/>there is.</p></h4>
        </div>


    </div>

  )
}

export default HeaderZad