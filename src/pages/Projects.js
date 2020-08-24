import React from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ProjectItem1 from '../components/ProjectItem1';
import ProjectItem2 from '../components/ProjectItem2';

function Projects () {
    return (
    <div>
    <Navbar />
    <br></br>
    <ProjectItem1 />
    <br></br>
    <ProjectItem2 />
    <Footer />
    </div>
    )
}

export default Projects; 