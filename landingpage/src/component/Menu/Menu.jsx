import React from 'react'
import "./menu.scss"
import {Restaurant , Home, Collections, LocalPhone, Place} from '@material-ui/icons';


export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className= {"menu " + (menuOpen && "active")}>
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
                <Home className = "icon"/>
                <a href="#intro">Trang Chủ</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
                <Restaurant className = "icon"/>        
                <a href="#aboutus">Về Chúng Tôi</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
                <Collections className = "icon"/>        
                <a href="#gallery">Hình Ảnh</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
                <Place className = "icon"/>        
                <a href="#location">Địa Điểm</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
                <LocalPhone className = "icon"/>        
                <a href="#order">Đặt Món</a>
          </li>
      </ul>
    </div>
  )
}