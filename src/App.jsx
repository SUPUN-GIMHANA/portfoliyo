import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';


const App = () => {
  return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/" element={<Navbar/>} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>

  )
}

export default App
