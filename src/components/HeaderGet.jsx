import React from 'react'

const HeaderGet = () => {
  return (
    <div className='stolb'>
        <div>
        <h1>Get in touch</h1>
        </div>
        <div>
        <input placeholder='First name '/>
        </div>
       <div>
        <input placeholder='Last name  '/>
        </div> 
        <div>
        <input placeholder='Email address  '/>
        </div>
        <div>
        <input placeholder='Phone number  '/>
        </div>
        <div>
        <input placeholder='Company name  '/>
        </div>
        <div>
        <input placeholder='Company Size'/> <select name="" id=""></select>
        </div>
        <div>
        <input placeholder='Number of bikes  '/>
        </div>
        <div >
        <textarea className='mnogo' placeholder='How can we help'/>
        </div>
        <button className='cknopcka'>Send the request</button>
      



    </div>
  )
}

export default HeaderGet