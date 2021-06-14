import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [venueData, setVenueData] = useState([""]);
  const [show, setShow] = useState(true);
  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    API.getRestaurants(searchTerm).then(function (data) {
      setVenueData(data.data)
      props.setVenues(data.data);
      console.log("venueData: ", data.data)
    });
  };

  return (
    <>
    <div className="centersearch">
      <input
        className="inputstyle"
        onChange={changeHandler}
        type="text"
        placeholder="search quisine"
        name="searchInput"
        id="searchInput"
      />
      <button className="centerbar" onClick={handleClick}>
        Search
      </button>
      </div>
      <div className="result">

      {venueData.length === 0 && 
        <Alert className = "taco-alert" variant="light" onClose={() => setShow(false)}>
          <Alert.Heading>
            Oh no! 
          </Alert.Heading>
          <Image src ="https://media.tenor.com/images/02a9c083c37fba2c245582b9d77a5b7f/tenor.gif"/>
          <p>
            Search unable to find results, please try again
          </p>
          </Alert>}
          </div>
    </>
  );
};

export default Search;
