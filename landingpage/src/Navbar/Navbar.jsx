import React from 'react'
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left"></div>
            <div className="center">
                <div className="itemContainer">
                    
                <a href="#aboutus">About Us</a>
                </div>
                <div className="itemContainer">
                <a href="#intro">BunVitLVS</a>
                </div>
                <div className="itemContainer">
                <a href="#gallery">Gallery</a>
                </div>
                <div className="itemContainer">
                <a href="#contact">Contact</a>

                </div>
            </div>
            <div className="right"></div>
        </div>
      
    </div>
  )
}
