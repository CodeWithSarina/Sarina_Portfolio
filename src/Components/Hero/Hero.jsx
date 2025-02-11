import React from 'react'
import './Hero.css';
import profile from '../../assets/profile.png';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile}/>
        <h1>I'm Sarina Timalsina</h1>
        <p> Aspiring FullStack developer,passionate about building dynamic and responsive web application</p>
      <div className='hero-action'> 
        <div className='hero-connect'>Contact Me</div>
       

      </div>
    </div>
  )
}

export default Hero
