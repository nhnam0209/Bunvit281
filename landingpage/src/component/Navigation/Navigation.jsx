import React from 'react'
import "./navigation.scss"
import logo from "../assets/logo_homepage.png"


export default function Navigation({ menuOpen, setMenuOpen }) {
  return (
    <div className='navigation'>
        <div className="wrapper">
            <div className="left">
                <div className="Logo">
                  <a href="#intro">
                    <img src={logo} height={100} width={120}/>
                  </a>
                </div>
            </div>
            <div className="right">
              <div className="menuhamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
