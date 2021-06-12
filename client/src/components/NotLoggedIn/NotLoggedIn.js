import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import holder1 from "../holders/img_3852.jpg";
import holder2 from "../holders/img_3853.jpg";
import holder3 from "../holders/img_3856.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import holder4 from "../holders/img_3857.jpg"
import holder5 from "../holders/img_3858.jpg"
import holder6 from "../holders/img_3859.jpg"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"




const NotLoggedIn = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
  <Container fluid>
    <Row className="display" style={{ padding: "50px", justifyContent: "center", display: "flex" }}>
        <Carousel
          controls false
          activeIndex={index}
          onSelect={handleSelect}
          className="city"
          touch="false"
          wrap true
          interval={5000}
        >
          <Carousel.Item >
            <Image
              className="w-100 "
              src="https://fastly.4sqi.net/img/general/500x500/HD3pKG3Zw1Qr6SMCOOb3kT-EtekJoKglKxnMTZ_X6T4.jpg"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item >
            <Image
              className="w-100"
              src="https://fastly.4sqi.net/img/general/500x500/339236402_EVgKLmqfuN6MIj4adpA1ca99aNy6Ulh-TgLUpz36mLk.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <Image
              className=" w-100"
              src="https://fastly.4sqi.net/img/general/500x500/n3J0LDoMxTFnhl20q4jgbS4Nr7kN-8stdelRZYJFkCk.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    </Row>
    <Row className="paragraph">
          Welcome to our application Eats Around Me.
            Chicago has some of the best food across the nation because of the wide variety of individuals who call this city home and share their love through their food.
            We are a Chicago-based group that is interested in food spots that are near us.
            Using FourSquare's API we created this app to give us food recommendations based on key words typed into our search bar.
            To begin, sign up and search. 
    </Row>
  </Container>
    </>
  )
}

export default NotLoggedIn
