const router = require("express").Router();
const todoRoutes = require("./todo");

// todo routes
router.use("/todo", todoRoutes);

module.exports = router;
