const router = require("express").Router();
const todoRoutes = require("./todo");
const placesRoutes = require("./places");

// todo routes
router.use("/todo", todoRoutes);
router.use("/places", placesRoutes);

module.exports = router;
