import axios from "axios";


export default {
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },
  // starting location for user
  getVenues: function() {
    return axios.get("/api/suggestions")
  }
//   // Get Route for individual
//   getRestaurant: function(id) {
//     return axios.get("/api/restaurant/" + id);
//   },
//   // Post Route
//   saveRestaurant: function(bookData) {
//     return axios.post("/api/restaurant", bookData);
//   }
};
