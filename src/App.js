import React, {Component} from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";
import Navbar from './components/Navbar';

class App extends Component {
  render () {
    return(
      <div className="app">
        <Navbar />
        <Projects />
        <About />
        <Contact />
      </div>
    )
  }
}

export default App;
