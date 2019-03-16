import React, { Component } from "react";
import "../Navbar/Navbar.css";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse
} from "mdbreact";

class Navbar extends Component {
	state = {
		isOpen: false
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar className="burntOrange" dark expand="md">
				<MDBNavbarBrand>
					<strong className="white-text">Hidden Locales</strong>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav right>
						<MDBNavItem active={this.props.profile}>
							<MDBNavLink to="/explore">Home</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem active={this.props.trips}>
							<MDBNavLink to="/trip">Trips</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem active={this.props.locale}>
							<MDBNavLink to="#!">Suggest Locale</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
			// <div className="nav">
			// 	<a href="/">Hidden Locales</a>
			// 	<div>
			// 		<a href="/profile">Profile</a>
			// 		<a href="/trips">Trips</a>
			// 		<a href="/locale">Suggest Locale</a>
			// 	</div>
			// </div>
		);
	}
}

export default Navbar;
