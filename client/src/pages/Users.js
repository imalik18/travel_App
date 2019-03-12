import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyUser, logout } from "../actions/userActions";
import SignUp from "../components/SignUp";

class Users extends Component {
	state = {
		login: false
	};

	componentDidMount() {
		// this.loadUser();
	}

	toggle = () => {
		this.setState({
			login: !this.state.login
		});
	};

	test = () => {
		if (this.state.login) {
			return <SignUp />;
		} else {
			return <button onClick={this.toggle}>login</button>;
		}
	};

	render() {
		return (
			<div className="m-5">
				{this.props.user ? (
					<button onClick={this.props.logout}>Logout</button>
				) : (
					<this.test />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.session.user.user
});

export default connect(
	mapStateToProps,
	{ verifyUser, logout }
)(Users);
