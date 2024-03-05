import React, {useEffect} from 'react'
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Link} from  "react-scroll";



const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <div className='header'>
        <h1 className='logo'>Terry_Concepts</h1>

        <div className="navlinks">
            <ul className='links' id='links'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} className='nav'><li>Home</li></Link>
                <Link to="About"  spy={true} smooth={true} offset={-100} duration={100} className='nav'><li>About</li></Link>
                <Link to="services" spy={true} smooth={true} offset={-50} duration={100} className='nav'><li>Services</li></Link>
                <Link to="works" spy={true} smooth={true} offset={-50} duration={100} className='nav'><li>Works</li></Link>
                <Link to="contact" spy={true} smooth={true} offset={100} duration={100} className='nav'><li>Contact</li></Link>
            </ul>
        </div>
    
    </div>
  )
}

export default Header