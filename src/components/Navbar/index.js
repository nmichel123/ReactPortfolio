import React, { Component } from "react";
import logo from "../../assets/logo.png";

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
            <li className="nav-item">Projects</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>  
        </div>
      </nav>
    )
  }
}

export default Navbar; 