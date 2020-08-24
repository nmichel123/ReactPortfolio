import React from 'react';
import EmpMan from '../assets/EmployeeManSystem.png';

function ProjectItem5 () {
    return (
    <div class="card bg-dark text-white">
  <img class="card-img" src = {EmpMan} alt = "Downloader"/>
  <div class="card-img-overlay">
    <h4 class="card-title">Employee Management System</h4>
    <br></br>
    <br></br>
    <p class="card-text">A command line application that allows a user to view, add and update employees and their roles in a MySQL database!</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
    </div>
    )
}

export default ProjectItem5; 