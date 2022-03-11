import React from 'react'
import "./location.scss"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import  {Mapcontent} from '../../data'
import { useEffect, useState } from 'react'


export default function Location() {
  // const width = window.innerWidth;
  const[data,setData] = useState([]);
  useEffect(() =>{
    setData(Mapcontent);
  })
  return (
    <div className='location' id = 'location'>
      <h1>Địa Điểm</h1>
      <div className="container">
        <div className="item">
          {data.map((d) =>
              
              <img src={d.img} alt="" />
            )}
          <CopyToClipboard text="281/26/9 Lê Văn Sỹ. Phường 1. Tân Bình"
              onCopy={() => this.setState({copied: true})}>
              <button>Ấn để copy lấy địa chỉ</button>
          </CopyToClipboard>

        </div>

      </div>

    </div>
  )
}
