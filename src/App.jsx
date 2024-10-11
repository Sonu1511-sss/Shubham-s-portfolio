import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/Pages/About';
import Experience from './component/Pages/Experience';
import Portfolio from './component/Pages/Portfolio';
import Servise from './component/Pages/Servise';
import Contact from './component/Pages/Contact';

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/Experience" element={<Experience/>} />
     <Route path="/Portfolio" element={<Portfolio/>} />
     <Route path="/Servise" element={<Servise/>} />
     <Route path="/contact" element={<Contact/>} />


     </Routes>

     <Footer/>
    </div>
  )
}

export default App