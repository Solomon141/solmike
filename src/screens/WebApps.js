import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./components/ExampleCarouselImage";
// images
import Login from "./Images/PHP/Eval/Login.PNG";
import Home from "./Images/PHP/Eval/Home.PNG";
import search from "./Images/PHP/Eval/search.PNG";
import selectedPharm from "./Images/PHP/Eval/selectedPharm.PNG";
import eachProduct from "./Images/PHP/Eval/eachProduct.PNG";

function WebApps() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <ExampleCarouselImage imageSrc={Login} />
              <Carousel.Caption>
                <h3 style={{color: "orange"}}>Login Page</h3>
             
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage imageSrc={Home} />
              <Carousel.Caption>
                <h3> Promotor Home Page </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <ExampleCarouselImage imageSrc={search} />
              <Carousel.Caption>
                <h3> Search Customer Page</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <ExampleCarouselImage imageSrc={selectedPharm} />
              <Carousel.Caption>
                <h3> Select The Customer </h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <ExampleCarouselImage imageSrc={eachProduct} />
              <Carousel.Caption>
                <h3> Evaluate</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-4">
          <p> About The Project </p>
          <p>
            {" "}
            This system is developed to evaluate the purchase size and frequency
            of our customers and their target product of purchase.{" "}
          </p>
          <p> Active users: Marketing Department. </p>
          <p> How it works </p>
          <ul>
            <li> Promotors are Registered and activated </li>
            <li> Active Promotor logs in </li>
            <li> Promotor can search a customer in the database </li>
            <li>
              {" "}
              The customer will be evaluated per each product of a supplier on
              the following points
              <ol>
                <li>
                  {" "}
                  if customer has a sufficient information on the product{" "}
                </li>
                <li> if the product is flowing fast in the customer side </li>
                <li> What sales method is used </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <div class="row" style={{ height: 450, paddingBottom:50 }}>
        <iframe
          src="https://www.cpd.badregplc.com"
          title=" Website For the CPD"
        ></iframe>
      </div>

      <div class="row" style={{ height: 450, paddingBottom:50 }}>
        <iframe
          src="https://cpdlms.badregplc.com"
          title="cpd Learning Management System"
        ></iframe>
      </div>
    </>
  );
}

export default WebApps;
