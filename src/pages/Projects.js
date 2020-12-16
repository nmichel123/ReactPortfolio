import React from 'react'; 
import Footer from '../components/Footer'
import ProjectItem1 from '../components/ProjectItem1';
import ProjectItem2 from '../components/ProjectItem2';
import ProjectItem3 from '../components/ProjectItem3';
import ProjectItem4 from '../components/ProjectItem4';
import ProjectItem5 from '../components/ProjectItem5';
import ProjectItem6 from '../components/ProjectItem6';

function Projects () {
    return (
    <div className="projects-section" id="projects">
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
    <br />
    <br />
    </div>
    )
}

export default Projects; 