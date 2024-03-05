import React, {useEffect} from 'react'
import './about.css'
import TeeImg2 from '../../images/teeImg2.png'
import cv from "../../images/Terence Onyekachi CV 2024.pdf"
import AOS from 'aos';
import 'aos/dist/aos.css'


const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      })
  return (
    <div className="container About">

        <div className="left">
            <img src={TeeImg2} alt=""  data-aos="fade-up"
     data-aos-duration="1000" />
        </div>
        <div className="right">
            <div className="textWrapper" data-aos="zoom-out-left"
     data-aos-duration="1000">
                <p className="title"> About Me</p>
                <h1 className="head"> Story About Me.</h1>
                <p className="desc">
                My journey began with a fascination for how the digital world shapes our experiences. From crafting pixel-perfect designs to architecting robust network infrastructures, I've dedicated myself to mastering the tools and techniques that bring ideas to life on the web.
                <br />
                I obsess over finer details, ensuring every interaction is thoughtfully crafted to delight users and enhance usability. I believe that great design is more than just aesthetics—it's about creating meaningful connections between people and technology.
                <br />
                Diving Into the world of code and turning concepts into functional, elegant websites and web applications ensuring that all frameworks and programming language used stays on the cutting edge of industry trends and best practices.
                <br />
                But beyond the technical skills and expertise, what drives me most is the opportunity to collaborate with passionate individuals and organizations, turning visions into realities and making a positive impact in the digital landscape.
                </p>
                <div className="stats">
                    <div className="statsleft">
                        <p>Phone: <i>+2347085429640</i></p>
                       
                    </div>
                    <div className="statsright">
                        <p>Country: <i>Nigeria</i></p>
                    </div>
                </div>
                <p className='statsemail'>Email: <i>Terenceonyekachi@gmail.com</i></p>
                <div className="buttons">
                <a href={cv}><button className="transparentbtn btn" >Download CV</button></a>
                </div>

            </div>

        </div>
    </div>
    
  )
}

export default About