import great from '../images/great.png'
import cloc1 from '../images/left.png'
import cloc2 from '../images/right.png'
import React from 'react'


const HeaderSale = () => {
  return (
    <div className='big'>

        <div className='great1'>
            <div className='great-txt'>
                <div>
                    <h1>Electric Ace</h1>
                    <p className='neznayu'>Two</p>
                </div>
                <h2 className='neznayu2'>€69,07 NET/MONTH</h2>
            </div>
            <div className='greate-img'>
            <button className='knop1'><img src={cloc1} alt=''/></button>
            <img src={great} className='vell'alt=''/>
            <button ><img src={cloc2} alt=''/></button>
            </div>
            {/* <img src={color} className='cvet'alt=''/> */}

        </div>


        <div className='great1'>
            <div className='great-txt'>
                <div>
                    <h1>Electric Ace</h1>
                    <p className='neznayu'>Two</p>
                </div>
                <h2 className='neznayu2'>€69,07 NET/MONTH</h2>
            </div>
            <div className='greate-img'>
            <button className='knop1'><img src={cloc1} alt=''/></button>
            <img src={great} className='vell'alt=''/>
            <img src={cloc2} className='knop2'alt=''/>
            </div>
            {/* <img src={color} className='cvet'alt=''/> */}
            
        </div>
        
        
        
    </div>
  )
}

export default HeaderSale