import React, { Component } from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

document.body.style = 'background: gray;';

class About extends Component {
    state = {};
    render() {
    return (
    <div className="about-section" id="about">
        <Card />
        <Footer className = "footer"/>
    </div>
    )
}};

export default About; 