import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import axios from "axios";
import Search from "../Search/Search";
import "./index.css";
import ControlledCarousel from "../Carousel/Carousel";

const Homepage = () => {
  const [location, setLocation] = useState("");
  const [venues, setVenues] = useState([]);

  // function getLocation() {
  //     navigator.geolocation.getCurrentPosition(res => {
  //         console.log(res);
  //         setLocation(response.coords.position.latitude+","+response.coords.position.longitude)

  //     }).then(getVenues("taco"))
  // }

  // useEffect(() => {
  //     getAPI();
  //     // getLocation();

  // }, [])

  console.log("Venue state!!!", venues);
  return (
    <div className="homepage">
      <h1>Connected!</h1>
      <Search setVenues={setVenues} />
      <ul>
        {venues.map((venue) => {
          // return <li key={venue.venue.name}>{venue.venue.name} Location: {venue.venue.location.address}</li>
          return <h1> {venue.venue.name}</h1>;
        })}
      </ul>
      <ControlledCarousel venues={venues} />
    </div>
  );
};

export default Homepage;
