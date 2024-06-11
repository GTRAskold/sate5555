import fays from '../images/fays.png'
import insta from '../images/insta.png'
import yotub from '../images/yotub.png'
import intr from '../images/intr.png'
import tik from '../images/tik.png'
import kvadr from '../images/kvadr.png'

import React from 'react'

const HeaderPod = () => {
  return (
    <div className='podvfl'>
        <div className='podvfl-text1'>
            <h1>Explorer</h1>
            <a>Electric bikes</a>
            <a>City bikes</a>
            <a>Kids' bikes</a>
            <a>Accessories</a>
            <a>Outlet</a>
            <a>Business</a>
            <a>Insurance Electric</a>
            <a>Size guide</a>
        </div>
        <div className='podvfl-text2'>
            <h1>About</h1>
            <a>About us</a>
            <a>Journal</a>
            <a>Reviews</a>
            <a>Press</a>
            <a>Jobs</a>
        </div>
        <div className='podvfl-text3'>
            <h1>Help</h1>
            <a>Contact</a>
            <a>FAQ</a>
            <a>Delivery</a>
            <a>Assembly & manuals</a>
            <a>Payment options</a>
            <a>Privacy policy</a>
            <a>Terms & conditions</a>
        </div>
        <div className='podval'>
          <h1>Join the ride.</h1>
          <h2>Sign up for our newsletter.</h2>
          <div className='turbo-container'>
            <form className='turbo'>
              <input placeholder='Enter your email address here ' className=''/>
              <button>Subscribe</button>
            </form>
          </div>
          <div className='clovo'>
          <img src={kvadr} className='kvadr'alt=''/>
          <h2>By signing up, I agree to the privacy policy of Veloretti.</h2>
          </div>

          <div className='fot'>
            <div>
              <img src={fays} className='fays'alt=''/>
            </div>
          <div>
            <img src={insta} className='insta 'alt=''/>
          </div>
          <div>
            <img src={yotub} className='yotub 'alt=''/>
          </div>
          <div>
            <img src={intr} className='intr'alt=''/>
          </div>
          <div>
            <img src={tik} className='tik'alt=''/>
          </div>
          </div>
        </div>
    </div>
  )
}

export default HeaderPod