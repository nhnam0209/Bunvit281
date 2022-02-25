import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import "./scrollbutton.scss"


export default function Scrollbutton() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smoth'
        })
    }

    window.addEventListener('scroll', toggleVisible);

  return (
    <div className='Button'>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </div>
  )
}
