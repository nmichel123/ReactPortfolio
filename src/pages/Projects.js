import React from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ProjectItem1 from '../components/ProjectItem1';
import ProjectItem2 from '../components/ProjectItem2';
import ProjectItem3 from '../components/ProjectItem3';
import ProjectItem4 from '../components/ProjectItem4';
import ProjectItem5 from '../components/ProjectItem5';
import ProjectItem6 from '../components/ProjectItem6';

function Projects () {
    return (
    <div>
    <Navbar />
    <br />
    <ProjectItem1 />
    <br />
    <ProjectItem2 />
    <br />
    <ProjectItem3 />
    <br />
    <ProjectItem4 />
    <br />
    <ProjectItem5 />
    <br />
    <ProjectItem6 />
    <Footer />
    </div>
    )
}

export default Projects; 