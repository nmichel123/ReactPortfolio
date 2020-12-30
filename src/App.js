import React, {Component} from 'react';
import './App.css';
import About from './pages/About';
import PCarousel from './components/ProjectCarousel'
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Section from './components/Section'

class App extends Component {
  render () {
    return(
      <div className="app">
        <Navbar />
      <div className="projectsSect">
        <Section
          title="Projects"
          dark={false}
          id="projects"/>
      </div>
        <PCarousel />
      <div className="aboutSect">
        <Section 
          title="About"
          dark={false}
          id="about"/>
      </div>
        <About />
      <div className="contactSect">
        <Section
          title="Contact"
          dark={false}
          id="contact"/>
      </div>
        <Contact />
      </div>
    )
  }
}

export default App;
