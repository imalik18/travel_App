const router = require("express").Router();
const todoController = require("../../controllers/todoController");

router.route("/").get(todoController.findAll);

router.route("/:id").get(todoController.findById);

module.exports = router;
