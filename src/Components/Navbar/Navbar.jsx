import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Portfolio</h1>
      </Link>
      <div className='nav'>
        <ul className='nav-menu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;