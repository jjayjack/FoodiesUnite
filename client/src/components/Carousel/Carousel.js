import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log(props);
  return (
    <div style={{ padding: "50px" }}>
      <Carousel
        venues={props.venues}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item img-fluid>
          <Image
            className="d-block w-100 "
            src={props.venues[0].venue.photo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.venues[0].venue.name}</h3>
            <p>{props.venues[0].venue.location.address}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item img-fluid>
          <Image
            className="d-block w-100"
            src={props.venues[1].venue.photo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{props.venues[1].venue.name}</h3>
            <p>{props.venues[1].venue.location.address}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item img-fluid>
          <img
            className="d-block w-100"
            src={props.venues[2].venue.photo}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{props.venues[2].venue.name}</h3>
            <p>{props.venues[2].venue.location.address}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
