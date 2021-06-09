const router = require("express").Router();
const restaurantController = require("../../controllers/fourSquareAPI");

router.route("/").get((req, res) => {
  // db.find().then(data => console.log(data))
});


router.route("/").get(restaurantController.findAllrestaurants);


module.exports = router;
