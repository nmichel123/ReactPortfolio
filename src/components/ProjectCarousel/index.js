import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Downloader from '../../assets/downloader.png';
import GBSearch from '../../assets/gbsearch.png'
import './style.css'

function Projects () {
    return (
<Carousel>
<Carousel.Item>
  <div className="gradient">
    <img
      className="d-block w-100"
      src={GBSearch}
      alt="First slide"
    />
  </div>
  <div className="textBack">
    <Carousel.Caption>
      <h3>Google Books Search</h3>
      <p>This application is a search engine that works with the Google Books API in order to return all relevant books based on the title. With backend created with MongoDB and Express, the user can save  and delete books to a list and look through them after refreshing or closing the page.</p>
      <p><a href= "https://github.com/nmichel123/GoogleBooks-Search" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x"></i></a>                   <a href= "https://frozen-peak-99479.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i class="fas fa-link fa-2x"></i></a></p>
      <p>Technologies Used: <i class="fab fa-html5 fa-lg"></i>  <i class="fab fa-css3 fa-lg"></i>  <i class="fab fa-js-square fa-lg"></i> <i class="fab fa-react fa-lg"></i> <i class="fab fa-node fa-lg"></i></p>
    </Carousel.Caption>
    </div>
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