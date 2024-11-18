import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './Pages/About';
import Servise from './Pages/Servise';
import Experience from './Pages/Experience';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

const Home = () => {

  return (
    <>
        <>
          <Hero />
          <About />
          <Experience />
          <Servise />
          <Portfolio />
          <Contact />
        </>

    </>
  )
  };

export default Home;
