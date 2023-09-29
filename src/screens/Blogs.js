import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Blogs() {
  const HeadingOne = {
    fontSize: "30px",
    fontWeight: "bold",
    fontStyle: "italic",
  };

  const cardFooterLinks = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="row">

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title style={HeadingOne}> Hosting Static Website</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating HTML Website </li>
                <li> How to Fork from Github pages </li>
                <li> Hosting on Github pages </li>
                <li> Shared Hosting </li>
              </ul>
            </Card.Text>
            <div style={cardFooterLinks}>
              <div>
                
                <a href="https://github.com/">Github link</a>
              </div>
              <div>
                
                <a href="https://github.com/"> Hosting Static Website </a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title style={HeadingOne}>
              Mobile app with React Native
            </Card.Title>
            <Card.Text>
              <p>This Project is a mobile app boilerplate developed using react native expo, including packages like</p>
              <ul>
                <li> Redux Toolkit for state management </li>
                <li> Formik and Yup for schema validation </li>
                <li> inext and i18next for language translation </li>
                <li> System driven Dark/Default mode </li>
                <li> Custom Drawer Navigation and others </li>
              </ul>
            </Card.Text>
            <div style={cardFooterLinks}>
              <div>
                <a href="https://github.com/Solomon141/BoilerplateJavascriptReactNativeReduxToolkit">Github link</a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Blogs;
