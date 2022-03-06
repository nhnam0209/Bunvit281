import React from 'react'
import "./intro.scss"
import SmoothList from 'react-smooth-list';

export default function Intro() {
  return (
    <div className='intro' id = 'intro'>
          <div className="container">
            <div className="slider">     
              <SmoothList>
              <h1>Welcome to Bun Vit 281 LVS</h1>
              <button ><a className='toorder' href="#order">Contact to Order</a></button>
              </SmoothList>
            </div>
            {/* <a className='godown' href="#aboutus">
              <img src="../assets/downarrow.png" alt="" />
            </a> */}
        </div>
      </div>
  )
}

