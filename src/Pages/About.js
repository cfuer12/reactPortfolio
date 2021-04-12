import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Image from "../components/Image/Image";
import Carl from "../pictures/carl.JPG";

function About() {
  return (
    <div>
      <Image backgroundImage="https://mdbootstrap.com/img/Photos/Others/images/91.jpg">
        <Container >
          <h1 className="top">About</h1>
        </Container>
        <Container id="aboutbox">
          <img src={Carl} className="me img-fluid float-left" alt="carl"></img>
          <div className="p-3 mb-2 bg-white">
            <p>
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
            </p>
          </div>
        </Container>
      </Image>
    </div>
  );
}

export default About;
