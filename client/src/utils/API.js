import axios from "axios";

export default {
	getUsers: function() {
		return axios.get("/api/todo");
	},
	
  getUser: function(id) {
		return axios.get("/api/todo/" + id);
	},

	addPlace: function(placeData) {
		return axios.post("/api/places", placeData);
  },
	
  addNote: function(id, todoData) {
		return axios.post("/api/todo/" + id, todoData);

	}
};

