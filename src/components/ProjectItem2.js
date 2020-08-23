import React from 'react';
import Downloader from '../assets/downloader.png';

function ProjectItem2 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {Downloader} alt = "Downloader"/>
  <div class="card-img-overlay">
    <h4 class="card-title">YouTube Concert Downloader</h4>
    <br></br>
    <br></br>
    <p class="card-text">A one stop shop for finding concert videos, cover art, and a method to download the videos shown!</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
    </div>
    )
}

export default ProjectItem2; 