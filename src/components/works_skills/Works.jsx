import React, {useEffect} from 'react'
import './works.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Work from './Work';
import { workList } from './workData'

const Works = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      })

  return (
    <div className="works container">

        <div className="servicesHead" data-aos="fade-down">
            <p className="title"> Works</p>
            <h1 className="head"> My Portfolio</h1>
        </div>
        <div className="servicesWrapper">
        {
            workList.map((work) => (
              <Work key={work.id} icon={work.icon} heading={work.heading} text={work.text}  />
            ))
        }




        </div>


    </div>
  )
}

export default Works