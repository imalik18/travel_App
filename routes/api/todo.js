const router = require("express").Router();
const todoController = require("../../controllers/todoController");

router.route("/").get(todoController.findAll);

router
	.route("/:id")
	.get(todoController.populateTodo)
	.post(todoController.create)
	.delete(todoController.delete);

module.exports = router;
