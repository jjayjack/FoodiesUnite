import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import holder1 from "../holders/group1.PNG";
import holder2 from "../holders/group2.jpg";
import holder3 from "../holders/group3.jpg";

function About() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>

      <div className="jumbo">
        <h1>Team Members of Eats Around Me</h1>
        <p>A Great Cast of Food Lovers</p>
        <a href="/search" className="searchLink">{"search for good food"}</a>

      </div>

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

        </Carousel.Item>
        <Carousel.Item >
          <Image
            className="w-100"
            src={holder2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item >
          <Image
            className=" w-100"
            src={holder3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>

      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">React Portfolio</th>
              <th scope="col">GitHub Repository</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jocelyn</td>
              <td>Jayjack</td>
              <td>
                <a href="https://jjayjack.github.io/React_Portfolio/#/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/jjayjack"}>{"GitHub Account"}</a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Hayden</td>
              <td>Beck</td>
              <td>
                <a href="https://portfolioredeux.herokuapp.com">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/haydenabeck"}>
                  {"GitHub Account"}
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Justin</td>
              <td>Lindsey</td>
              <td>
                <a href="https://justicegtr.github.io/PortfolioWebsiteReact/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/JusticeGTR"}>{"GitHub Account"}</a>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>JJ</td>
              <td>Espinoza</td>
              <td>
                <a href="https://frozen-harbor-45051.herokuapp.com/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={"https://github.com/0117Javi"}>{"GitHub Account"}</a>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jason</td>
              <td>Carrazco</td>
              <td>
                <a href="https://jac61090.github.io/midnight-react-profile/#/">
                  {"Click for Profile"}
                </a>
              </td>
              <td>
                <a href={""}>{"GitHub Account"}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default About;
