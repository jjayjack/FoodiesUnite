const router = require("express").Router();
const restaurantRoutes = require("./restaurantApi");
const userRoutes = require("./userAPI");

router.use("/restaurants", restaurantRoutes);
router.use("/users", userRoutes);

module.exports = router;
