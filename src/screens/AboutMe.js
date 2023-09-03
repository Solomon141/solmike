import React from "react";
import { FaHeart } from "react-icons/fa";

function AboutMe() {
  return (
    <div class="section one" id="aboutme" style={{ paddingTop: "12vh" }}>
      <div class="row">
        <div class="col-sm-4">
          <FaHeart />
        </div>
        <div class="col-sm-5">
          <div>
            <div class="name">Solomon Gebremichael</div>
            <div class="jobposition"> Senior software developer </div>
          </div>
          <p>Javascript</p>
          <p>Nodejs, React, React Native</p>
          <p>Python</p>
          <p>Django, Django Rest Framework</p>
        </div>

        <div class="col-sm-3">
          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
