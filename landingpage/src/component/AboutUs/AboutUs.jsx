import React from 'react'
import "./aboutus.scss"
import SmoothList from 'react-smooth-list';


export default function AboutUs() {
  return (
    <div className='aboutus' id='aboutus'>
      <div className="container">
          <div className="slider">
            <SmoothList>
              <h1>About Us</h1>
              <h2>This is our </h2>
            </SmoothList>
          </div>
      </div>
    </div>
  )
}
