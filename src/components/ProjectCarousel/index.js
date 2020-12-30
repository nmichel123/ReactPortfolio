import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CoolPlaces from '../../assets/coolplaces.png';
import Downloader from '../../assets/downloader.png';

function Projects () {
    return (
<Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src={CoolPlaces}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Downloader}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
)}

export default Projects
