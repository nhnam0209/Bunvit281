import React from 'react'
import "./gallery.scss"
import { useEffect, useState } from 'react'
import  {Gallerycontent} from '../../data'

export default function Gallery() {
  const[data,setData] = useState([]);
  useEffect(() =>{
    setData(Gallerycontent);
  })

  return (
    <div className='gallery' id = 'gallery'>
      <h1>Hình Ảnh</h1>
      <div className="container">
      
        {data.map((d) =>
          <div className= {d.feature ? "card featured" : "card"}>
              <a href= {d.url}>
                <img src={d.img} alt="" />
              </a>
          </div>
        )}

      </div>
      
    </div>
  )
}
