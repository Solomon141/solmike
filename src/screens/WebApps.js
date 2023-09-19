import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';
// images 
import Login from "./Images/PHP/Eval/Login.PNG"
import Home from "./Images/PHP/Eval/Home.PNG"
import search from "./Images/PHP/Eval/search.PNG"
import selectedPharm from "./Images/PHP/Eval/selectedPharm.PNG"
import eachProduct from "./Images/PHP/Eval/eachProduct.PNG"

function WebApps() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (

    <div className="row">
      <div className="col-sm-6">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            
            <ExampleCarouselImage text="First slide" />

            <Carousel.Caption>

              <h3>First slide label</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <p> This is the first react native app i have build  </p>
      </div>
      <div className="col-sm-6">

      </div>
    </div>
  )
}

export default WebApps
