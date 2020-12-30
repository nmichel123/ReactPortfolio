import React from 'react';
import EmpDir from '../../assets/employeedir.png';

function ProjectItem3 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {EmpDir} style={{ width:'100%' }} alt = "Downloader"/>
  <div class="card-img-overlay">
    <h4 class="card-title">Employee Directory</h4>
    <br/>
    <br/>
    <br/>
    <br/>
    <p class="card-text">A react built table that allows for sorting of all categories and searching employees by first name!</p>
    <a href="https://github.com/nmichel123/Employee-Directory" rel="noopener noreferrer" target="_blank"> <p class="card-text">GitHub Repository</p></a>
    <a href="https://arcane-scrubland-39587.herokuapp.com/" rel="noopener noreferrer" target="_blank"> <p class="card-text">Deployed Website</p></a>
  </div>
    </div>
    )
}

export default ProjectItem3; 