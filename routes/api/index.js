const router = require("express").Router();
const restaurantRoutes = require("./restaurantApi");

router.use("/restaurants", restaurantRoutes);