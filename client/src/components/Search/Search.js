import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const changeHandler = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    API.getRestaurants(searchTerm).then(function (data) {
      console.log("Datttaa form backend", data);
      props.setVenues(data.data);
    });
  };
  console.log("Searchterm", searchTerm);

  return (
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
  );
};

export default Search;
