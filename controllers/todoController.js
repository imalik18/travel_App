const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		console.log(req.query);
		db.User.find(req.query)
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.User.findById(req.params.id)
			.populate("todo")
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	create: function(req, res) {
		db.Todo.create(req.body)
			.then(dbTodo => {
				// console.log(dbTodo);
				// res.json(dbTodo);
				// console.log(req.params.id);
				return db.User.findByIdAndUpdate(
					req.params.id,
					{ $push: { todo: dbTodo._id } },
					{ new: true }
				);
			})
			.then(dbUser => {
				res.json(dbUser);
			})
			.catch(err => res.status(422).json(err));
	}
};
