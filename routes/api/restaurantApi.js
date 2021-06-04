const router = require("express").Router();
const restaurantController = require("../../controllers/fourSquareAPI");

router.route("/")
    .get(restaurantController.findAllrestaurants)

module.exports = router;