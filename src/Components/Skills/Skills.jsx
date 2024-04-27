import React from 'react'
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Skills_Data from '../../assets/skills_data';

const Skills = () => {
  return (
    <div id='skill' className="skills">
        <div className="skills-title">
            <h1> My Skills</h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className="skills-container">
            {Skills_Data.map((skill, index) => {
                return <div key={index} className="skills-format">
                    <h3>{skill.s_no}</h3>
                    <h2>{skill.s_name}</h2>
                    <p>{skill.s_desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Skills