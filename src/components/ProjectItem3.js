import React from 'react';
import EmpDir from '../assets/employeedir.png';

function ProjectItem3 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {EmpDir} alt = "Downloader"/>
  <div class="card-img-overlay">
    <h4 class="card-title">Employee Directory</h4>
    <br/>
    <br/>
    <br/>
    <br/>
    <p class="card-text">A react built table that allows for sorting of all categories and searching employees by first name!</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
    </div>
    )
}

export default ProjectItem3; 