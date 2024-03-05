import React, {useEffect} from 'react'
import './home.css'
import TeeImg from "../../images/teeImg.png"
import Github from "../../images/Github.png"
import Whatsapp from "../../images/WhatsApp.png"
import Instagram from "../../images/Instagram.png"
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Link} from  "react-scroll";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <div className='home container' >
      <div className="left">
        <div className="textWrapper">
          <p className="name">I am <span>Terence Onyekachi,</span></p>
          <p className='desc'>"Experienced UI Designer, Web Developer, WordPress Specialist, and Network Engineer ready to elevate your digital presence. With a passion for seamless user experiences and robust network infrastructure, I craft visually stunning websites and scalable solutions tailored to your needs. Let's build your online success together.."</p>

          <div className="buttons">
          <Link to="About"  spy={true} smooth={true} offset={0} duration={100} className='nav'><button className="fullbtn btn">About Me</button></Link>
            <Link to="contact" spy={true} smooth={true} offset={100} duration={100} className='nav'> <button className="transparentbtn btn">Hire Me</button></Link>
           
          </div>
        </div>

{/* */}

      </div>
      <div className="right">
          <img src={TeeImg} alt=""/>
          <div className="social">
             <a href="https://wa.link/x70zus" className="whatsapp soc">
                <img src={Whatsapp} alt="" />
             </a>
             <a href="0" className="instagram soc">
                <img src={Instagram} alt="" />
    
             </a>
             <a href="https://github.com/Terencino8" className="github soc">
                <img src={Github} alt="" />

             </a>
          </div>
      </div>
    </div>
  )
}

export default Home