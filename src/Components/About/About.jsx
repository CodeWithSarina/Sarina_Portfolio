import React from 'react';
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.png";

const About = () => {
  return (
    <div className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className='about-section'>
        {/* Right Section: Profile Image */}
        <div className='about-left'>
        <img src={profile} alt="Profile" />
        </div>

        {/* Left Section: Description */}
        <div className='about-right'>
          <div className='about-para'>
            <p>Hi, I am Sarina, a passionate Full-Stack Developer.</p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr /></div> 
            <div className='about-skill'><p>JavaScript</p><hr /></div>
            <div className='about-skill'><p>React</p><hr /></div>
            <div className='about-skill'><p>Node.js</p><hr /></div>
            <div className='about-skill'><p>Express</p><hr /></div>
            <div className='about-skill'><p>MongoDB</p><hr /></div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>1</h1>
          <p>Year of Experience</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>10</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
