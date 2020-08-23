import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
    <div>
<Route exact path = "/" component = {About} />
<Route exact path = "/contact" component = {Contact} />
<Route exact path = "/projects" component = {Projects} />
    </div>
    </Router>
  )
}

export default App;
