module.exports = (app, passport) => {
	app.post("/api/signup", passport.authenticate("local-signup"), (req, res) => {
		console.log(`User was added. Info here: ${req.session.passport.user}`);
		return res.json(req.user);
	});

	app.post("/api/login", passport.authenticate("local-login"), (req, res) => {
		return res.json(req.user);
	});

	app.get("/api/profile", isLoggedIn, (req, res) => {
		return res.json(req.user);
	});
};

const isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
};
