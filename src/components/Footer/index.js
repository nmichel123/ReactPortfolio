import React from 'react';
import  './style.css';

function Footer () {
    return (
<div className="footie">
    <nav class="navbar fixed-bottom ">
        <div class = "container">
        <p id = "foot" class="navbar-center">© 2020 Nico Michel             <a href= "https://github.com/nmichel123" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>     <a href= "https://www.linkedin.com/in/nico-michel-27719b1a9/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>    <a href="mailto:nicomichel2020@gmail.com"><i class="fas fa-envelope"></i></a></p>       
        </div>
    </nav>
</div>
    )
}

export default Footer; 