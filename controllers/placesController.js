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
	},
	create: function(req,res) {
		console.log('in create locales')
		db.locale
			.create(req.body)
			.then(dblocale =>res.json(dblocale))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.locale
		 .findById({_id: req.params.id })
		 .then(dblocale => dblocale.remove())
		 .then(dblocale => res.json(dblocale))
		 .catch(err => res.status(422).json(err));
	}
	
};

