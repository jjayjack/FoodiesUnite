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
    <div d-flex style={{ padding: "50px", display:"flex",  justifyContent: "center", alignItems: "center"}}>

      <Carousel
     style={{maxWidth: "500px"}}
        venues={props.venues}
        activeIndex={index}
        onSelect={handleSelect}
        nextLabel=""
        prevLabel=""
      >
        {props.venues.length > 0 && props.venues[0].venue.photo &&
          <Carousel.Item img-fluid style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}} >
            <Image
              className="d-block w-100 "
              src={props.venues[0].venue.photo}
              alt="First slide"
            />
            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>{props.venues[0].venue.name}</h3>
              <p>{props.venues[0].venue.location.address}</p>
            </Carousel.Caption>
          </Carousel.Item>}
        {props.venues.length > 1 && props.venues[1].venue.photo &&
          <Carousel.Item img-fluid style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <Image
              className="d-block w-100"
              src={props.venues[1].venue.photo}
              alt="Second slide"
            />

            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>{props.venues[1].venue.name}</h3>
              <p>{props.venues[1].venue.location.address}</p>
            </Carousel.Caption>
          </Carousel.Item>
        }
        {props.venues.length > 2 && props.venues[2].venue.photo &&
          <Carousel.Item img-fluid style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <img
              className="d-block w-100"
              src={props.venues[2].venue.photo}
              alt="Third slide"
            />

            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>{props.venues[2].venue.name}</h3>
              <p>{props.venues[2].venue.location.address}</p>
            </Carousel.Caption>
          </Carousel.Item>
        }
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
