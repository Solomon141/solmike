import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";

import AboutMe from "./screens/AboutMe";
// import AboveNav from "./screens/AboveNav";
import Backends from "./screens/Backends";
import MobileApps from "./screens/MobileApps";
import WebApps from "./screens/WebApps";

// Bloggs
import Blogs from "./screens/Blogs";

function App() {
  const footerStyle = {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray",
    color: "white",
    padding: "6vh",
  };
  const socialStyle = {
    flex: 1,
    flexDirection: "row",
    color: "white",
    columnGap: "2vh",
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#aboutme">SOLOMIKE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#mobileapps">mobile</Nav.Link>
              <Nav.Link href="#webapps">web</Nav.Link>
              <Nav.Link href="#backends">backend</Nav.Link>
              <Nav.Link href="#blogs">blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
      <div id="aboutme">
        <AboutMe />
        </div>
        <div id="mobileapps">
          <MobileApps />
        </div>
        <div id="webapps">
          <WebApps />
        </div>
        <div id="backends">
          <Backends />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
      </Container>
      <div style={footerStyle} className="d-flex justify-content-center">
        <div style={socialStyle}>
          <FaFacebook size="4vh" />
          <FaTwitter size="4vh" />
          <FaTelegram size="4vh" />
        </div>
        <div>
          <FaPhone size="2vh" /> +251935811576
        </div>
      </div>
    </>
  );
}

export default App;
