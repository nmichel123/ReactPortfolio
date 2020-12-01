import React, { Component, useEffect } from 'react'; 
import { Link, animateScroll as scroll } from "react-scroll";
import '../Navbar/style.css'

class Navbar extends Component {
  listener = null;
  state = {
    nav:true
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
  return (
<div className={`Nav ${this.state.nav && 'Nav__black'}`}>
    <Link 
      activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >
      Projects  
      </Link>
      <Link 
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >
      About 
      </Link>
      <Link 
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >
      Contact
      </Link>
  </div>
)}
}; 

export default Navbar; 