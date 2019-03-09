import { ADD_USER, LOGIN_USER, AUTH_USER, LOGOUT } from "./types";
import { sessionService } from "redux-react-session";
import axios from "axios";

export const addUser = userData => dispatch => {
	axios.post("/api/signup", userData).then(res =>
		dispatch({
			type: ADD_USER,
			payload: res.data
		})
	);
};

export const loginUser = userData => dispatch => {
	axios.post("/api/login", userData).then(res =>
		dispatch({
			type: LOGIN_USER,
			payload: res.data
		})
	);
};

export const verifyUser = () => dispatch => {
	sessionService
		.loadSession()
		.then(currentSession =>
			dispatch({
				type: AUTH_USER,
				payload: currentSession.user
			})
		)
		.catch(err => console.log(err));
};

export const logout = () => dispatch => {
	sessionService.deleteSession().then(res =>
		dispatch({
			type: LOGOUT
		})
	);
};
