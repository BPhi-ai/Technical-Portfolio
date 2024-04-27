import React from 'react'
import './Header.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
    <div id='home' className='header'>
        <img src={profile_img} alt="profile" />
        <h1>
            <span>I'm Brian Pham,</span> a Frontend Web Developer 
            based in the United States.
        </h1>
        <p>
            I am from California, with several years of 
            experience in the field.
        </p>
        <div className="header-action">
            <div className="header-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact with me</AnchorLink></div>
            <div className="header-resume">Resume</div>
        </div>
    </div>
  )
}

export default Header;