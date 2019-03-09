const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		console.log(req.query);
		db.locale.find(req.query)
			.then(dblocale => res.json(dblocale))
			.catch(err => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.locale.findById(req.params.id)
			.then(dblocale => res.json(dblocale))
			.catch(err => res.status(422).json(err));
	}
};