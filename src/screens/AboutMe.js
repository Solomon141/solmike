import React from "react";
import { FaHeart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

// import profileImage from "./sp.PNG"

function AboutMe() {
  return (
    <div class="section one" id="aboutme" style={{ paddingTop: "8vh" }}>
      <div class="row" style={{ paddingTop: 15, paddingBottom: 15 }}>
        <div class="col-sm-4">
          {/* image */}
          <img style={{ width: "100%" }} src="https://avatars.githubusercontent.com/u/31657654?v=4" alt="Profile Image" />
        </div>
        <div class="col-sm-5">
          <div style={{ paddingBottom: 20 }}>
            <h3 style={{ textTransform: 'uppercase' }} class="name">Solomon Gebremichael</h3>
            <h5 class="jobposition"> Senior software developer </h5>
          </div>
          <p style={{ fontSize: 25, display: 'flex', columnGap: 10 }}>
            <FaHeart color="orange" /> <FaHeart color="orange" /> <FaHeart color="orange" />
          </p>
          <p>Javascript, Python</p>
          <p>Nodejs, React, React Native</p>
          <p>Django, Django Rest Framework</p>
        </div>

        <div class="col-sm-3">
          <div>
            Tools i used Daily
          </div>
          <div>
            <Badge bg="secondary">Trello</Badge>
          </div>
          <div>
            <Badge bg="primary">Github</Badge>
          </div>
          <div>
            <Badge bg="secondary">Google Drive</Badge>
          </div>
          <div>
            <Badge bg="primary">Github</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
