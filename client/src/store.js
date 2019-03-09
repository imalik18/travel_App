import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { sessionService } from "redux-react-session";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
);

sessionService.initSessionService(store);

export default store;
