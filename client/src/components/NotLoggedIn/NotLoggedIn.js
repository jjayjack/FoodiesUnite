import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import holder1 from "../holders/img_3852.jpg";
import holder2 from "../holders/img_3853.jpg";
import holder3 from "../holders/img_3856.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";


const NotLoggedIn = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div style={{ padding: "50px", justifyContent: "center", display: "flex"}}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="city"
      >
        <Carousel.Item >
          <Image
            className="w-100 "
            src={holder1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Welcome to our application Eats Around Me.
              Chicago has some of the best food across the nation because of the wide variety of individuals who call this city home and share their love through their food.
              We our a Chicago-based group that was interested in food spots that were near us.
              Using FourSquare's API we created this app to give us food recommendations based on key words typed into our search bar.
              To begin, sign up and search.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <Image
            className="w-100"
            src={holder2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Daley Plaza</h3>
            <p>Welcome to our application Eats Around Me.
              Chicago has some of the best food across the nation because of the wide variety of individuals who call this city home and share their love through their food.
              We our a Chicago-based group that was interested in food spots that were near us.
              Using FourSquare's API we created this app to give us food recommendations based on key words typed into our search bar.
              To begin, sign up and search.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <Image
            className=" w-100"
            src={holder3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Chicago Skyline</h3>
            <p>Welcome to our application Eats Around Me.
              Chicago has some of the best food across the nation because of the wide variety of individuals who call this city home and share their love through their food.
              We our a Chicago-based group that was interested in food spots that were near us.
              Using FourSquare's API we created this app to give us food recommendations based on key words typed into our search bar.
              To begin, sign up and search.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default NotLoggedIn
