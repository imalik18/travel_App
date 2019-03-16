import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyUser, logout } from "../actions/userActions";
import API from "../utils/API";
import {
	MDBInput,
	MDBBtn,
	Container,
	MDBCard,
	MDBCardTitle,
	MDBCardText,
	MDBCardBody,
	MDBIcon
} from "mdbreact";

class Trip extends Component {
	state = {
		title: "",
		desc: "",
		message: "",
		activity: []
	};

	componentDidMount() {
		if (this.props.user) {
			this.onActivitySubmit();
		} else {
			setTimeout(() => {
				this.onActivitySubmit();
			}, 500);
		}
	}

	onActivitySubmit = () => {
		API.populateUser(this.props.user._id).then(res => {
			console.log(res.data.todo);
			this.setState({
				title: "",
				desc: "",
				message: "",
				activity: res.data.todo
			});
		});
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	delete = event => {
		console.log(event.target.value);
		API.deleteTodo(event.target.value)
			.then(res => {
				this.onActivitySubmit();
			})
			.catch(err => console.log(err));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		// console.log(this.props.user._id);
		if (this.state.title && this.state.desc) {
			API.addNote(this.props.user._id, {
				title: this.state.title,
				desc: this.state.desc
			})
				.then(res => {
					this.onActivitySubmit();
					this.setState({
						title: "",
						desc: "",
						message: ""
					});
				})
				.catch(err => console.log(err));
		} else {
			this.setState({
				message: "Please completely fill out form to submit new item."
			});
		}
	};

	render() {
		return (
			<Container className="">
				<MDBCard className="">
					<form className="p-5">
						<p className="h5 text-center mb-4">Add Activity</p>
						<MDBInput
							name="title"
							type="text"
							label="Location of Activity"
							onChange={this.onChange}
							value={this.state.title}
						/>
						<MDBInput
							name="desc"
							type="text"
							label="Description of Activiy"
							onChange={this.onChange}
							value={this.state.desc}
						/>
						<MDBBtn
							type="submit"
							color="deep-orange"
							onClick={this.handleFormSubmit}
						>
							submit
						</MDBBtn>
						<p className="h5 text-center mb-4 red-text">{this.state.message}</p>
					</form>
				</MDBCard>
				<br />
				{this.state.activity.map(data => {
					return (
						<div>
							<MDBCard className="mb-3">
								<MDBCardBody>
									<MDBCardTitle>{data.title}</MDBCardTitle>
									<MDBCardText>{data.desc}</MDBCardText>
									<MDBBtn
										value={data._id}
										onClick={this.delete}
										size="sm"
										color="unique"
									>
										<MDBIcon icon="times" className="mr-1" /> Delete
									</MDBBtn>
								</MDBCardBody>
							</MDBCard>
						</div>
					);
				})}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	user: state.session.user.user
});

export default connect(
	mapStateToProps,
	{ verifyUser, logout }
)(Trip);
