const router = require("express").Router();
const placesController = require("../../controllers/placesController");

router.route("/")
    .get(placesController.findAll)
    .post(placesController.create);


module.exports = router;

