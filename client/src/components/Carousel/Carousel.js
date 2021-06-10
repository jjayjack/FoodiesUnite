import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import holder1 from "../holders/IMG_3827.jpg";
import holder2 from "../holders/IMG_3828.jpg";
import holder3 from "../holders/IMG_3829.jpg";
import "./carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item img-fluid>
          <Image className="d-block w-100" src={holder1} alt="First slide" />
          <Carousel.Caption>
            <h3>Cucumber Drink Experience</h3>
            <p>YUM YUM YUM YUM</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item img-fluid>
          <Image className="d-block w-100" src={holder2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Lettuce and Things</h3>
            <p>DELICIOUS DELICIOUS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item img-fluid>
          <img className="d-block w-100" src={holder3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Chickpea Experimental</h3>
            <p>TASTY TREATS TASTY TREATS TASTY TREATS</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

// render(<ControlledCarousel />);
export default ControlledCarousel;
