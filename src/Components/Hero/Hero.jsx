import React from "react";
import {Link} from 'react-router-dom';
import './Hero.css'
import Profile from '../../assets/images/profile.png';

const Hero = () => {
  return (
  
    <section className="hero-section">
      <div className="content">
        <h3 className="greeting">Hey, I'm Sarina</h3>
        <h1 className="title">Full Stack Developer</h1>
        <p className="description">
          Passionate about building responsive and 
          dynamic Web Application
        </p>
        <div className="button-container">
          <Link to="/projects">
            <button className="button">Projects</button>
          </Link>
          <Link to="/contact">
            <button className="button">Contact</button>
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img
        
        />
      </div>
    </section>
      );
    };

export default Hero;
