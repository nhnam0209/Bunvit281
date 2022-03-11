import React from 'react'
import "./aboutus.scss"
import SmoothList from 'react-smooth-list';
import FadeIn from 'react-fade-in';



export default function AboutUs() {
  return (
    <div className='aboutus' id='aboutus'>
      <div className="container">
      <FadeIn>
        <SmoothList>
          <div className="item">
            <h1>Về Chúng Tôi</h1>
            <br />
            <p>Bún Vịt 281 Lê Văn Sỹ là quán ăn gia đình tại quận Tân Bình, TP Hồ Chí Minh với món bún măng vịt đặc trưng. Chúng tôi tự hào khi là quán ăn truyền thống của gia đình từ năm 1968. Với nước dùng ngọt hầm từ xương cùng với độ béo và thơm của thịt vịt, chúng tôi cam đoan rằng quý khách đến dùng sẽ cảm thấy ngon miệng. Kính mời.</p>
            </div>
          </SmoothList>
        </FadeIn>
      </div>
    </div>
  )
}
