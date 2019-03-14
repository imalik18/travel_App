const router = require("express").Router();
const placesController = require("../../controllers/placesController")

// places routes
router.route("/")
    .get(placesController.findAll)
    .post(placesController.create)
    .delete(placesController.remove);

module.exports = router;