const router = require("express").Router();
const placesController = require("../../controllers/placesController")

// places routes
router.route("/")
    .get(placesController.findAll)

module.exports = router;