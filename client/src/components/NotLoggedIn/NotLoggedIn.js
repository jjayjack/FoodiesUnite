import React, { useState, useEffect } from "react";
import "./style.css";
// import holder1 from "../holders/img_3852.jpg";
// import holder2 from "../holders/img_3853.jpg";
// import holder3 from "../holders/img_3856.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
// import holder4 from "../holders/img_3857.jpg"
// import holder5 from "../holders/img_3858.jpg"
// import holder6 from "../holders/img_3859.jpg"
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
          nextLabel=""
          prevLabel=""
          activeIndex={index}
          onSelect={handleSelect}
          className="city"
          interval={3000}
        >
          <Carousel.Item style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <Image
              className="w-100 "
              src="https://fastly.4sqi.net/img/general/500x500/28121108_DCZq4CWoo3Ik7Cj2dZOXq9VTNeNNJpozkITXsM9OWSc.jpg"
              alt="Au Cheval"
            />
            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>Au Cheval</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <Image
              className="w-100"
              src="https://fastly.4sqi.net/img/general/500x500/339236402_EVgKLmqfuN6MIj4adpA1ca99aNy6Ulh-TgLUpz36mLk.jpg"
              alt="Coalfire"
            />
            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>Coalfire</h3>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <Image
              className="w-100"
              src="https://fastly.4sqi.net/img/general/500x500/n3J0LDoMxTFnhl20q4jgbS4Nr7kN-8stdelRZYJFkCk.jpg"
              alt="Hoosier Mama"
            />
            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>Hoosier Mama</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <Image
              className="w-100"
              src="https://fastly.4sqi.net/img/general/500x500/1517802_juj4olP_KuADChnMGxmgvCKPXr5x-Q2wWklgIdSPsNQ.jpg"
              alt="Paco's Tacos"
            />
            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>Big Star</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <Image
              className="w-100"
              src="https://fastly.4sqi.net/img/general/500x500/INZO4XFIPA54S4EUXWKSO2DJD0RHV4POJ3DNV1BKUI5YGX4F.jpg"
              alt="Avec"
            />
            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>Avec</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{border:"5px solid rgb(255, 190, 104)", borderRadius: "5px"}}>
            <Image
              className="w-100"
              src="https://fastly.4sqi.net/img/general/500x500/349328_YhpWPJ27RkE952xM-TEyh486DqLQ6LCGFK2-ViFsg0k.jpg"
              alt="Lost Larson Bakery"
            />
            <Carousel.Caption style={{ backgroundColor:"rgba(255,190,104,0.7)", color:"black"}}>
              <h3>Lost Larson Bakery</h3>
            </Carousel.Caption>
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
