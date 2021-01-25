import React from 'react'; 
import Resume from '../../assets/resume.pdf'
import './style.css';

function Card () {
    return (
      <div className="aboutMe">
    <p class="card-text">Hello! I'm Nico Michel, a full stack web developer educated at the University of Texas at Austin. When I'm not coding, I like to play guitar, draw, or go for walks!
    <br/>
    <br/>
    I work to create fluid websites and applications that assist people's lives and workflows. I aim to leverage my coding skills to create mobile-first applications with solid front and back ends. With knowledge of various coding languages, database technologies,
    and prior knowledge of editing and art softwares, I will be able to bring a unique perspective that is sure to re-enforce and elevate any project I work on.
    </p>
    <a href={Resume} rel="noopener noreferrer" target="_blank" class="btn btn-primary">Resume      <i class="far fa-file"></i></a>
    <br />
    <br />
    </div>
    )
}

export default Card; 