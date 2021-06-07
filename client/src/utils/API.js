import axios from "axios";

export default {
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },
//   // Get Route for individual
//   getRestaurant: function(id) {
//     return axios.get("/api/restaurant/" + id);
//   },
//   // Post Route
//   saveRestaurant: function(bookData) {
//     return axios.post("/api/restaurant", bookData);
//   }
};
