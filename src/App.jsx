import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div> 
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App