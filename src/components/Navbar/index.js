import React, { Component } from "react";
import logo from "../../assets/nicoLogo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css"

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className="navbar" id="navbar">
        <div className="nav-content">
          <div className="nav-black">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
              <Link                 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}>
              Projects</Link>
              <Link                 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}>
              About</Link>
              <Link                 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
              Contact</Link>
              </div>
        </div>
      </div>
    )
  }
}

export default Navbar; 