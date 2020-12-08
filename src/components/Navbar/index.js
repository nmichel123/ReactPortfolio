import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link                 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Projects</Link>
            </li>
            <li className="nav-item">
              <Link                 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              About</Link>
            </li>
            <li className="nav-item">
              <Link                 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Contact</Link>
              </li>
          </ul>  
        </div>
      </nav>
    )
  }
}

export default Navbar; 