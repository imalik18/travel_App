import React, { Component } from "react";
import { connect } from "react-redux";
import "./LandingPage.css";
import img from "../../img/hiddenlocalimg.jpeg";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { verifyUser, logout } from "../../actions/userActions";
import SignUp from "../SignUp";
import Login from "../Login";

class LandingPage extends Component {
	state = {
		login: false
	};

	toggle = () => {
		this.setState({
			login: !this.state.login
		});
	};

	loginForm = () => {
		if (this.state.login) {
			return <Login />;
		} else {
			return (
				<MDBBtn color="elegant" id="start" size="lg" onClick={this.toggle}>
					Start
				</MDBBtn>
			);
		}
	};

	render() {
		return (
			<div className="background">
				<MDBContainer>
					<MDBRow className="vh-100" center>
						<MDBCol md="8" className="pic p-4" middle="true">
							<img src={img} className="img-fluid z-depth-3 rounded" />
						</MDBCol>
						<MDBCol md="4" className="pt-4 title" middle="true">
							<p className="h1 red-text">Hidden Locales</p>
							<p className="mb-4 red-text">
								Discover Your City's Best Kept Secret
							</p>

							{this.props.user ? (
								<MDBBtn onClick={this.props.logout}>Logout</MDBBtn>
							) : (
								<this.loginForm />
							)}
						</MDBCol>
					</MDBRow>
				</MDBContainer>
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
)(LandingPage);
