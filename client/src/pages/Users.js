import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyUser, logout } from "../actions/userActions";
import SignUp from "../components/SignUp";
import API from "../utils/API";

class Users extends Component {
	state = {
		title: "",
		desc: ""
	};

	componentDidMount() {
		// this.loadUser();
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleFormSubmit = event => {
		event.preventDefault();
		// console.log(this.props.user._id);
		API.addNote(this.props.user._id, {
			title: this.state.title,
			desc: this.state.desc
		})
			.then(res => {
				// console.log(res.data);
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div className="m-5">
				<form>
					<input
						name="title"
						type="text"
						label="title"
						onChange={this.onChange}
					/>
					<input
						name="desc"
						type="text"
						label="desc"
						onChange={this.onChange}
					/>
					<button type="submit" onClick={this.handleFormSubmit}>
						submit
					</button>
				</form>
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
