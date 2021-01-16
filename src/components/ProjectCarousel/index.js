import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NoteTaker from '../../assets/notetaker.png';
import GBSearch from '../../assets/gbsearch.png';
import WeatherDash from '../../assets/weatherdash.png';
import Workday from "../../assets/workday.png";
import EmpSearch from "../../assets/employeedir.png";
import './style.css';

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
    <Carousel.Caption>
    <div className="textBack">
      <h3>Google Books Search</h3>
      <p>A search engine that works with the Google Books API in order to return all relevant books based on the title. Backend functionality created with Atlas/MongoDB and Express allows the user to save and delete books to a persisting list.</p>
      <p><a href= "https://github.com/nmichel123/GoogleBooks-Search" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x"></i></a>                   <a href= "https://frozen-peak-99479.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i class="fas fa-link fa-2x"></i></a></p>
      <p>Technologies Used: <i class="fab fa-html5 fa-lg"></i>  <i class="fab fa-css3 fa-lg"></i>  <i class="fab fa-js-square fa-lg"></i> <i class="fab fa-react fa-lg"></i> <i class="fab fa-node fa-lg"></i></p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="gradient">
    <img
      className="d-block w-100"
      src={NoteTaker}
      alt="Second slide"
    />
    </div>
    <Carousel.Caption>
    <div className="textBack">
      <h3>Note Taker</h3>
      <p>A note taking application that saves notes on an Express server. The user is able to save a note with a title and body and view them in the stored notes section. The notes persist after the page is refreshed or closed.</p>
      <p><a href= "https://github.com/nmichel123/Note-Taker" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x"></i></a>                   <a href= "https://calm-citadel-96049.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i class="fas fa-link fa-2x"></i></a></p>
      <p>Technologies Used: <i class="fab fa-html5 fa-lg"></i>  <i class="fab fa-css3 fa-lg"></i>  <i class="fab fa-js-square fa-lg"></i> <i class="fab fa-react fa-lg"></i> <i class="fab fa-node fa-lg"></i></p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="gradient">
    <img
      className="d-block w-100"
      src={EmpSearch}
      alt="Third slide"
    />
    </div>
    <Carousel.Caption>
    <div className="textBack">
      <h3>Employee Directory</h3>
      <p>An employee directory built with React JS that allows a user to search for employees by first name and sort each column.</p>
      <p><a href= "https://github.com/nmichel123/Employee-Directory" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x"></i></a>                   <a href= "https://arcane-scrubland-39587.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i class="fas fa-link fa-2x"></i></a></p>
      <p>Technologies Used: <i class="fab fa-html5 fa-lg"></i>  <i class="fab fa-css3 fa-lg"></i> <i class="fab fa-js-square fa-lg"></i> <i class="fab fa-react fa-lg"></i></p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="gradient">
    <img
      className="d-block w-100"
      src={Workday}
      alt="Fourth slide"
    />
    </div>
    <Carousel.Caption>
    <div className="textBack">
      <h3>Workday Planner</h3>
      <p>This is a work day scheduler made to keep track of hourly tasks in local storage that will persist after the page is closed or refreshed. The colors of each hour change based on the time of day to indicate if the hour is passed, current or in the future.</p>
      <p><a href= "https://github.com/nmichel123/Work-Day-Planner" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x"></i></a>                   <a href= "https://nmichel123.github.io/Work-Day-Planner/" rel="noopener noreferrer" target="_blank"><i class="fas fa-link fa-2x"></i></a></p>
      <p>Technologies Used: <i class="fab fa-html5 fa-lg"></i>  <i class="fab fa-css3 fa-lg"></i>  <i class="fab fa-js-square fa-lg"></i></p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="gradient">
    <img
      className="d-block w-100"
      src={WeatherDash}
      alt="Fifth slide"
    />
    </div>
    <Carousel.Caption>
    <div className="textBack">
      <h3>Weather Dashboard</h3>
      <p>A weather dashboard that displays the weather of any given city, with information drawn from the OpenWeather API. The search history is logged in local storage and a link to the weather, as well as a five day forecast in that city is created underneath the search bar.</p>
      <p><a href= "https://github.com/nmichel123/Weather-Dashboard" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x"></i></a>                   <a href= "https://nmichel123.github.io/Weather-Dashboard/" rel="noopener noreferrer" target="_blank"><i class="fas fa-link fa-2x"></i></a></p>
      <p>Technologies Used: <i class="fab fa-html5 fa-lg"></i>  <i class="fab fa-js-square fa-lg"></i></p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)}

export default Projects