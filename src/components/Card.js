import React from 'react'; 
import Selfy from '../assets/selfy.JPG'
import Resume from '../assets/NicoMichelResume.pdf'
import '../styles/Card.css'

function Card () {
    return (
    <div id="me" class="card" >
  <img id="pic" class="card-img-top" src= {Selfy} alt="Nico's Face"/>
  <div class="card-body text-center">
    <p class="card-text">Nico Michel is a full stack web developer and artist. 
    Educated at the University of Texas at Austin with a BS in Radio-Television and Film as well as a certification
    from the UT Austin coding boot camp, he works to create fluid websites and applications that assist people's lives and workflows.
    <br/>
    <br/>
    I aim to leverage my coding skills to create mobile-first applications with solid front and back ends. With knowledge of various coding languages, database technologies,
    and prior knowledge of editing and art softwares, I will be able to bring a unique perspective that is sure to re-enforce and elevate any project I work on.
    </p>
    <a href={Resume} rel="noopener noreferrer" target="_blank" class="btn btn-dark">Link to Resume</a>
    <br />
    <br />
  </div>
    </div>
    )
}

export default Card; 