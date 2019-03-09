import React, { Component } from "react";
import API from "../utils/API";
import { connect } from "react-redux";
import { verifyUser, logout } from "../actions/userActions";

class Users extends Component {
	state = {
		user: []
	};

	componentDidMount() {
		this.loadUser();
	}

	loadUser = () => {
		API.getUsers().then(res =>
			this.setState(prevState => ({
				user: [...prevState.user, res.data]
			}))
		);
	};

	render() {
		return (
			<div>
				{this.state.user.map(data => {
					console.log(data);
				})}
				<p>Check Console for output</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.users.user
});

export default connect(
	mapStateToProps,
	{ varifyUser, Logout }
)(Users);
