const db = require("../models");

module.exports = {
  findAllrestaurants: (req, res) => {
    db.Restaurant.find({}).then((restaurantData) => res.json(restaurantData));
  },
};
