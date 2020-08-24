import React from 'react';
import ReadMe from '../assets/ReadMeGen.png';

function ProjectItem4 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {ReadMe} alt = "Downloader"/>
  <div class="card-img-overlay">
    <h4 class="card-title">README Generator</h4>
    <br></br>
    <br></br>
    <p class="card-text">A command line application that prompts for and receives user input and renders a README with accurate section headings!</p>
    <a href="https://github.com/nmichel123/README-Generator" rel="noopener noreferrer" target="_blank"> <p class="card-text">GitHub Repository</p></a>
  </div>
    </div>
    )
}

export default ProjectItem4; 