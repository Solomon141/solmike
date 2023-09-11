import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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

      {/* React Native Start  */}
      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title style={HeadingOne}>React Native - Part 1</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React Native </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <div style={cardFooterLinks}>
              <div> <a href="https://github.com/">Github link</a> </div>
              <div> <a href="https://github.com/">React Native Part 1</a> </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>React Native - Part 2</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React Native </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>React Native - Part 3</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React Native </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>React Native - Part 4</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React Native </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      {/* React Native End  */}

      {/* React JS Start  */}
      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>React JS - Part 1</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React JS </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>React JS - Part 2</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React JS </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>React JS - Part 3</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React JS </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>React JS - Part 4</Card.Title>
            <Card.Text>
              <ul>
                <li> Creating React JS </li>
                <li> Recommended folder structure </li>
                <li> Configuring Redux Toolkit </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      {/* React JS End  */}


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
              <div> <a href="https://github.com/">Github link</a> </div>
              <div> <a href="https://github.com/"> Hosting Static Website </a> </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-4" style={{ marginTop: "2vh" }}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title style={HeadingOne}> How to Work With Github </Card.Title>
            <Card.Text>
              <ul>
                <li> Creating Github Account </li>
                <li> Giving access to Git </li>
              
              </ul>
            </Card.Text>
            <div style={cardFooterLinks}>
              <div> <a href="https://github.com/">Github link</a> </div>
              <div> <a href="https://github.com/"> How to Work With Github </a> </div>
            </div>
          </Card.Body>
        </Card>
      </div>


    </div>
  );
}

export default Blogs;
