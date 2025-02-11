import React from 'react';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Project from './Components/Project/Project';


const App = () => {
  return (

<Router>
  <Navbar/>
  <Hero/>
  <About/>
  <Project/>
  </Router>

  );
}

export default App;