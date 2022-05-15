import React from 'react';

function Portfolio() {
    return (
      <section className= "my-10">
        <div id="portfolio">
          <div className="highlight">
              <h1>Portfolio</h1>
          </div>
            <div id="img2" class="img-container">
                <a href="https://brandonpeterson6.github.io/project-setup-tool/">Project Setup Tool</a>
                <p>An app used to help groups better setup and plan projects</p>
            </div>
            <div id="img3" class="img-container">
                <a href="https://github.com/Brandonpeterson6/job-werk.git">Job Werk</a>
                <p>An app that allows users to view and bid on potential work</p>
            </div>
            <div id="img4" class="img-container">
              <a href="https://brandonpeterson6.github.io/weather-dashboard/">Weather App</a>
              <p>A weather forecast site </p>
            </div>
            <div id="img5" class="img-container">
              <a href="https://note-taker-bp.herokuapp.com/">Note Taker</a>
              <p>An app that allows you to take and delete notes </p>
            </div>
            <div id="img6" class="img-container">
              <a href="https://brandonpeterson6.github.io/Professional-Portfolio/">first Professional Portfolio</a>
              <p> An HTML and CSS portfolio </p>
            </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;