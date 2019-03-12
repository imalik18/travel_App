import axios from "axios";

export default {
	getUsers: function() {
		return axios.get("/api/todo");
	},
	getUser: function(id) {
		return axios.get("/api/todo/" + id);
	}
};
