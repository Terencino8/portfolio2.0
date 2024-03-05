import React, {useEffect} from 'react'
import './services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Service = ({icon, heading, text}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })

  return (
    <div className="Service" data-aos="fade-up">
    <div className="icon">
        <img src={icon} alt="service" />
    </div>
    <h1 className="head Servicehead">{heading}</h1>
    <p className="desc">{text}</p>

    </div>
  )
}

export default Service