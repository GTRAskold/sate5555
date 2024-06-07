import React from 'react'
import logo from '../images/logo.svg'
import '../style.css'
import hah from '../images/hah.svg'
import pip from '../images/hah1.svg'
import gg from '../images/gg.svg'

const HeaderComponent = () => {
  return (
    
    <div className='header'>
        <div className="left">
            <img src={logo} alt="" srcset="" />
            <select><option >Electric</option></select>
            <select><option>City</option></select>
            <select><option>Kids</option></select>
            <option>Accessories</option>
            <option>Stores</option>
            <select><option>Leasing</option></select>
        </div>
        <div className="right">
            <select><option>EN</option></select>
            <img src={hah} alt="" srcset="" />
            <img src={pip} alt="" srcset="" />
            <img src={gg} alt="" srcset="" />
        </div>
        
    </div>
  )
}

export default HeaderComponent