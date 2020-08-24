import React from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

document.body.style = 'background: gray;';

function About () {
    return (
    <div>
        <Navbar />
        <Card />
        <Footer className = "footer"/>
    </div>
    )
}

export default About; 