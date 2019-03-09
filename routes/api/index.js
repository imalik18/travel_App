const router = require("express").Router();
const placesRoutes = require("./places");

// todo routes
router.use("/places", placesRoutes);

module.exports = router;