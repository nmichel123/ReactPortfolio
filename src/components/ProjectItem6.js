import React from 'react';
import Budget from '../assets/offlineBudget.png';

function ProjectItem6 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {Budget} alt = "Downloader"/>
  <div class="card-img-overlay">
    <h4 class="card-title">Offline Budget Tracker</h4>
    <br></br>
    <br></br>
    <p class="card-text">A simple budget tracker that allows a user to make updates while offline!</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
    </div>
    )
}

export default ProjectItem6; 