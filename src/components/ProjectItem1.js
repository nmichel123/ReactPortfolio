import React from 'react';
import CoolPlaces from '../assets/coolplaces.png'

function ProjectItem1 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {CoolPlaces} alt = "Cool Places"/>
  <div class="card-img-overlay">
    <h3 class="card-title">Cool Places</h3>
    <p class="card-text">A website where people can log cool places on a map and leave reviews!</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
    </div>
    )
}

export default ProjectItem1; 