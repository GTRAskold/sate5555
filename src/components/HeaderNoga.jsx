import grayspot from '../images/grayspot.png'
import noga from '../images/noga.png'
import React from 'react'

const HeaderNoga = () => {
  return (
    <div className='rides'>
      
      <div className='cyclist-text'>
        <div className='block'>
        <h1>How it works</h1>
        </div>
        <div className='block1'>
        <img src={grayspot} className='spot' alt="" />
        <h2>Register your company</h2>
        </div>
        <div className='tex1'>
        <h3>Fill in our registration form with your company details. After <br/>your registration, our leasing partner will do a credit check. You<br/>will hear whether your application has been approved within 24 <br/>hours.</h3>
        </div>
        <div className='block2'>
        <img src={grayspot} className='spot' alt="" />
        <h2>Determine the requirements</h2>
        </div>
        <div className='yext2'>
        <h3>You get acces to the digital platform. Set the requirements for<br/>your employees and share the registration link.</h3>
        </div>
        <div className='block3'>
        <img src={grayspot} className='spot' alt="" />
        <h2>Ride your bike!</h2>
        </div>
        <div className='text3'>
        <h3>Let's go! Your employees can choose their bikes and they'll be<br/>delivered straight to their homes.</h3>
        </div>
        <div className='block4'>
        <img src={grayspot} className='spot' alt="" />
        <h2>Administration</h2>
        </div>
        <div className='texxxt4'>
        <h3>Everything in one place. The digital platform gives you an easy<br/>overview of all the information for your payroll.</h3>
        </div>

      </div>


      <img src={noga} className='nogavel'alt=''/>
    
    
    
    </div>
  )
}

export default HeaderNoga