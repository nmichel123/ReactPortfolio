import React from 'react';
import CoolPlaces from '../assets/coolplaces.png'

function ProjectItem1 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {CoolPlaces} alt = "Cool Places"/>
  <div class="card-img-overlay">
    <h3 class="card-title">Cool Places</h3>
    <p class="card-text">A website where people can log cool places on a map and leave reviews!</p>
    <a href="https://github.com/nmichel123/Project2" rel="noopener noreferrer" target="_blank"> <p class="card-text">GitHub Repository</p></a>
    <a href="https://floating-beach-29144.herokuapp.com/" rel="noopener noreferrer" target="_blank"> <p class="card-text">Deployed Website</p></a>
  </div>
    </div>
    )
}

export default ProjectItem1; 