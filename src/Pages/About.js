import React from "react";

function About() {
  return (
    <div class="container" id="fullbox">
      <div class="row">
        <div class="col">
          <h1>About Me</h1>
          <img
            class="img-fluid float-left"
            src="./Assets/Images/carl.JPG"
            alt="carl"
            width="300"
            height="400"
          >
            <div class="p-3 mb-2 bg-white" id="indexText">
              A 26-year old full stack web-developer based out of Riverside
              California. Received a certificate in regards of the full stack
              web-developement program from the University of California,
              Riverside. I have studied and excelled in multiple coding
              languages:
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>nodeJS</li>
                <li>mySQL</li>
                <li>handlebars.js</li>
                <li>mongoDB</li>
                <li>express</li>
              </ul>
              Graduated from California State University, Los Angeles with a
              Bachelors degree in Environmental Geography and a Associates
              degree in Math and Sciences from Riverside City College, I am
              ready to challenge any tasks at hand. With a strong work ethic
              that I have displayed throughout past and present employers, I can
              present and resolve tasks that a employer needs with confidence.
            </div>
          </img>
        </div>
      </div>
    </div>
  );
}

export default About;