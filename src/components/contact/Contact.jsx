import React, { useRef } from 'react';
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x2l9jm8', 'Terence_Email_Temp_Id', form.current, {
        publicKey: 'nHhlasD8glUyXtoW0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };





  return (
    <div className="container contact">
        <div className="left">
            <form ref={form} className="contactWrapper" data-aos="zoom-out-right"
     data-aos-duration="1000"  onSubmit={sendEmail}>
                <div className="inputOneWrapper inputWrapper">
                  <input type="text" name="user_name" placeholder='Name' />
                  <input type="text" name="user_email"  placeholder='Email' />
                </div>
                <div className="inputTwoWrapper inputWrapper">
                    <input type="text" placeholder='Subject'  name='user_subject'/>
                </div>

                <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message here...'></textarea>

 <button className="fullbtn btn" type='submit' value="Send">Submit Message</button>
            </form>

        </div>
        <div className="right">
        <div className="textWrapper" data-aos="zoom-out-left"
     data-aos-duration="1000">
                <p className="title"> Contact Me</p>
                <h1 className="head"> Don't Hesitate To <br />Contact Me .</h1>
                <p className="desc">
                Whether you're a startup looking to make waves or an established business ready to take your online presence to the next level, I'm here to help bring your ideas to life. Let's connect, innovate, and create something extraordinary together.
                </p>
               
            </div>
        </div>

    </div>
  )
}

export default Contact