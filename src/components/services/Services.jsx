import React, {useEffect} from 'react'
import './services.css'
import Service from './Service'
import { serviceList } from './data'
import AOS from 'aos';
import 'aos/dist/aos.css'


const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <div className="container services">
        <div className="servicesHead" data-aos="fade-down">
        <p className="title"> Services</p>
                <h1 className="head"> I am Specialized In</h1>
        </div>
        <div className="servicesWrapper">

          {
            serviceList.map((service) => (
              <Service key={service.id} icon={service.icon} heading={service.heading} text={service.text}  />
            ))
          }

            
            
        </div>
    </div>
  )
}

export default Services