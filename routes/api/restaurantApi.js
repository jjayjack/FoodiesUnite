const router = require("express").Router();
const restaurantController = require("../../controllers/fourSquareAPI");

router.router("/")
    .get(restaurantController.findAllrestaurants)

module.exports = router;