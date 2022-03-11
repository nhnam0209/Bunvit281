import React from 'react'
import "./order.scss"
import picture from "../assets/orderpic.JPG"

export default function Order() {
  return (
    <div className='order' id='order'>
      <div className="top">
          <div className="leftContainer">
            <img src={picture} alt="" />
          </div>
          <div className="rightContainer">
            <div className="container">
              <h1>Đặt Món</h1>
              <p>Để đặt món quý khách vui lòng bấm vào nút bên dưới</p>
              <a href="tel:02838422596"><button>Gọi ngay</button></a>
            </div>
          </div>
      </div>
      {/* <div className="bottom">
        <div className="left"></div>
        <div className="mid"></div>
        <div className="right"></div>
      </div> */}
    </div>
  )
}
