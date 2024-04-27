import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div className="about">
        <div id='about' className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="profile" />
            </div>
            <div className="about-right">
                <div className="about-paragraph">
                    <p>
                        I am an experienced Frontend Web Developer, with years of 
                        experience in the field. Throughout my career, I have had 
                        the privilege of collaborating with many organizations,
                        contributing to their success and growth.
                    </p>
                    <p>
                        As previously said before, I have worked with many organizations
                        throughout my college life and outside of college! An example being from
                        my work on a migration UI/UX project for the Mozilla Foundation, where I worked
                        with a team to implement a migrator modal into Firefox, where it can support Chromium-based
                        browsers for migration into Firefox. Another example would be from my time in the
                        Association For Computing Machinery (ACM) student chapter at California State University,
                        Los Angeles, where I was in charge of developing ACM's main website, in addition of 
                        announcing all ACM related events to 300+ active ACM members each semester! These are some
                        of the many organizations that I have worked with, and is actively looking for more opportunities
                        that are heading my way.
                    </p>
                    <p>
                        My passion for Frontend Web Development is not only reflected in
                        my previous experience, but in the dedication and spirit that
                        I bring to each project that makes society more advanced and more prepared 
                        for the future.
                    </p>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>3+</h1>
                        <p>Years of experience</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>15+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>50+</h1>
                        <p>Cups of coffee drank!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About