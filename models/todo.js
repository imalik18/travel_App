const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
	title: { type: String },
	desc: { type: String }
});

module.exports = Todo = mongoose.model("Todo", todoSchema);
