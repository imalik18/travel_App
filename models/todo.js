const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
	activity: { type: String }
});

const Todo = mongoose.model("Todo", todoSchema);
