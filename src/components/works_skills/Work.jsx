import React, {useEffect} from 'react'
import './works.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Work = ({icon, heading, text}) => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      })
  return (
    <div className="Work" data-aos="fade-down">
        <img src={icon} alt="" width="100%"  height="100%"/>
        <div className="content">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Work