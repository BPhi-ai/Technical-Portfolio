import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Any questions? Get in touch!</h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk.</h1>
                <p> 
                    I'm currently available to work on new projects, if there
                    is anything that you want me to work on, you can contact me
                    anytime.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail" /> <p>briantpham06@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call" /> <p> (626) 682-2751</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location" /> <p>Los Angeles, CA USA</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name:'/>
                <label htmlFor="">Your Email</label>
                <input type="email" name='email' placeholder='Enter your email:'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message:'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact