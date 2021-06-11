import axios from "axios";

export default {
  getRestaurants: function (searchTerm) {
    return axios.get("/api/restaurants/" + searchTerm);
  },
  // starting location for user
  getVenues: function () {
    return axios.get("/api/suggestions");
  },
};
