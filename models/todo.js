const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
	activity: { type: String }
});

module.exports = Todo = mongoose.model("Todo", todoSchema);
