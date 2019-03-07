import { LOGIN_USER, ADD_USER, AUTH_USER, LOGOUT } from "../actions/types";
import { sessionService } from "redux-react-session";

const initialState = {
	user: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			// console.log(sessionService);
			sessionService
				.saveSession({ user: action.payload })
				.then(sessionService.saveUser({ user: action.payload }));
			// sessionService.saveUser({ user: action.payload });
			return {
				...state,
				user: action.payload
			};
		case ADD_USER:
			sessionService
				.saveSession({ user: action.payload })
				.then(sessionService.saveUser({ user: action.payload }));

			return {
				...state,
				user: action.payload
			};
		case AUTH_USER:
			// console.log(action.payload);
			return {
				...state,
				user: action.payload
			};
		case LOGOUT:
			return {
				...state,
				user: {}
			};
		default:
			return state;
	}
}
