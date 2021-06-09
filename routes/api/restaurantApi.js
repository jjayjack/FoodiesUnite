const router = require("express").Router();
const restaurantController = require("../../controllers/fourSquareAPI");

router.route("/:search").get(restaurantController.findRestaurants)

module.exports = router;
