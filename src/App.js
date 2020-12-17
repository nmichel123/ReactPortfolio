import React, {Component} from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";
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
        <Projects />
      <div className="aboutSect">
        <Section 
          title="About"
          dark={false}
          id="abt"/>
      </div>
        <About />
      <div className="contactSect">
        <Section
          title="Contact"
          dark={false}
          id="abt"/>
      </div>
        <Contact />
      </div>
    )
  }
}

export default App;
