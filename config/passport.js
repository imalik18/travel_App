const localStrategy = require("passport-local").Strategy;

const User = require("../models/user");

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use(
		"local-signup",
		new localStrategy(
			{
				usernameField: "userName",
				passwordField: "password",
				passReqToCallback: true
			},
			(req, userName, password, done) => {
				User.findOne({ userName: userName }, (err, user) => {
					if (err) {
						return done(err);
					}

					if (user) {
						return console.log("username taken");
					} else {
						const newUser = new User();

						newUser.userName = userName;
						newUser.password = newUser.generateHash(password);

						// newUser.save().then(user => res.json(user));
						newUser.save(err => {
							if (err) {
								throw err;
							}
							return done(null, newUser);
						});
					}
				});
			}
		)
	);

	passport.use(
		"local-login",
		new localStrategy(
			{
				usernameField: "userName",
				passwordField: "password",
				passReqToCallback: true
			},
			(req, userName, password, done) => {
				User.findOne({ userName: userName }, (err, user) => {
					if (err) {
						return done(err);
					}

					if (!user) {
						return done(
							null,
							false,
							console.log("Username or password incorrect.")
						);
					}

					if (!user.validPassword(password)) {
						return done(
							null,
							false,
							console.log("Username or password incorrect.")
						);
					}

					return done(null, user);
				});
			}
		)
	);
};
