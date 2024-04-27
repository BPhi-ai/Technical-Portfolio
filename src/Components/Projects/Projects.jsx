import React from 'react'
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import projects_data from '../../assets/projects_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Projects = () => {
  return (
    <div id='project' className="projects">
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className="projects-container">
            {projects_data.map((project, index) => {
                return <img key={index} src={project.w_img} alt="project"/>
            })}
        </div>
        <div className="projects-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="arrow" />
        </div>
    </div>
  )
}

export default Projects