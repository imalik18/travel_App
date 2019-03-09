import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			password: ""
		};
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		console.log(this.state.userName + " " + this.state.password);

		const user = {
			userName: this.state.userName,
			password: this.state.password
		};

		this.props.addUser(user);
	};

	render() {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6">
						<form onSubmit={this.onSubmit}>
							<p className="h5 text-center mb-4">Sign in</p>
							<div className="grey-text">
								<MDBInput
									label="Username"
									icon="envelope"
									group
									type="text"
									validate
									error="wrong"
									success="right"
									name="userName"
									onChange={this.onChange}
									value={this.state.userName}
								/>
								<MDBInput
									label="Type your password"
									icon="lock"
									group
									type="password"
									validate
									name="password"
									onChange={this.onChange}
									value={this.state.password}
								/>
							</div>
							<div className="text-center">
								<button>SIGNUP</button>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

const mapStateToProps = state => ({
	user: state.users.user
});

export default connect(
	mapStateToProps,
	{ addUser }
)(SignUp);
