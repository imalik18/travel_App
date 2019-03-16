import axios from "axios";
import { func } from "prop-types";

export default {
	getUsers: function() {
		return axios.get("/api/todo");
	},

	populateUser: function(id) {
		return axios.get("/api/todo/" + id);
	},

	addPlace: function(placeData) {
		return axios.post("/api/places", placeData);
	},

	addNote: function(id, todoData) {
		return axios.post("/api/todo/" + id, todoData);
	},

	deleteTodo: function(id) {
		return axios.delete("/api/todo/" + id);
	}
};
