import React, { Component } from "react";
import logo from "../../assets/nlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css"


class Navbar extends Component {
  render() {
    return (
      <div className="navbar" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <div className="nav-black">
              <Link                 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Projects</Link>
              <Link                 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={170}
                duration={500}>
              About</Link>
              <Link                 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={170}
                duration={500}>
              Contact</Link>
              </div>
        </div>
      </div>
    )
  }
}

export default Navbar; 