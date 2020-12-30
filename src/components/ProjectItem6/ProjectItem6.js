import React from 'react';
import Budget from '../../assets/offlineBudget.png';

function ProjectItem6 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {Budget} style={{ width:'100%' }} alt = "Downloader"/>
  <div class="card-img-overlay">
    <h4 class="card-title">Offline Budget Tracker</h4>
    <br></br>
    <br></br>
    <p class="card-text">A simple budget tracker that allows a user to make updates while offline!</p>
    <a href="https://github.com/nmichel123/Budget-Tracker" rel="noopener noreferrer" target="_blank"> <p class="card-text">GitHub Repository</p></a>
    <a href="https://serene-retreat-85625.herokuapp.com/" rel="noopener noreferrer" target="_blank"> <p class="card-text">Deployed Website</p></a>
  </div>
    </div>
    )
}

export default ProjectItem6; 