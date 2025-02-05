import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Projects'
import Navbar from './Components/Navbar/Navbar';


const App = () => {
  return (
<Router>
  <Navbar/>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>

        

</Router>
  );
}

export default App;