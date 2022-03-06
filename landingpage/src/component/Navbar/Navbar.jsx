import React from 'react'
import "./navbar.scss"
import {Restaurant , Home, Collections, LocalPhone, Place} from '@material-ui/icons';
import logo from "../assets/logo_homepage.png"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="Logo">
                  <a href="#intro">
                    <img src={logo} height={100} width={120}/>
                  </a>
                </div>
            </div>
            <div className="right">
                <div className="itemContainer">
                  <Home className = "icon"/>
                  <a href="#intro">Home</a>
                </div>
                <div className="itemContainer">
                  <Restaurant className = "icon"/>        
                  <a href="#aboutus">About Us</a>
                </div>
                <div className="itemContainer">
                  <Collections className = "icon"/>        
                  <a href="#gallery">Gallery</a>
                </div>
                <div className="itemContainer">
                  <Place className = "icon"/>        
                  <a href="#location">Place</a>
                </div>
                <div className="itemContainer">
                  <LocalPhone className = "icon"/>        
                  <a href="#order">Order</a>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}
